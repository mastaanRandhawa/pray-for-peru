import { siteContent } from "@/lib/content";
import { cn } from "@/lib/utils";

interface AffiliationsListProps {
  className?: string;
}

export function AffiliationsList({ className }: AffiliationsListProps) {
  if (!siteContent.affiliations?.length) return null;

  return (
    <ul className={cn("space-y-2", className)}>
      {siteContent.affiliations.map((affiliation) => (
        <li key={affiliation.url}>
          <a
            href={affiliation.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-primary transition-colors hover:underline"
          >
            {affiliation.name}
          </a>
        </li>
      ))}
    </ul>
  );
}
