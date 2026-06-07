import { Seo } from "@/components/Seo";
import { PageHeader } from "@/components/sections/PageHeader";
import { GalleryGrid } from "@/components/sections/GalleryGrid";
import { galleryContent } from "@/lib/content";

export default function GalleryPage() {
  return (
    <>
      <Seo
        title="Gallery"
        description="Photographs from ministry work, communities, churches, events, and Peru landscapes."
        path="/gallery"
      />
      <PageHeader
        badge="Gallery"
        title="Photo Gallery"
        description="Moments of faith, fellowship, and service captured across Peru."
      />
      <div className="mx-auto max-w-6xl px-4 py-20 md:px-6">
        <GalleryGrid images={galleryContent} />
      </div>
    </>
  );
}
