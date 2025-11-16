import { Card } from "@/components/ui/card";
import image1 from "@assets/1762326245473_1763030688198.jpg";
import image2 from "@assets/1761809152850_1763030699843.jpg";
import image3 from "@assets/1761739638737_1763030716000.jpg";

const galleryImages = [
  {
    src: image1,
    alt: "Incubator Felicitation Award Ceremony",
    caption: "Receiving recognition at national incubation event"
  },
  {
    src: image2,
    alt: "Government Partnership Event",
    caption: "Collaboration with Ministry officials on agri-schemes"
  },
  {
    src: image3,
    alt: "Seminar on Food Processing",
    caption: "Leading discussions on strengthening food processing sector"
  }
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-20 px-4 bg-muted/20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-foreground mb-4" data-testid="text-gallery-heading">
          Gallery
        </h2>
        <p className="text-center text-muted-foreground mb-12" data-testid="text-gallery-subtitle">
          Moments from events, talks, and interactions.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <Card 
              key={index} 
              className="overflow-hidden hover-elevate transition-all duration-300 group"
              data-testid={`card-gallery-${index}`}
            >
              <div className="aspect-square relative overflow-hidden">
                <img 
                  src={image.src} 
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <p className="text-white text-sm font-medium">{image.caption}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
