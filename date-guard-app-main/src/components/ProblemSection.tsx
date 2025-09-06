import { Card } from "@/components/ui/card";
import { AlertTriangle, DollarSign, Brain, Clock } from "lucide-react";

const ProblemSection = () => {
  const problems = [
    {
      icon: AlertTriangle,
      title: "Health Risks",
      description: "Expired food and medicine create serious health hazards that could have been prevented.",
      color: "text-destructive"
    },
    {
      icon: DollarSign,
      title: "Money Lost",
      description: "Missed warranty windows mean paying for repairs and replacements you could get free.",
      color: "text-warning"
    },
    {
      icon: Brain,
      title: "Mental Overload",
      description: "Manually tracking dozens of dates across a family is error-prone and exhausting.",
      color: "text-accent"
    },
    {
      icon: Clock,
      title: "Time Wasted",
      description: "Searching through cabinets and drawers to find expiry dates wastes precious time.",
      color: "text-muted-foreground"
    }
  ];

  return (
    <section className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center space-y-6 mb-16">
          <h2 className="text-4xl font-bold">
            The Hidden Cost of 
            <span className="bg-gradient-hero bg-clip-text text-transparent"> Forgotten Dates</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Every household throws away critical packaging information daily. Here's what you're really losing:
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {problems.map((problem, index) => (
            <Card key={index} className="p-6 bg-gradient-card border-0 shadow-soft hover:shadow-glow transition-all duration-300 hover:-translate-y-1">
              <div className="space-y-4">
                <div className={`w-12 h-12 rounded-xl bg-background flex items-center justify-center ${problem.color}`}>
                  <problem.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold">{problem.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{problem.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;