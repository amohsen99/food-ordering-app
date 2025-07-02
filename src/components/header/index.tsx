import { Routes } from "@/constants/enums";
import Link from "../link";
import Navbar from "./Navbar";
import CartButton from "./cart-button";
import { getCurrentLocale } from "@/lib/getCurrentLocale";
import getTrans from "@/lib/translation";
import LanguageSwitcher from "./language-switcher";

async function Header() {
  const locale = await getCurrentLocale();
  const {logo,navbar} = await getTrans(locale);
  return (
    <header className="header py-4 md:py-6">
      <div className="container flex items-center justify-between  ">
        {/* <h1>Food Ordering App</h1> */}
        <Link href= {`/${locale}`} className="text-primary font-semibold text-2xl"> 🍕 {logo}  </Link>
        <Navbar translations={navbar} /><LanguageSwitcher/>
        <CartButton/>
        

      </div>
    </header>
  );
}

export default Header;
