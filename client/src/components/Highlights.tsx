import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Megaphone, Users2 } from "lucide-react";

export default function Highlights() {
  return (
    <section id="highlights" className="py-20 px-4 bg-primary/5">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4" data-testid="text-highlights-heading">
            Notable Highlights
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Recent achievements and recognitions that showcase national impact
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="p-8 hover-elevate transition-all duration-300" data-testid="card-highlight-0">
            <div className="flex items-start gap-4 mb-4">
              <div className="p-3 bg-primary/10 rounded-lg">
                <Star className="w-6 h-6 text-primary" />
              </div>
              <Badge variant="default" className="text-xs">2024</Badge>
            </div>
            <h3 className="text-xl font-bold text-foreground mb-3">
              Startup Mahakumbh Recognition
            </h3>
            <p className="text-foreground/80 leading-relaxed">
              IGKV R-ABI startups showcased to Union Minister Piyush Goyal at India's largest startup event, highlighting the incubator's national significance
            </p>
          </Card>

          <Card className="p-8 hover-elevate transition-all duration-300" data-testid="card-highlight-1">
            <div className="flex items-start gap-4 mb-4">
              <div className="p-3 bg-primary/10 rounded-lg">
                <Megaphone className="w-6 h-6 text-primary" />
              </div>
              <Badge variant="default" className="text-xs">2023</Badge>
            </div>
            <h3 className="text-xl font-bold text-foreground mb-3">
              Guest of Honour - CII ICONN
            </h3>
            <p className="text-foreground/80 leading-relaxed">
              Invited as distinguished speaker at CII Chhattisgarh's premier innovation conference on "Creating Value and Maximizing Shareholders Wealth"
            </p>
          </Card>

          <Card className="p-8 hover-elevate transition-all duration-300" data-testid="card-highlight-2">
            <div className="flex items-start gap-4 mb-4">
              <div className="p-3 bg-primary/10 rounded-lg">
                <Users2 className="w-6 h-6 text-primary" />
              </div>
              <Badge variant="default" className="text-xs">Ongoing</Badge>
            </div>
            <h3 className="text-xl font-bold text-foreground mb-3">
              Social Media Impact
            </h3>
            <p className="text-foreground/80 leading-relaxed">
              Growing digital presence with 1,150+ Instagram followers and active engagement across LinkedIn, Facebook, reaching thousands of aspiring entrepreneurs
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
}
