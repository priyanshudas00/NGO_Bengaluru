import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, Utensils, HeartPulse, Users, ArrowRight, CheckCircle } from "lucide-react";

const Programs = () => {
  const programs = [
    {
      id: "education",
      icon: BookOpen,
      emoji: "📚",
      title: "Education Initiatives",
      subtitle: "Nurturing minds, building futures",
      description: "We believe education is the most powerful tool for transformation. Our education programs provide access to quality learning for children who would otherwise be left behind.",
      image: "https://cdn.dribbble.com/userupload/24820770/file/original-b5e35fab6500eb6956e9844a29046b4d.gif",
      features: [
        "Free and low-cost education for underprivileged children",
        "Trained community educators from local areas",
        "Learning materials and stationery support",
        "After-school tutoring and mentorship",
        "Sundarban Child Campus - our flagship school"
      ],
      highlight: {
        text: "100+ children",
        subtext: "currently studying at our Sundarban Campus"
      },
      cta: { text: "Visit Sundarban Campus", link: "/school" }
    },
    {
      id: "food",
      icon: Utensils,
      emoji: "🍲",
      title: "Food & Nutrition",
      subtitle: "Ensuring no one sleeps hungry",
      description: "Hunger should never be a barrier to dreams. Our food security programs provide nutritious meals to those in need, especially during crisis situations and festivals.",
      image: "https://miro.medium.com/1*8enutq41infBgZG9iIGnBw.gif",
      features: [
        "Regular community food distribution",
        "Emergency food relief during disasters",
        "Mid-day meals for school children",
        "Festival food sharing events",
        "Support for elderly and disabled individuals"
      ],
      highlight: {
        text: "Regular",
        subtext: "food distribution drives in underserved areas"
      }
    },
    {
      id: "health",
      icon: HeartPulse,
      emoji: "🩺",
      title: "Health & Wellbeing",
      subtitle: "Healthcare for all",
      description: "Good health is the foundation of a productive life. We bring basic healthcare awareness and support to communities that lack access to medical facilities.",
      image: "https://cdn.pixabay.com/animation/2025/01/31/15/41/15-41-45-282_512.gif",
      features: [
        "Health awareness camps and workshops",
        "Basic medical check-up drives",
        "Hygiene and sanitation education",
        "First aid training for communities",
        "Connecting patients to healthcare facilities"
      ],
      highlight: {
        text: "Multiple",
        subtext: "health camps organized annually"
      }
    },
    {
      id: "women",
      icon: Users,
      emoji: "👩‍🦱",
      title: "Women Empowerment",
      subtitle: "Building self-reliance",
      description: "Empowered women build empowered communities. Our programs focus on skill development, financial literacy, and creating opportunities for women to become self-reliant.",
      image: "https://media.giphy.com/media/3o7btNhMBytxAM6YBa/giphy.gif",
      features: [
        "Vocational skill training programs",
        "Financial literacy workshops",
        "Self-help group formation",
        "Micro-enterprise support",
        "Awareness on women's rights and safety"
      ],
      highlight: {
        text: "Growing",
        subtext: "network of empowered women in rural areas"
      }
    }
  ];

  return (
    <div className="min-h-screen py-12">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
        <div className="container px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
              Our Programs
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              Each program is designed with one purpose: to create lasting, sustainable change 
              in the lives of those we serve. We work directly with communities, 
              understanding their needs and building solutions together.
            </p>
          </div>
        </div>
      </section>

      {/* Programs */}
      <section className="py-8">
        <div className="container px-4">
          <div className="space-y-20 max-w-6xl mx-auto">
            {programs.map((program, index) => (
              <div 
                key={program.id} 
                id={program.id}
                className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
              >
                <div className={`space-y-6 ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
                    <span className="text-xl">{program.emoji}</span>
                    <span>{program.subtitle}</span>
                  </div>
                  
                  <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
                    {program.title}
                  </h2>
                  
                  <p className="text-muted-foreground leading-relaxed text-lg">
                    {program.description}
                  </p>
                  
                  <ul className="space-y-3">
                    {program.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Card className="bg-primary/5 border-primary/20">
                    <CardContent className="p-4 flex items-center gap-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                        <program.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <p className="font-display text-xl font-bold text-primary">{program.highlight.text}</p>
                        <p className="text-sm text-muted-foreground">{program.highlight.subtext}</p>
                      </div>
                    </CardContent>
                  </Card>
                  
                  {program.cta && (
                    <Button asChild className="rounded-full">
                      <Link to={program.cta.link}>
                        {program.cta.text}
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  )}
                </div>
                
                <div className={`relative ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-xl border border-border/20">
                    <img 
                      src={program.image}
                      alt={program.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  {/* Decorative elements */}
                  <div className={`absolute -z-10 w-full h-full rounded-2xl bg-gradient-to-br from-primary/20 to-terracotta/20 ${index % 2 === 0 ? '-bottom-4 -right-4' : '-bottom-4 -left-4'}`} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container px-4">
          <Card className="max-w-4xl mx-auto bg-card border-primary/20">
            <CardContent className="p-8 md:p-12 text-center">
              <div className="text-5xl mb-6">🤝</div>
              <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
                Want to Support Our Programs?
              </h2>
              <p className="text-muted-foreground max-w-xl mx-auto mb-8">
                Whether you want to donate, volunteer, or partner with us — 
                your support directly impacts lives on the ground.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="rounded-full">
                  <Link to="/help">
                    Support Now
                    <ArrowRight className="ml-2 h-4 w-4" />
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

export default Programs;
