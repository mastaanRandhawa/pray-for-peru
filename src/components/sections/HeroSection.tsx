import { AnimatedMarqueeHero } from "@/components/ui/hero-3";
import { heroImagesContent, siteContent } from "@/lib/content";

export function HeroSection() {
  return (
    <AnimatedMarqueeHero
      tagline={siteContent.tagline}
      title={siteContent.name}
      description={siteContent.missionStatement}
      primaryCta={{ label: "Learn More", href: "/about" }}
      secondaryCta={{ label: "View Gallery", href: "/gallery" }}
      images={heroImagesContent}
    />
  );
}
