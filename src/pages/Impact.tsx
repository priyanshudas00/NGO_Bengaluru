import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { AnimatedCounter } from "@/components/ui/animated-counter";
import { 
  Users, 
  GraduationCap, 
  Heart, 
  TrendingUp,
  ArrowRight,
  Sparkles,
  IndianRupee,
  Clock,
  Target
} from "lucide-react";

const impactStats = [
  {
    icon: Users,
    value: 100,
    suffix: "+",
    label: "Students Educated",
    description: "From 26 in 2020 to over 100 in 2025",
    color: "primary"
  },
  {
    icon: GraduationCap,
    value: 9,
    label: "Community Educators",
    description: "Dedicated teachers from local communities",
    color: "accent"
  },
  {
    icon: Clock,
    value: 5,
    label: "Years of Service",
    description: "Consistently serving since 2020",
    color: "warm"
  },
  {
    icon: Heart,
    value: 4,
    suffix: "×",
    label: "Growth Achieved",
    description: "Our student family has grown 4 times",
    color: "earth"
  },
];

const feeBreakdown = [
  { label: "Student Monthly Fee", amount: "₹175", note: "Affordable for all families" },
  { label: "Teacher Monthly Honorarium", amount: "₹1,200", note: "Per community educator" },
];

export default function Impact() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="section-padding gradient-sage">
        <div className="container-wide px-4 md:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4" />
              <span>Our Impact</span>
            </div>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground leading-tight mb-6">
              Every Number Tells a{" "}
              <span className="text-primary">Story of Hope</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Behind every statistic is a child who now has access to education, 
              a family with renewed hope, and a community growing stronger together.
            </p>
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="section-padding bg-background">
        <div className="container-wide px-4 md:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {impactStats.map((stat) => (
              <div key={stat.label} className="bg-card rounded-2xl p-6 md:p-8 shadow-sm border border-border/50">
                <div className={`w-14 h-14 rounded-full bg-${stat.color}/10 flex items-center justify-center mb-4`}>
                  <stat.icon className={`w-7 h-7 text-${stat.color}`} />
                </div>
                <div className={`font-serif text-4xl md:text-5xl font-bold text-${stat.color} mb-2`}>
                  <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                </div>
                <h3 className="font-medium text-foreground mb-1">{stat.label}</h3>
                <p className="text-muted-foreground text-sm">{stat.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Growth Story */}
      <section className="section-padding bg-secondary/30">
        <div className="container-wide px-4 md:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-6">
                The Journey from 26 to 100+
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                When we started in 2020, we had 26 students and a borrowed space. Today, 
                we're educating over 100 children with dreams as vast as the Sundarbans themselves.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                This growth didn't happen by chance. It happened because of the trust of families, 
                the dedication of our teachers, and the support of a community that believes 
                education is the greatest gift we can give.
              </p>
              
              <div className="flex items-center gap-4 p-4 bg-sage rounded-xl">
                <TrendingUp className="w-10 h-10 text-primary" />
                <div>
                  <p className="font-serif text-2xl font-bold text-primary">4× Growth</p>
                  <p className="text-sm text-muted-foreground">in just 5 years</p>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-card rounded-2xl p-8 shadow-sm border border-border/50">
                <h3 className="font-serif text-xl font-semibold text-foreground mb-6">
                  Student Growth Over Years
                </h3>
                <div className="space-y-4">
                  {[
                    { year: "2020", students: 26, width: "26%" },
                    { year: "2021", students: 40, width: "40%" },
                    { year: "2022", students: 55, width: "55%" },
                    { year: "2023", students: 75, width: "75%" },
                    { year: "2024", students: 90, width: "90%" },
                    { year: "2025", students: 100, width: "100%" },
                  ].map((item) => (
                    <div key={item.year} className="flex items-center gap-4">
                      <span className="text-sm font-medium text-foreground w-12">{item.year}</span>
                      <div className="flex-1 bg-muted rounded-full h-6 overflow-hidden">
                        <div 
                          className="bg-primary h-full rounded-full flex items-center justify-end pr-2 transition-all duration-1000"
                          style={{ width: item.width }}
                        >
                          <span className="text-xs text-primary-foreground font-medium">{item.students}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fee Model */}
      <section className="section-padding bg-background">
        <div className="container-wide px-4 md:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-4">
              Our Fee Model
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Education should never be a luxury. Our fee structure is designed to be accessible 
              while ensuring sustainability.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            {feeBreakdown.map((item) => (
              <div key={item.label} className="bg-card rounded-xl p-6 shadow-sm border border-border/50 text-center">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <IndianRupee className="w-6 h-6 text-primary" />
                </div>
                <p className="text-sm text-muted-foreground mb-2">{item.label}</p>
                <p className="font-serif text-3xl font-bold text-foreground mb-2">{item.amount}</p>
                <p className="text-xs text-muted-foreground">{item.note}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-10 text-center">
            <div className="inline-block bg-sage rounded-xl p-6 max-w-xl">
              <Target className="w-8 h-8 text-primary mx-auto mb-3" />
              <p className="text-sm text-foreground leading-relaxed">
                <strong>Why ₹175?</strong> This minimal fee ensures families have ownership in their 
                child's education while keeping it accessible. It covers basic operational costs, 
                but we rely on donations for building, meals, and supplies.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What Your Support Does */}
      <section className="section-padding bg-cream">
        <div className="container-wide px-4 md:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-4">
              What Your Support Enables
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Every contribution directly impacts the lives of our students.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              {
                amount: "₹500",
                impact: "A month of stationery for 3 students",
                icon: "📚"
              },
              {
                amount: "₹1,200",
                impact: "One teacher's monthly honorarium",
                icon: "👩‍🏫"
              },
              {
                amount: "₹5,000",
                impact: "A month of meals for 10 students",
                icon: "🍲"
              },
            ].map((item) => (
              <div key={item.amount} className="bg-background rounded-xl p-6 shadow-sm border border-border/50 text-center">
                <div className="text-4xl mb-4">{item.icon}</div>
                <p className="font-serif text-2xl font-bold text-primary mb-2">{item.amount}</p>
                <p className="text-sm text-muted-foreground">{item.impact}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding gradient-earth text-primary-foreground">
        <div className="container-narrow px-4 md:px-8 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-6">
            Help Us Create More Impact
          </h2>
          <p className="text-primary-foreground/80 mb-8 max-w-xl mx-auto">
            Your support can help us reach more children, hire more teachers, and build a brighter future.
          </p>
          <Button asChild size="lg" variant="secondary">
            <Link to="/contact">
              Contribute Today
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
