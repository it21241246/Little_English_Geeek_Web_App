"use client";
import Image from "next/image";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface ImageType {
  src: string;
  alt: string;
}

const images: ImageType[] = [
  {
    src: "/images/diagrams/nipun-diagram.gif",
    alt: "Surveillance Enhancement",
  },
  {
    src: "/images/diagrams/diwan-diagram.gif",
    alt: "Smart Waste Management",
  },
  {
    src: "/images/diagrams/nipuna-diagram.gif",
    alt: "Special Accident Detection",
  },
  {
    src: "/images/diagrams/kusal_new.png",
    alt: "Vehicle Parking Management",
  },
];

export default function ComponentGallery() {
  const [selectedImage, setSelectedImage] = useState<ImageType | null>(null);

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 my-12" id="gridGallery">
        {images.map((image, index) => (
          <div key={index} className="flex flex-col items-center">
            <h3 className="text-lg font-semibold mb-2">{image.alt}</h3>
            <div
              className="relative w-full h-64 cursor-pointer border border-gray-200 rounded-lg shadow-md bg-white"
              onClick={() => setSelectedImage(image)}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                style={{ objectFit: "contain" }}
                className="rounded-lg"
                priority
              />
            </div>
          </div>
        ))}
      </div>

      {selectedImage && (
        <Dialog
          open={!!selectedImage}
          onOpenChange={() => setSelectedImage(null)}
        >
          <DialogContent className="sm:max-w-7xl sm:max-h-[90vh] rounded-2xl px-4 py-8 sm:py-4 sm:px-6 mx-auto w-[90vw]">
            <DialogHeader className="text-center">
              <DialogTitle>{selectedImage.alt}</DialogTitle>
            </DialogHeader>
            <div className="relative w-full h-[40vh] md:h-[60vh]">
              <Image
                src={selectedImage.src}
                alt={selectedImage.alt}
                fill
                className="object-contain"
                priority
              />
            </div>
          </DialogContent>
        </Dialog>
      )}
    </>
  );
}
