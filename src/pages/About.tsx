import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  Heart, 
  Users, 
  BookOpen, 
  Target, 
  Calendar,
  ArrowRight,
  CheckCircle2,
  Sparkles
} from "lucide-react";

const timeline = [
  {
    year: "2018",
    title: "Asangoham Foundation Registered",
    description: "Our parent organization was officially registered with the Government of West Bengal (Reg. No. IV-00093/2018)."
  },
  {
    year: "2020",
    title: "Sundarban Child Campus Founded",
    description: "Amidst the pandemic, we started with 26 students and a dream to educate underprivileged children of the Sundarbans."
  },
  {
    year: "2021",
    title: "Growing Our Family",
    description: "Word spread through the community, and more families trusted us with their children's education."
  },
  {
    year: "2023",
    title: "Expanded Teaching Team",
    description: "Grew to 9 dedicated community educators, each passionate about nurturing young minds."
  },
  {
    year: "2025",
    title: "100+ Students Strong",
    description: "Today, we proudly educate over 100 students, with plans for further expansion."
  },
];

const values = [
  {
    icon: Heart,
    title: "Compassion First",
    description: "Every child is treated with love and care, regardless of their background."
  },
  {
    icon: BookOpen,
    title: "Holistic Education",
    description: "We focus on academic, moral, and physical development of every child."
  },
  {
    icon: Users,
    title: "Community Driven",
    description: "Built by the community, for the community — with complete transparency."
  },
  {
    icon: Target,
    title: "Accessible to All",
    description: "Minimal fees ensure no child is denied education due to financial constraints."
  },
];

export default function About() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="section-padding gradient-sage">
        <div className="container-wide px-4 md:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4" />
              <span>Our Story</span>
            </div>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground leading-tight mb-6">
              From a Dream to a{" "}
              <span className="text-primary">Movement</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Sundarban Child Campus is more than a school — it's a beacon of hope for 
              underprivileged children in one of India's most challenging terrains.
            </p>
          </div>
        </div>
      </section>

      {/* Our Beginning */}
      <section className="section-padding bg-background">
        <div className="container-wide px-4 md:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-6">
                Why We Started
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                The Sundarban delta, home to the majestic Royal Bengal Tiger, is also home to 
                thousands of families living in extreme poverty. Many children here never see 
                the inside of a classroom — not because they don't want to learn, but because 
                education remains a distant dream.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                In 2020, when the world was grappling with the pandemic, a group of passionate 
                individuals under the <strong>Asangoham Foundation</strong> decided to act. 
                With just 26 students and borrowed spaces, Sundarban Child Campus was born.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Today, we've grown to over 100 students, 9 dedicated teachers, and a community 
                of supporters who believe that every child deserves a chance to dream.
              </p>
            </div>
            
            <div className="bg-sage rounded-2xl p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center">
                  <Heart className="w-8 h-8 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-serif text-2xl font-semibold text-foreground">Asangoham Foundation</h3>
                  <p className="text-sm text-muted-foreground">Our Parent Organization</p>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5" />
                  <p className="text-sm text-foreground">
                    <strong>Registration:</strong> IV-00093/2018, Govt. of West Bengal
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5" />
                  <p className="text-sm text-foreground">
                    <strong>Mission:</strong> Social welfare and community development
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5" />
                  <p className="text-sm text-foreground">
                    <strong>Focus:</strong> Education, healthcare, and rural development
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding bg-secondary/30">
        <div className="container-wide px-4 md:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-4">
              Our Journey
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Every milestone represents countless hours of dedication and the unwavering support of our community.
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            {timeline.map((item, index) => (
              <div key={item.year} className="relative pl-8 pb-10 last:pb-0">
                {/* Line */}
                {index !== timeline.length - 1 && (
                  <div className="absolute left-3 top-3 bottom-0 w-0.5 bg-primary/20" />
                )}
                {/* Dot */}
                <div className="absolute left-0 top-0 w-6 h-6 rounded-full bg-primary flex items-center justify-center">
                  <Calendar className="w-3 h-3 text-primary-foreground" />
                </div>
                {/* Content */}
                <div className="bg-card rounded-xl p-6 shadow-sm border border-border/50 ml-4">
                  <span className="text-primary font-semibold text-sm">{item.year}</span>
                  <h3 className="font-serif text-xl font-semibold text-foreground mt-1 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="section-padding bg-background">
        <div className="container-wide px-4 md:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-4">
              What We Believe In
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Our values guide everything we do — from how we teach to how we treat every member of our community.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => (
              <div key={value.title} className="bg-card rounded-xl p-6 shadow-sm border border-border/50 text-center">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-serif text-lg font-semibold text-foreground mb-2">
                  {value.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Transparency */}
      <section className="section-padding bg-cream">
        <div className="container-narrow px-4 md:px-8 text-center">
          <h2 className="font-serif text-2xl md:text-3xl font-semibold text-foreground mb-6">
            A Note on Transparency
          </h2>
          <div className="bg-background rounded-xl p-6 md:p-8 shadow-sm border border-border/50 text-left max-w-2xl mx-auto">
            <p className="text-muted-foreground leading-relaxed mb-4">
              We believe in complete honesty with our supporters. While Sundarban Child Campus 
              operates as a community initiative and is not separately registered as an educational 
              institution, it functions under the registered umbrella of <strong>Asangoham Foundation</strong>.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              This means:
            </p>
            <ul className="space-y-2 mb-4">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-muted-foreground text-sm">All donations are processed through Asangoham Foundation</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-muted-foreground text-sm">We maintain transparent financial records</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-muted-foreground text-sm">Every rupee goes directly to the children's welfare</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-muted-foreground text-sm">We're working towards formal registration as we grow</span>
              </li>
            </ul>
            <p className="text-sm text-muted-foreground">
              Questions? We're always happy to discuss. <Link to="/contact" className="text-primary hover:underline">Contact us anytime</Link>.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding gradient-earth text-primary-foreground">
        <div className="container-narrow px-4 md:px-8 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-6">
            Be Part of Our Story
          </h2>
          <p className="text-primary-foreground/80 mb-8 max-w-xl mx-auto">
            Every supporter becomes a part of our extended family. Join us in writing the next chapter of hope.
          </p>
          <Button asChild size="lg" variant="secondary">
            <Link to="/contact">
              Support Our Mission
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
