import { AnimatedMarqueeHero } from "@/components/ui/hero-3";
import { heroImagesContent, siteContent } from "@/lib/content";

export function HeroSection() {
  return (
    <AnimatedMarqueeHero
      tagline={siteContent.tagline}
      title={siteContent.name}
      backgroundTitle={siteContent.name}
      description={siteContent.missionStatement}
      images={heroImagesContent}
    />
  );
}
