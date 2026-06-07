import { siteContent } from "@/lib/content";
import { Separator } from "@/components/ui/separator";
import { AffiliationsList } from "@/components/sections/AffiliationsList";

export function Footer() {
  return (
    <footer className="border-t border-border bg-white-smoke-50">
      <div className="mx-auto max-w-6xl px-4 py-12 md:px-6">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div className="md:max-w-sm">
            <p className="text-sm font-semibold">Contact</p>
            <p className="mt-2 text-sm text-muted-foreground">
              Send a message using the form above. We would love to hear from you.
            </p>
            {siteContent.affiliations && siteContent.affiliations.length > 0 && (
              <div className="mt-6">
                <p className="text-sm font-semibold">Affiliations</p>
                <AffiliationsList className="mt-3" />
              </div>
            )}
          </div>

          <div className="text-left md:text-right">
            <p className="font-serif text-lg font-semibold">{siteContent.siteTitle}</p>
            <p className="mt-2 text-sm text-muted-foreground">{siteContent.tagline}</p>
            <p className="mt-4 text-sm text-muted-foreground">{siteContent.name}</p>
          </div>
        </div>

        <Separator className="my-8" />

        <p className="text-center text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} {siteContent.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
