"use client";

import React from "react";
import { cn } from "@/lib/utils";

const milestones = [
  {
    date: "Apr 19, 2024",
    title: "Awareness Session",
    description:
      "Awareness session for the research project and, we had to select a supervisor.",
    extra: "This session introduced the project structure, timeline, and potential technologies.",
    color: "bg-rose-500",
  },
  {
    date: "Jul 03, 2024",
    title: "Topic Evaluation (TAF)",
    description: "In this stage the Topic we selected been evaluated.",
    extra: "Our TAF presentation was moved to RETAF stage with the comment, 'Individual Components are not having enough scope. need to refine all 4. 4th member's component is rejected. need to come up with another'",
    color: "bg-orange-400",
  },
  {
    date: "Jul 17, 2024",
    title: "RETAF",
    description: "In this stage the TAF comments were addressed.",
    extra: "With this the topic was approved with some additional guidance on the components",
    color: "bg-amber-500",
  },
  {
    date: "Aug 06, 2024",
    title: "Proposal Presentation & Report",
    description:
      "A project proposal is prepared to make an offer and to try to convince a supervisor or a future customer to accept it.",
    extra: "12% of the total marks are allocated for this stage. A presentation was made together with four proposal reports focusing on individual components. As comments, was advised to revisit the technical part of all four individual components.",

    color: "bg-lime-500",
  },
  {
    date: "Dec 04, 2024",
    title: "Progress Presentation 1 ",
    description: "In this stage we had to show our progress up to 50%.",
    extra: "15% of the total marks are allocated for this stage. A progress presentaion was presented to the panel together with a demo of the partially working application. As comments we were advised to look for noveltied to be included in individual components.",
    color: "bg-emerald-500",
  },
  {
    date: "Mar 07, 2025",
    title: "Research Paper",
    description: "Documenting research findings and methodology to be submitted in to a scopus indexed conference/journal.",
    extra: "Was advised to write individual research papers and submit to recocnosed conferences and journals approved by the supervisor.",
    color: "bg-cyan-500",
  },
  {
    date: "Mar 19, 2025",
    title: "Progress Presentation 2 ",
    description: "Demonstrated 90% progress.",
    extra: "18% of the total marks are allocated for this stage. A presentation followe by a question and answer session together with a demo was scheduled. No special comments were given. We were question about the individual component and their flow.",
    color: "bg-sky-500",
  },
  {
    date: "Apr 11, 2025",
    title: "Thesis Submission",
    description: "Thesis paper of the project.",
    extra: "Four individual descriptive reports together with one group report has to be created and submitted to the CDAP submission page. Every report had to be well structured and with minimum of 50 pages.",
    color: "bg-blue-600",
  },
  {
    date: "May 27, 2025",
    title: "Final Presentation and viva ",
    description: "Finalized and Demonstrated 100% progress.",
    extra: "20% of the total marks are allocated for this stage. A presentation and a question and answer session is conducted.",
    color: "bg-indigo-500",
  },
  {
    date: "May 27, 2025",
    title: "Static Website Evaluation ",
    description: "Static website with all the documentation and major information.",
    extra: "2% of the total marks are allocated for this stage.",
    color: "bg-violet-500",
  },
  {
    date: "June 2, 2025",
    title: "Submission of Research Paper - Acceptance notification ",
    description: "Research paper acceptance and publication proof",
    extra: "10% of the total marks are allocated for this stage. A microsoft form should be submitted with the acceptance letters and proof of registration",
    color: "bg-fuchsia-500",
  },
  {
    date: "June 9, 2025",
    title: "Research Logbook ",
    description: "Log book including all the data of the research journey",
    extra: "4%of the total marks are allocated for this stage.",
    color: "bg-pink-500",
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
            const [isOpen, setIsOpen] = React.useState(false); // ⬅ Add this state per item

            const toggleOpen = () => setIsOpen(!isOpen);

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
                     <div className="mt-2">
                    <button
                      onClick={toggleOpen}
                      className="text-sm text-blue-500 hover:underline focus:outline-none"
                    >
                      {isOpen ? "▲ Hide Details" : "▼ Show More"}
                    </button>
                    {isOpen && milestone.extra && (
                      <div className="mt-2 text-gray-600 dark:text-gray-300 text-sm">
                        {milestone.extra}
                      </div>
                    )}
                  </div>
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
                            <div className="mt-2">
                              <button
                                onClick={toggleOpen}
                                className="text-sm text-blue-500 hover:underline focus:outline-none"
                              >
                                {isOpen ? "▲ Hide Details" : "▼ Show More"}
                              </button>
                              {isOpen && milestone.extra && (
                                <div className="mt-2 text-gray-600 dark:text-gray-300 text-sm">
                                  {milestone.extra}
                                </div>
                              )}
                            </div>
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
                             <div className="mt-2">
                              <button
                                onClick={toggleOpen}
                                className="text-sm text-blue-500 hover:underline focus:outline-none"
                              >
                                {isOpen ? "▲ Hide Details" : "▼ Show More"}
                              </button>
                              {isOpen && milestone.extra && (
                                <div className="mt-2 text-gray-600 dark:text-gray-300 text-sm">
                                  {milestone.extra}
                                </div>
                              )}
                            </div>
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
