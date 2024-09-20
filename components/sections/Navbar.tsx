import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-black/80 backdrop-blur supports-[backdrop-filter]:bg-black/60">
      <div className="flex h-14 items-center">
        <nav className="flex flex-1 items-center justify-between">
          <Link href="/" className="flex items-center text-lg font-semibold">
            <Image
              alt="jediahjireh logo"
              src={"/jediahjireh-logo.svg"}
              width={25}
              height={25}
              className="mr-2"
            />
            Jediah Jireh Naicker
          </Link>
          <div className="flex items-end justify-end text-sm space-x-4 font-semibold">
            <Link href="#about" className="hover:text-red-400">
              About
            </Link>
            <Link href="#projects" className="hover:text-red-400">
              Projects
            </Link>
            <Link href="#skills" className="hover:text-red-400">
              Skills
            </Link>
            <Link href="#contact" className="hover:text-red-400">
              Contact
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
