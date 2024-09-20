"use client";
import React from "react";
import { useState, useEffect } from "react";
import Navbar from "@/components/sections/Navbar";
import LampContainer from "@/components/containers/Lamp";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import ContactForm from "@/components/sections/ContactForm";
import Footer from "@/components/sections/Footer";
import { motion } from "framer-motion";
import Spotlight from "@/components/containers/Spotlight";
import About from "@/components/sections/About";
import Image from "next/image";

export default function Portfolio() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="min-h-screen bg-black/[0.96] text-white">
      <main className="container mx-auto px-4 py-8">
        <LampContainer>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="flex flex-col items-center space-y-4 text-center text-white"
          >
            <Spotlight>
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl/none">
                Jediah Jireh Naicker
              </h1>
            </Spotlight>
            <p className="mx-auto max-w-[700px] text-xl md:text-2xl">
              Web Developer | Writer | Graphic Designer
            </p>
            <p className="italic mx-auto max-w-[700px] text-base md:text-lg">
              Crafting digital experiences with code, words and visuals.
            </p>
          </motion.div>
        </LampContainer>
        {/* background grid */}
        <div className="w-full absolute left-0 -bottom-72 max-h-max">
          <Image
            src="/grid.svg"
            alt="grid"
            className="w-full h-full opacity-50"
            width={250}
            height={250}
          />
        </div>
        <About />

        <Projects />
        <Skills />
        <section
          id="contact"
          className="py-12 md:py-24 lg:py-32 flex justify-center"
        >
          <ContactForm />
        </section>
      </main>
    </div>
  );
}
