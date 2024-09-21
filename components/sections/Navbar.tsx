"use client";
import { Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { Button } from "../ui/button";

export default function Navbar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggleDropdown = () => setDropdownOpen((prev) => !prev);

  const handleLinkClick = () => {
    setDropdownOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-black/80 backdrop-blur supports-[backdrop-filter]:bg-black/60">
      <div className="flex h-14 items-center">
        <nav className="flex flex-1 items-center justify-between">
          {/* left */}
          <Link
            href="/"
            className="flex font-lavishly items-center text-lg font-bold"
          >
            <Image
              alt="jediahjireh logo"
              src={"/jediahjireh-logo.svg"}
              width={25}
              height={25}
              className="mr-4 -mb-2"
            />
            jediah jireh naicker
          </Link>

          {/* right */}
          <div className="flex items-end justify-between text-sm space-x-4 font-semibold md:space-x-0 md:justify-around">
            <div className="hidden md:flex space-x-4">
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

            {/* mobile menu toggle */}
            <div className="flex md:hidden">
              <Button
                onClick={toggleDropdown}
                className="px-4 py-2 text-white bg-transparent rounded hover:bg-opacity-20 hover:bg-red-500"
              >
                <Menu />
              </Button>
            </div>
          </div>
        </nav>
      </div>

      {/* dropdown menu for mobile */}
      {dropdownOpen && (
        <div className="md:hidden -mt-1 text-left text-sm font-semibold absolute right-0 z-10 bg-black bg-opacity-90 rounded shadow-lg">
          <ul className="space-y-2 p-4">
            <li>
              <Link
                href="#about"
                className="block rounded p-2 hover:bg-opacity-20 hover:bg-red-500"
                onClick={handleLinkClick}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="#projects"
                className="block rounded p-2 hover:bg-opacity-20 hover:bg-red-500"
                onClick={handleLinkClick}
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                href="#skills"
                className="block p-2 rounded hover:bg-opacity-20 hover:bg-red-500"
                onClick={handleLinkClick}
              >
                Skills
              </Link>
            </li>
            <li>
              <Link
                href="#contact"
                className="block p-2 rounded hover:bg-opacity-20 hover:bg-red-500"
                onClick={handleLinkClick}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
