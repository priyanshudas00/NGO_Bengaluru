import { useState } from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, Users, Handshake, GraduationCap, Copy, Check, ArrowRight, Phone } from "lucide-react";
import { toast } from "sonner";

const Help = () => {
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const copyToClipboard = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    toast.success("Copied to clipboard!");
    setTimeout(() => setCopiedField(null), 2000);
  };

  const waysToHelp = [
    {
      icon: Heart,
      title: "Donate",
      description: "Your financial support directly funds education, food, healthcare, and empowerment programs.",
      cta: "Donate Now",
      color: "primary"
    },
    {
      icon: Users,
      title: "Volunteer",
      description: "Share your time, skills, and passion. Join our team of dedicated volunteers making change happen.",
      cta: "Join Us",
      color: "terracotta"
    },
    {
      icon: Handshake,
      title: "Partner",
      description: "Organizations and businesses can partner with us for CSR initiatives and collaborative projects.",
      cta: "Partner With Us",
      color: "primary"
    },
    {
      icon: GraduationCap,
      title: "Sponsor a Child",
      description: "Support a child's complete education journey — from books to meals to mentorship.",
      cta: "Sponsor Now",
      color: "terracotta"
    }
  ];

  const bankDetails = {
    accountName: "Asangoham Foundation",
    accountNumber: "10061435903",
    ifsc: "IDFB0080178",
    bank: "IDFC First Bank",
    branch: "SAdashiva Nagar Branch",
    upi: "asangoham@sbi"
  };

  const donationAreas = [
    { emoji: "https://cdn.dribbble.com/userupload/19646652/file/original-b84277d6110f0722a534324ac2c977a8.gif", name: "Education", description: "Books, stationery, teacher salaries" },
    { emoji: "https://cdn.prod.website-files.com/61b799c421943c76acd7a7cf/61b799c521943c0f70d7a8b4_31_GIFexport_1240px.gif", name: "Food Security", description: "Daily meals for children and communities" },
    { emoji: "🏫", name: "Infrastructure", description: "School building, clean water, facilities" },
    { emoji: "https://media.lordicon.com/icons/wired/outline/1219-stethoscope.gif", name: "Healthcare", description: "Health camps and medical support" },
    { emoji: "https://cdn.dribbble.com/userupload/24406768/file/original-575dc6446f2d62af2b3536d3a298df23.gif", name: "Women Empowerment", description: "Skill training and self-help groups" },
    { emoji: "🎯", name: "General Fund", description: "Where it's needed most" }
  ];

  return (
    <div className="min-h-screen py-12">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
        <div className="container px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            <div className="text-5xl mb-6">
                <img src="https://media3.giphy.com/media/v1.Y2lkPTZjMDliOTUyZGUwYXdqcTMxY29qaWx0amJqa3Btb2wyZ2F3ZDFscXFhNzBxZDRmbyZlcD12MV9zdGlja2Vyc19zZWFyY2gmY3Q9cw/2vDJLn6LzoSSIJe3Xj/giphy.gif" alt="Praying hands" className="w-20 h-20 mx-auto rounded-lg" />
              </div>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
              How You Can Help
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              Your support directly touches lives on the ground. Whether through donations, 
              volunteering, or partnerships — every contribution creates ripples of change 
              that transform communities.
            </p>
          </div>
        </div>
      </section>

      {/* Ways to Help */}
      <section className="py-16">
        <div className="container px-4">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {waysToHelp.map((way, index) => (
              <Card key={index} className="bg-card hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group">
                <CardContent className="p-6 text-center">
                  <div className={`w-16 h-16 ${way.color === 'terracotta' ? 'bg-terracotta/10' : 'bg-primary/10'} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                    <way.icon className={`w-8 h-8 ${way.color === 'terracotta' ? 'text-terracotta' : 'text-primary'}`} />
                  </div>
                  <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                    {way.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    {way.description}
                  </p>
                  <Button 
                    asChild 
                    variant="outline" 
                    size="sm" 
                    className="rounded-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                  >
                    {way.title === "Donate" ? (
                      <a href="#bank-details">{way.cta}</a>
                    ) : (
                      <Link to="/contact">{way.cta}</Link>
                    )}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Donation Areas */}
      <section className="py-16 bg-secondary/30">
        <div className="container px-4">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl font-bold text-foreground mb-4">
              Where Your Donation Goes
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Choose the cause closest to your heart, or let us allocate where it's needed most.
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {donationAreas.map((area, index) => (
              <Card key={index} className="bg-card hover:shadow-md transition-all hover:border-primary/30 cursor-pointer group">
                <CardContent className="p-5 flex items-start gap-4">
                  <div className="group-hover:scale-110 transition-transform">
                    {area.emoji.startsWith('http') ? (
                      <img src={area.emoji} alt={area.name} className="w-12 h-12 rounded-lg object-cover" />
                    ) : (
                      <div className="text-3xl">{area.emoji}</div>
                    )}
                  </div>
                  <div>
                    <h3 className="font-medium text-foreground group-hover:text-primary transition-colors">
                      {area.name}
                    </h3>
                    <p className="text-sm text-muted-foreground">{area.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Bank Details */}
      <section id="bank-details" className="py-20 scroll-mt-20">
        <div className="container px-4">
          <div className="max-w-2xl mx-auto">
            <Card className="bg-card border-primary/20">
              <CardHeader className="text-center pb-4">
                <div className="text-4xl mb-2">🏦</div>
                <CardTitle className="font-display text-2xl">Bank Transfer Details</CardTitle>
                <p className="text-sm text-muted-foreground">
                  Make a direct transfer to support our work
                </p>
              </CardHeader>
              <CardContent className="space-y-4">
                {[
                  { label: "Account Name", value: bankDetails.accountName, key: "name" },
                  { label: "Account Number", value: bankDetails.accountNumber, key: "account" },
                  { label: "IFSC Code", value: bankDetails.ifsc, key: "ifsc" },
                  { label: "Bank", value: bankDetails.bank, key: "bank" },
                  { label: "Branch", value: bankDetails.branch, key: "branch" },
                ].map((item) => (
                  <div key={item.key} className="flex items-center justify-between p-3 bg-secondary/50 rounded-lg">
                    <div>
                      <p className="text-xs text-muted-foreground">{item.label}</p>
                      <p className="font-medium text-foreground">{item.value}</p>
                    </div>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => copyToClipboard(item.value, item.key)}
                      className="h-8 w-8"
                    >
                      {copiedField === item.key ? (
                        <Check className="h-4 w-4 text-green-500" />
                      ) : (
                        <Copy className="h-4 w-4" />
                      )}
                    </Button>
                  </div>
                ))}
                
                <div className="pt-4 border-t border-border">
                  <div className="flex items-center justify-between p-3 bg-primary/10 rounded-lg">
                    <div>
                      <p className="text-xs text-muted-foreground">UPI ID</p>
                      <p className="font-medium text-primary">{bankDetails.upi}</p>
                    </div>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => copyToClipboard(bankDetails.upi, "upi")}
                      className="h-8 w-8"
                    >
                      {copiedField === "upi" ? (
                        <Check className="h-4 w-4 text-green-500" />
                      ) : (
                        <Copy className="h-4 w-4" />
                      )}
                    </Button>
                  </div>
                </div>
                
                <p className="text-xs text-center text-muted-foreground pt-4">
                  Please share your transaction details via WhatsApp for confirmation
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-gradient-to-br from-primary/5 via-secondary/20 to-accent/5">
        <div className="container px-4">
          <Card className="max-w-4xl mx-auto bg-card border-primary/20">
            <CardContent className="p-8 md:p-12 text-center">
              <div className="text-4xl mb-4">💬</div>
              <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
                Have Questions?
              </h2>
              <p className="text-muted-foreground max-w-xl mx-auto mb-6">
                We're here to answer any questions about donations, volunteering, 
                or partnerships. Reach out to us directly.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="rounded-full">
                  <a href="https://wa.me/919620555694" target="_blank" rel="noopener noreferrer">
                    <Phone className="mr-2 h-5 w-5" />
                    WhatsApp Us
                  </a>
                </Button>
                <Button asChild variant="outline" size="lg" className="rounded-full">
                  <Link to="/contact">
                    Contact Form
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

export default Help;
