import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Shield, FileText, Eye, Heart, Users, CheckCircle, ArrowRight } from "lucide-react";

const Transparency = () => {
  const principles = [
    {
      icon: Eye,
      title: "Open Communication",
      description: "We share our work, challenges, and progress honestly with all stakeholders."
    },
    {
      icon: FileText,
      title: "Clear Reporting",
      description: "Regular updates on how funds are utilized and impact created."
    },
    {
      icon: Shield,
      title: "Accountability",
      description: "We take responsibility for our actions and welcome feedback."
    },
    {
      icon: Heart,
      title: "Donor Trust",
      description: "Every rupee donated is treated with utmost respect and care."
    }
  ];

  const fundAllocation = [
    { category: "Education Programs", percentage: 45, color: "bg-primary" },
    { category: "Food & Nutrition", percentage: 20, color: "bg-terracotta" },
    { category: "Health Initiatives", percentage: 15, color: "bg-green-500" },
    { category: "Women Empowerment", percentage: 12, color: "bg-blue-500" },
    { category: "Administration", percentage: 8, color: "bg-gray-400" }
  ];

  const commitments = [
    "100% of designated donations go directly to the specified cause",
    "Minimal administrative overhead to maximize impact",
    "Regular photo and video updates from the ground",
    "Open invitation to visit our programs anytime",
    "Annual impact reports shared with all supporters",
    "Direct communication with beneficiaries when possible"
  ];

  return (
    <div className="min-h-screen py-12">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
        <div className="container px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Shield className="w-4 h-4" />
              Trust & Accountability
            </div>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
              Transparency & Trust
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              We believe that trust is earned through honesty and accountability. 
              Here's how we ensure your support creates real, verifiable impact.
            </p>
          </div>
        </div>
      </section>

      {/* Our Principles */}
      <section className="py-16">
        <div className="container px-4">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl font-bold text-foreground mb-4">
              Our Transparency Principles
            </h2>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {principles.map((principle, index) => (
              <Card key={index} className="bg-card hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6 text-center">
                  <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <principle.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                    {principle.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {principle.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Fund Allocation */}
      <section className="py-16 bg-secondary/30">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-display text-3xl font-bold text-foreground mb-4">
                How Funds Are Used
              </h2>
              <p className="text-muted-foreground">
                A breakdown of how donations are allocated across our programs.
              </p>
            </div>
            
            <Card className="bg-card">
              <CardContent className="p-8">
                <div className="space-y-6">
                  {fundAllocation.map((item, index) => (
                    <div key={index}>
                      <div className="flex justify-between mb-2">
                        <span className="text-sm font-medium text-foreground">{item.category}</span>
                        <span className="text-sm font-bold text-primary">{item.percentage}%</span>
                      </div>
                      <div className="w-full bg-secondary rounded-full h-3">
                        <div 
                          className={`${item.color} h-3 rounded-full transition-all duration-1000`}
                          style={{ width: `${item.percentage}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
                
                <p className="text-xs text-center text-muted-foreground mt-6 pt-6 border-t border-border">
                  * Allocation percentages are approximate and may vary based on immediate needs
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Registration Details */}
      <section className="py-16">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto">
            <Card className="bg-gradient-to-r from-primary/5 via-primary/10 to-terracotta/5 border-primary/20">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FileText className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="font-display text-2xl">Registration & Legal Status</CardTitle>
              </CardHeader>
              <CardContent className="text-center space-y-4">
                <div className="bg-card rounded-lg p-6 border border-border/50">
                  <p className="text-sm text-muted-foreground mb-2">Registration Number</p>
                  <p className="font-display text-2xl font-bold text-primary">IV-00093/2018</p>
                </div>
                <p className="text-muted-foreground">
                  Asangoham Foundation is a registered non-profit organization 
                  operating under the applicable laws of India since 2018.
                </p>
                <div className="pt-4">
                  <p className="text-sm text-muted-foreground">
                    For verification or documentation requests, please{" "}
                    <Link to="/contact" className="text-primary hover:underline">contact us</Link>.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Commitments */}
      <section className="py-16 bg-secondary/30">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-display text-3xl font-bold text-foreground mb-4">
                Our Commitments to You
              </h2>
            </div>
            
            <Card className="bg-card">
              <CardContent className="p-8">
                <ul className="space-y-4">
                  {commitments.map((commitment, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{commitment}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Visit Us CTA */}
      <section className="py-16">
        <div className="container px-4">
          <Card className="max-w-4xl mx-auto bg-card border-primary/20">
            <CardContent className="p-8 md:p-12 text-center">
              <div className="text-5xl mb-6">🤝</div>
              <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
                See Our Work Firsthand
              </h2>
              <p className="text-muted-foreground max-w-xl mx-auto mb-6">
                We warmly invite you to visit our programs, meet our team, 
                and see the impact of your support with your own eyes.
              </p>
              <p className="text-lg text-primary font-medium mb-8">
                "Visit us. Talk to us. Walk with us."
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="rounded-full">
                  <Link to="/contact">
                    Contact Us
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="rounded-full">
                  <Link to="/help">
                    <Heart className="mr-2 h-5 w-5" />
                    Support Us
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

export default Transparency;
