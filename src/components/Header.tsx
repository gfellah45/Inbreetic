"use client";

import { useState } from "react";
import Link from "next/link";
import Logo from "../assets/Logo";
import AnimatedElement from "./ui/AnimatedElement";
import { navigationLinks } from "../data";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="py-4 md:py-8 bg-secondary">
      <div className="container px-4 md:px-16">
        <nav className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2 z-10">
            <Logo width={26} height={34} />
            <span className="text-xl md:text-2xl font-bold text-primary">
              Boldo
            </span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            {navigationLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-primary hover:text-gray-900"
              >
                {link.name}
              </Link>
            ))}
            <button className="px-10 py-2 rounded-full border-2 border-primary text-primary font-bold hover:bg-primary hover:text-white transition-all">
              Log In
            </button>
          </div>

          <button
            className="md:hidden z-10 p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
            aria-expanded={isOpen}
            tabIndex={0}
          >
            <AnimatedElement
              animate={isOpen ? { rotate: 45 } : { rotate: 0 }}
              className="space-y-1.5 relative w-6 h-6"
            >
              <span
                className={`block w-6 h-0.5 bg-primary absolute transition-all duration-300 ${
                  isOpen ? "top-3 rotate-45" : "top-1"
                }`}
              ></span>
              <span
                className={`block w-6 h-0.5 bg-primary absolute top-3 transition-opacity duration-300 ${
                  isOpen ? "opacity-0" : "opacity-100"
                }`}
              ></span>
              <span
                className={`block w-6 h-0.5 bg-primary absolute transition-all duration-300 ${
                  isOpen ? "top-3 -rotate-45" : "top-5"
                }`}
              ></span>
            </AnimatedElement>
          </button>
        </nav>

        <AnimatedElement
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: isOpen ? 1 : 0, height: isOpen ? "auto" : 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden fixed inset-0 bg-secondary z-0 overflow-hidden"
        >
          <div className="flex flex-col items-center justify-center h-full space-y-6 pt-20 px-6">
            {navigationLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-xl text-primary hover:text-gray-900 font-medium"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <button className="btn-outline w-full max-w-xs py-3 mt-4 text-lg">
              Log In
            </button>
          </div>
        </AnimatedElement>
      </div>
    </header>
  );
};

export default Header;
