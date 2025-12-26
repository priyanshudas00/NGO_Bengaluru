import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { AnimatedCounter } from "@/components/ui/animated-counter";
import { Heart, Users, BookOpen, HandHeart, ArrowRight, Sparkles } from "lucide-react";

const FoundationHome = () => {
  const impactStats = [
    { icon: Heart, value: 7, suffix: "+", label: "Years of Service" },
    { icon: Users, value: 500, suffix: "+", label: "Lives Touched" },
    { icon: BookOpen, value: 100, suffix: "+", label: "Children Educated" },
    { icon: HandHeart, value: 50, suffix: "+", label: "Active Volunteers" },
  ];

  const programs = [
    {
      icon: "https://cdn.dribbble.com/userupload/19646652/file/original-b84277d6110f0722a534324ac2c977a8.gif",
      title: "Education",
      description: "Nurturing young minds through accessible learning",
      link: "/programs#education"
    },
    {
      icon: "https://cdn.prod.website-files.com/61b799c421943c76acd7a7cf/61b799c521943c0f70d7a8b4_31_GIFexport_1240px.gif",
      title: "Food Security",
      description: "Ensuring no one sleeps hungry in our communities",
      link: "/programs#food"
    },
    {
      icon: "https://media.lordicon.com/icons/wired/outline/1219-stethoscope.gif",
      title: "Health & Wellbeing",
      description: "Bringing healthcare closer to underserved areas",
      link: "/programs#health"
    },
    {
      icon: "https://cdn.dribbble.com/userupload/24406768/file/original-575dc6446f2d62af2b3536d3a298df23.gif",
      title: "Women Empowerment",
      description: "Building self-reliance through skill development",
      link: "/programs#women"
    },
  ];

  return (
    <div className="min-h-screen relative">
      {/* Fixed Background Image */}
      <div className="fixed inset-0 z-0">
        <img 
          src="https://64.media.tumblr.com/8a35b143cf857cf6ec52ea783c5f81c9/tumblr_on1hxqZOgl1r9i2iuo1_r2_500.gif" 
          alt="Community service"
          className="w-full h-full object-cover opacity-20"
        />
      </div>

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden z-10">
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 animate-float opacity-60">
          <Sparkles className="w-8 h-8 text-primary" />
        </div>
        <div className="absolute bottom-32 right-16 animate-float-delayed opacity-60">
          <Heart className="w-10 h-10 text-terracotta" />
        </div>
        
        <div className="container relative z-10 text-center px-4 py-20">
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4 animate-fade-in">
              <Heart className="w-4 h-4" />
              <span>Since 2018 • Reg. No. IV-00093/2018</span>
            </div>
            
            <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight animate-fade-in">
              Serving Humanity with{" "}
              <span className="text-primary">Compassion</span>,{" "}
              <span className="text-terracotta">Dignity</span> &{" "}
              <span className="text-primary">Purpose</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed animate-fade-in" style={{ animationDelay: "0.2s" }}>
              Asangoham Foundation is a people-driven initiative working to uplift underserved 
              communities through education, food security, health support, and empowerment.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4 animate-fade-in" style={{ animationDelay: "0.4s" }}>
              <Button asChild size="lg" className="rounded-full px-8 text-lg">
                <Link to="/help">
                  <Heart className="mr-2 h-5 w-5" />
                  Support Our Work
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-full px-8 text-lg">
                <Link to="/programs">
                  Explore Our Programs
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center pt-2">
            <div className="w-1 h-3 bg-primary rounded-full animate-pulse" />
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-20 bg-gray-50 relative z-10">
        <div className="container px-4 relative z-10">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Impact in Numbers
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Every number represents a life touched, a family supported, a community uplifted.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {impactStats.map((stat, index) => (
              <Card key={index} className="bg-card/80 backdrop-blur border-border/50 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6 text-center">
                  <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="w-7 h-7 text-primary" />
                  </div>
                  <div className="font-display text-3xl md:text-4xl font-bold text-primary mb-2">
                    <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                  </div>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-20 relative z-10">
        <div className="container px-4">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              What We Do
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our programs are designed to create lasting change in communities through sustainable, 
              ground-level initiatives.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {programs.map((program, index) => (
              <Link to={program.link} key={index}>
                <Card className="h-full bg-card hover:bg-accent/5 border-border/50 hover:border-primary/30 hover:shadow-lg transition-all duration-300 group cursor-pointer">
                  <CardContent className="p-6 text-center">
                    <div className="mb-4 group-hover:scale-110 transition-transform duration-300">
                      <img src={program.icon} alt={program.title} className="w-20 h-20 mx-auto rounded-lg object-cover" />
                    </div>
                    <h3 className="font-display text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {program.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {program.description}
                    </p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Sundarban Campus Highlight */}
      <section className="py-20 bg-gray-50 relative z-10">
        <div className="container px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 bg-terracotta/10 text-terracotta px-4 py-2 rounded-full text-sm font-medium">
                <BookOpen className="w-4 h-4" />
                Featured Initiative
              </div>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
                Sundarban Child Campus
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Started in 2020 with just 26 students, our education initiative in the Sundarbans 
                has grown to support over 100 children. With 9 dedicated community educators, 
                we're building futures one child at a time.
              </p>
              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="bg-card rounded-lg p-4 text-center border border-border/50">
                  <div className="font-display text-2xl font-bold text-primary">100+</div>
                  <div className="text-sm text-muted-foreground">Students</div>
                </div>
                <div className="bg-card rounded-lg p-4 text-center border border-border/50">
                  <div className="font-display text-2xl font-bold text-terracotta">9</div>
                  <div className="text-sm text-muted-foreground">Teachers</div>
                </div>
              </div>
              <Button asChild className="rounded-full">
                <Link to="/school">
                  Visit Sundarban Child Campus
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            
            <div className="relative">
              <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl border border-border/20">
                <img 
                  src="https://www.paybito.com/wp-content/uploads/2023/03/children-of-sundarbans.jpg"
                  alt="Children learning"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-card rounded-lg p-4 shadow-lg border border-border/50">
                <p className="text-sm font-medium text-foreground">Since 2020</p>
                <p className="text-xs text-muted-foreground">Transforming lives</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative z-10">
        <div className="container px-4">
          <Card className="max-w-4xl mx-auto bg-gradient-to-r from-primary/10 via-primary/5 to-terracotta/10 border-primary/20">
            <CardContent className="p-8 md:p-12 text-center">
              <div className="text-5xl mb-6">
                <img src="https://media3.giphy.com/media/v1.Y2lkPTZjMDliOTUyZGUwYXdqcTMxY29qaWx0amJqa3Btb2wyZ2F3ZDFscXFhNzBxZDRmbyZlcD12MV9zdGlja2Vyc19zZWFyY2gmY3Q9cw/2vDJLn6LzoSSIJe3Xj/giphy.gif" alt="Praying hands" className="w-20 h-20 mx-auto rounded-lg" />
              </div>
              <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
                Join Our Mission
              </h2>
              <p className="text-muted-foreground max-w-xl mx-auto mb-6">
                Your support directly touches lives on the ground. Whether through donations, 
                volunteering, or partnerships — every contribution creates ripples of change.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="rounded-full">
                  <Link to="/help">
                    <Heart className="mr-2 h-5 w-5" />
                    Donate Now
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="rounded-full">
                  <Link to="/contact">
                    Contact Us
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default FoundationHome;
