import { PageTransition } from "@/components/layout/PageTransition";
import { Hero } from "@/components/sections/home/Hero";
import { RealityCheck } from "@/components/sections/home/RealityCheck";
import { BusinessChallenges } from "@/components/sections/home/BusinessChallenges";
import { WhyTechFails } from "@/components/sections/home/WhyTechFails";
import { Philosophy } from "@/components/sections/home/Philosophy";
import { SolutionsShowcase } from "@/components/sections/home/SolutionsShowcase";
import { IndustriesTeaser } from "@/components/sections/home/IndustriesTeaser";
import { ProcessTimeline } from "@/components/sections/shared/ProcessTimeline";
import { CaseStudies } from "@/components/sections/home/CaseStudies";
import { TechnologyShowcase } from "@/components/sections/home/TechnologyShowcase";
import { Testimonials } from "@/components/sections/home/Testimonials";
import { LiveMetrics } from "@/components/sections/home/LiveMetrics";
import { FinalCta } from "@/components/sections/home/FinalCta";

export default function Home() {
  return (
    <PageTransition>
      <Hero />
      <RealityCheck />
      <BusinessChallenges />
      <WhyTechFails />
      <Philosophy />
      <SolutionsShowcase />
      <IndustriesTeaser />
      <ProcessTimeline variant="pinned" id="process" />
      <CaseStudies />
      <TechnologyShowcase />
      <Testimonials />
      <LiveMetrics />
      <FinalCta />
    </PageTransition>
  );
}
