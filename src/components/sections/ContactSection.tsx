import { Heart } from "lucide-react";
import { siteContent } from "@/lib/content";
import { ContactForm } from "@/components/sections/ContactForm";
import { AffiliationsList } from "@/components/sections/AffiliationsList";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export function ContactSection() {
  return (
    <section
      id="contact"
      className="bg-white-smoke-50 py-20"
      aria-labelledby="contact-heading"
    >
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="mb-12 text-center">
          <Badge className="mb-4">Contact</Badge>
          <h2 id="contact-heading" className="text-3xl font-bold tracking-tight md:text-4xl">
            Get in Touch
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Send a message or learn about prayer partnership opportunities.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          <div className="space-y-6">
            {siteContent.prayerInfo && (
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-xl">
                    <Heart className="h-5 w-5 text-primary" aria-hidden="true" />
                    Prayer Requests
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {siteContent.prayerInfo}
                  </p>
                </CardContent>
              </Card>
            )}

            {siteContent.affiliations && siteContent.affiliations.length > 0 && (
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">Affiliations</CardTitle>
                </CardHeader>
                <CardContent>
                  <AffiliationsList />
                </CardContent>
              </Card>
            )}
          </div>

          <Card>
            <CardHeader>
              <CardTitle className="text-xl">Send a Message</CardTitle>
            </CardHeader>
            <CardContent>
              <ContactForm />
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
