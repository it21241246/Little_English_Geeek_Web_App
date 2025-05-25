"use client";
import React from "react";
import { cn } from "@/lib/utils";
import { TechStackTools } from "../ui/technologies";
import Integration from "../ui/integration";

const TechStack = () => {
  const features = [
    {
      title: "Our Core Functionality",
      description:
        "The system includes four core features: real-time fluency feedback, adaptive question generation with evaluation, image-based description, and gamified language activities. These components work together to improve comprehension, pronunciation, and student engagement."
      , skeleton: <SkeletonOne />,
      className:
        "col-span-1 lg:col-span-3 lg:border-r  dark:border-neutral-800",
    },
    {
      title: "Technologies We Use",
      description:
        "We use modern web technologies, AI tools, and scalable infrastructure such as React, Python, YOLO, RAG, and MongoDB to build a reliable and adaptable learning platform.",
      skeleton: <SkeletonTwo />,
      className: "col-span-1 lg:col-span-3 border-b lg:border-none",
    },
  ];
  return (
    <div className="relative z-20 mt-20 mb-12">
      <div className="px-8">
        <h4 className="text-gray-700 font-semibold uppercase tracking-wide text-2xl max-w-5xl mx-auto text-center dark:text-white">
          Tools and Technologies
        </h4>

        <p className="text-sm lg:text-base max-w-5xl  my-4 mx-auto text-neutral-500 text-center font-normal dark:text-neutral-300">
          The development of the English Reading and Comprehension Assistant leverages a combination of modern web technologies, and Robust data infrastructure.
          The frontend is built using React with TSX/JSX, offering a responsive and interactive user experience,
          styled efficiently with Tailwind CSS. On the backend, Python and a variety of its libraries form the core engine for natural
          language processing (NLP), including Retrieval-Augmented Generation (RAG) for adaptive question handling and content generation.
          For image-based tasks, YOLO is utilized for object detection, enhancing descriptive language activities. The system integrates YouTube APIs
          to embed educational videos and facilitate multimedia-driven learning. For data management, both MongoDB and Quadrant DB are used to
          handle user interactions, performance analytics, and content storage. Deployment and environment consistency are managed through Docker,
          while Git is used for version control and collaborative development. This technology stack enables scalable, flexible, and intelligent
          learning experiences tailored to Sri Lankan primary school students.
        </p>
      </div>

      <div className="relative ">
        <div className="grid grid-cols-1 lg:grid-cols-6 mt-12 border rounded-md dark:border-neutral-800">
          {features.map((feature) => (
            <React.Fragment key={feature.title}>
              <FeatureCard className={feature.className}>
                <FeatureTitle>{feature.title}</FeatureTitle>
                <FeatureDescription>{feature.description}</FeatureDescription>
                <div className=" h-full w-full">{feature.skeleton}</div>
              </FeatureCard>
              <hr className="lg:hidden" />
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

const FeatureCard = ({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn(`p-4 sm:p-8 relative overflow-hidden`, className)}>
      {children}
    </div>
  );
};

const FeatureTitle = ({ children }: { children?: React.ReactNode }) => {
  return (
    <p className=" max-w-5xl mx-auto text-left tracking-tight text-black dark:text-white text-xl md:text-2xl md:leading-snug">
      {children}
    </p>
  );
};

const FeatureDescription = ({ children }: { children?: React.ReactNode }) => {
  return (
    <p
      className={cn(
        "text-sm md:text-base max-w-4xl text-left mx-auto",
        "text-neutral-500 text-center font-normal dark:text-neutral-300",
        "text-left max-w-sm mx-0 md:text-sm my-2"
      )}
    >
      {children}
    </p>
  );
};

export const SkeletonOne = () => {
  return <Integration />;
};

export const SkeletonTwo = () => {
  return <TechStackTools />;
};

export default TechStack;
