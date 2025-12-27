import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { 
  Phone, 
  Mail, 
  MapPin, 
  MessageCircle,
  Heart,
  Send,
  Sparkles,
  Building2,
  Copy,
  Check
} from "lucide-react";

const bankDetails = {
  accountName: "Asangoham Foundation",
  accountNumber: "10061435903",
  bankName: "IDFC First Bank",
  ifsc: "IDFB0080178",
  branch: "SAdashiva Nagar Branch",
  upi: "asangoham@sbi"
};

export default function Contact() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [copiedField, setCopiedField] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });

  const handleCopy = async (text: string, field: string) => {
    await navigator.clipboard.writeText(text);
    setCopiedField(field);
    toast({
      title: "Copied!",
      description: `${field} copied to clipboard`,
    });
    setTimeout(() => setCopiedField(null), 2000);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. We'll get back to you soon.",
    });
    
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
    setIsSubmitting(false);
  };

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="section-padding gradient-sage">
        <div className="container-wide px-4 md:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4" />
              <span>Get in Touch</span>
            </div>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground leading-tight mb-6">
              Let's Build{" "}
              <span className="text-primary">Together</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Whether you want to donate, volunteer, partner, or simply learn more — 
              we're here to connect. Every conversation could change a child's life.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Grid */}
      <section className="section-padding bg-background">
        <div className="container-wide px-4 md:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="font-serif text-2xl font-semibold text-foreground mb-6">
                Send Us a Message
              </h2>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">Your Name *</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Enter your name"
                      required
                      className="mt-1.5"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="your@email.com"
                      required
                      className="mt-1.5"
                    />
                  </div>
                </div>
                
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+91 XXXXX XXXXX"
                      className="mt-1.5"
                    />
                  </div>
                  <div>
                    <Label htmlFor="subject">Subject *</Label>
                    <Input
                      id="subject"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="How can we help?"
                      required
                      className="mt-1.5"
                    />
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="message">Your Message *</Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us how you'd like to help or what you'd like to know..."
                    required
                    rows={5}
                    className="mt-1.5"
                  />
                </div>
                
                <Button type="submit" size="lg" disabled={isSubmitting} className="w-full sm:w-auto">
                  {isSubmitting ? (
                    "Sending..."
                  ) : (
                    <>
                      <Send className="w-4 h-4 mr-2" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </div>
            
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="font-serif text-2xl font-semibold text-foreground mb-6">
                  Other Ways to Reach Us
                </h2>
                
                <div className="space-y-4">
                  <a 
                    href="https://wa.me/918050500434" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-start gap-4 p-4 bg-card rounded-xl border border-border/50 hover:shadow-md transition-shadow"
                  >
                    <div className="w-12 h-12 rounded-full bg-[hsl(142,70%,45%)]/10 flex items-center justify-center flex-shrink-0">
                      <MessageCircle className="w-6 h-6 text-[hsl(142,70%,45%)]" />
                    </div>
                    <div>
                      <h3 className="font-medium text-foreground">WhatsApp (Fastest)</h3>
                      <p className="text-muted-foreground text-sm">+91 96205 55694</p>
                      <p className="text-xs text-primary mt-1">Click to chat →</p>
                    </div>
                  </a>
                  
                  <a 
                    href="tel:+919620555694"
                    className="flex items-start gap-4 p-4 bg-card rounded-xl border border-border/50 hover:shadow-md transition-shadow"
                  >
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium text-foreground">Phone</h3>
                      <p className="text-muted-foreground text-sm">+91 96205 55694</p>
                      <p className="text-xs text-muted-foreground mt-1">Available 9 AM - 6 PM IST</p>
                    </div>
                  </a>
                  
                  <a 
                    href="mailto:contact@sundarbanchild.org"
                    className="flex items-start gap-4 p-4 bg-card rounded-xl border border-border/50 hover:shadow-md transition-shadow"
                  >
                    <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-medium text-foreground">Email</h3>
                      <p className="text-muted-foreground text-sm">contact@sundarbanchild.org</p>
                      <p className="text-xs text-muted-foreground mt-1">We respond within 24-48 hours</p>
                    </div>
                  </a>
                  
                  <div className="flex items-start gap-4 p-4 bg-card rounded-xl border border-border/50">
                    <div className="w-12 h-12 rounded-full bg-warm/10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-warm" />
                    </div>
                    <div>
                      <h3 className="font-medium text-foreground">Head Office</h3>
                      <p className="text-muted-foreground text-sm">No.37/2 Swami Vivekananda Road, Kolkata - 700124</p>
                      <p className="text-xs text-muted-foreground mt-1">West Bengal, India</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 bg-card rounded-xl border border-border/50">
                    <div className="w-12 h-12 rounded-full bg-warm/10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-warm" />
                    </div>
                    <div>
                      <h3 className="font-medium text-foreground">Bangalore Office</h3>
                      <p className="text-muted-foreground text-sm">No.54, Girija Towers, Ground Floor, Palace Guttahalli Main Road, Malleswaram, Bangalore - 560003</p>
                      <p className="text-xs text-muted-foreground mt-1">Karnataka, India</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Visit Us */}
              <div className="bg-sage rounded-xl p-6">
                <Heart className="w-8 h-8 text-primary mb-3" />
                <h3 className="font-serif text-lg font-semibold text-foreground mb-2">
                  Visit Our Campus
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  We warmly welcome visitors who want to see our work firsthand. The Sundarbans 
                  is a beautiful region, and meeting our children is an unforgettable experience. 
                  Please contact us in advance to arrange a visit.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bank Details */}
      <section className="section-padding bg-secondary/30">
        <div className="container-wide px-4 md:px-8">
          <div className="text-center mb-10">
            <h2 className="font-serif text-2xl md:text-3xl font-semibold text-foreground mb-4">
              Donate Directly
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              For direct bank transfers or UPI payments, use the details below. 
              All donations go to Asangoham Foundation and are used for our children's welfare.
            </p>
          </div>
          
          <div className="max-w-2xl mx-auto">
            <div className="bg-card rounded-2xl p-6 md:p-8 shadow-sm border border-border/50">
              <div className="flex items-center gap-3 mb-6">
                <Building2 className="w-6 h-6 text-primary" />
                <h3 className="font-serif text-xl font-semibold text-foreground">
                  Bank Account Details
                </h3>
              </div>
              
              <div className="space-y-4">
                {[
                  { label: "Account Name", value: bankDetails.accountName },
                  { label: "Account Number", value: bankDetails.accountNumber },
                  { label: "Bank Name", value: bankDetails.bankName },
                  { label: "IFSC Code", value: bankDetails.ifsc },
                  { label: "Branch", value: bankDetails.branch },
                  { label: "UPI ID", value: bankDetails.upi },
                ].map((item) => (
                  <div key={item.label} className="flex items-center justify-between p-3 bg-muted rounded-lg">
                    <div>
                      <p className="text-xs text-muted-foreground">{item.label}</p>
                      <p className="font-medium text-foreground">{item.value}</p>
                    </div>
                    <button
                      onClick={() => handleCopy(item.value, item.label)}
                      className="p-2 hover:bg-background rounded-md transition-colors"
                      aria-label={`Copy ${item.label}`}
                    >
                      {copiedField === item.label ? (
                        <Check className="w-4 h-4 text-primary" />
                      ) : (
                        <Copy className="w-4 h-4 text-muted-foreground" />
                      )}
                    </button>
                  </div>
                ))}
              </div>
              
              <p className="text-xs text-muted-foreground mt-6 text-center">
                Please share a screenshot of your donation via WhatsApp for our records and acknowledgment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding gradient-earth text-primary-foreground">
        <div className="container-narrow px-4 md:px-8 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-6">
            Every Connection Matters
          </h2>
          <p className="text-primary-foreground/80 mb-8 max-w-xl mx-auto">
            Whether it's a question, a donation, or a word of encouragement — we value every 
            interaction. Thank you for caring about the children of Sundarbans.
          </p>
          <Button asChild size="lg" variant="secondary">
            <a href="https://wa.me/918050500434" target="_blank" rel="noopener noreferrer">
              <MessageCircle className="w-5 h-5 mr-2" />
              Start a Conversation
            </a>
          </Button>
        </div>
      </section>
    </div>
  );
}
