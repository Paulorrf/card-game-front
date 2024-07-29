import React from "react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "./ui/navigation-menu";
import Link from "next/link";

const Navbar = () => {
  return (
    <NavigationMenu className="ml-12">
      <NavigationMenuList>
        <NavigationMenuItem className={navigationMenuTriggerStyle()}>
          <Link href="/">Home</Link>
        </NavigationMenuItem>

        <NavigationMenuItem className={navigationMenuTriggerStyle()}>
          <Link href="/cards">Cards</Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default Navbar;
