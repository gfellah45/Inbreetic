"use client";

import SectionHeading from "./ui/SectionHeading";
import AnimatedElement from "./ui/AnimatedElement";

const OurStory = () => {
  return (
    <section className="bg-primary py-20">
      <div className="container">
        <div className="max-w-3xl mx-auto">
          <SectionHeading
            subtitle="Our story"
            title="Handshake infographic mass market crowdfunding iteration."
            dark
            maxWidth="w-full"
            className="mb-8"
          />
          <AnimatedElement
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-white text-lg leading-relaxed"
          >
            Conversion angel investor entrepreneur first mover advantage. Handshake 
            infographic mass market crowdfunding iteration. Traction stock user experience 
            deployment beta innovator incubator focus. Sales user experience branding growth 
            hacking holy grail monetization conversion prototype stock network effects. Learning 
            curve network effects return on investment bootstrapping business-to-consumer.
          </AnimatedElement>
        </div>
      </div>
    </section>
  );
};

export default OurStory;
