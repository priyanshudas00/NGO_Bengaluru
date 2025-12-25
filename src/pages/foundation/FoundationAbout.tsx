import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, Target, Eye, Users, Calendar, MapPin, Award, ArrowRight } from "lucide-react";

const FoundationAbout = () => {
  const values = [
    {
      icon: Heart,
      title: "Compassion",
      description: "We serve with empathy, understanding the struggles of those we help."
    },
    {
      icon: Users,
      title: "Community",
      description: "We believe in the power of collective action and local participation."
    },
    {
      icon: Award,
      title: "Transparency",
      description: "We operate with complete honesty about our work, impact, and finances."
    },
    {
      icon: Target,
      title: "Sustainability",
      description: "We create programs that empower communities to become self-reliant."
    }
  ];

  const milestones = [
    { year: "2018", event: "Foundation established with Reg. No. IV-00093/2018", icon: "🌱" },
    { year: "2019", event: "First community food distribution program launched", icon: "🍲" },
    { year: "2020", event: "Sundarban Child Campus started with 26 students", icon: "📚" },
    { year: "2021", event: "Women empowerment initiative began", icon: "👩‍🦱" },
    { year: "2022", event: "Health awareness camps initiated", icon: "🩺" },
    { year: "2023", event: "Reached 75 students at Sundarban Campus", icon: "🎓" },
    { year: "2024", event: "Expanded volunteer network across regions", icon: "🤝" },
    { year: "2025", event: "100+ students now studying at Sundarban Campus", icon: "🌟" },
  ];

  return (
    <div className="min-h-screen relative">
      {/* Fixed Background Image */}
      <div className="fixed inset-0 z-0">
        <img 
          src="https://thewellnessproject.me/wp-content/uploads/2017/07/volunteer-2055010_960_720.png" 
          alt="Community helping hands"
          className="w-full h-full object-cover opacity-20"
        />
      </div>
      <section className="relative py-20 overflow-hidden z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
        <div className="container px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Heart className="w-4 h-4" />
              Est. 2018
            </div>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
              About Asangoham Foundation
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              We are a people-driven, non-profit organization founded by individuals passionate 
              about creating meaningful social change. Our work is rooted in the belief that 
              every person deserves access to education, food, dignity, and opportunity.
            </p>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-16 bg-secondary/30">
        <div className="container px-4">
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className="bg-amber-50 border-primary/20 transition-shadow">
              <CardContent className="p-8">
                <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                  <Eye className="w-7 h-7 text-primary" />
                </div>
                <h2 className="font-display text-2xl font-bold text-foreground mb-4">Our Vision</h2>
                <p className="text-muted-foreground leading-relaxed">
                  A society where every individual — regardless of their background — has access 
                  to quality education, nutritious food, healthcare, and the opportunity to live 
                  with dignity and purpose.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-amber-50 border-terracotta/20 transition-shadow">
              <CardContent className="p-8">
                <div className="w-14 h-14 bg-terracotta/10 rounded-full flex items-center justify-center mb-6">
                  <Target className="w-7 h-7 text-terracotta" />
                </div>
                <h2 className="font-display text-2xl font-bold text-foreground mb-4">Our Mission</h2>
                <p className="text-muted-foreground leading-relaxed">
                  To serve marginalized communities through sustainable, ground-level initiatives. 
                  To empower children, women, and families to become self-reliant and contribute 
                  positively to society.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-20 relative z-10">
        <div className="container px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden">
                <img 
                  src="https://t4.ftcdn.net/jpg/06/31/96/85/360_F_631968530_RSxhMGgnm6Zp0Y0yFG1OmBmiNoAgmi25.jpg"
                  alt="Community work"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-card rounded-lg p-4 border border-border/50">
                <div className="flex items-center gap-3">
                  <Calendar className="w-5 h-5 text-primary" />
                  <div>
                    <p className="text-sm font-medium text-foreground">Founded</p>
                    <p className="text-xs text-muted-foreground">2018</p>
                  </div>
                </div>
              </div>
              <div className="absolute -top-6 -right-6 bg-card rounded-lg p-4 border border-border/50">
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-terracotta" />
                  <div>
                    <p className="text-sm font-medium text-foreground">Operating</p>
                    <p className="text-xs text-muted-foreground">Multiple Regions</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <h2 className="font-display text-3xl font-bold text-foreground">
                Who We Are
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Asangoham Foundation was established in 2018 by a group of compassionate individuals 
                  who believed that real change happens at the ground level. We are not a corporate 
                  organization — we are a community of volunteers, educators, and social workers 
                  dedicated to serving humanity.
                </p>
                <p>
                  Our approach is simple: work directly with communities, understand their needs, 
                  and create sustainable solutions together. We believe in equality, dignity, and 
                  the inherent potential of every human being.
                </p>
                <p>
                  From educating children in the remote Sundarbans to distributing food during 
                  crises, from empowering women through skill development to raising health awareness 
                  — every initiative is driven by our core belief that service to others is the 
                  highest calling.
                </p>
              </div>
              
              <div className="bg-secondary/50 rounded-lg p-4 border border-border/50">
                <p className="text-sm text-muted-foreground">
                  <span className="font-medium text-foreground">Registration:</span> IV-00093/2018 
                  <br />
                  <span className="text-xs">Registered under the applicable laws of India</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-gradient-to-br from-primary/5 via-secondary/20 to-accent/5 relative z-10">
        <div className="container px-4">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Core Values
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              These principles guide every decision we make and every action we take.
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {values.map((value, index) => (
              <Card key={index} className="bg-amber-50/80 backdrop-blur transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6 text-center">
                  <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                    {value.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Journey Timeline */}
      <section className="py-20 relative z-10">
        <div className="container px-4">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Journey
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              From a small beginning to a growing family of changemakers.
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-terracotta to-primary/30" />
              
              {milestones.map((milestone, index) => (
                <div key={index} className="relative pl-20 pb-10 last:pb-0">
                  {/* Timeline Dot */}
                  <div className="absolute left-5 w-6 h-6 bg-amber-50 border-2 border-primary rounded-full flex items-center justify-center text-sm">
                    {milestone.icon}
                  </div>
                  
                  <Card className="bg-amber-50 transition-shadow">
                    <CardContent className="p-4">
                      <div className="flex items-center gap-3">
                        <span className="text-sm font-bold text-primary bg-primary/10 px-3 py-1 rounded-full">
                          {milestone.year}
                        </span>
                        <p className="text-foreground">{milestone.event}</p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-secondary/30 relative z-10">
        <div className="container px-4">
          <Card className="max-w-4xl mx-auto bg-amber-50 border-primary/20">
            <CardContent className="p-8 md:p-12 text-center">
               <div className="text-5xl mb-6">
                <img src="https://media3.giphy.com/media/v1.Y2lkPTZjMDliOTUyZGUwYXdqcTMxY29qaWx0amJqa3Btb2wyZ2F3ZDFscXFhNzBxZDRmbyZlcD12MV9zdGlja2Vyc19zZWFyY2gmY3Q9cw/2vDJLn6LzoSSIJe3Xj/giphy.gif" alt="Praying hands" className="w-20 h-20 mx-auto rounded-lg" />
              </div>
              <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
                Join Our Mission
              </h2>
              <p className="text-muted-foreground max-w-xl mx-auto mb-8">
                Be a part of something meaningful. Together, we can create lasting change 
                in the lives of those who need it most.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="rounded-full">
                  <Link to="/help">
                    <Heart className="mr-2 h-5 w-5" />
                    Support Us
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="rounded-full">
                  <Link to="/programs">
                    Our Programs
                    <ArrowRight className="ml-2 h-4 w-4" />
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

export default FoundationAbout;
