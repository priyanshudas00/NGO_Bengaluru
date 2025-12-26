import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { AnimatedCounter } from "@/components/ui/animated-counter";
import { 
  Heart, 
  Users, 
  GraduationCap, 
  Building2, 
  Droplets, 
  UtensilsCrossed, 
  Shirt, 
  BookOpen,
  ArrowRight,
  Sparkles,
  Target,
  HandHeart
} from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center gradient-sage overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-10 w-64 h-64 rounded-full bg-primary blur-3xl" />
          <div className="absolute top-32 left-1/2 transform -translate-x-1/2 w-80 h-80 rounded-full bg-accent blur-3xl" />
          <div className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-primary blur-3xl" />
        </div>
        
        <div className="container-wide px-4 md:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-8 animate-fade-in">
              <Sparkles className="w-4 h-4" />
              <span>An Asangoham Foundation Initiative</span>
            </div>
            
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold text-foreground leading-tight mb-6 animate-fade-in" style={{ animationDelay: "0.1s" }}>
              Educating Children of the Sundarbans,{" "}
              <span className="text-primary">One Life at a Time</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              Since 2020, we've been nurturing young minds in the remote Sundarban area, 
              providing quality education to underprivileged children with love, care, and community support.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: "0.3s" }}>
              <Button asChild size="lg" className="text-base px-8">
                <Link to="/contact">
                  <Heart className="w-5 h-5 mr-2" />
                  Support a Child
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-base px-8">
                <Link to="/about">
                  Learn Our Story
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Decorative bottom wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="hsl(var(--background))"/>
          </svg>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="pt-0 pb-16 md:pb-24 px-4 md:px-8 bg-background">
        <div className="container-wide px-4 md:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-4">
              Our Growing Family
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              From 26 students in 2020 to a thriving community today — every number represents a dream nurtured.
            </p>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            <div className="bg-card rounded-2xl p-6 md:p-8 text-center shadow-sm border border-border/50">
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Users className="w-7 h-7 text-primary" />
              </div>
              <div className="font-serif text-4xl md:text-5xl font-bold text-primary mb-2">
                <AnimatedCounter end={100} suffix="+" />
              </div>
              <p className="text-muted-foreground text-sm">Students in 2025</p>
            </div>
            
            <div className="bg-card rounded-2xl p-6 md:p-8 text-center shadow-sm border border-border/50">
              <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                <GraduationCap className="w-7 h-7 text-accent" />
              </div>
              <div className="font-serif text-4xl md:text-5xl font-bold text-accent mb-2">
                <AnimatedCounter end={9} />
              </div>
              <p className="text-muted-foreground text-sm">Dedicated Teachers</p>
            </div>
            
            <div className="bg-card rounded-2xl p-6 md:p-8 text-center shadow-sm border border-border/50">
              <div className="w-14 h-14 rounded-full bg-warm/10 flex items-center justify-center mx-auto mb-4">
                <Target className="w-7 h-7 text-warm" />
              </div>
              <div className="font-serif text-4xl md:text-5xl font-bold text-warm mb-2">
                <AnimatedCounter end={5} />
              </div>
              <p className="text-muted-foreground text-sm">Years of Service</p>
            </div>
            
            <div className="bg-card rounded-2xl p-6 md:p-8 text-center shadow-sm border border-border/50">
              <div className="w-14 h-14 rounded-full bg-earth/10 flex items-center justify-center mx-auto mb-4">
                <Heart className="w-7 h-7 text-earth" />
              </div>
              <div className="font-serif text-4xl md:text-5xl font-bold text-earth mb-2">
                ₹<AnimatedCounter end={175} />
              </div>
              <p className="text-muted-foreground text-sm">Monthly Fee Only</p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Need - Preview */}
      <section className="section-padding bg-secondary/30">
        <div className="container-wide px-4 md:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-4">
              What We Need Right Now
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Your support can transform lives. Here's how you can help our children thrive.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6 mb-10">
            {[
              { icon: Building2, label: "School Building", color: "primary" },
              { icon: Droplets, label: "Clean Water", color: "accent" },
              { icon: UtensilsCrossed, label: "Daily Food", color: "warm" },
              { icon: Shirt, label: "Clothes", color: "earth" },
              { icon: BookOpen, label: "Stationery", color: "primary" },
            ].map((item, index) => (
              <div 
                key={item.label}
                className="bg-card rounded-xl p-5 text-center shadow-sm border border-border/50 hover:shadow-md transition-shadow animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`w-12 h-12 rounded-full bg-${item.color}/10 flex items-center justify-center mx-auto mb-3`}>
                  <item.icon className={`w-6 h-6 text-${item.color}`} />
                </div>
                <p className="text-sm font-medium text-foreground">{item.label}</p>
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <Button asChild size="lg">
              <Link to="/needs">
                <HandHeart className="w-5 h-5 mr-2" />
                See How You Can Help
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Our Story Preview */}
      <section className="section-padding bg-background">
        <div className="container-wide px-4 md:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-primary font-medium text-sm uppercase tracking-wider">Our Story</span>
              <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mt-2 mb-6">
                From 26 Dreams to 100 Futures
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                In 2020, amidst the challenges of the pandemic, a small group of dedicated individuals 
                came together with a simple yet powerful vision — to bring quality education to the 
                children of the remote Sundarban area.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Starting with just 26 students and a handful of community educators, we've grown into 
                a family of over 100 students. Every child here carries a story of hope, resilience, 
                and the transformative power of education.
              </p>
              <Button asChild variant="outline">
                <Link to="/about">
                  Read Our Full Story
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </div>
            
            <div className="relative">
              <div className="bg-sage rounded-2xl p-8 md:p-12">
                <div className="grid grid-cols-2 gap-6">
                  <div className="bg-background rounded-xl p-6 shadow-sm">
                    <p className="text-sm text-muted-foreground mb-1">Started with</p>
                    <p className="font-serif text-3xl font-bold text-primary">26</p>
                    <p className="text-sm text-muted-foreground">students in 2020</p>
                  </div>
                  <div className="bg-background rounded-xl p-6 shadow-sm">
                    <p className="text-sm text-muted-foreground mb-1">Now educating</p>
                    <p className="font-serif text-3xl font-bold text-accent">100+</p>
                    <p className="text-sm text-muted-foreground">students in 2025</p>
                  </div>
                </div>
                <div className="mt-6 text-center">
                  <p className="text-sm text-sage-foreground/70">
                    A 4× growth in 5 years, powered by community love
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Transparency Section */}
      <section className="section-padding bg-cream">
        <div className="container-narrow px-4 md:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            <Heart className="w-4 h-4" />
            <span>Transparency & Trust</span>
          </div>
          <h2 className="font-serif text-2xl md:text-3xl font-semibold text-foreground mb-6">
            We Believe in Honesty
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-8 max-w-2xl mx-auto">
            Sundarban Child Campus operates under the umbrella of{" "}
            <strong>Asangoham Foundation</strong> (Reg. No. IV-00093/2018, Govt. of West Bengal). 
            While the school itself is a community initiative and not separately registered, 
            every rupee donated goes directly towards the children's education, food, and welfare. 
            We maintain complete transparency in our operations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild variant="outline">
              <Link to="/about">Learn About Our Foundation</Link>
            </Button>
            <Button asChild>
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding gradient-earth text-primary-foreground">
        <div className="container-narrow px-4 md:px-8 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-6">
            Join Us in Shaping Their Future
          </h2>
          <p className="text-primary-foreground/80 mb-8 max-w-xl mx-auto">
            Every contribution, big or small, creates ripples of change in the lives of our children. 
            Be a part of their journey towards a brighter tomorrow.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary" className="text-base">
              <Link to="/contact">
                <Heart className="w-5 h-5 mr-2" />
                Support a Child
              </Link>
            </Button>
            <Button asChild size="lg" className="text-base bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg hover:shadow-xl transition-all duration-300 animate-pulse">
              <Link to="/needs">
                <HandHeart className="w-5 h-5 mr-2" />
                Donate Supplies
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
