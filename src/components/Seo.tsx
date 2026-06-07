import { useEffect } from "react";
import { siteContent } from "@/lib/content";

interface SeoProps {
  title?: string;
  description?: string;
  path?: string;
  jsonLd?: Record<string, unknown> | Record<string, unknown>[];
}

function upsertMeta(name: string, content: string, attribute: "name" | "property" = "name") {
  let element = document.querySelector(`meta[${attribute}="${name}"]`);
  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(attribute, name);
    document.head.appendChild(element);
  }
  element.setAttribute("content", content);
}

function upsertJsonLd(data: Record<string, unknown> | Record<string, unknown>[]) {
  const id = "site-json-ld";
  let script = document.getElementById(id) as HTMLScriptElement | null;
  if (!script) {
    script = document.createElement("script");
    script.id = id;
    script.type = "application/ld+json";
    document.head.appendChild(script);
  }
  script.textContent = JSON.stringify(data);
}

export function Seo({ title, description, path = "/", jsonLd }: SeoProps) {
  const pageTitle = title
    ? `${title} | ${siteContent.siteTitle}`
    : siteContent.siteTitle;
  const pageDescription = description ?? siteContent.missionStatement;
  const url = `${window.location.origin}${path}`;

  useEffect(() => {
    document.title = pageTitle;
    upsertMeta("description", pageDescription);
    upsertMeta("og:title", pageTitle, "property");
    upsertMeta("og:description", pageDescription, "property");
    upsertMeta("og:type", "website", "property");
    upsertMeta("og:url", url, "property");
    if (jsonLd) {
      upsertJsonLd(jsonLd);
    }
  }, [pageTitle, pageDescription, url, jsonLd]);

  return null;
}

export const homeJsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteContent.siteTitle,
    description: siteContent.missionStatement,
    url: typeof window !== "undefined" ? window.location.origin : "",
  },
  {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteContent.name,
    description: siteContent.intro,
    email: siteContent.email,
    jobTitle: "Missionary",
    nationality: "Canadian",
  },
];
