"use client";

import SectionHeading from "./ui/SectionHeading";
import AnimatedElement from "./ui/AnimatedElement";

interface StatItemProps {
  number: string;
  title: string;
}

const StatItem = ({ number, title }: StatItemProps) => (
  <div className="flex flex-col gap-8">
    <h2 className="text-[96px] leading-none font-normal text-primary font-manrope">
      {number}
    </h2>
    <p className="text-2xl text-primary">{title}</p>
  </div>
);

const Stats = () => {
  return (
    <section className="bg-white py-20">
      <div className="container">
        <SectionHeading
          subtitle="Our numbers"
          title="Handshake infographic mass market crowdfunding iteration."
          centered
        />

        <AnimatedElement
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-[1000px] mx-auto"
        >
          <StatItem number="120m" title="Cool feature title" />
          <StatItem number="10.000" title="Cool feature title" />
          <StatItem number="240" title="Cool feature title" />
        </AnimatedElement>
      </div>
    </section>
  );
};

export default Stats;
