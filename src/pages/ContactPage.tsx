import { Heart } from "lucide-react";
import { Seo } from "@/components/Seo";
import { PageHeader } from "@/components/sections/PageHeader";
import { ContactForm } from "@/components/sections/ContactForm";
import { AffiliationsList } from "@/components/sections/AffiliationsList";
import { siteContent } from "@/lib/content";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function ContactPage() {
  return (
    <>
      <Seo
        title="Contact"
        description={`Get in touch with ${siteContent.name}. Send a message or learn about prayer partnership.`}
        path="/contact"
      />
      <PageHeader
        badge="Contact"
        title="Support & Contact"
        description="We would love to hear from you. Reach out with questions, encouragement, or prayer requests."
      />

      <div className="mx-auto grid max-w-6xl gap-12 px-4 py-20 md:grid-cols-2 md:px-6">
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
    </>
  );
}
