import { Quote } from "lucide-react";
import type { Testimony } from "@/types/content";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

interface TestimonialCardProps {
  testimony: Testimony;
}

export function TestimonialCard({ testimony }: TestimonialCardProps) {
  if (testimony.type === "story") {
    return (
      <Card className="h-full border-border/80 bg-card/90">
        <CardHeader>
          <h3 className="font-serif text-xl font-semibold">{testimony.title}</h3>
        </CardHeader>
        <CardContent>
          <p className="leading-relaxed text-muted-foreground">{testimony.body}</p>
          <footer className="mt-4 text-sm">
            <cite className="not-italic font-medium text-foreground">
              {testimony.author}
            </cite>
            <span className="text-muted-foreground"> — {testimony.role}</span>
          </footer>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="h-full border-border/80 bg-card/90">
      <CardContent className="flex h-full flex-col justify-between pt-6">
        <Quote className="mb-4 h-8 w-8 text-primary/40" aria-hidden="true" />
        <blockquote className="font-serif text-lg leading-relaxed text-foreground">
          &ldquo;{testimony.quote}&rdquo;
        </blockquote>
        <footer className="mt-6 text-sm">
          <cite className="not-italic font-medium text-foreground">
            {testimony.author}
          </cite>
          <span className="text-muted-foreground"> — {testimony.role}</span>
        </footer>
      </CardContent>
    </Card>
  );
}
