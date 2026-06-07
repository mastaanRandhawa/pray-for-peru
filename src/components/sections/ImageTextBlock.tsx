import { cn } from "@/lib/utils";
import type { ContentSection } from "@/types/content";

interface ImageTextBlockProps {
  section: ContentSection;
}

export function ImageTextBlock({ section }: ImageTextBlockProps) {
  const imageOnLeft = section.imagePosition === "left";

  return (
    <article className="grid items-center gap-8 md:grid-cols-2 md:gap-12">
      <div className={cn(imageOnLeft ? "md:order-1" : "md:order-2")}>
        <img
          src={section.image}
          alt={section.imageAlt}
          loading="lazy"
          className="aspect-[4/3] w-full rounded-2xl object-cover shadow-md"
        />
      </div>
      <div className={cn(imageOnLeft ? "md:order-2" : "md:order-1")}>
        <h3 className="text-2xl font-bold tracking-tight md:text-3xl">{section.title}</h3>
        <div className="mt-4 space-y-4 text-muted-foreground">
          {section.paragraphs.map((paragraph, i) => (
            <p key={i} className="leading-relaxed">
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </article>
  );
}
