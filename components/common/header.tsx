"use client";

import * as React from "react";
import { Menu, ArrowRight, Building2, Github } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Link from "next/link";
import { ThemeToggle } from "../ui/theme-toogle";

const Header = () => {
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
    <section className="py-4">
      <div className="container mx-auto">
        <nav className="hidden justify-between lg:flex sm:mx-10 md:mx-0 border px-4 py-2 rounded-2xl mx-5 bg-white dark:bg-black">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <Link href="/" className="flex items-center gap-2">
                <Building2 />
                <span className="text-xl font-bold">Smart City</span>
              </Link>
            </div>
            <div className="flex items-center">
              <Link
                className={cn(
                  "text-muted-foreground",
                  buttonVariants({
                    variant: "ghost",
                  })
                )}
                href="#scope"
                onClick={(e) => scrollToSection(e, "scope")}
              >
                Scope
              </Link>
              <Link
                className={cn(
                  "text-muted-foreground",
                  buttonVariants({
                    variant: "ghost",
                  })
                )}
                href="#milestones"
                onClick={(e) => scrollToSection(e, "milestones")}
              >
                Milestone
              </Link>
              <Link
                className={cn(
                  "text-muted-foreground",
                  buttonVariants({
                    variant: "ghost",
                  })
                )}
                href="#documents"
                onClick={(e) => scrollToSection(e, "documents")}
              >
                Documents
              </Link>
              <Link
                className={cn(
                  "text-muted-foreground",
                  buttonVariants({
                    variant: "ghost",
                  })
                )}
                href="#presentations"
                onClick={(e) => scrollToSection(e, "presentations")}
              >
                Presentations
              </Link>
              <Link
                className={cn(
                  "text-muted-foreground",
                  buttonVariants({
                    variant: "ghost",
                  })
                )}
                href="#about"
                onClick={(e) => scrollToSection(e, "about")}
              >
                About
              </Link>
            </div>
          </div>
          <div className="flex gap-2 items-center">
            <Link
              href="https://github.com/sachidumaleesha/smart-city-website-24-25j-319"
              target="_blank"
            >
              <Github size={15} className="text-black dark:text-white" />
            </Link>
            <ThemeToggle />
          </div>
        </nav>

        {/* mobile navbar */}
        <div className="block lg:hidden mx-5">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Sheet key="right">
                <SheetTrigger asChild>
                  <Button variant="outline" size="icon">
                    <Menu className="size-4" />
                  </Button>
                </SheetTrigger>
                <SheetContent className="overflow-y-auto" side="left">
                  <SheetHeader>
                    <SheetTitle>
                      <div className="flex justify-between items-center gap-2 mt-5">
                        <div className="flex items-center gap-2">
                          <Link href="/" className="flex items-center gap-2">
                            <Building2 />
                            <span className="text-xl font-bold">
                              Smart City
                            </span>
                          </Link>
                        </div>
                        <div className="flex items-center gap-2">
                          <Link
                            href="https://github.com/sachidumaleesha/smart-city-website-24-25j-319"
                            target="_blank"
                          >
                            <Github
                              size={15}
                              className="text-black dark:text-white"
                            />
                          </Link>
                          <ThemeToggle />
                        </div>
                      </div>
                    </SheetTitle>
                  </SheetHeader>
                  <div className="mb-8 mt-8 flex flex-col gap-4">
                    <Link
                      href="#scope"
                      className="font-semibold"
                      onClick={(e) => scrollToSection(e, "scope")}
                    >
                      Scope
                    </Link>
                    <Link
                      href="#milestone"
                      className="font-semibold"
                      onClick={(e) => scrollToSection(e, "milestone")}
                    >
                      Milestone
                    </Link>
                    <Link
                      href="#documents"
                      className="font-semibold"
                      onClick={(e) => scrollToSection(e, "documents")}
                    >
                      Documents
                    </Link>
                    <Link
                      href="#presentations"
                      className="font-semibold"
                      onClick={(e) => scrollToSection(e, "presentations")}
                    >
                      Presentations
                    </Link>
                    <Link
                      href="#about"
                      className="font-semibold"
                      onClick={(e) => scrollToSection(e, "about")}
                    >
                      About
                    </Link>
                  </div>
                  <div className="border-t pt-4">
                    <div className="grid grid-cols-2 justify-start">
                      <Link
                        className={cn(
                          buttonVariants({
                            variant: "ghost",
                          }),
                          "justify-start text-muted-foreground"
                        )}
                        href="#"
                      >
                        Press
                      </Link>
                      <Link
                        className={cn(
                          buttonVariants({
                            variant: "ghost",
                          }),
                          "justify-start text-muted-foreground"
                        )}
                        href="#"
                      >
                        Contact
                      </Link>
                      <Link
                        className={cn(
                          buttonVariants({
                            variant: "ghost",
                          }),
                          "justify-start text-muted-foreground"
                        )}
                        href="#"
                      >
                        Imprint
                      </Link>
                      <Link
                        className={cn(
                          buttonVariants({
                            variant: "ghost",
                          }),
                          "justify-start text-muted-foreground"
                        )}
                        href="#"
                      >
                        Sitemap
                      </Link>
                      <Link
                        className={cn(
                          buttonVariants({
                            variant: "ghost",
                          }),
                          "justify-start text-muted-foreground"
                        )}
                        href="#"
                      >
                        Legal
                      </Link>
                      <Link
                        className={cn(
                          buttonVariants({
                            variant: "ghost",
                          }),
                          "justify-start text-muted-foreground"
                        )}
                        href="#"
                      >
                        Cookie Settings
                      </Link>
                    </div>
                    <div className="mt-2 flex flex-col gap-3">
                      <Link href="#">
                        <Button variant="outline" className="w-full" disabled>
                          Log in
                        </Button>
                      </Link>
                      <Link href="#">
                        <Button className="group w-full" disabled>
                          Start For Free
                          <ArrowRight
                            className="-me-1 ms-2 opacity-60 transition-transform group-hover:translate-x-0.5"
                            size={16}
                            strokeWidth={2}
                            aria-hidden="true"
                          />
                        </Button>
                      </Link>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
              <Building2 />
              <span className="text-xl font-bold">Smart City</span>
            </div>
            <div className="flex items-center gap-2">
              <Link
                href="https://github.com/sachidumaleesha/smart-city-website-24-25j-319"
                target="_blank"
              >
                <Github size={15} className="text-black dark:text-white" />
              </Link>
              <ThemeToggle />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
