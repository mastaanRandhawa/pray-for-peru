import { Seo } from "@/components/Seo";
import { PageHeader } from "@/components/sections/PageHeader";
import { ImageTextBlock } from "@/components/sections/ImageTextBlock";
import { aboutContent, siteContent } from "@/lib/content";

export default function AboutPage() {
  return (
    <>
      <Seo
        title="About"
        description={`Learn about ${siteContent.name}'s background, faith journey, and mission work in Peru.`}
        path="/about"
      />
      <PageHeader
        badge="About"
        title={`About ${siteContent.name}`}
        description="From Canada to Peru — a story of calling, preparation, and faithful service."
      />

      <div className="mx-auto max-w-6xl space-y-20 px-4 py-20 md:px-6">
        <section aria-labelledby="biography-heading">
          <h2 id="biography-heading" className="mb-12 text-center text-3xl font-bold">
            Biography
          </h2>
          <div className="space-y-20">
            {aboutContent.biography.map((section) => (
              <ImageTextBlock key={section.id} section={section} />
            ))}
          </div>
        </section>

        <section aria-labelledby="mission-work-heading">
          <h2 id="mission-work-heading" className="mb-12 text-center text-3xl font-bold">
            Mission Work
          </h2>
          <div className="space-y-20">
            {aboutContent.missionWork.map((section) => (
              <ImageTextBlock key={section.id} section={section} />
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
