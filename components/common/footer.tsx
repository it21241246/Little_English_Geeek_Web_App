import Link from "next/link";
import { Facebook, Twitter, Instagram, Linkedin, Building2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import { SubscribeForm } from "./subscribe-form";
import Image from "next/image";

const Footer = () => {
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
              <Building2 />
              <h2 className="text-2xl font-bold">Smart City</h2>
            </div>
            <p className="text-muted-foreground">
              AI-Powered Solutions for Smarter Urban Living.
            </p>
          </div>
          <div className="space-y-4 lg:col-span-2">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <nav className="grid grid-cols-2 gap-4">
              <Link href="#" className="hover:underline">
                Home
              </Link>
              <Link href="#" className="hover:underline">
                Scope
              </Link>
              <Link href="#" className="hover:underline">
                Milestone
              </Link>
              <Link href="#" className="hover:underline">
                Documents
              </Link>
              <Link href="#" className="hover:underline">
                Presentations
              </Link>
              <Link href="#" className="hover:underline">
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
            © {new Date().getFullYear()} Smart City. All rights reserved.
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
