import { Button } from "@/components/ui/button";
import { Linkedin, Instagram, Mail } from "lucide-react";

interface SocialLinksProps {
  linkedinUrl: string;
  instagramUrl?: string;
  email: string;
}

export default function SocialLinks({ linkedinUrl, instagramUrl, email }: SocialLinksProps) {
  return (
    <section id="contact" className="py-20 px-4 bg-background">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-foreground mb-12" data-testid="text-social-heading">
          Connect With Me
        </h2>
        
        <div className="flex justify-center items-center gap-6 flex-wrap">
          <Button 
            size="icon" 
            variant="default"
            className="w-14 h-14 rounded-full"
            asChild
            data-testid="button-social-linkedin"
          >
            <a href={linkedinUrl} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <Linkedin className="w-6 h-6" />
            </a>
          </Button>
          
          {instagramUrl && (
            <Button 
              size="icon" 
              variant="default"
              className="w-14 h-14 rounded-full"
              asChild
              data-testid="button-social-instagram"
            >
              <a href={instagramUrl} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <Instagram className="w-6 h-6" />
              </a>
            </Button>
          )}
          
          <Button 
            size="icon" 
            variant="default"
            className="w-14 h-14 rounded-full"
            asChild
            data-testid="button-social-email"
          >
            <a href={`mailto:${email}`} aria-label="Email">
              <Mail className="w-6 h-6" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
