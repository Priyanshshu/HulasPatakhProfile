import { Card } from "@/components/ui/card";
import { TrendingUp, Users, Award, Briefcase } from "lucide-react";
import { LucideIcon } from "lucide-react";

interface Metric {
  icon: LucideIcon;
  value: string;
  label: string;
  description: string;
}

const metrics: Metric[] = [
  {
    icon: Users,
    value: "300+",
    label: "Startups Incubated",
    description: "Across agriculture & allied sectors"
  },
  {
    icon: TrendingUp,
    value: "₹132.80M",
    label: "Funding Support",
    description: "Provided to agri-entrepreneurs"
  },
  {
    icon: Briefcase,
    value: "30+",
    label: "Years Experience",
    description: "In agricultural economics & management"
  },
  {
    icon: Award,
    value: "85+",
    label: "Successful Ventures",
    description: "Within 2 years of program operations"
  }
];

export default function ImpactMetrics() {
  return (
    <section id="impact" className="py-20 px-4 bg-primary/5">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4" data-testid="text-impact-heading">
            Impact & Achievements
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Leading India's agricultural innovation ecosystem through the IGKV RKVY RAFTAAR Agribusiness Incubation Centre
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((metric, index) => (
            <Card 
              key={index}
              className="p-8 text-center hover-elevate transition-all duration-300"
              data-testid={`card-metric-${index}`}
            >
              <metric.icon className="w-10 h-10 mx-auto mb-4 text-primary" />
              <div className="text-4xl font-bold text-foreground mb-2" data-testid={`text-metric-value-${index}`}>
                {metric.value}
              </div>
              <div className="text-lg font-semibold text-foreground mb-1" data-testid={`text-metric-label-${index}`}>
                {metric.label}
              </div>
              <p className="text-sm text-muted-foreground" data-testid={`text-metric-desc-${index}`}>
                {metric.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
