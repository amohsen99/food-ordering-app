import Image from "next/image";
import {Button} from "@/components/ui/button";
import Hero from "./_comonents/Hero";
import MainHeading from "@/components/main-heading";
import BestSellers from "./_comonents/BestSellers";
import { db } from "@/lib/prisma";

export default async function  Home() {

  console.log("home page");
  return (
   <main>
    <Hero/>
    <BestSellers/>
   </main>
  );
}
