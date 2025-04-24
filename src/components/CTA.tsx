"use client";

import AnimatedElement from "./ui/AnimatedElement";

const CTA = () => {
  return (
    <section className="py-12 md:py-20">
      <div className="container px-4 md:px-6">
        <AnimatedElement
          className="max-w-[1100px] mx-auto bg-primary rounded-xl py-16 px-8 md:px-16 text-center relative overflow-hidden"
          variant="fadeIn"
        >
          {/* Background gradient overlay */}
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#0A2640] to-transparent opacity-50"></div>

          <div className="relative z-10">
            {" "}
            {/* Content wrapper to ensure it's above the gradient */}
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal font-manrope text-white mb-10 max-w-[700px] mx-auto">
              An enterprise template to ramp up your company website
            </h2>
            <div className="flex flex-col sm:flex-row items-center justify-center sm:gap-5 max-w-md mx-auto">
              <div className="w-full sm:w-auto flex-1 max-w-[400px]">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="w-full h-[56px] px-6 py-3 rounded-full text-base focus:outline-none shadow-sm border-0"
                  aria-label="Email address"
                />
              </div>
              <div className="w-full sm:w-auto mt-4 sm:mt-0">
                <button className="w-full sm:w-auto bg-secondary text-primary font-bold px-8 h-[56px] rounded-full hover:bg-opacity-90 transition-all text-base shadow-sm flex items-center justify-center min-w-[160px]">
                  Start now
                </button>
              </div>
            </div>
          </div>
        </AnimatedElement>
      </div>
    </section>
  );
};

export default CTA;
