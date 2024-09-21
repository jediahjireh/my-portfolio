import React from "react";
import Spotlight from "../containers/Spotlight";
import { Laptop2 } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  return (
    <header className="relative flex flex-col space-y-4 items-center text-center text-white">
      <Spotlight>
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl/none">
          Jediah Jireh Naicker
        </h1>
      </Spotlight>
      <p className="flex items-center justify-center mx-auto max-w-[700px] text-xl md:text-2xl">
        <span>
          <Laptop2 />
        </span>
        <span className="mx-2">
          <Link href={"https://github.com/jediahjireh"}>
            full-stack developer
          </Link>
        </span>
      </p>
      <p className="italic mx-auto max-w-[700px] text-base md:text-lg">
        Crafting digital experiences with code, words and visuals.
      </p>
    </header>
  );
}
