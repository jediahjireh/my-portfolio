import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import Image from "next/image";
import Spotlight from "../containers/Spotlight";
import Link from "next/link";
import { GrGithub } from "react-icons/gr";

// define the project type
interface Project {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  // optional
  githubLink?: string;
  demoLink?: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "D&S Music Website",
    description: `Designing and implementing a comprehensive inventory management
                system, integrating an online store with secure payment
                processing, a user-friendly POS interface for in-person sales
                and advanced features like role-based permissions, dynamic
                real-time dashboards and visual reports for data-driven
                decision-making. The system includes seamless stock management,
                product listings and report generation, supporting both online
                and in-person sales operations. Technologies: Next.js,
                TypeScript, Tailwind CSS, React.js, Prisma, MongoDB, et cetera. Link will be added upon completion.`,
    imageUrl: "/placeholder.svg",
  },
  {
    id: 2,
    title: "Credential Management System",
    description:
      "Developed a credential management system designed to securely and efficiently manage credentials and users across various organisational units and divisions within a company. Built using the MERN Stack (MongoDB, Express.js, React.js, Node.js), Mongoose, Vite, HTML and CSS, it features user authentication, a registration system, role-based access control, real-time updates and a user-friendly dashboard.",
    imageUrl: "/credential-manager.png?height=200&width=300",
    githubLink: " https://github.com/jediahjireh/credential-management.git",
  },
  {
    id: 3,
    title: "GitHub Explorer",
    description:
      "Created a full-stack web application that allows users to search for GitHub users and view their repositories. The application is built using React + Vite for the frontend and Express for the backend. It integrates with the GitHub API to fetch data. Features light and dark theme functionality, implemented through custom CSS styling.",
    imageUrl: "/github-explorer.png?height=200&width=300",
    githubLink: "https://github.com/jediahjireh/github-explorer.git",
  },
  {
    id: 4,
    title: "Soccer Chatbot",
    description:
      "A simple chatbot application that provides soccer-related responses using the Groq Cloud API. This application is customised to answer user questions about soccer, specifically tailored to fans of Liverpool Football Club.",
    imageUrl: "/soccer-chatbot.png?height=200&width=300",
    githubLink: "https://github.com/jediahjireh/chatbot-soccer.git",
    demoLink: "https://chatbot-soccer.vercel.app",
  },
  {
    id: 5,
    title: "Car Management System",
    description:
      "A full-stack application for managing a list of cars, built with React on the frontend using Vite for optimal performance. The frontend interacts with the Car Management API, enabling users to retrieve, add, delete and update car details. The API provides functionalities for managing the car inventory, allowing users to retrieve the complete list of cars, add new entries, delete cars by their ID and update the details of existing cars using standard HTTP requests. This integration ensures a seamless user experience for effective car management.",
    imageUrl: "/car-manager.png?height=200&width=300",
    githubLink: "https://github.com/jediahjireh/car-management.git",
  },
  {
    id: 6,
    title: "Grammar Police HQ",
    description:
      "A dictionary application built with React, offering comprehensive information about a word from the Merriam-Webster dictionary and thesaurus APIs. Users can look up words to see their meanings, syllables, antonyms, synonyms, pronunciations and example usages.",
    imageUrl: "/grammar-police-hq.png?height=200&width=300",
    githubLink: "https://github.com/jediahjireh/dictionary.git",
    demoLink: "https://dictionary-grammar-hq.vercel.app",
  },
  {
    id: 7,
    title: "Hangman: Ice-Cream Edition",
    description:
      "A twist on the classic hangman game. React.js is leveraged for interactive interfaces that ensure a smooth gameplay experience. CSS is utilised to integrate custom chalkboard-style fonts and backgrounds that trigger an authentic experience, created through visual and textural cues. A wave of nostalgia is eminent as you reminisce about the games of hangman played on classroom chalkboards during your school days.",
    imageUrl: "/hangman-classic.png?height=200&width=300",
    githubLink: "https://github.com/jediahjireh/hangman.git ",
    demoLink: "https://hangman-classic.netlify.app/",
  },
  {
    id: 8,
    title: "Article Management System",
    description:
      "Developed an article management system using Laravel and PHP. This project serves as a demonstration of my backend development capabilities, featuring categorisation, search functionality and secure user consoles. Implemented efficient database management with MySQL and provided a smooth user experience with a responsive design.",
    imageUrl: "/article-manager.png?height=200&width=300",
    githubLink: "https://github.com/jediahjireh/cool-tech.git",
  },
  {
    id: 9,
    title: "Seen & Heard Website",
    description: `Created using HTML, SCSS and JavaScript, this project is a ​​representation of my heartfelt mission to fight social injustice and promote freedom, safety and justice for all. Together, we can harness the power of technology to bring about meaningful change and ensure that every survivor knows that they are Seen & Heard.`,
    imageUrl: "/seen-and-heard.png?height=200&width=300",
    githubLink: "https://github.com/jediahjireh/seen-and-heard.git",
    demoLink: "https://jediahjireh.github.io/seen-and-heard/",
  },
  {
    id: 10,
    title: "Project Management System",
    description:
      "Created a Java-based application using JDBC (Java Database Connectivity) and MySQL to manage projects, architects, contractors and clients of a structural engineering company. It supports adding, updating, deleting and searching project-related data through a console interface for user interactions",
    imageUrl: "/project-manager.png?height=200&width=300",
    githubLink: "https://github.com/jediahjireh/project-management-system.git",
  },
  {
    id: 11,
    title: "Monty Hall Probability Problem",
    description:
      "This programme aims to help a restaurant keep track of meal orders and distribute them accordingly. It features an intuitive console interface for user interactions.",
    imageUrl: "/monty-hall-probability-problem.png?height=200&width=300",
    githubLink: "https://github.com/jediahjireh/monty-hall.git",
    demoLink: "https://monty-hall-probability-problem.netlify.app",
  },
  {
    id: 12,
    title: "Invoice Generator",
    description:
      "This programme aims to help a restaurant keep track of meal orders and distribute them accordingly. It features an intuitive console interface for user interactions.",
    imageUrl: "/invoice-generator.png?height=200&width=300",
    githubLink: "https://github.com/jediahjireh/invoice-generator.git",
  },
  {
    id: 13,
    title: "Tic Tac Toe",
    description:
      "A simple Tic-Tac-Toe game built using React, Vite.js and Tailwind CSS. Styled to resemble playing X and O's on a notepad with traditional pen writing and a lined paper background. The game allows two players to take turns playing as either 'X' or 'O' on a 3x3 grid and it keeps track of the game's state, allowing you to revisit any past move.",
    imageUrl: "/tic-tac-toe.png?height=200&width=300",
    githubLink: "https://github.com/jediahjireh/tic-tac-toe.git",
    demoLink: "https://tic-tac-toe-notepad.netlify.app/",
  },
  {
    id: 14,
    title: "JavaScript Tutorial",
    description:
      "An interactive platform designed to teach JavaScript fundamentals. Built with HTML, CSS and JavaScript for a user-oriented interface.",
    imageUrl: "/javascript-tutorial.png?height=200&width=300",
    githubLink: "https://github.com/jediahjireh/javascript-tutorial.git",
    demoLink: "https://jediahjireh.github.io/javascript-tutorial/",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-12 md:py-24 lg:py-32">
      <header className="text-center mb-8">
        <Spotlight>
          <h2 className="text-3xl mb-6 font-bold tracking-tighter sm:text-4xl md:text-5xl">
            my digital artwork
          </h2>
        </Spotlight>
        <div className="flex justify-center items-center mb-10">
          <blockquote className="bg-transparent text-white border-l-4 border-gray-800 pl-6 italic">
            <p className="sm:text-lg md:text-xl text-base">
              “Talk is cheap. Show me the code.”
              <br />― Linus Torvalds
            </p>
          </blockquote>
        </div>
      </header>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <Card key={project.id} className="bg-black/[0.96] text-white">
            <CardContent className="p-4">
              <Image
                src={project.imageUrl}
                alt={project.title}
                width={300}
                height={200}
                className="rounded-lg object-cover"
              />
              <Spotlight>
                <h3 className="mt-2 text-xl font-semibold">{project.title}</h3>
              </Spotlight>
              <p className="text-sm text-gray-400 mb-4">
                {project.description}
              </p>
              <div className="flex space-x-2">
                {project.githubLink && (
                  <Button
                    size="sm"
                    className="bg-red-500 hover:bg-red-600"
                    asChild
                  >
                    <Link href={project.githubLink}>
                      <GrGithub className="mr-2 h-4 w-4" />
                      View Code
                    </Link>
                  </Button>
                )}
                {project.demoLink && (
                  <Button
                    size="sm"
                    variant="outline"
                    className="text-red-400 border-red-400 hover:bg-red-400 hover:text-white"
                    asChild
                  >
                    <Link href={project.demoLink}>
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Live Demo
                    </Link>
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
