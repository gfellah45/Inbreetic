"use client";

import AnimatedElement from "./ui/AnimatedElement";
import { topTeamMembers, bottomTeamMembers, teamSectionContent } from "../data";
import { TeamMember } from "../types/data";
import Image from "next/image";


interface TeamMemberCardProps {
  member: TeamMember;
  index: number;
  isTopRow?: boolean;
}

const TopRowMemberCard = ({ member, index }: TeamMemberCardProps) => (
  <AnimatedElement
    transition={{ duration: 0.5, delay: index * 0.1 }}
    className="md:col-span-1 flex flex-col items-center"
    variant="fadeInUp"
  >
    <div className="w-full max-w-[250px] h-[200px] sm:h-[250px] rounded-3xl mb-4 overflow-hidden shadow-md relative">
      <Image 
        src={member.image} 
        alt={member.name} 
        fill
        sizes="(max-width: 640px) 90vw, (max-width: 768px) 45vw, 250px"
        className="object-cover"
        priority
      />
    </div>
    <div className="text-center md:text-left w-full max-w-[250px]">
      <h3 className="text-xl font-bold text-primary mb-1">{member.name}</h3>
      <p className="text-gray-500">{member.role}</p>
    </div>
  </AnimatedElement>
);

const BottomRowMemberCard = ({ member, index }: TeamMemberCardProps) => (
  <AnimatedElement
    transition={{ duration: 0.5, delay: index * 0.1 }}
    className="flex flex-col xs:flex-row items-center xs:items-start text-center xs:text-left gap-3 xs:gap-4 sm:gap-6"
    variant="fadeInLeft"
  >
    <div className="w-[70px] h-[70px] xs:w-[90px] xs:h-[90px] sm:w-[120px] sm:h-[120px] rounded-lg overflow-hidden shadow-md flex-shrink-0 relative">
      <Image 
        src={member.image} 
        alt={member.name} 
        fill
        sizes="(max-width: 480px) 70px, (max-width: 640px) 90px, 120px"
        className="object-cover"
        priority
      />
    </div>
    <div className="mt-2 xs:mt-0">
      <h3 className="text-sm xs:text-base sm:text-lg font-bold text-primary mb-0.5 xs:mb-1">{member.name}</h3>
      <p className="text-xs xs:text-sm sm:text-base text-gray-500">{member.role}</p>
    </div>
  </AnimatedElement>
);

const Team = () => {
  return (
    <section className="py-12 md:py-20 bg-white">
      <div className="container max-w-6xl mx-auto px-4 md:px-6">
        <AnimatedElement className="mb-8 md:mb-12" variant="fadeIn">
          <p className="text-lg md:text-xl text-primary mb-3 md:mb-4">{teamSectionContent.subtitle}</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-normal text-primary font-manrope mb-6 md:mb-8">
            {teamSectionContent.title}
          </h2>
          <p className="text-base md:text-xl text-gray-600 max-w-2xl">
            {teamSectionContent.description}
          </p>
        </AnimatedElement>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-10 gap-x-6 md:gap-8 mb-12 md:mb-16">
          {topTeamMembers.map((member, index) => (
            <TopRowMemberCard
              key={`${member.name}-${index}`}
              member={member}
              index={index}
            />
          ))}
        </div>

        <div className="grid grid-cols-2 gap-y-6 xs:gap-y-8 sm:gap-y-12 gap-x-3 xs:gap-x-4 sm:gap-x-8 md:gap-x-16 max-w-5xl mx-auto">
          {bottomTeamMembers.map((member, index) => (
            <BottomRowMemberCard
              key={`${member.name}-${index}`}
              member={member}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
