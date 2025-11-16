import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Quote } from "lucide-react";

interface Story {
  name: string;
  sector: string;
  impact: string;
  description: string;
}

const stories: Story[] = [
  {
    name: "Phasal Bazar",
    sector: "Agricultural Marketplace",
    impact: "Founded by Kuldeep Patel",
    description:
      "Digital platform revolutionizing agricultural trade and providing fair market prices to farmers across Chhattisgarh",
  },
  {
    name: "One Cup",
    sector: "Food & Beverage",
    impact: "Founded by Davesh Patel",
    description:
      "Innovative agri-based food product startup creating value-added products from local agricultural produce",
  },
  {
    name: "Rice Bowl",
    sector: "Food Processing",
    impact: "Founded by Nipur Verma",
    description:
      "Transforming rice value chain through innovative processing and packaging solutions for farmers",
  },
  {
    name: "Atmeek Bharat",
    sector: "Rural Innovation",
    impact: "Founded by Sajal Malhotra",
    description:
      "Empowering rural communities through sustainable agricultural practices and technology adoption",
  },
];

export default function SuccessStories() {
  return (
    <section id="success-stories" className="py-20 px-4 bg-muted/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2
            className="text-4xl font-bold text-foreground mb-4"
            data-testid="text-stories-heading"
          >
            Success Stories
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Transforming agricultural innovation into thriving businesses
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stories.map((story, index) => (
            <Card
              key={index}
              className="p-8 hover-elevate transition-all duration-300 flex flex-col"
              data-testid={`card-story-${index}`}
            >
              <Quote className="w-8 h-8 text-primary mb-4" />

              <h3
                className="text-xl font-bold text-foreground mb-2"
                data-testid={`text-story-name-${index}`}
              >
                {story.name}
              </h3>

              <Badge variant="default" className="mb-3 w-fit">
                {story.sector}
              </Badge>

              <p className="text-sm font-semibold text-primary mb-3">
                {story.impact}
              </p>

              <p className="text-foreground/80 leading-relaxed flex-1">
                {story.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
