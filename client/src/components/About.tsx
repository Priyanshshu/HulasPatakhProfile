import { Badge } from "@/components/ui/badge";

interface AboutProps {
  content: string;
}

export default function About({ content }: AboutProps) {
  return (
    <section id="about" className="py-20 px-4 bg-background">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-foreground mb-8" data-testid="text-about-heading">
          About
        </h2>
        
        <div className="mb-8 flex flex-wrap justify-center gap-3">
          <Badge variant="default" className="text-sm px-4 py-1">
            PhD in Agricultural Economics
          </Badge>
          <Badge variant="default" className="text-sm px-4 py-1">
            IIM Ahmedabad & IIM Lucknow Alumni
          </Badge>
          <Badge variant="default" className="text-sm px-4 py-1">
            Head & CEO, IGKV R-ABI
          </Badge>
        </div>
        
        <p className="text-lg text-foreground/80 leading-relaxed text-center mb-6" data-testid="text-about-content">
          {content}
        </p>
        
        <div className="mt-8 p-6 bg-muted/30 rounded-lg">
          <h3 className="text-xl font-semibold text-foreground mb-4 text-center">
            Areas of Expertise
          </h3>
          <div className="flex flex-wrap justify-center gap-2">
            {["Agricultural Marketing", "Agribusiness Management", "Incubation & Mentoring", "Biodiversity & IPR", "Entrepreneurship Development", "Rural Innovation"].map((area, idx) => (
              <Badge key={idx} variant="secondary">
                {area}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
