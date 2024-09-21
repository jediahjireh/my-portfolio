import Spotlight from "@/components/containers/Spotlight";
import { Mic2 } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-12 md:py-24 lg:py-32 mb-8">
      <header className="text-center mb-8">
        <Spotlight>
          <h2 className="text-center text-3xl mb-6 font-bold tracking-tighter sm:text-4xl md:text-5xl flex justify-center items-center">
            <Mic2 className="mr-0 w-7 h-7 mb-10" />
            <span>introducing me</span>
          </h2>
        </Spotlight>
      </header>

      <p className="text-center mx-auto max-w-[700px] text-base md:text-lg">
        Whether it&#39;s creating innovative web solutions, optimising user
        experiences or developing scalable applications and platforms, I&#39;m
        driven to bring about meaningful change. Technology, when wielded
        responsibly, can be a catalyst for social progress. It can serve as a
        powerful tool to empower the vulnerable, raise awareness and drive
        sustainable solutions.
      </p>
    </section>
  );
}
