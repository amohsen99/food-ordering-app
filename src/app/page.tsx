import Image from "next/image";
import {Button} from "@/components/ui/button";
import Hero from "./_comonents/Hero";
import MainHeading from "@/components/main-heading";
import BestSellers from "./_comonents/BestSellers";

export default function Home() {
  return (
   <main>
    <Hero/>
    <BestSellers/>
   </main>
  );
}
