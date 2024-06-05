"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from '@/app/utils/cn';
import Link from "next/link";
const Navbar = ({ className }: { className?: string }) => {
    const [active, setActive] = useState<string | null>(null);
  return (
    <div
    className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
  >
   <Menu setActive={setActive}>
       <Link href={'/'}>
           <MenuItem setActive={setActive} active={active} item="Home">
           </MenuItem>
               
       </Link>
       <MenuItem setActive={setActive} active={active} item="Services">
       <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/services">Web Development</HoveredLink>
            <HoveredLink href="/services">Mobile Application</HoveredLink>
            <HoveredLink href="/services">UIUX</HoveredLink>
            <HoveredLink href="/services">Digital Marketing</HoveredLink>
          </div>
           </MenuItem>
           <Link href={'/about'}>
           <MenuItem setActive={setActive} active={active} item="About Us">
               
               </MenuItem>
           </Link>
           <Link href={'/contact'}>
           <MenuItem setActive={setActive} active={active} item="Contact Us">
               
               </MenuItem>
           </Link>
   </Menu>
    </div>
  )
}

export default Navbar