import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuLink,
  NavigationMenuList,
} from "./ui/navigation-menu";
import { MenuIcon } from "lucide-react";
import { Button } from "./ui/button";
import { Sheet, SheetTrigger, SheetContent } from "./ui/sheet";
import { ROUTING } from "@/data/routing";
import { Container } from "./craft";
import Image from "next/image";

export const Navbar = () => {
  return (
    <Container>
      <header className="flex h-20 w-full shrink-0 items-center">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="md:hidden">
              <MenuIcon className="h-6 w-6" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="">
            <Link href="#" prefetch={false}>
              <Image
                height={1200}
                width={1200}
                alt="Logo"
                src={"/logo2.png"}
                className="size-[48px]"
              />
              <span className="sr-only">Budokenkyudo</span>
            </Link>
            <div className="grid gap-2 py-6">
              {ROUTING.routes.map((route, i) => (
                <Link
                  key={i}
                  href={route.url}
                  className="flex w-full items-center py-2 text-lg font-semibold"
                  prefetch={false}
                >
                  {route.label}
                </Link>
              ))}
            </div>
          </SheetContent>
        </Sheet>
        <Link href="#" className="mr-6 hidden md:flex" prefetch={false}>
          <Image
            height={1200}
            width={1200}
            alt="Logo"
            src={"/logo2.png"}
            className="size-[48px]"
          />
          <span className="sr-only">Budokenkyudo</span>
        </Link>
        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList>
            {ROUTING.routes.map((route, i) => (
              <NavigationMenuLink asChild key={i}>
                <Link
                  href={route.url}
                  className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-hov hover:text-gray-900 focus:bg-hov focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-hov/50 data-[state=open]:bg-hov/50"
                  prefetch={false}
                >
                  {route.label}
                </Link>
              </NavigationMenuLink>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
      </header>
    </Container>
  );
};
