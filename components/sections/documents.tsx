"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  FileText,
  FilePlus,
  FileCheck,
  Book,
  GraduationCap,
  FileLineChart,
  FileClock,
} from "lucide-react";
import Link from "next/link";

const documents = [
  {
    title: "Project Charter (TAF)",
    description:
      "A formal, short document that describes the project in its entirety including objectives and how it will be carried out.",
    icon: <FileText className="text-blue-500 size-10" />,
    link: "https://drive.google.com/file/d/1PjX_6Qtv9u0NHKbp-IL5DZqUBuIbRefJ/view?usp=sharing",
  },
  {
    title: "RETAF Document",
    description:
      "The ammended TAF document adhering to the panel comments", 
    icon: <FileLineChart className="text-sky-500 size-10" />,
    link: "https://drive.google.com/file/d/1VyN95N2W6XQRzT7hwzA_5VRHiHODoa4w/view?usp=sharing",
  },
  {
    title: "Project Proposal",
    description:
      "A core document that helps focus on the substance of the proposed plan, using an easy-to-follow project proposal outline.",
    icon: <FilePlus className="text-orange-500 size-10" />,
    link: "https://mysliit.sharepoint.com/sites/CDAPSubmissionCloud/2425JCloud/Forms/AllItems.aspx?id=%2Fsites%2FCDAPSubmissionCloud%2F2425JCloud%2F24%2D25J%2D153%2DStudents%2F1%2E%20Project%20Proposal&viewid=29f155a8%2Db072%2D4b74%2Dbcbe%2Dd933c2f93dfd",
  },
  {
    title: "Research Paper",
    description:
      "Academic writing based on original research, including analysis and interpretation of findings.",
    icon: <Book className="text-green-500 size-10" />,
    link: "https://mysliit.sharepoint.com/sites/CDAPSubmissionCloud/2425JCloud/Forms/AllItems.aspx?id=%2Fsites%2FCDAPSubmissionCloud%2F2425JCloud%2F24%2D25J%2D153%2DStudents%2F4%2E%20Research%20Paper&viewid=29f155a8%2Db072%2D4b74%2Dbcbe%2Dd933c2f93dfd",
  },
  {
    title: "Research Paper Acceptance",
    description:
      "A record of daily activities, providing details on meeting discussions and progress tracking.",
    icon: <FileCheck className="text-yellow-500 size-10" />,
    link: "https://drive.google.com/drive/folders/1CUnkJOy5X7N9BHLYOi0GnkBs8qjTsuCe?usp=sharing",
  },
  {
    title: "Thesis",
    description:
      "A comprehensive document showcasing research findings, methodology, and expertise, contributing to academic insights.",
    icon: <GraduationCap className="text-purple-500 size-10" />,
    link: "https://mysliit.sharepoint.com/sites/CDAPSubmissionCloud/2425JCloud/Forms/AllItems.aspx?id=%2Fsites%2FCDAPSubmissionCloud%2F2425JCloud%2F24%2D25J%2D153%2DStudents%2F5%2E%20Final%20Report%20%26%20Presentation%2FFinal%20Reports&viewid=29f155a8%2Db072%2D4b74%2Dbcbe%2Dd933c2f93dfd",
  },
  {
    title: "Logbook",
    description:
      "A record of daily activities, providing details on meeting discussions and progress tracking.",
    icon: <FileClock className="text-fuchsia-500 size-10" />,
    link: "https://drive.google.com/drive/folders/10M6It15Vo5b1JPo71ZtUkKHGHfXVqPKu?usp=sharing",
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
