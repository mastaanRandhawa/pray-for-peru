import { MapPin, Calendar } from "lucide-react";
import { siteContent } from "@/lib/content";
import { Badge } from "@/components/ui/badge";

export function IntroSection() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-20 md:px-6" aria-labelledby="intro-heading">
      <div className="mx-auto max-w-3xl text-center">
        <Badge className="mb-4">Introduction</Badge>
        <h2 id="intro-heading" className="text-3xl font-bold tracking-tight md:text-4xl">
          A Heart for Peru
        </h2>
        <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
          {siteContent.intro}
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
          <span className="inline-flex items-center gap-2">
            <MapPin className="h-4 w-4 text-primary" aria-hidden="true" />
            {siteContent.location}
          </span>
          <span className="inline-flex items-center gap-2">
            <Calendar className="h-4 w-4 text-primary" aria-hidden="true" />
            {siteContent.serviceYears}
          </span>
        </div>
      </div>
    </section>
  );
}
