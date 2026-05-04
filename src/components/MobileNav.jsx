"use client";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { CiMenuFries } from "react-icons/ci";

const links = [
  { name: "home", path: "/" },
  { name: "services", path: "/services" },
  { name: "resume", path: "/resume" },
  { name: "work", path: "/work" },
  { name: "contact", path: "/contact" },
];

const MobileNav = () => {
  const pathname = usePathname();

  return (
    <Sheet>
      {/* Menu Button */}
      <SheetTrigger className="flex items-center justify-center">
        <CiMenuFries className="text-2xl sm:text-3xl text-accent" />
      </SheetTrigger>

      {/* Sheet */}
      <SheetContent className="flex flex-col w-[80%] sm:w-[350px] p-6">
        
        {/* Logo */}
        <div className="text-center mt-10 mb-10">
          <Link href="/">
            <span className="text-2xl sm:text-3xl text-white font-semibold">
              Yash<span className="text-accent">.</span>
            </span>
          </Link>
        </div>

        {/* Nav Links */}
        <nav className="flex flex-col items-center gap-6 text-3xl sm:text-xl flex-1 justify-center">
          {links.map((link, index) => (
            <Link
              href={link.path}
              key={index}
              className={`capitalize transition-all hover:text-accent  ${
                link.path === pathname
                  ? "text-accent border-b-2 border-accent "
                  : ""
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;