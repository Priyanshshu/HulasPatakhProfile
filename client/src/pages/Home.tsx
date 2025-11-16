import Hero from "@/components/Hero";
import About from "@/components/About";
import ImpactMetrics from "@/components/ImpactMetrics";
import Achievements from "@/components/Achievements";
import Highlights from "@/components/Highlights";
import Programs from "@/components/Programs";
import SuccessStories from "@/components/SuccessStories";
import Timeline from "@/components/Timeline";
import Awards from "@/components/Awards";
import Research from "@/components/Research";
import SpeakingEngagements from "@/components/SpeakingEngagements";
import Gallery from "@/components/Gallery";
import SocialLinks from "@/components/SocialLinks";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero 
        name="Prof. Hulas Pathak"
        title="Entrepreneur | Agri Business Leader | Public Speaker"
        tagline="Passionate about agriculture development, farmer empowerment, and innovation in rural India."
        linkedinUrl="https://www.linkedin.com/in/prof-hulas-pathak-95157319"
      />
      
      <About 
        content="Prof. Hulas Pathak is officiating as Professor (Agricultural Economics) & Head in the Department of Agribusiness & Rural Management at Indira Gandhi Agriculture University (Krishi Vishwavidyalaya) Raipur, Chhattisgarh. He brings thirty years of varied academic experiences, teaching different courses in agricultural economics and agribusiness management. In the last few years, he is leading one of the most successful Agribusiness Incubation Centers of the country, nurturing and strengthening the agri-startup ecosystem. He has successfully incubated, mentored and supported nearly 300 startups in agriculture & allied sectors in India with a fund support of INR 132.80 million."
      />
      
      <ImpactMetrics />
      
      <Achievements />
      
      <Highlights />
      
      <Programs />
      
      <SuccessStories />
      
      <Timeline />
      
      <Awards />
      
      <Research />
      
      <SpeakingEngagements />
      
      <Gallery />
      
      <SocialLinks 
        linkedinUrl="https://www.linkedin.com/in/prof-hulas-pathak-95157319"
        instagramUrl="https://www.instagram.com/igkvrabi_raipur/"
        email="igkvrabi@gmail.com"
      />
      
      <Footer />
    </div>
  );
}
