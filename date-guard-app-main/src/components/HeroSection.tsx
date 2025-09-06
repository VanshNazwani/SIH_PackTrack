import { Button } from "@/components/ui/button";
import { CheckCircle, Clock, Shield, Users } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const HeroSection = () => {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                Never Miss an 
                <span className="bg-gradient-hero bg-clip-text text-transparent"> Expiry Date</span> Again
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Track food, medicine, warranties, and cosmetics in one place. Get smart reminders 
                before items expire and never lose money on missed warranty claims.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="lg" className="shadow-glow">
                Start Tracking Free
              </Button>
              <Button variant="outline" size="lg">
                Watch Demo
              </Button>
            </div>

            <div className="grid grid-cols-2 gap-6 pt-8">
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-success" />
                <span className="text-sm text-muted-foreground">Multi-category tracking</span>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="w-5 h-5 text-warning" />
                <span className="text-sm text-muted-foreground">Smart reminders</span>
              </div>
              <div className="flex items-center space-x-3">
                <Shield className="w-5 h-5 text-primary" />
                <span className="text-sm text-muted-foreground">Warranty protection</span>
              </div>
              <div className="flex items-center space-x-3">
                <Users className="w-5 h-5 text-accent" />
                <span className="text-sm text-muted-foreground">Family sharing</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-primary rounded-3xl blur-3xl opacity-20 animate-pulse"></div>
            <img 
              src={heroImage} 
              alt="Organized household products with tracking interface"
              className="relative w-full h-auto rounded-3xl shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;