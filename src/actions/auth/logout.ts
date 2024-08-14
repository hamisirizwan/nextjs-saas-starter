"use server"

import { signOut } from "@/auth"

export const logOut = async () =>{
    try {
      await signOut()
    } catch (error) {
      throw error; 
    }
}
