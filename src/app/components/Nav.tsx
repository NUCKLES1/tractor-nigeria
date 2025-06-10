"use client";

import React, { useState } from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

import { Menu, ShoppingCart, X } from "lucide-react";

import Link from "next/link";

const Nav = () => {
  const [isStyled, setIsStyled] = useState(false);

  const toggleStyle = () => {
    setIsStyled(!isStyled);
  };

  return (
    <div className="w-full">
      <div className="justify-between max-md:hidden fixed z-30 lg:-mt-12 w-[87.5%] bg-[#ffffffab] rounded-md px-4 mx-auto text-black p-1 flex">
        <div className="pt-1 text-[#03a77e] font-bold">
          <p>Tractor NG</p>
        </div>
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>
                {" "}
                <ShoppingCart className="h-4 w-4 mr-1" />
                Buy
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <NavigationMenuLink>Link</NavigationMenuLink>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link href="/docs">Rent</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link href="/docs">Service</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link href="/docs">Documentation</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link href="/docs">Sign in</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
      <nav className="justify-between lg:hidden fixed z-30 mt-6 w-11/12  rounded-md mx-auto text-black flex">
        <div className="pt-1 text-white font-bold">
          <h1 className="font-bold">
            Tractor <span className="text-green-400">NG</span>
          </h1>
        </div>
        <div>
          <button
            onClick={toggleStyle}
            className="lg:hidden text-white h-full text-center"
          >
            {!isStyled ? (
              <Menu className="w-6 h-6  transition-all duration-500" />
            ) : (
              <X className="w-6 h-6 transition-all duration-500" />
            )}
          </button>
        </div>
        <div
          style={{
            width: isStyled ? "100%" : "0",
            opacity: isStyled ? "1" : "0",
            transition: "width 1.2s ease-in-out",
            animationDelay: "opacity 2s ease-in-out",
          }}
          className="absolute top-[6vh] right-0 bg-white h-[75vh] p-2 w-[0%] z-50 border overflow-hidden"
        ></div>
      </nav>
    </div>
  );
};

export default Nav;
