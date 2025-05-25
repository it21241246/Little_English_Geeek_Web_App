"use client";
import React from "react";
import { AnimatedTooltip } from "../ui/animated-tooltip";
const people = [
  {
    id: 1,
    name: "Bhagya Peramuna",
    designation: "Leader",
    image: "/images/members/bhagya-peramuna.jpg",
  },
  {
    id: 2,
    name: "Minidu Tissera",
    designation: "Member",
    image: "/images/members/minidu-tissera.jpg",
  },
  {
    id: 3,
    name: "Muditha Jayawickrama",
    designation: "Member",
    image: "/images/members/muditha-jayawickrama.png",
  },
  {
    id: 4,
    name: "Pasindu Serasingha",
    designation: "Member",
    image: "/images/members/pasindu-serasinghe.jpeg",
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