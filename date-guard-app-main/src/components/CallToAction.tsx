import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";

const CallToAction = () => {
  return (
    <section className="py-20 px-4 bg-gradient-hero text-primary-foreground">
      <div className="container mx-auto text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          <h2 className="text-4xl lg:text-5xl font-bold">
            Ready to Take Control of Your Household?
          </h2>
          <p className="text-xl opacity-90 leading-relaxed">
            Join thousands of families who never miss an expiry date or warranty claim. 
            Start your free account today and protect what matters most.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="lg" className="shadow-soft">
              Start Free Trial
            </Button>
            <Button variant="outline" size="lg" className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10">
              Schedule Demo
            </Button>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-8 text-sm opacity-80">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4" />
              <span>Free 30-day trial</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4" />
              <span>No credit card required</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4" />
              <span>Cancel anytime</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;