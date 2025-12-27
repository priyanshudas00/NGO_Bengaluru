import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  Building2, 
  Droplets, 
  UtensilsCrossed, 
  Shirt, 
  BookOpen,
  Heart,
  HandHeart,
  Users,
  ArrowRight,
  Sparkles,
  Phone
} from "lucide-react";

const needs = [
  {
    icon: Building2,
    title: "School Building",
    description: "Currently operating in temporary spaces. We dream of a permanent building that can accommodate our growing family and protect children from extreme weather.",
    urgency: "high",
    impact: "Would provide stable, safe learning environment for 100+ children"
  },
  {
    icon: Droplets,
    title: "Clean Drinking Water",
    description: "Access to clean water remains a challenge in the Sundarbans. A proper water filtration system would ensure our children stay healthy and hydrated.",
    urgency: "high",
    impact: "Essential for health and daily operations"
  },
  {
    icon: UtensilsCrossed,
    title: "Daily Meals",
    description: "Many of our students come from families that struggle to provide regular meals. Mid-day meals ensure children can focus on learning, not hunger.",
    urgency: "high",
    impact: "Nourishes 100+ students daily, improves attendance and concentration"
  },
  {
    icon: Shirt,
    title: "Clothes & Uniforms",
    description: "Simple school uniforms give children a sense of belonging and equality. Many also need basic clothing for daily wear.",
    urgency: "medium",
    impact: "Promotes dignity and equality among students"
  },
  {
    icon: BookOpen,
    title: "Stationery & Books",
    description: "Books, notebooks, pens, and basic learning materials are essential. Currently, we rely on donations to provide these basics.",
    urgency: "medium",
    impact: "Enables effective learning for every student"
  },
];

const waysToHelp = [
  {
    icon: Heart,
    title: "Sponsor a Child",
    description: "Cover a child's monthly expenses including education, meals, and supplies.",
    cta: "From ₹500/month"
  },
  {
    icon: HandHeart,
    title: "Donate Supplies",
    description: "Send books, stationery, clothes, or other essentials directly to our campus.",
    cta: "In-kind donations welcome"
  },
  {
    icon: Users,
    title: "Corporate Partnership",
    description: "CSR initiatives, employee volunteering, or bulk donations for lasting impact.",
    cta: "Partner with us"
  },
];

export default function Needs() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="section-padding gradient-sage">
        <div className="container-wide px-4 md:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4" />
              <span>How You Can Help</span>
            </div>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground leading-tight mb-6">
              What We Need{" "}
              <span className="text-accent">Right Now</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Every contribution, no matter how small, creates ripples of change in the lives 
              of our children. Here's how your generosity can make a direct impact.
            </p>
          </div>
        </div>
      </section>

      {/* Our Needs */}
      <section className="section-padding bg-background">
        <div className="container-wide px-4 md:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-4">
              Our Current Needs
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              These are the areas where we need the most support to continue our mission.
            </p>
          </div>
          
          <div className="space-y-6 max-w-4xl mx-auto">
            {needs.map((need) => (
              <div 
                key={need.title} 
                className="bg-card rounded-2xl p-6 md:p-8 shadow-sm border border-border/50 hover:shadow-md transition-shadow"
              >
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="flex-shrink-0">
                    <div className={`w-16 h-16 rounded-2xl flex items-center justify-center ${
                      need.urgency === "high" ? "bg-accent/10" : "bg-primary/10"
                    }`}>
                      <need.icon className={`w-8 h-8 ${
                        need.urgency === "high" ? "text-accent" : "text-primary"
                      }`} />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="font-serif text-xl font-semibold text-foreground">
                        {need.title}
                      </h3>
                      {need.urgency === "high" && (
                        <span className="px-2 py-1 text-xs font-medium rounded-full bg-accent/10 text-accent">
                          Urgent Need
                        </span>
                      )}
                    </div>
                    <p className="text-muted-foreground leading-relaxed mb-3">
                      {need.description}
                    </p>
                    <p className="text-sm text-primary font-medium">
                      ✨ Impact: {need.impact}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ways to Help */}
      <section className="section-padding bg-secondary/30">
        <div className="container-wide px-4 md:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-4">
              Ways to Contribute
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Choose the way that works best for you. Every form of support is valuable to us.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {waysToHelp.map((way) => (
              <div key={way.title} className="bg-card rounded-xl p-6 shadow-sm border border-border/50 text-center hover:shadow-md transition-shadow">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <way.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-serif text-lg font-semibold text-foreground mb-2">
                  {way.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {way.description}
                </p>
                <p className="text-primary font-medium text-sm">{way.cta}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Appeal Section */}
      <section className="section-padding bg-cream">
        <div className="container-narrow px-4 md:px-8 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="font-serif text-2xl md:text-3xl font-semibold text-foreground mb-6">
              A Heartfelt Request
            </h2>
            <div className="text-left bg-background rounded-xl p-6 md:p-8 shadow-sm border border-border/50">
              <p className="text-muted-foreground leading-relaxed mb-4">
                Dear Friend,
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                When you look at our needs, you're not just seeing a list — you're seeing the 
                dreams of 100+ children who wake up every day hoping for a better tomorrow.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We don't have a fancy building, but we have dedicated teachers. We don't have 
                abundant resources, but we have abundant hope. What we need is your support 
                to bridge the gap between our dreams and reality.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Every rupee you contribute, every book you donate, every meal you sponsor — 
                it all adds up to create a future where these children can stand tall and 
                contribute to society.
              </p>
              <p className="text-foreground font-medium">
                With gratitude and hope,<br />
                The Sundarban Child Campus Family
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding gradient-earth text-primary-foreground">
        <div className="container-narrow px-4 md:px-8 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-6">
            Ready to Make a Difference?
          </h2>
          <p className="text-primary-foreground/80 mb-8 max-w-xl mx-auto">
            Reach out to us today. We'll guide you on how your contribution can have the maximum impact.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary">
              <Link to="/contact">
                <Heart className="w-5 h-5 mr-2" />
                Contact Us to Donate
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
              <a href="https://wa.me/919620555694" target="_blank" rel="noopener noreferrer">
                <Phone className="w-5 h-5 mr-2" />
                WhatsApp Us
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
