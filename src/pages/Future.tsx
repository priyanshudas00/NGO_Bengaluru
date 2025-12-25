import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  Building2, 
  Trophy, 
  Heart, 
  Brain,
  ArrowRight,
  Sparkles,
  Target,
  Users,
  GraduationCap
} from "lucide-react";

const futurePlans = [
  {
    icon: Building2,
    title: "Hostel Facility",
    description: "Many of our students travel long distances through challenging terrain. A hostel would provide them a safe, comfortable space to live and focus on their studies.",
    timeline: "Medium-term goal",
    benefits: [
      "Safe accommodation for distant students",
      "Better study environment",
      "Regular meals and care",
      "Reduced travel burden on families"
    ]
  },
  {
    icon: Trophy,
    title: "Sports Infrastructure",
    description: "Physical education is as important as academics. We dream of a proper playground with sports equipment where children can develop physical fitness and team spirit.",
    timeline: "Medium-term goal",
    benefits: [
      "Football, cricket, and other sports facilities",
      "Indoor games for monsoon seasons",
      "Physical fitness for all students",
      "Team building and discipline"
    ]
  },
  {
    icon: Brain,
    title: "Holistic Development Center",
    description: "Beyond academics and sports, we want to nurture creativity, moral values, and life skills. A dedicated space for art, music, and value education.",
    timeline: "Long-term vision",
    benefits: [
      "Art and craft workshops",
      "Music and cultural activities",
      "Value and ethics education",
      "Mental health and counseling support"
    ]
  },
];

const roadmap = [
  {
    phase: "Now",
    title: "Foundation Building",
    items: ["Serving 100+ students", "9 dedicated teachers", "Basic education infrastructure"]
  },
  {
    phase: "Next 2 Years",
    title: "Strengthening",
    items: ["Permanent school building", "Clean water & sanitation", "Regular meal program"]
  },
  {
    phase: "3-5 Years",
    title: "Expansion",
    items: ["Hostel facility", "Sports infrastructure", "Teacher training programs"]
  },
  {
    phase: "Vision",
    title: "Complete Campus",
    items: ["Holistic development center", "Higher education support", "Community resource center"]
  },
];

export default function Future() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="section-padding gradient-sage">
        <div className="container-wide px-4 md:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4" />
              <span>Our Vision</span>
            </div>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground leading-tight mb-6">
              Building Tomorrow,{" "}
              <span className="text-primary">Today</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We don't just dream — we plan. Here's how we envision the future of 
              Sundarban Child Campus and the children we serve.
            </p>
          </div>
        </div>
      </section>

      {/* Our Vision */}
      <section className="section-padding bg-background">
        <div className="container-wide px-4 md:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-4">
              What We're Working Towards
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              These are the major projects we're planning to undertake as we grow and receive more support.
            </p>
          </div>
          
          <div className="space-y-8 max-w-4xl mx-auto">
            {futurePlans.map((plan, index) => (
              <div 
                key={plan.title} 
                className="bg-card rounded-2xl p-6 md:p-8 shadow-sm border border-border/50"
              >
                <div className="flex flex-col lg:flex-row gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center">
                      <plan.icon className="w-8 h-8 text-primary" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="font-serif text-xl font-semibold text-foreground">
                        {plan.title}
                      </h3>
                      <span className="px-3 py-1 text-xs font-medium rounded-full bg-sage text-sage-foreground">
                        {plan.timeline}
                      </span>
                    </div>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      {plan.description}
                    </p>
                    <div className="grid sm:grid-cols-2 gap-2">
                      {plan.benefits.map((benefit) => (
                        <div key={benefit} className="flex items-center gap-2 text-sm text-foreground">
                          <Target className="w-4 h-4 text-primary flex-shrink-0" />
                          <span>{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Roadmap */}
      <section className="section-padding bg-secondary/30">
        <div className="container-wide px-4 md:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-4">
              Our Growth Roadmap
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Step by step, we're building towards our vision of a complete educational campus.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {roadmap.map((phase, index) => (
              <div key={phase.phase} className="relative">
                <div className="bg-card rounded-xl p-6 shadow-sm border border-border/50 h-full">
                  <div className="flex items-center gap-2 mb-4">
                    <span className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                      index === 0 ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
                    }`}>
                      {index + 1}
                    </span>
                    <span className="text-sm font-medium text-primary">{phase.phase}</span>
                  </div>
                  <h3 className="font-serif text-lg font-semibold text-foreground mb-3">
                    {phase.title}
                  </h3>
                  <ul className="space-y-2">
                    {phase.items.map((item) => (
                      <li key={item} className="text-sm text-muted-foreground flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                {/* Arrow for larger screens */}
                {index < roadmap.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                    <ArrowRight className="w-6 h-6 text-primary/30" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ultimate Vision */}
      <section className="section-padding bg-cream">
        <div className="container-narrow px-4 md:px-8 text-center">
          <h2 className="font-serif text-2xl md:text-3xl font-semibold text-foreground mb-6">
            Our Ultimate Dream
          </h2>
          <div className="bg-background rounded-xl p-6 md:p-8 shadow-sm border border-border/50 max-w-2xl mx-auto">
            <div className="flex justify-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <GraduationCap className="w-6 h-6 text-primary" />
              </div>
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                <Heart className="w-6 h-6 text-accent" />
              </div>
              <div className="w-12 h-12 rounded-full bg-warm/10 flex items-center justify-center">
                <Users className="w-6 h-6 text-warm" />
              </div>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We dream of a day when every child in the Sundarbans has access to quality education, 
              regardless of their family's financial situation. A day when our students become 
              doctors, teachers, engineers, and leaders who return to uplift their community.
            </p>
            <p className="text-foreground font-medium">
              This isn't just a school — it's a movement to break the cycle of poverty 
              through the power of education.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding gradient-earth text-primary-foreground">
        <div className="container-narrow px-4 md:px-8 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-6">
            Help Us Build This Future
          </h2>
          <p className="text-primary-foreground/80 mb-8 max-w-xl mx-auto">
            Every contribution brings us closer to our vision. Be part of the journey 
            that transforms lives for generations to come.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary">
              <Link to="/contact">
                <Heart className="w-5 h-5 mr-2" />
                Support Our Vision
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
              <Link to="/needs">
                See Current Needs
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
