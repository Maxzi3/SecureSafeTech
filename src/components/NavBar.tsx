"use client";
import Image from "next/image";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X} from "lucide-react";
import DarkModeToggle from "./DarkMode";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white dark:bg-slate-800 backdrop-blur-sm border-b text-slate-800 dark:text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div>
            <Image
              src="/Logo.png"
              alt="logo"
              width={150}
              height={300}
              className="block dark:hidden p-2"
            />

            <Image
              src="/LogoDark.png"
              alt="logo"
              width={150}
              height={300}
              className="hidden dark:block p-2"
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("home")}
              className=" hover:text-cyan-400 transition-colors"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className=" hover:text-cyan-400 transition-colors"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection("training")}
              className=" hover:text-cyan-400 transition-colors"
            >
              Training
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className=" hover:text-cyan-400 transition-colors"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className=" hover:text-cyan-400 transition-colors"
            >
              Contact
            </button>

            <Button
              onClick={() => scrollToSection("contact")}
              className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold px-6 py-2 rounded-lg transition-all duration-300 shadow-lg hover:shadow-cyan-500/25"
            >
              Get Free Consultation
            </Button>
            <DarkModeToggle />
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-300 hover:text-cyan-400"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden backdrop-blur-sm border-t">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <button
                onClick={() => scrollToSection("home")}
                className="block w-full text-left px-3 py-2 text-gray-500 hover:text-cyan-400 transition-colors"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("services")}
                className="block w-full text-left px-3 py-2 text-gray-500 hover:text-cyan-400 transition-colors"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection("training")}
                className="block w-full text-left px-3 py-2 text-gray-500 hover:text-cyan-400 transition-colors"
              >
                Training
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="block w-full text-left px-3 py-2 text-gray-500 hover:text-cyan-400 transition-colors"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="block w-full text-left px-3 py-2 text-gray-500 hover:text-cyan-400 transition-colors"
              >
                Contact
              </button>

              <div className="px-3 py-2 flex flex-row gap-3">
                <Button
                  onClick={() => scrollToSection("contact")}
                  className="w-11/12 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold px-6 py-2 rounded-lg transition-all duration-300"
                >
                  Get Free Consultation
                </Button>
                <DarkModeToggle />
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
export default NavBar;
