import AboutSection from "./components/ui/sections/AboutSection";
import AdvisorsSection from "./components/ui/sections/AdvisorsSection";
import CostOfMistakeSection from "./components/ui/sections/CostOfMistakeSection";
import DeliverablesSection from "./components/ui/sections/DeliverablesSection";
import ExecutivePainSection from "./components/ui/sections/ExecutivePainSection";
import FaqSection from "./components/ui/sections/FaqSection";
import FinalCtaSection from "./components/ui/sections/FinalCtaSection";
import HeroSection from "./components/ui/sections/HeroSection";
import HowItWorksSection from "./components/ui/sections/HowItWorksSection";
import PricingSection from "./components/ui/sections/PricingSection";
import TargetAudienceSection from "./components/ui/sections/TargetAudienceSection";
import TopicsGridSection from "./components/ui/sections/TopicsGridSection";
import UseCasesSection from "./components/ui/sections/UseCasesSection";
import TechBackground from "./components/TechBackground";
import CursorFollower from "./components/ui/CursorFollower";
import ScrollbarActivity from "./components/ui/ScrollbarActivity";

export default function Home() {
  return <><CursorFollower /><ScrollbarActivity /><main className="relative overflow-hidden"><TechBackground /><HeroSection /><ExecutivePainSection /><AboutSection /><TopicsGridSection /><HowItWorksSection /><AdvisorsSection /><DeliverablesSection /><TargetAudienceSection /><UseCasesSection /><CostOfMistakeSection /><PricingSection /><FaqSection /><FinalCtaSection /></main></>;
}
