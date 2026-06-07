import {
  BookOpen,
  Calendar,
  Church,
  GraduationCap,
  HeartHandshake,
  Plane,
  Users,
  type LucideIcon,
} from "lucide-react";
import type { Highlight } from "@/types/content";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const iconMap: Record<string, LucideIcon> = {
  church: Church,
  users: Users,
  "heart-handshake": HeartHandshake,
  calendar: Calendar,
  plane: Plane,
  "book-open": BookOpen,
  "graduation-cap": GraduationCap,
};

interface HighlightsGridProps {
  highlights: Highlight[];
  title?: string;
  subtitle?: string;
}

export function HighlightsGrid({
  highlights,
  title = "Prayer Highlights",
  subtitle = "Upcoming ministry needs and ways you can pray with us.",
}: HighlightsGridProps) {
  return (
    <section
      id="prayer-highlights"
      className="bg-white-smoke-50 py-20"
      aria-labelledby="highlights-heading"
    >
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="mb-12 text-center">
          <Badge className="mb-4">Prayer</Badge>
          <h2 id="highlights-heading" className="text-3xl font-bold tracking-tight md:text-4xl">
            {title}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">{subtitle}</p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {highlights.map((item) => {
            const Icon = iconMap[item.icon] ?? HeartHandshake;
            return (
              <Card key={item.id} className="border-border/80 bg-card/80 backdrop-blur-sm">
                <CardHeader>
                  <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <CardTitle className="text-xl font-bold text-primary">{item.value}</CardTitle>
                  <CardDescription className="text-base font-medium text-foreground">
                    {item.label}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
