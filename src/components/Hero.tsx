"use client";

import AnimatedElement from "./ui/AnimatedElement";
import { heroContent } from "../data";

interface HeroProps {
  subtitle?: string;
  title: string;
  description: string;
}

const Hero = ({
  subtitle = heroContent.subtitle,
  title = heroContent.title,
  description = heroContent.description,
}: HeroProps) => {
  return (
    <section className="pt-8 pb-12 md:pt-12 md:pb-16 bg-secondary overflow-hidden min-h-[350px] md:min-h-[400px] flex items-center">
      <div className="container px-4 md:px-16">
        <div className="flex flex-col md:flex-row gap-8 md:gap-14 items-start">
          <AnimatedElement
            variant="fadeInLeft"
            transition={{ duration: 0.5 }}
            className="w-full md:w-1/2"
          >
            <div className="text-xs sm:text-sm text-primary font-bold uppercase mb-4 md:mb-6">
              {subtitle}
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl text-primary leading-tight mb-4 md:mb-6 max-w-[600px]">
              {title}
            </h1>
          </AnimatedElement>

          <AnimatedElement
            variant="fadeInRight"
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-full md:w-[455px] md:max-w-[47.4%] pt-4 md:pt-16"
          >
            <p className="text-xs sm:text-sm md:text-base text-primary max-w-full break-words">
              {description}
            </p>
          </AnimatedElement>
        </div>
      </div>
    </section>
  );
};

export default Hero;
