import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <footer className="border-t border-gray-800 py-6 md:py-0">
      <div className="flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
        <p className="text-center justify-center text-sm leading-loose text-gray-400 md:text-left">
          © 2024 Jediah Jireh Naicker. All rights reserved.
        </p>
        <div className="flex items-center space-x-4 text-sm font-semibold">
          <Link
            href="https://github.com/jediahjireh"
            className="hover:text-red-400"
          >
            GitHub
          </Link>
          <Link
            href="https://www.linkedin.com/in/jediahnaicker"
            className="hover:text-red-400"
          >
            LinkedIn
          </Link>
          <Link
            href="https://www.hyperiondev.com/portfolio/JN23110012577/"
            className="hover:text-red-400"
          >
            Portfolio
          </Link>
          <Link
            href="mailto:jediahnaicker@gmail.com"
            className="hover:text-red-400"
          >
            Mail
          </Link>
        </div>
      </div>
    </footer>
  );
}
