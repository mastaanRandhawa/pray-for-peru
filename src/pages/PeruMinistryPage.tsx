import { Seo } from "@/components/Seo";
import { PageHeader } from "@/components/sections/PageHeader";
import { Timeline } from "@/components/sections/Timeline";
import { peruMinistryContent, siteContent, timelineContent } from "@/lib/content";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";

export default function PeruMinistryPage() {
  return (
    <>
      <Seo
        title="Peru Ministry"
        description="Explore community outreach, church planting, discipleship, and humanitarian work in Peru."
        path="/peru-ministry"
      />
      <PageHeader
        badge="Ministry"
        title="Peru Ministry"
        description={peruMinistryContent.overview}
      />

      <div className="mx-auto max-w-6xl px-4 py-20 md:px-6">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {peruMinistryContent.blocks.map((block) => (
            <Card key={block.id} className="overflow-hidden border-border/80">
              <img
                src={block.image}
                alt={block.imageAlt}
                loading="lazy"
                className="aspect-[16/10] w-full object-cover"
              />
              <CardHeader>
                <CardTitle className="text-xl">{block.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {block.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-20 grid gap-12 md:grid-cols-2">
          <section aria-labelledby="programs-heading">
            <h2 id="programs-heading" className="text-2xl font-bold">
              Outreach Programs
            </h2>
            <ul className="mt-6 space-y-3">
              {peruMinistryContent.programs.map((program) => (
                <li key={program} className="flex items-start gap-3 text-muted-foreground">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                  {program}
                </li>
              ))}
            </ul>
          </section>

          <section aria-labelledby="partnerships-heading">
            <h2 id="partnerships-heading" className="text-2xl font-bold">
              Local Partnerships
            </h2>
            <ul className="mt-6 space-y-3">
              {peruMinistryContent.partnerships.map((partner) => (
                <li key={partner} className="flex items-start gap-3 text-muted-foreground">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                  {partner}
                </li>
              ))}
            </ul>
          </section>
        </div>
      </div>

      <Timeline
        events={timelineContent}
        title="Ministry Timeline"
        subtitle={`Key milestones from ${siteContent.name}'s years of service in Peru.`}
      />
    </>
  );
}
