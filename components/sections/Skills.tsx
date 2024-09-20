import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Code, Pen, PenTool } from "lucide-react";
import Spotlight from "../containers/Spotlight";

export default function Skills() {
  const technologies = [
    "HTML5",
    "React.js",
    "JavaScript",
    "Jest",
    "JSON",
    "CSS/SCSS",
    "Express.js",
    "Mongoose ODM",
    "Mocha",
    "XAMPP",
    "PHP",
    "Java",
    "MongoDB",
    "Git/GitHub",
    "Docker",
    "Node.js",
    "WordPress",
    "Laravel",
    "jQuery",
    "Vite.js",
    "Next.js",
    "Tailwind CSS",
    "TypeScript",
    "Postman",
  ];

  const writings = [
    "Technical Writing",
    "Creative Writing",
    "Content Creation",
    "Blogging",
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
      <div className="text-center mb-8">
        <Spotlight>
          <h2 className="text-3xl mb-8 font-bold tracking-tighter sm:text-4xl md:text-5xl">
            code is poetry.
          </h2>
        </Spotlight>
      </div>
      <Tabs defaultValue="web" className="w-full text-center">
        <TabsList className="grid w-full grid-cols-3 bg-red-500 text-white">
          <TabsTrigger value="web" className="hover:bg-red-600">
            <Code className="mr-2 h-4 w-4" />
            Web Development
          </TabsTrigger>
          <TabsTrigger value="writing" className="hover:bg-red-600">
            <Pen className="mr-2 h-4 w-4" />
            Writing
          </TabsTrigger>
          <TabsTrigger value="design" className="hover:bg-red-600">
            <PenTool className="mr-2 h-4 w-4" />
            Graphic Design
          </TabsTrigger>
        </TabsList>
        <TabsContent value="web" className="mt-4">
          {/* tab content */}
          <Card className="bg-black/[0.96] text-white">
            <CardContent className="space-y-2 pt-4">
              <div>
                {technologies.map((technology, index) => (
                  <span key={index}>
                    {technology}
                    {index < technologies.length - 1 && " | "}
                  </span>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="writing" className="mt-4">
          <Card className="bg-black/[0.96] text-white">
            <CardContent className="space-y-2 pt-4">
              <div>
                {writings.map((writing, index) => (
                  <span key={index}>{writing}</span>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="design" className="mt-4">
          <Card className="bg-black/[0.96] text-white">
            <CardContent className="space-y-2 pt-4">
              <div>
                {designs.map((design, index) => (
                  <span key={index}>
                    {design}
                    {index < designs.length - 1 && " | "}
                  </span>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </section>
  );
}
