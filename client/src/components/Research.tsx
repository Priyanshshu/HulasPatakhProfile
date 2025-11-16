import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BookOpen, FileText } from "lucide-react";

interface ResearchArea {
  area: string;
  topics: string[];
}

const researchAreas: ResearchArea[] = [
  {
    area: "Agricultural Economics",
    topics: ["Market Analysis", "Price Dynamics", "Trade Policies"]
  },
  {
    area: "Agribusiness Development",
    topics: ["Startup Ecosystems", "Value Chain Management", "Business Models"]
  },
  {
    area: "Rural Innovation",
    topics: ["Technology Adoption", "Digital Agriculture", "Farmer Empowerment"]
  },
  {
    area: "Policy & Impact Studies",
    topics: ["COVID-19 Impact on Farmers", "e-NAM Platform Adoption", "Climate Vulnerability"]
  }
];

export default function Research() {
  return (
    <section id="research" className="py-20 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4" data-testid="text-research-heading">
            Research & Publications
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Contributing to academic knowledge in agricultural economics and agribusiness management
          </p>
        </div>

        <div className="mb-12 text-center">
          <Card className="p-8 max-w-2xl mx-auto">
            <FileText className="w-12 h-12 mx-auto mb-4 text-primary" />
            <h3 className="text-2xl font-bold text-foreground mb-3">
              Published Research
            </h3>
            <div className="flex justify-center gap-6 mb-4">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">69+</div>
                <div className="text-sm text-muted-foreground">Publications</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">100+</div>
                <div className="text-sm text-muted-foreground">Citations</div>
              </div>
            </div>
            <p className="text-foreground/80 leading-relaxed">
              Extensive research portfolio on ResearchGate and Google Scholar covering agricultural marketing, 
              climate vulnerability assessments, e-NAM platform studies, value chain analysis, biodiversity, 
              IPR management in agriculture, and rural development strategies.
            </p>
          </Card>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {researchAreas.map((area, index) => (
            <Card 
              key={index}
              className="p-6 hover-elevate transition-all duration-300"
              data-testid={`card-research-${index}`}
            >
              <div className="flex items-start gap-3 mb-4">
                <BookOpen className="w-6 h-6 text-primary mt-1" />
                <h3 className="text-lg font-bold text-foreground" data-testid={`text-research-area-${index}`}>
                  {area.area}
                </h3>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {area.topics.map((topic, idx) => (
                  <Badge key={idx} variant="secondary">
                    {topic}
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
