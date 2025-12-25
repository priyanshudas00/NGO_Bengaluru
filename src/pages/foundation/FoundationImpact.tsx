import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { AnimatedCounter } from "@/components/ui/animated-counter";
import { Heart, Users, BookOpen, Home, Calendar, MapPin, Utensils, Award, ArrowRight } from "lucide-react";

const FoundationImpact = () => {
  const impactStats = [
    { icon: Calendar, value: 7, suffix: "+", label: "Years of Service", color: "primary" },
    { icon: BookOpen, value: 100, suffix: "+", label: "Children Educated", color: "terracotta" },
    { icon: Users, value: 500, suffix: "+", label: "Lives Touched", color: "primary" },
    { icon: Heart, value: 50, suffix: "+", label: "Active Volunteers", color: "terracotta" },
    { icon: MapPin, value: 10, suffix: "+", label: "Communities Reached", color: "primary" },
    { icon: Utensils, value: 1000, suffix: "+", label: "Meals Served", color: "terracotta" },
    { icon: Home, value: 9, suffix: "", label: "Teachers Supported", color: "primary" },
    { icon: Award, value: 20, suffix: "+", label: "Women Empowered", color: "terracotta" },
  ];

  const stories = [
    {
      quote: "When Asangoham Foundation started the school in our village, we never thought our children would get a chance to study. Today, my daughter dreams of becoming a teacher.",
      author: "A Parent from Sundarban",
      image: "https://media.giphy.com/media/3oKIPa2TdahY8LAAxy/giphy.gif"
    },
    {
      quote: "The food distribution during the floods saved our family. In our darkest hour, the Foundation was there with us.",
      author: "Community Member",
      image: "https://media.giphy.com/media/fxI1G5PNC5esyNlIUs/giphy.gif"
    },
    {
      quote: "The skill training program gave me confidence and a way to earn. I am now teaching other women in my village.",
      author: "Women's Empowerment Beneficiary",
      image: "https://media.giphy.com/media/3o7btNhMBytxAM6YBa/giphy.gif"
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
              Our Impact
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              Every number represents a life changed, a family supported, a community uplifted. 
              Here's a glimpse of the difference we've made together.
            </p>
          </div>
        </div>
      </section>

      {/* Impact Stats Grid */}
      <section className="py-16 bg-secondary/30">
        <div className="container px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {impactStats.map((stat, index) => (
              <Card 
                key={index} 
                className="bg-card/80 backdrop-blur border-border/50 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group"
              >
                <CardContent className="p-6 text-center">
                  <div className={`w-14 h-14 ${stat.color === 'terracotta' ? 'bg-terracotta/10' : 'bg-primary/10'} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                    <stat.icon className={`w-7 h-7 ${stat.color === 'terracotta' ? 'text-terracotta' : 'text-primary'}`} />
                  </div>
                  <div className={`font-display text-3xl md:text-4xl font-bold ${stat.color === 'terracotta' ? 'text-terracotta' : 'text-primary'} mb-2`}>
                    <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                  </div>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Visual Impact Section */}
      <section className="py-20">
        <div className="container px-4">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Impact in Action
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Real moments from our work on the ground.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <div className="md:col-span-2 aspect-video rounded-2xl overflow-hidden shadow-xl">
              <img 
                src="https://media.giphy.com/media/l0HlNQ03J5JxX6lva/giphy.gif"
                alt="Children learning"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="aspect-square md:aspect-auto rounded-2xl overflow-hidden shadow-xl">
              <img 
                src="https://media.giphy.com/media/3oriO0OEd9QIDdllqo/giphy.gif"
                alt="Community service"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="aspect-square md:aspect-auto rounded-2xl overflow-hidden shadow-xl">
              <img 
                src="https://media.giphy.com/media/xT5LMHxhOfscxPfIfm/giphy.gif"
                alt="Food distribution"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="md:col-span-2 aspect-video rounded-2xl overflow-hidden shadow-xl">
              <img 
                src="https://media.giphy.com/media/3o7btNa0RUYa5E7iiQ/giphy.gif"
                alt="Volunteer work"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stories Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 via-secondary/20 to-accent/5">
        <div className="container px-4">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Voices from the Ground
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Stories of hope and transformation from the communities we serve.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {stories.map((story, index) => (
              <Card key={index} className="bg-card/80 backdrop-blur hover:shadow-lg transition-all duration-300 overflow-hidden group">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={story.image}
                    alt={story.author}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <CardContent className="p-6">
                  <blockquote className="text-muted-foreground italic mb-4 leading-relaxed">
                    "{story.quote}"
                  </blockquote>
                  <p className="text-sm font-medium text-primary">— {story.author}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Journey Highlight */}
      <section className="py-20">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="bg-gradient-to-r from-primary/10 via-primary/5 to-terracotta/10 border-primary/20 overflow-hidden">
              <CardContent className="p-8 md:p-12">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div className="space-y-6">
                    <div className="text-5xl">📈</div>
                    <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground">
                      Our Growth Journey
                    </h2>
                    <p className="text-muted-foreground leading-relaxed">
                      What started with a handful of passionate individuals in 2018 has grown 
                      into a movement touching hundreds of lives. From 26 students in 2020 to 
                      100+ in 2025 at Sundarban Child Campus alone — our impact continues to expand.
                    </p>
                    <div className="flex gap-8">
                      <div>
                        <div className="font-display text-3xl font-bold text-primary">2018</div>
                        <div className="text-sm text-muted-foreground">Foundation Started</div>
                      </div>
                      <div>
                        <div className="font-display text-3xl font-bold text-terracotta">2025</div>
                        <div className="text-sm text-muted-foreground">100+ Students</div>
                      </div>
                    </div>
                  </div>
                  <div className="relative">
                    <div className="aspect-square rounded-2xl overflow-hidden shadow-lg">
                      <img 
                        src="https://media.giphy.com/media/l0HlNQ03J5JxX6lva/giphy.gif"
                        alt="Growth journey"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container px-4">
          <Card className="max-w-4xl mx-auto bg-card border-primary/20">
            <CardContent className="p-8 md:p-12 text-center">
              <div className="text-5xl mb-6">🙏</div>
              <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
                Be Part of This Impact
              </h2>
              <p className="text-muted-foreground max-w-xl mx-auto mb-8">
                Your support directly creates these moments of change. 
                Join us in making a difference.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="rounded-full">
                  <Link to="/help">
                    <Heart className="mr-2 h-5 w-5" />
                    Support Our Work
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="rounded-full">
                  <Link to="/school">
                    Visit Sundarban Campus
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

export default FoundationImpact;
