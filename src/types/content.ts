export interface Affiliation {
  name: string;
  url: string;
}

export interface SiteContent {
  name: string;
  siteTitle: string;
  tagline: string;
  missionStatement: string;
  email: string;
  location: string;
  intro: string;
  prayerInfo?: string;
  affiliations?: Affiliation[];
}

export interface Highlight {
  id: string;
  label: string;
  value: string;
  description: string;
  icon: string;
}

export interface ContentSection {
  id: string;
  title: string;
  paragraphs: string[];
  image: string;
  imageAlt: string;
  imagePosition?: "left" | "right";
}

export interface AboutContent {
  biography: ContentSection[];
  missionWork: ContentSection[];
}

export interface MinistryBlock {
  id: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
}

export interface PeruMinistryContent {
  overview: string;
  blocks: MinistryBlock[];
  programs: string[];
  partnerships: string[];
}

export type GalleryCategory =
  | "Ministry Work"
  | "Communities"
  | "Churches"
  | "Events"
  | "Peru Landscapes";

export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  caption: string;
  category: GalleryCategory;
}

export interface Testimony {
  id: string;
  quote: string;
  author: string;
  role: string;
  type: "quote" | "story";
  title?: string;
  body?: string;
}

export interface TimelineEvent {
  id: string;
  year: string;
  title: string;
  description: string;
}

export interface HeroImage {
  src: string;
  alt: string;
}

export interface CtaLink {
  label: string;
  href: string;
}
