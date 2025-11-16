import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface TimelineEvent {
  year: string;
  title: string;
}

const events: TimelineEvent[] = [
  {
    year: "2019",
    title: "Appointed as Head & CEO of IGKV RKVY RAFTAAR Agribusiness Incubation Centre"
  },
  {
    year: "2020",
    title: "Promoted to Professor at Indira Gandhi Agricultural University"
  },
  {
    year: "2022",
    title: "IGKV R-ABI awarded Best Incubation Center by AICRA"
  },
  {
    year: "2024",
    title: "Received Accelerator of the Year Award and Bharat Incubator Award"
  },
  {
    year: "2025",
    title: "Appointed Professor & Head, Department of Agribusiness & Rural Management"
  }
];

export default function Timeline() {
  return (
    <section id="journey" className="py-20 px-4 bg-background">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-foreground mb-12" data-testid="text-timeline-heading">
          Professional Journey
        </h2>
        
        <div className="relative">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-primary/30 md:-translate-x-1/2" />
          
          <div className="space-y-12">
            {events.map((event, index) => (
              <div 
                key={index} 
                className={`relative flex gap-8 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
                data-testid={`timeline-event-${index}`}
              >
                <div className={`hidden md:flex md:w-5/12 items-center ${index % 2 === 0 ? 'justify-end' : 'justify-start'}`}>
                  <Badge variant="default" className="text-base px-4 py-1" data-testid={`badge-year-${index}`}>
                    {event.year}
                  </Badge>
                </div>
                
                <div className="absolute left-4 md:left-1/2 w-6 h-6 bg-primary rounded-full md:-translate-x-1/2 border-4 border-background z-10" />
                
                <div className="w-full md:w-5/12 pl-16 md:pl-0">
                  <Card className="p-6" data-testid={`card-event-${index}`}>
                    <Badge variant="default" className="md:hidden mb-3 text-base px-4 py-1">
                      {event.year}
                    </Badge>
                    <p className="text-foreground font-medium">{event.title}</p>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
