import HomeNavBar from "@/components/HomeNavBar";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center  p-10">
      <HomeNavBar />
   <h1 className="my-20">Landing page</h1>
    </main>
  );
}
