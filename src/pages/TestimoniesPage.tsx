import { Seo } from "@/components/Seo";
import { PageHeader } from "@/components/sections/PageHeader";
import { TestimonialCard } from "@/components/sections/TestimonialCard";
import { testimoniesContent } from "@/lib/content";

export default function TestimoniesPage() {
  const quotes = testimoniesContent.filter((t) => t.type === "quote");
  const stories = testimoniesContent.filter((t) => t.type === "story");

  return (
    <>
      <Seo
        title="Testimonies"
        description="Community impact stories, personal reflections, and quotes from local partners."
        path="/testimonies"
      />
      <PageHeader
        badge="Impact"
        title="Testimonies & Impact"
        description="Stories of transformation, partnership, and God's faithfulness in Peru."
      />

      <div className="mx-auto max-w-6xl space-y-20 px-4 py-20 md:px-6">
        <section aria-labelledby="quotes-heading">
          <h2 id="quotes-heading" className="mb-8 text-2xl font-bold">
            Featured Quotes
          </h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {quotes.map((testimony) => (
              <TestimonialCard key={testimony.id} testimony={testimony} />
            ))}
          </div>
        </section>

        <section aria-labelledby="stories-heading">
          <h2 id="stories-heading" className="mb-8 text-2xl font-bold">
            Impact Stories
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            {stories.map((testimony) => (
              <TestimonialCard key={testimony.id} testimony={testimony} />
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
