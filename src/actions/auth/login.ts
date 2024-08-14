"use server"
import { signIn } from "@/auth"
import prisma from "@/lib/prisma";
import { AuthError } from "next-auth";
import bcrypt from "bcryptjs";
import { revalidatePath } from "next/cache";


export const credentialsLogin = async (formData:{email:string , password:string}) =>{
    try {

      let user: any = await prisma.user.findUnique({
        where: {
          email:formData.email,
        },
      });

      if(!user){
        return { error: `User with email ${formData.email} not found` };
      }

      const isMatch = bcrypt.compareSync(
        formData.password as string,
        user.hashedPassword
      );
      if (!isMatch) {
        return { error: `Incorrect password` };
      }

       await signIn("credentials", {...formData, redirectTo: "/account/dashboard",}) 
    } catch (error) {
      if (error instanceof AuthError) {
        switch (error.type) {
          case "CredentialsSignin":
            return { error: "Invalid email or password!" };
          default:
            return { error: "Something went wrong!" };
        }
      }
  
      throw error; 
    }
}

export const googleLogin = async () => {
  try {
    //do checks for account
    await signIn("google", { callbackUrl: "/account/dashboard" });
  } catch (error) {
    if (error instanceof AuthError) {
      console.log(error)
      switch (error.type) {
        case "CredentialsSignin":
          return { error: "Invalid email or password!" };
        case "OAuthAccountNotLinked":
          return{error:"Accounts not linked"}  
        default:
          return { error: "Something went wrong!" };
      }
    }
    throw error; 
  }
};