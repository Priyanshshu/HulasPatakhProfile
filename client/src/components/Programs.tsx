import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Rocket, Sprout } from "lucide-react";

interface Program {
  icon: React.ReactNode;
  name: string;
  funding: string;
  description: string;
  highlights: string[];
}

const programs: Program[] = [
  {
    icon: <Sprout className="w-8 h-8 text-primary" />,
    name: "Abhinav Program",
    funding: "Up to ₹5 Lakhs",
    description: "Seed funding for early-stage agribusiness startups to validate ideas and develop prototypes",
    highlights: ["Idea Validation", "Prototype Development", "Market Research Support"]
  },
  {
    icon: <Rocket className="w-8 h-8 text-primary" />,
    name: "Udbhav Program",
    funding: "Up to ₹25 Lakhs",
    description: "Commercialization support for scaling agricultural products and establishing market presence",
    highlights: ["Product Launch", "Market Expansion", "Operational Setup"]
  }
];

export default function Programs() {
  return (
    <section id="programs" className="py-20 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4" data-testid="text-programs-heading">
            Flagship Programs
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive support programs designed to nurture agri-entrepreneurship from ideation to market success
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {programs.map((program, index) => (
            <Card 
              key={index}
              className="p-8 hover-elevate transition-all duration-300"
              data-testid={`card-program-${index}`}
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  {program.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-foreground mb-2" data-testid={`text-program-name-${index}`}>
                    {program.name}
                  </h3>
                  <Badge variant="default" className="mb-3">
                    {program.funding}
                  </Badge>
                </div>
              </div>
              
              <p className="text-foreground/80 mb-4 leading-relaxed">
                {program.description}
              </p>
              
              <div className="flex flex-wrap gap-2">
                {program.highlights.map((highlight, idx) => (
                  <Badge key={idx} variant="secondary" className="text-sm">
                    {highlight}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
