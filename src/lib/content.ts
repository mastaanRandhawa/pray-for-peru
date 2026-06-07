import site from "@/content/site.json";
import highlights from "@/content/highlights.json";
import about from "@/content/about.json";
import peruMinistry from "@/content/peru-ministry.json";
import gallery from "@/content/gallery.json";
import testimonies from "@/content/testimonies.json";
import timeline from "@/content/timeline.json";
import heroImages from "@/content/hero-images.json";
import type {
  AboutContent,
  GalleryImage,
  HeroImage,
  Highlight,
  PeruMinistryContent,
  SiteContent,
  Testimony,
  TimelineEvent,
} from "@/types/content";

export const siteContent = site as SiteContent;
export const highlightsContent = highlights as Highlight[];
export const aboutContent = about as AboutContent;
export const peruMinistryContent = peruMinistry as PeruMinistryContent;
export const galleryContent = gallery as GalleryImage[];
export const testimoniesContent = testimonies as Testimony[];
export const timelineContent = timeline as TimelineEvent[];
export const heroImagesContent = heroImages as HeroImage[];
