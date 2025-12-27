import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { MapPin, Phone, Mail, Clock, Send, MessageCircle } from "lucide-react";
import { toast } from "sonner";

const FoundationContact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast.success("Message sent! We'll get back to you soon.");
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
    setIsSubmitting(false);
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Head Office",
      details: ["No.37/2 Swami Vivekananda Road", "Kolkata - 700124", "West Bengal, India"]
    },
    {
      icon: MapPin,
      title: "Bangalore Office",
      details: ["No.54, Girija Towers, Ground Floor", "Palace Guttahalli Main Road", "Malleswaram, Bangalore - 560003", "Karnataka, India"]
    },
    {
      icon: Phone,
      title: "Phone",
      details: ["91 96205 55694"]
    },
    {
      icon: Mail,
      title: "Email",
      details: ["contact@asangoham.org"]
    },
    {
      icon: Clock,
      title: "Hours",
      details: ["Mon - Sat: 9 AM - 6 PM", "Sunday: Closed"]
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
              Contact & Connect
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              We'd love to hear from you. Whether you want to volunteer, donate, 
              partner, or simply learn more — reach out to us.
            </p>
            <p className="text-xl text-primary font-medium mt-6">
              "Visit us. Talk to us. Walk with us."
            </p>
          </div>
        </div>
      </section>

      {/* Contact Grid */}
      <section className="py-16">
        <div className="container px-4">
          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Contact Info */}
            <div className="lg:col-span-1 space-y-6">
              <h2 className="font-display text-2xl font-bold text-foreground mb-6">
                Get in Touch
              </h2>
              
              {contactInfo.map((info, index) => (
                <Card key={index} className="bg-card hover:shadow-md transition-shadow">
                  <CardContent className="p-4 flex items-start gap-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <info.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium text-foreground">{info.title}</h3>
                      {info.details.map((detail, i) => (
                        <p key={i} className="text-sm text-muted-foreground">{detail}</p>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
              
              {/* WhatsApp CTA */}
              <Card className="bg-green-50 dark:bg-green-950/20 border-green-200 dark:border-green-800">
                <CardContent className="p-6 text-center">
                  <MessageCircle className="w-10 h-10 text-green-600 mx-auto mb-3" />
                  <h3 className="font-medium text-foreground mb-2">Quick Response</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Get instant replies on WhatsApp
                  </p>
                  <Button asChild className="w-full bg-green-600 hover:bg-green-700 rounded-full">
                    <a href="https://wa.me/919620555694" target="_blank" rel="noopener noreferrer">
                      <Phone className="mr-2 h-4 w-4" />
                      WhatsApp Us
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </div>
            
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="bg-card">
                <CardHeader>
                  <CardTitle className="font-display text-2xl">Send us a Message</CardTitle>
                  <p className="text-sm text-muted-foreground">
                    Fill out the form below and we'll get back to you within 24 hours.
                  </p>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Your Name *</Label>
                        <Input
                          id="name"
                          placeholder="Enter your name"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          required
                          className="rounded-lg"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="Enter your email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          required
                          className="rounded-lg"
                        />
                      </div>
                    </div>
                    
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input
                          id="phone"
                          placeholder="Enter your phone"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="rounded-lg"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="subject">Subject *</Label>
                        <Input
                          id="subject"
                          placeholder="What's this about?"
                          value={formData.subject}
                          onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                          required
                          className="rounded-lg"
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="message">Your Message *</Label>
                      <Textarea
                        id="message"
                        placeholder="Tell us how we can help..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        required
                        rows={5}
                        className="rounded-lg resize-none"
                      />
                    </div>
                    
                    <Button 
                      type="submit" 
                      size="lg" 
                      className="w-full rounded-full"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        "Sending..."
                      ) : (
                        <>
                          <Send className="mr-2 h-5 w-5" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-secondary/30">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="bg-card overflow-hidden">
              <div className="aspect-video bg-secondary flex items-center justify-center">
                <div className="text-center p-8">
                  <MapPin className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                    Sundarban Area, West Bengal
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Our work is spread across multiple communities in the Sundarban region.
                  </p>
                  <Button variant="outline" asChild className="rounded-full">
                    <a 
                      href="https://maps.google.com/?q=Sundarban,West+Bengal,India" 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      Open in Google Maps
                    </a>
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FoundationContact;
