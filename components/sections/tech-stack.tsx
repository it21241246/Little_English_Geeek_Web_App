"use client";
import React from "react";
import { cn } from "@/lib/utils";
import { TechStackTools } from "../ui/technologies";
import Integration from "../ui/integration";

const TechStack = () => {
  const features = [
    {
      title: "Our Core Functionality",
      description: "Our system integrates key features for seamless data access, real-time monitoring, and AI-driven insights.",
      skeleton: <SkeletonOne />,
      className:
        "col-span-1 lg:col-span-3 lg:border-r  dark:border-neutral-800",
    },
    {
      title: "Technologies We Use",
      description: "We use cutting-edge AI, cloud services, and development tools for fast, secure, and scalable deployment.",
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
          Here are the tools and technologies harnessed in our project to create
          an innovative and robust solution. From cutting-edge software to
          state-of-the-art hardware, we integrate a diverse range of programming
          languages, frameworks, and systems. Our comprehensive approach
          includes leveraging advanced technologies, such as artificial
          intelligence, IoT devices, machine learning algorithms, and more,
          enabling us to build a secure and efficient system tailored for the
          specific needs of the smart city.
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
