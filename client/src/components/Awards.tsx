import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, Trophy, Star } from "lucide-react";

interface AwardItem {
  year: string;
  title: string;
  organization: string;
  category: "Center" | "Personal" | "Recognition";
}

const awards: AwardItem[] = [
  {
    year: "2024",
    title: "Accelerator of the Year Award",
    organization: "Startup Mahakumbh India First",
    category: "Center"
  },
  {
    year: "2024",
    title: "Bharat Incubator Award",
    organization: "National Recognition",
    category: "Center"
  },
  {
    year: "2024",
    title: "Outstanding Professional Award",
    organization: "Agricultural Entrepreneurship",
    category: "Personal"
  },
  {
    year: "2022",
    title: "Best Incubation Center Award",
    organization: "AICRA - Ministry of Electronics & IT, Govt of India",
    category: "Center"
  }
];

const categoryIcon = {
  Center: Trophy,
  Personal: Star,
  Recognition: Award
};

export default function Awards() {
  return (
    <section id="awards" className="py-20 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4" data-testid="text-awards-heading">
            Awards & Recognition
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Acknowledged for excellence in agribusiness incubation and agricultural entrepreneurship
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {awards.map((award, index) => {
            const Icon = categoryIcon[award.category];
            return (
              <Card 
                key={index}
                className="p-6 hover-elevate transition-all duration-300"
                data-testid={`card-award-${index}`}
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <h3 className="text-lg font-bold text-foreground" data-testid={`text-award-title-${index}`}>
                        {award.title}
                      </h3>
                      <Badge variant="default">{award.year}</Badge>
                    </div>
                    
                    <p className="text-sm text-muted-foreground mb-2">
                      {award.organization}
                    </p>
                    
                    <Badge variant="secondary" className="text-xs">
                      {award.category}
                    </Badge>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
