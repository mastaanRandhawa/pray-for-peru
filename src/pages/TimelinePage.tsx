import { Seo } from "@/components/Seo";
import { PageHeader } from "@/components/sections/PageHeader";
import { Timeline } from "@/components/sections/Timeline";
import { timelineContent } from "@/lib/content";

export default function TimelinePage() {
  return (
    <>
      <Seo
        title="Timeline"
        description="A visual timeline of missionary service from early life in Canada to ministry in Peru."
        path="/timeline"
      />
      <PageHeader
        badge="Journey"
        title="Timeline of Service"
        description="From calling to commissioning — milestones along the way."
      />
      <Timeline events={timelineContent} />
    </>
  );
}
