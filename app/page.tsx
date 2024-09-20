"use client";
import React from "react";
import { useState, useEffect } from "react";
import LampContainer from "@/components/containers/Lamp";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import ContactForm from "@/components/sections/ContactForm";
import { motion } from "framer-motion";
import About from "@/components/sections/About";
import Image from "next/image";
import Hero from "@/components/sections/Hero";

export default function Portfolio() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="relative min-h-screen bg-black/[0.96] text-white overflow-hidden">
      {/* large square background grid */}
      <div className="absolute inset-0 -bottom-72">
        <Image
          src="/grid.svg"
          alt="grid"
          className="w-full h-full object-cover opacity-50"
          width={250}
          height={250}
        />
      </div>
      <main className="container mx-auto px-4 py-8">
        <LampContainer>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <Hero />
          </motion.div>
        </LampContainer>

        {/* add smaller grid background here */}

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
