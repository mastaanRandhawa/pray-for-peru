import { Link } from "react-router-dom";
import { Mail } from "lucide-react";
import { siteContent } from "@/lib/content";
import { Separator } from "@/components/ui/separator";

const footerLinks = [
  { to: "/about", label: "About" },
  { to: "/peru-ministry", label: "Peru Ministry" },
  { to: "/gallery", label: "Gallery" },
  { to: "/contact", label: "Contact" },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-white-smoke-50">
      <div className="mx-auto max-w-6xl px-4 py-12 md:px-6">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <p className="font-serif text-lg font-semibold">{siteContent.siteTitle}</p>
            <p className="mt-2 text-sm text-muted-foreground">{siteContent.tagline}</p>
          </div>

          <div>
            <p className="text-sm font-semibold">Quick Links</p>
            <ul className="mt-3 space-y-2">
              {footerLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold">Contact</p>
            <a
              href={`mailto:${siteContent.email}`}
              className="mt-3 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              <Mail className="h-4 w-4" aria-hidden="true" />
              {siteContent.email}
            </a>
            {siteContent.orgUrl && (
              <p className="mt-3 text-sm text-muted-foreground">
                <a
                  href={siteContent.orgUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-foreground"
                >
                  {siteContent.orgName}
                </a>
              </p>
            )}
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
