"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  FileText,
  FilePlus,
  FileCheck,
  Book,
  GraduationCap,
} from "lucide-react";
import Link from "next/link";

const documents = [
  {
    title: "Project Charter",
    description:
      "A formal, typically short document that describes the project in its entirety — including objectives and how it will be carried out.",
    icon: <FileText className="text-blue-500 size-10" />,
    link: "https://drive.google.com/drive/folders/1fU6fdelF4iCt5Xy84anVoCYypl6RDvLw?usp=sharing",
  },
  {
    title: "Project Proposal",
    description:
      "A core document that helps focus on the substance of the proposed plan, using an easy-to-follow project proposal outline.",
    icon: <FilePlus className="text-orange-500 size-10" />,
    link: "https://drive.google.com/drive/folders/1FPvVndJ14jPzq3bJXLzxzwoI0ZBawSHL?usp=sharing",
  },
  {
    title: "Checklist",
    description:
      "A list of tasks to be completed, providing details on meeting discussions and progress tracking.",
    icon: <FileCheck className="text-pink-500 size-10" />,
    link: "https://drive.google.com/drive/folders/1Z5-PGahsVT_F5gryf6jmFYqbWvvr7yfv?usp=sharing",
  },
  {
    title: "Logbook",
    description:
      "A record of daily activities, providing details on meeting discussions and progress tracking.",
    icon: <FileCheck className="text-yellow-500 size-10" />,
    link: "https://drive.google.com/drive/folders/1K4aOnCRpugb0UlQLCpRq0d0deOEOD4LS?usp=sharing",
  },
  {
    title: "Research Paper",
    description:
      "Academic writing based on original research, including analysis and interpretation of findings.",
    icon: <Book className="text-green-500 size-10" />,
    link: "https://drive.google.com/drive/folders/12TV-DJbaCl7cfb8Wn7R1umH30pU5H3LJ?usp=sharing",
  },
  {
    title: "Thesis",
    description:
      "A comprehensive document showcasing research findings, methodology, and expertise, contributing to academic insights.",
    icon: <GraduationCap className="text-purple-500 size-10" />,
    link: "https://drive.google.com/drive/folders/1Uqj0tE9ej7Z2tA3k7MbkeFsOJ_bfUt1B?usp=sharing",
  },
];

export default function Documents() {
  return (
    <section className="container mx-auto py-12" id="documents">
      <h2 className="text-center text-2xl font-semibold text-gray-900 dark:text-white tracking-wide">
        DOCUMENTS
      </h2>
      <p className="text-center text-gray-600 dark:text-gray-300 max-w-5xl mx-auto mt-2">
        Here you can find a collection of essential documents that provide a
        comprehensive overview of our research projects. These documents serve
        as valuable resources, offering insights into the objectives, plans, and
        progress of our projects.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8">
        {documents.map((doc, index) => (
          <Card
            key={index}
            className="p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
          >
            <CardHeader className="flex flex-col items-center text-center">
              <div className="bg-gray-100 dark:bg-gray-800 p-3 rounded-full">
                {doc.icon}
              </div>
              <CardTitle>
                <Link
                  href={doc.link}
                  className="text-lg font-semibold text-blue-600 hover:underline"
                  target="_blank"
                >
                  {doc.title}
                </Link>
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center text-gray-600 dark:text-gray-300">
              {doc.description}
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
