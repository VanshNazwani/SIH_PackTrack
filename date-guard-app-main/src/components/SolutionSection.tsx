import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Package, Pill, Smartphone, Sparkles, Bell, Users, Scan, Calendar } from "lucide-react";

const SolutionSection = () => {
  const categories = [
    {
      icon: Package,
      title: "Food & Groceries",
      description: "Track expiry dates on perishables, canned goods, and frozen items",
      color: "bg-success/10 text-success"
    },
    {
      icon: Pill,
      title: "Medicine & Health",
      description: "Never miss medication expiry dates and prescription refills",
      color: "bg-destructive/10 text-destructive"
    },
    {
      icon: Smartphone,
      title: "Electronics & Appliances",
      description: "Track warranty periods for gadgets, appliances, and devices",
      color: "bg-primary/10 text-primary"
    },
    {
      icon: Sparkles,
      title: "Cosmetics & Beauty",
      description: "Monitor expiry dates on skincare, makeup, and beauty products",
      color: "bg-accent/10 text-accent"
    }
  ];

  const features = [
    {
      icon: Bell,
      title: "Smart Reminders",
      description: "Get notifications before items expire or warranties end"
    },
    {
      icon: Users,
      title: "Family Sharing",
      description: "Share tracking with family members and assign responsibilities"
    },
    {
      icon: Scan,
      title: "Easy Entry",
      description: "Add items quickly with manual entry or barcode scanning"
    },
    {
      icon: Calendar,
      title: "Timeline View",
      description: "See all upcoming expirations in a clean, organized timeline"
    }
  ];

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center space-y-6 mb-16">
          <Badge className="bg-primary/10 text-primary border-primary/20">
            The Solution
          </Badge>
          <h2 className="text-4xl font-bold">
            One App for 
            <span className="bg-gradient-hero bg-clip-text text-transparent"> Everything You Own</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            TrackMate organizes all your household items in smart categories with automated reminders,
            so you never lose money or put your family at risk again.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {categories.map((category, index) => (
            <Card key={index} className="p-6 bg-gradient-card border-0 shadow-soft hover:shadow-glow transition-all duration-300 hover:-translate-y-1 group">
              <div className="space-y-4">
                <div className={`w-12 h-12 rounded-xl ${category.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <category.icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-semibold">{category.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{category.description}</p>
              </div>
            </Card>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div key={index} className="text-center space-y-3">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold">{feature.title}</h3>
              <p className="text-muted-foreground text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;