"use client";
import React from "react";
import { AnimatedTooltip } from "../ui/animated-tooltip";
const people = [
  {
    id: 1,
    name: "Nipun Palliuaguru",
    designation: "Leader",
    image: "/images/members/nipun-palliuaguru.png",
  },
  {
    id: 2,
    name: "Diwan Sachidu",
    designation: "Member",
    image: "/images/members/diwan-sachidu.jpg",
  },
  {
    id: 3,
    name: "Nipuna Nadeeshan",
    designation: "Member",
    image: "/images/members/nipuna-nadeeshan.jpg",
  },
  {
    id: 4,
    name: "Kusal Sudheera",
    designation: "Member",
    image: "/images/members/kusal-doranegoda.png",
  },
];

const ContributorPreview = () => {
  return (
    <div className="flex flex-row items-center justify-center my-12 w-full">
      <AnimatedTooltip items={people} />
    </div>
  );
};

export default ContributorPreview;