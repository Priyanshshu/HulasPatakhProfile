import { Card } from "@/components/ui/card";
import { GraduationCap, Users, BookOpen, Network, Lightbulb, Globe } from "lucide-react";
import { LucideIcon } from "lucide-react";

interface Achievement {
  icon: LucideIcon;
  title: string;
  description: string;
}

const achievements: Achievement[] = [
  {
    icon: GraduationCap,
    title: "Academic Leadership",
    description: "Professor & Head, Dept. of Agribusiness & Rural Management at IGKV"
  },
  {
    icon: Lightbulb,
    title: "Innovation Champion",
    description: "Leading India's most successful agribusiness incubation center"
  },
  {
    icon: Users,
    title: "Mentor & Guide",
    description: "Mentored 300+ startups and thousands of aspiring entrepreneurs"
  },
  {
    icon: BookOpen,
    title: "Prolific Author",
    description: "Published extensively in national and international journals"
  },
  {
    icon: Network,
    title: "Ecosystem Builder",
    description: "Strong network across government, academia, and industry"
  },
  {
    icon: Globe,
    title: "National Impact",
    description: "Transforming agricultural entrepreneurship across India"
  }
];

export default function Achievements() {
  return (
    <section id="achievements" className="py-20 px-4 bg-muted/20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-foreground mb-12" data-testid="text-achievements-heading">
          Key Contributions
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => (
            <Card 
              key={index} 
              className="p-8 text-center hover-elevate transition-shadow duration-300"
              data-testid={`card-achievement-${index}`}
            >
              <achievement.icon className="w-12 h-12 mx-auto mb-4 text-primary" />
              <h3 className="text-xl font-semibold text-foreground mb-2" data-testid={`text-achievement-title-${index}`}>
                {achievement.title}
              </h3>
              <p className="text-muted-foreground" data-testid={`text-achievement-desc-${index}`}>
                {achievement.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
