import { Link } from "react-router-dom";
import { Seo, homeJsonLd } from "@/components/Seo";
import { HeroSection } from "@/components/sections/HeroSection";
import { IntroSection } from "@/components/sections/IntroSection";
import { HighlightsGrid } from "@/components/sections/HighlightsGrid";
import { Timeline } from "@/components/sections/Timeline";
import { TestimonialCard } from "@/components/sections/TestimonialCard";
import { Button } from "@/components/ui/button";
import {
  highlightsContent,
  siteContent,
  testimoniesContent,
  timelineContent,
} from "@/lib/content";

export default function HomePage() {
  const featuredQuotes = testimoniesContent.filter((t) => t.type === "quote").slice(0, 2);

  return (
    <>
      <Seo
        description={siteContent.missionStatement}
        path="/"
        jsonLd={homeJsonLd}
      />
      <HeroSection />
      <IntroSection />
      <HighlightsGrid highlights={highlightsContent} />
      <section className="bg-white-smoke-50 py-20" aria-labelledby="testimonies-teaser">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <div className="mb-12 text-center">
            <h2 id="testimonies-teaser" className="text-3xl font-bold tracking-tight">
              Voices of Impact
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              Stories from partners and community members whose lives were touched through ministry.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {featuredQuotes.map((testimony) => (
              <TestimonialCard key={testimony.id} testimony={testimony} />
            ))}
          </div>
          <div className="mt-10 text-center">
            <Button variant="outline" asChild>
              <Link to="/testimonies">Read All Testimonies</Link>
            </Button>
          </div>
        </div>
      </section>
      <Timeline events={timelineContent} limit={4} showViewAll />
      <div className="pb-8 text-center">
        <Button asChild>
          <Link to="/timeline">View Full Timeline</Link>
        </Button>
      </div>
    </>
  );
}
