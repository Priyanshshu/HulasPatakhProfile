import { Card } from "@/components/ui/card";
import { Mic, Radio, Users, Building } from "lucide-react";
import { LucideIcon } from "lucide-react";

interface Engagement {
  icon: LucideIcon;
  type: string;
  description: string;
}

const engagements: Engagement[] = [
  {
    icon: Mic,
    type: "National Conferences",
    description: "Keynote speaker at Startup Mahakumbh (showcased startups to Minister Piyush Goyal), CII Chhattisgarh ICONN 2023, World Entrepreneurs' Day, and IP Awareness Programmes"
  },
  {
    icon: Radio,
    type: "Media & Broadcasting",
    description: "Regular expert on DD News Chhattisgarh and Akashvani Raipur, discussing agricultural innovation and startup ecosystem development"
  },
  {
    icon: Users,
    type: "Academic Engagement",
    description: "Guest of Honour and speaker at MATS University, Pt. Ravishankar Shukla University, and Dau Shri Vasudev Chandrakar Kamdhenu Vishwavidyalaya"
  },
  {
    icon: Building,
    type: "Industry Collaboration",
    description: "Conducted entrepreneurship training at UCO Bank, MSME programs, and corporate innovation workshops focusing on agri-business development"
  }
];

export default function SpeakingEngagements() {
  return (
    <section id="speaking" className="py-20 px-4 bg-muted/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4" data-testid="text-speaking-heading">
            Speaking & Thought Leadership
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Sharing insights on agricultural innovation, startup ecosystem, and rural entrepreneurship
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {engagements.map((engagement, index) => (
            <Card 
              key={index}
              className="p-6 hover-elevate transition-all duration-300 flex gap-4"
              data-testid={`card-engagement-${index}`}
            >
              <div className="p-3 bg-primary/10 rounded-lg h-fit">
                <engagement.icon className="w-6 h-6 text-primary" />
              </div>
              
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-foreground mb-2" data-testid={`text-engagement-type-${index}`}>
                  {engagement.type}
                </h3>
                <p className="text-foreground/80 leading-relaxed">
                  {engagement.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
