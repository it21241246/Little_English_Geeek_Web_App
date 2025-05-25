"use client";
import Link from "next/link";
import { Facebook, Twitter, Instagram, Linkedin, BookOpen } from "lucide-react";

import { Button } from "@/components/ui/button";
import { SubscribeForm } from "./subscribe-form";
import Image from "next/image";

const Footer = () => {
  const scrollToSection = (
      e: React.MouseEvent<HTMLAnchorElement>,
      id: string
    ) => {
      e.preventDefault();
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    };
  return (
    <footer className="bg-background border-t border-x rounded-t-2xl">
      <div className="hidden md:block relative w-full h-72">
        <Image
          src="/images/footer_image.png"
          alt="footer-image"
          fill
          className="object-cover rounded-t-2xl"
          priority
        />
      </div>
      <div className="container px-4 py-10 mx-auto">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <BookOpen />
              <h2 className="text-2xl font-bold">Little Geeek English</h2>
            </div>
            <p className="text-muted-foreground">
             English Reading and Comprehension Assistant Tool for Primary School Students in Sri Lanka
            </p>
          </div>
          <div className="space-y-4 lg:col-span-2">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <nav className="grid grid-cols-2 gap-4">
              <Link  href="#scope"
                onClick={(e) => scrollToSection(e, "scope")} className="hover:underline">
                Home
              </Link>
              <Link href="#" className="hover:underline">
                Domain
              </Link>
              <Link href="#milestones"
                onClick={(e) => scrollToSection(e, "milestones")} className="hover:underline">
                Milestone
              </Link>
              <Link  href="#documents"
                onClick={(e) => scrollToSection(e, "documents")} className="hover:underline">
                Documents
              </Link>
              <Link href="#presentations"
                onClick={(e) => scrollToSection(e, "presentations")}className="hover:underline">
                Presentations
              </Link>
              <Link  href="#about"
                onClick={(e) => scrollToSection(e, "about")} className="hover:underline">
                About
              </Link>
            </nav>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">
              Subscribe to our newsletter
            </h3>
            <SubscribeForm />
          </div>
        </div>
        <div className="flex flex-col items-center justify-between gap-4 mt-8 pt-8 border-t sm:flex-row">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Little Geeek English. All rights reserved.
          </p>
          <div className="flex space-x-4">
            <Button variant="ghost" size="icon">
              <Facebook className="h-5 w-5" />
              <span className="sr-only">Facebook</span>
            </Button>
            <Button variant="ghost" size="icon">
              <Twitter className="h-5 w-5" />
              <span className="sr-only">Twitter</span>
            </Button>
            <Button variant="ghost" size="icon">
              <Instagram className="h-5 w-5" />
              <span className="sr-only">Instagram</span>
            </Button>
            <Button variant="ghost" size="icon">
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
