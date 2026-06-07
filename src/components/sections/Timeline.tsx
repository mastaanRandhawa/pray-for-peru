import type { TimelineEvent } from "@/types/content";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface TimelineProps {
  events: TimelineEvent[];
  title?: string;
  subtitle?: string;
  limit?: number;
  showViewAll?: boolean;
}

export function Timeline({
  events,
  title = "Timeline of Service",
  subtitle = "Key milestones from Canada to Peru and beyond.",
  limit,
  showViewAll = false,
}: TimelineProps) {
  const displayed = limit ? events.slice(0, limit) : events;

  return (
    <section className="py-20" aria-labelledby="timeline-heading">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="mb-12 text-center">
          <Badge className="mb-4">Journey</Badge>
          <h2 id="timeline-heading" className="text-3xl font-bold tracking-tight md:text-4xl">
            {title}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">{subtitle}</p>
        </div>

        <ol className="relative mx-auto max-w-3xl">
          <div
            className="absolute bottom-0 left-4 top-0 w-px bg-border md:left-1/2 md:-translate-x-px"
            aria-hidden="true"
          />
          {displayed.map((event, index) => (
            <li
              key={event.id}
              className={cn(
                "relative mb-10 pl-12 md:pl-0",
                index % 2 === 0 ? "md:pr-[calc(50%+2rem)] md:text-right" : "md:pl-[calc(50%+2rem)]",
              )}
            >
              <div
                className={cn(
                  "absolute left-2 top-1 h-4 w-4 rounded-full border-2 border-primary bg-background md:left-1/2 md:-translate-x-1/2",
                )}
                aria-hidden="true"
              />
              <time className="text-sm font-semibold text-primary">{event.year}</time>
              <h3 className="mt-1 text-lg font-semibold">{event.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {event.description}
              </p>
            </li>
          ))}
        </ol>

        {showViewAll && limit && events.length > limit && (
          <p className="mt-4 text-center text-sm text-muted-foreground">
            Showing {limit} of {events.length} milestones.
          </p>
        )}
      </div>
    </section>
  );
}
