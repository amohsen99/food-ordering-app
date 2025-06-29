import { Routes } from "@/constants/enums";
import Link from "../link";
import Navbar from "./Navbar";
import CartButton from "./cart-button";

function Header() {
  return (
    <header className="header py-4 md:py-6">
      <div className="container flex items-center justify-between  ">
        {/* <h1>Food Ordering App</h1> */}
        <Link href= {Routes.ROOT} className="text-primary font-semibold text-2xl"> 🍕 Pizza  </Link>
        <Navbar />
        <CartButton/>
      </div>
    </header>
  );
}

export default Header;
