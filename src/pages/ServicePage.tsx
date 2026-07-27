import { Navigate, useParams } from "react-router-dom";
import { PageTransition } from "@/components/layout/PageTransition";
import { ElementTheme } from "@/components/ElementTheme";
import { getServiceBySlug } from "@/data/content";
import { ServiceHero } from "@/components/sections/service/ServiceHero";
import { BusinessProblem } from "@/components/sections/service/BusinessProblem";
import { CostOfInaction } from "@/components/sections/service/CostOfInaction";
import { WhyOthersFail } from "@/components/sections/service/WhyOthersFail";
import { OurSolution } from "@/components/sections/service/OurSolution";
import { InteractiveCapabilities } from "@/components/sections/service/InteractiveCapabilities";
import { ServiceTechnology } from "@/components/sections/service/ServiceTechnology";
import { ServiceCaseStudy } from "@/components/sections/service/ServiceCaseStudy";
import { ServiceResults } from "@/components/sections/service/ServiceResults";
import { ServiceFinalCta } from "@/components/sections/service/ServiceFinalCta";
import { FaqAccordion } from "@/components/sections/shared/FaqAccordion";
import { ProcessTimeline } from "@/components/sections/shared/ProcessTimeline";
import { TestimonialsCarousel } from "@/components/sections/shared/TestimonialsCarousel";

export default function ServicePage() {
  const { slug } = useParams<{ slug: string }>();
  const config = slug ? getServiceBySlug(slug) : undefined;

  if (!config) return <Navigate to="/" replace />;

  return (
    <PageTransition>
      <ElementTheme element={config.element}>
        <ServiceHero config={config} />
        <BusinessProblem config={config} />
        <CostOfInaction config={config} />
        <WhyOthersFail config={config} />
        <OurSolution config={config} />
        <InteractiveCapabilities config={config} />
        <ProcessTimeline variant="compact" />
        <ServiceTechnology config={config} />
        <ServiceCaseStudy config={config} />
        <ServiceResults config={config} />
        <TestimonialsCarousel items={config.testimonials} />
        <FaqAccordion items={config.faq} />
        <ServiceFinalCta config={config} />
      </ElementTheme>
    </PageTransition>
  );
}
