"use client";

import { Pages, Routes } from "@/constants/enums";
import Link from "../link";
import { Button, buttonVariants } from "../ui/button";
import { useState } from "react";

function Navbar() {
    const [openMenu, setOpenMenu] = useState(false);
     const links = [
    {
      id: crypto.randomUUID(),
      title:"Menu",
      href: Routes.MENU,
    },
    {
      id: crypto.randomUUID(),
      title:"About",
      href: Routes.ABOUT,
    },
    {
      id: crypto.randomUUID(),
      title:"Contact",  
      href: Routes.CONTACT,
    },   {
      id: crypto.randomUUID(),
      title:"Login",  
      href:`${Routes.AUTH}/${Pages.LOGIN}`,
    },
  ];

  return (
    <nav className="flex justify-end flex-1">
      {/* <div> */}
        <ul  className={`fixed lg:static  top-0 px-10 py-20 lg:p-0 bg-background lg:bg-transparent transition-all duration-200 h-full lg:h-auto flex-col lg:flex-row w-full lg:w-auto flex lg:items-center gap-10`}
      >
          {links.map((link) => (
          <li key={link.id}>
            <Link
              onClick={() => setOpenMenu(false)}
              href={`/${link.href}`}
              className={`${link.href === `${Routes.AUTH}/${Pages.LOGIN}` ? 
              `${buttonVariants({ size: "lg"})} !px-8 !rounded-full` : 
              "text-gray-400 hover:text-primary duration-200 transition-colors"}  font-semibold`}
            >
              {link.title}
            </Link>
          </li>
        ))}
        </ul>
        
      {/* </div> */}
    </nav>
  );  



  
}

export default Navbar;
