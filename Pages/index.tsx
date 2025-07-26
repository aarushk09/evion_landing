import React from "react";
import HeroSection from "../Components/hero/hero";
import ProblemSolution from "../Components/features/ProblemSolution";
import ProcessSteps from "../Components/features/ProcessSteps";
import BenifitsGrid from "../Components/features/BenifitsGrid";
import VisionSection from "../Components/sections/VisionSection";
import CTASection from "../Components/sections/CTASection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ProblemSolution />
      <ProcessSteps />
      <BenifitsGrid />
      <VisionSection />
      <CTASection />
    </>
  );
}