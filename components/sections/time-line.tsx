"use client";

import React from "react";
import { cn } from "@/lib/utils";

const milestones = [
  {
    date: "Apr 19, 2024",
    title: "Awareness Session",
    description:
      "Awareness session for the research project and, we had to select a supervisor.",
    color: "bg-slate-600",
  },
  {
    date: "Jul 05, 2024",
    title: "Topic Evaluation",
    description: "In this stage the Topic we selected been evaluated.",
    color: "bg-yellow-400",
  },
  {
    date: "Aug 05, 2024",
    title: "Project Proposal Presentation",
    description:
      "A project proposal is prepared to make an offer and to try to convince a supervisor or a future customer to accept it.",
    color: "bg-pink-500",
  },
  {
    date: "Dec 04, 2024",
    title: "Progress Presentation 1",
    description: "In this stage we had to show our progress up to 50%.",
    color: "bg-blue-600",
  },
  {
    date: "Mar 07, 2025",
    title: "Research Paper",
    description: "Published research findings and methodology.",
    color: "bg-teal-500",
  },
  {
    date: "Mar 20, 2025",
    title: "Progress Presentation 2",
    description: "Demonstrated 90% progress.",
    color: "bg-green-500",
  },
  {
    date: "Apr 11, 2025",
    title: "Thesis Submission",
    description: "Thesis paper of the project.",
    color: "bg-gray-700",
  },
  {
    date: "May 26, 2025",
    title: "Final Presentation and viva",
    description: "Finalized and Demonstrated 100% progress.",
    color: "bg-purple-700",
  },
];

const Timeline = () => {
  return (
    <section className="container mx-auto px-4 py-12" id="milestones">
      <h2 className="text-center text-2xl font-semibold tracking-wide text-gray-900 dark:text-white">
        PROJECT MILESTONES
      </h2>
      <p className="text-center text-gray-600 dark:text-gray-300 max-w-5xl mx-auto mt-2">
        Here you can track the significant milestones achieved throughout our
        research journey. These milestones represent crucial stages of our
        project's progress, reflecting the key activities and accomplishments we
        have reached.
      </p>

      <div className="relative mt-10">
        {/* Center Vertical Line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-[2px] bg-gray-300 dark:bg-gray-700 h-full"></div>

        <div className="space-y-16 md:space-y-1 relative">
          {milestones.map((milestone, index) => {
            const isLeft = index % 2 === 0;

            return (
              <div key={index} className="relative">
                {/* Different layouts for mobile vs desktop */}
                <div className="md:hidden">
                  {/* Mobile View - Stacked with centered date headers */}
                  <div
                    className={cn(
                      "text-white font-bold py-2 px-6 rounded-md text-center mb-4 relative",
                      milestone.color
                    )}
                  >
                    {milestone.date}

                    {/* Timeline marker - Always centered below the date header */}
                    <div
                      className={cn(
                        "absolute left-1/2 bottom-0 transform -translate-x-1/2 translate-y-1/2 w-6 h-6 rounded-full border-4 border-white dark:border-gray-900 z-10",
                        milestone.color
                      )}
                    ></div>
                  </div>

                  {/* Content card - Below date header on mobile */}
                  <div className="bg-white dark:bg-gray-800 p-4 rounded-md shadow-md mt-4">
                    <h3 className="font-semibold text-gray-800 dark:text-white text-lg mb-2">
                      {milestone.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      {milestone.description}
                    </p>
                  </div>
                </div>

                {/* Desktop/Tablet View - Zigzag layout */}
                <div className="hidden md:block">
                  {/* Timeline marker - Centered on timeline */}
                  <div
                    className={cn(
                      "absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 rounded-full border-4 border-white dark:border-gray-900 z-10",
                      milestone.color
                    )}
                  ></div>

                  {/* Layout grid */}
                  <div className="grid grid-cols-2 gap-4">
                    {/* Left side */}
                    {isLeft ? (
                      <>
                        <div className="pr-12">
                          {/* Date header */}
                          <div
                            className={cn(
                              "text-white font-bold py-2 px-6 rounded-md w-full text-center mb-4",
                              milestone.color
                            )}
                          >
                            {milestone.date}
                          </div>

                          {/* Content card */}
                          <div className="bg-white dark:bg-gray-800 p-4 rounded-md shadow-md">
                            <h3 className="font-semibold text-gray-800 dark:text-white text-lg mb-2">
                              {milestone.title}
                            </h3>
                            <p className="text-gray-600 dark:text-gray-300">
                              {milestone.description}
                            </p>
                          </div>
                        </div>
                        <div></div> {/* Empty div for right side */}
                      </>
                    ) : (
                      <>
                        <div></div> {/* Empty div for left side */}
                        <div className="pl-12">
                          {/* Date header */}
                          <div
                            className={cn(
                              "text-white font-bold py-2 px-6 rounded-md w-full text-center mb-4",
                              milestone.color
                            )}
                          >
                            {milestone.date}
                          </div>

                          {/* Content card */}
                          <div className="bg-white dark:bg-gray-800 p-4 rounded-md shadow-md">
                            <h3 className="font-semibold text-gray-800 dark:text-white text-lg mb-2">
                              {milestone.title}
                            </h3>
                            <p className="text-gray-600 dark:text-gray-300">
                              {milestone.description}
                            </p>
                          </div>
                        </div>
                      </>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Timeline;
