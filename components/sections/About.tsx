import Spotlight from "@/components/containers/Spotlight";
import { FaMicrophoneLines } from "react-icons/fa6";

export default function About() {
  return (
    <section id="about" className="py-12 md:py-24 lg:py-32 mb-8">
      <header className="text-center mb-8">
        <Spotlight>
          <div className="mb-6 flex justify-center items-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              introducing me
            </h2>
            <span>
              <FaMicrophoneLines className="w-6 h-6 ml-2" />
            </span>
          </div>
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
