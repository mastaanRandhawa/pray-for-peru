import { useState } from "react";
import type { GalleryCategory, GalleryImage } from "@/types/content";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { LightboxDialog } from "./LightboxDialog";

const categories: Array<GalleryCategory | "All"> = [
  "All",
  "Ministry Work",
  "Communities",
  "Churches",
  "Events",
  "Peru Landscapes",
];

interface GalleryGridProps {
  images: GalleryImage[];
}

export function GalleryGrid({ images }: GalleryGridProps) {
  const [activeCategory, setActiveCategory] = useState<GalleryCategory | "All">("All");
  const [selected, setSelected] = useState<GalleryImage | null>(null);

  const filtered =
    activeCategory === "All"
      ? images
      : images.filter((img) => img.category === activeCategory);

  return (
    <section>
      <div className="mb-8 flex flex-wrap justify-center gap-2">
        {categories.map((cat) => (
          <button
            key={cat}
            type="button"
            onClick={() => setActiveCategory(cat)}
            className={cn(
              "rounded-full border px-4 py-1.5 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
              activeCategory === cat
                ? "border-primary bg-primary text-primary-foreground"
                : "border-border bg-card text-muted-foreground hover:bg-accent",
            )}
            aria-pressed={activeCategory === cat}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((image) => (
          <button
            key={image.id}
            type="button"
            className="group relative overflow-hidden rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            onClick={() => setSelected(image)}
            aria-label={`View image: ${image.caption}`}
          >
            <img
              src={image.src}
              alt={image.alt}
              loading="lazy"
              className="aspect-[4/3] w-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black-950/70 to-transparent p-4 opacity-0 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100">
              <div className="text-left">
                <Badge variant="secondary" className="mb-2">
                  {image.category}
                </Badge>
                <p className="text-sm text-white-smoke-50">{image.caption}</p>
              </div>
            </div>
          </button>
        ))}
      </div>

      <LightboxDialog image={selected} onClose={() => setSelected(null)} />
    </section>
  );
}
