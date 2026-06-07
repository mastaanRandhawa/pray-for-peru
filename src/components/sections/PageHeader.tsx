import { Badge } from "@/components/ui/badge";

interface PageHeaderProps {
  badge?: string;
  title: string;
  description?: string;
}

export function PageHeader({ badge, title, description }: PageHeaderProps) {
  return (
    <div className="border-b border-border bg-dusty-taupe-100/50 py-16 text-center">
      <div className="mx-auto max-w-3xl px-4 md:px-6">
        {badge && <Badge className="mb-4">{badge}</Badge>}
        <h1 className="text-4xl font-bold tracking-tight md:text-5xl">{title}</h1>
        {description && (
          <p className="mt-4 text-lg text-muted-foreground">{description}</p>
        )}
      </div>
    </div>
  );
}
