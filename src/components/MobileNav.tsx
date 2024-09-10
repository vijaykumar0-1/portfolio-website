"use client";

import { useState } from "react";
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "./ui/sheet";
import { FaBars } from "react-icons/fa";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Links from "./NavLinks";


const MobileNav = () => {
  const pathname = usePathname();
  const [nav, setNav] = useState(false);
  const handleLinkClick = () => {
    setNav(false);
  };

  return (
    <Sheet open={nav} onOpenChange={setNav}>
      <SheetTrigger>
        <FaBars className="text-4xl text-green-600"/>
      </SheetTrigger>
      <SheetContent className="bg-black text-xl top-8 p-4">
        <div className="flex items-center justify-between mb-4"
        onClick={handleLinkClick}
        >
          {/* Logo */}
          <Link href="/" className="text-4xl font-semibold">
            Vijay<span className="text-green-600">.</span>
          </Link>
        </div>
        <nav className="flex gap-2 flex-col">
          {
            Links.map((link, index) => (
              <Link 
                href={link.path} 
                key={index} 
                className={`${link.path === pathname && "text-green-600 border-b-2 border-green-600"} capitalize font-medium hover:text-green-600 transition-all`}
                onClick={handleLinkClick}
              >
                {link.name}
              </Link>
            ))
          }
        </nav>
      </SheetContent>
    </Sheet>
  )
}

export default MobileNav;