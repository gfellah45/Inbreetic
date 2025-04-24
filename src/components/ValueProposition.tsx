"use client";

import AnimatedElement from './ui/AnimatedElement';
import { valuePropositions, valuePropositionHeader } from '../data';

const ValueProposition = () => {
  return (
    <section className="py-12 md:py-20 bg-dark-primary text-white">
      <div className="container px-4 md:px-6">
        <AnimatedElement className="mb-10 md:mb-16 text-center" variant="fadeIn">
          <p className="text-lg md:text-xl mb-3 md:mb-4">{valuePropositionHeader.subtitle}</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-normal font-manrope mb-8 md:mb-12">
            {valuePropositionHeader.title}
          </h2>
          <div className="h-px bg-white/20 w-full max-w-3xl mx-auto"></div>
        </AnimatedElement>

        <div className="space-y-16 md:space-y-24 max-w-[1100px] mx-auto">
          {valuePropositions.map((value, index) => (
            <AnimatedElement
              key={value.title}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              variant={index % 2 === 0 ? "fadeInLeft" : "fadeInRight"}
            >
              <div className="flex flex-col md:flex-row md:items-start gap-6 md:gap-8 lg:gap-[102px]">
                <div className="w-full md:w-[509px] flex-shrink-0 mb-4 md:mb-0">
                  <h3 className="text-3xl sm:text-4xl md:text-[48px] leading-tight md:leading-[72px] font-normal font-manrope">
                    We are <span className="text-secondary">{value.highlight}</span>.
                  </h3>
                </div>
                <div className="flex-1">
                  <p className="text-[#F1F1F1] text-base sm:text-lg md:text-xl leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </div>
            </AnimatedElement>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;
