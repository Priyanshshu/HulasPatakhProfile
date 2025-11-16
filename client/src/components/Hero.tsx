import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Linkedin } from "lucide-react";
import profileImage from "@assets/Hulas Patakh_1763029905825.jpg";

interface HeroProps {
  name: string;
  title: string;
  tagline: string;
  linkedinUrl: string;
}

export default function Hero({ name, title, tagline, linkedinUrl }: HeroProps) {
  return (
    <section className="min-h-[90vh] flex items-center justify-center bg-gradient-to-b from-background to-muted/20 px-4 py-20">
      <div className="max-w-4xl mx-auto text-center">
        <Avatar className="w-48 h-48 mx-auto mb-8 border-4 border-white shadow-xl animate-float">
          <AvatarImage src={profileImage} alt={name} />
          <AvatarFallback className="text-4xl font-bold">{name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
        </Avatar>
        
        <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-4 animate-fade-up" style={{ animationDelay: '0.08s' }} data-testid="text-hero-name">
          {name}
        </h1>
        
        <p className="text-xl md:text-2xl font-medium text-muted-foreground mb-6 animate-fade-up" style={{ animationDelay: '0.16s' }} data-testid="text-hero-title">
          {title}
        </p>
        
        <p className="text-base md:text-lg text-foreground/80 max-w-2xl mx-auto mb-8 leading-relaxed animate-fade-up" style={{ animationDelay: '0.24s' }} data-testid="text-hero-tagline">
          {tagline}
        </p>
        
        <Button 
          size="lg" 
          className="px-8 py-6 text-lg animate-fade-up"
          asChild
          data-testid="button-linkedin-cta"
          style={{ animationDelay: '0.32s' }}
        >
          <a href={linkedinUrl} target="_blank" rel="noopener noreferrer">
            <Linkedin className="mr-2 h-5 w-5" />
            Connect with Me on LinkedIn
          </a>
        </Button>
      </div>
    </section>
  );
}
