import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Code, Pen, PenTool } from "lucide-react";
import Spotlight from "../containers/Spotlight";
import Image from "next/image";

export default function Skills() {
  const technologies = [
    "JavaScript",
    "CSS",
    "MongoDB",
    "MySQL",
    "React.js",
    "HTML",
    "Express.js",
    "SCSS",
    "Tailwind CSS",
    "PHP",
    "WordPress",
    "Java",
    "Laravel",
    "Docker",
    "Node.js",
    "Vite.js",
    "Next.js",
    "TypeScript",
    "Prisma",
  ];

  const writings = [
    "Technical Writing",
    "Blogging",
    "Content Creation",
    "Editing",
    "Creative Writing",
    "Copywriting",
  ];

  const designs = [
    "Canva",
    "CapCut",
    "UI/UX Design",
    "Logo Design",
    "Branding",
  ];

  return (
    <section id="skills" className="py-12 md:py-24 lg:py-32">
      <header className="text-center mb-8">
        <Spotlight>
          <h2 className="text-3xl mb-8 font-bold tracking-tighter sm:text-4xl md:text-5xl">
            code is poetry.
          </h2>
        </Spotlight>
      </header>
      <Tabs defaultValue="web" className="w-full text-center">
        <TabsList className="grid w-full grid-cols-3 bg-red-500 text-white">
          <TabsTrigger value="web" className="hover:bg-red-600 mb-2">
            <Code className="mr-2 h-4 w-4" />
            Web Development
          </TabsTrigger>
          <TabsTrigger value="writing" className="hover:bg-red-600 mb-2">
            <Pen className="mr-2 h-4 w-4" />
            Writing
          </TabsTrigger>
          <TabsTrigger value="design" className="hover:bg-red-600 mb-2">
            <PenTool className="mr-2 h-4 w-4" />
            Graphic Design
          </TabsTrigger>
        </TabsList>
        <TabsContent value="web" className="mt-4">
          {/* tab content */}
          <Card className="bg-black/[0.96] text-white">
            <CardContent className="space-y-5 pt-4">
              <div className="flex justify-center flex-wrap gap-2">
                {technologies.map((technology, index) => (
                  <span
                    key={index}
                    className={`px-4 py-2 text-white rounded-full hover:cursor-grab ${
                      index % 2 === 0
                        ? "bg-red-600 animate-slow-bounce hover:bg-red-700"
                        : "bg-red-400 animate-slow-spin hover:bg-red-500"
                    }`}
                  >
                    {technology}
                  </span>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="writing" className="mt-4">
          <Card className="bg-black/[0.96] text-white">
            <CardContent className="space-y-5 pt-4">
              <div className="flex justify-center flex-wrap gap-2">
                {writings.map((writing, index) => (
                  <span
                    key={index}
                    className={`px-4 py-2 text-white rounded-full hover:cursor-grab ${
                      index % 2 === 0
                        ? "bg-red-600 animate-slow-bounce hover:bg-red-700"
                        : "bg-red-400 animate-slow-spin hover:bg-red-500"
                    }`}
                  >
                    {writing}
                  </span>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="design" className="mt-4">
          <Card className="bg-black/[0.96] text-white">
            <CardContent className="space-y-5 pt-4">
              <div className="flex justify-center flex-wrap gap-2">
                {designs.map((design, index) => (
                  <span
                    key={index}
                    className={`px-4 py-2 text-white rounded-full hover:cursor-grab ${
                      index % 2 === 0
                        ? "bg-red-600 animate-slow-bounce hover:bg-red-700"
                        : "bg-red-400 animate-slow-spin hover:bg-red-500"
                    }`}
                  >
                    {design}
                  </span>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
      {/* smaller grid background for contact form prompt */}
      <div className="w-full absolute left-0 -bottom-13 max-h-max z-50">
        <Image
          src="/grid.svg"
          alt="grid"
          className="w-full h-full opacity-50"
          width={250}
          height={250}
        />
      </div>
    </section>
  );
}
