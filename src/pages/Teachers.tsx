import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  Heart, 
  BookOpen, 
  Users,
  ArrowRight,
  Sparkles,
  GraduationCap
} from "lucide-react";

const teachers = [
  {
    name: "Teacher 1",
    role: "Primary Educator",
    subjects: "Bengali, English",
    quote: "Every child is a seed of potential, waiting to bloom.",
    years: 5
  },
  {
    name: "Teacher 2",
    role: "Primary Educator",
    subjects: "Mathematics, Science",
    quote: "Numbers tell stories, and I love teaching children to read them.",
    years: 4
  },
  {
    name: "Teacher 3",
    role: "Primary Educator",
    subjects: "Social Studies, General Knowledge",
    quote: "Teaching here is not a job, it's a calling.",
    years: 4
  },
  {
    name: "Teacher 4",
    role: "Junior Educator",
    subjects: "Hindi, Art",
    quote: "Art helps children express what words cannot.",
    years: 3
  },
  {
    name: "Teacher 5",
    role: "Junior Educator",
    subjects: "Physical Education",
    quote: "Healthy bodies nurture healthy minds.",
    years: 3
  },
  {
    name: "Teacher 6",
    role: "Junior Educator",
    subjects: "Bengali, Environmental Studies",
    quote: "Nature is our greatest teacher in the Sundarbans.",
    years: 2
  },
  {
    name: "Teacher 7",
    role: "Support Educator",
    subjects: "Basic Literacy",
    quote: "Every child who learns to read gains a superpower.",
    years: 2
  },
  {
    name: "Teacher 8",
    role: "Support Educator",
    subjects: "Basic Numeracy",
    quote: "From counting fingers to solving problems — that's the journey.",
    years: 2
  },
  {
    name: "Teacher 9",
    role: "Support Educator",
    subjects: "Life Skills, Values",
    quote: "We teach not just subjects, but how to be good humans.",
    years: 1
  },
];

export default function Teachers() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="section-padding gradient-sage">
        <div className="container-wide px-4 md:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4" />
              <span>Our Educators</span>
            </div>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground leading-tight mb-6">
              The Hearts Behind{" "}
              <span className="text-primary">Our Mission</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Our 9 community educators are not just teachers — they're mentors, caregivers, 
              and role models who shape the future of our children every single day.
            </p>
          </div>
        </div>
      </section>

      {/* About Our Teachers */}
      <section className="section-padding bg-background">
        <div className="container-wide px-4 md:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-6">
                Community Educators, Not Corporate Staff
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Our teachers come from the local community. They understand the struggles, 
                the dreams, and the potential of every child because they've lived similar lives.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Despite earning a modest honorarium of just <strong>₹1,200 per month</strong>, 
                these dedicated individuals show up every day with love and commitment. 
                They're not here for the money — they're here for the children.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We believe in honoring their dedication by treating them as part of our family 
                and working towards better support as we grow.
              </p>
            </div>
            
            <div className="bg-sage rounded-2xl p-8">
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-background rounded-xl p-6 text-center">
                  <Users className="w-8 h-8 text-primary mx-auto mb-3" />
                  <p className="font-serif text-3xl font-bold text-primary">9</p>
                  <p className="text-sm text-muted-foreground">Dedicated Teachers</p>
                </div>
                <div className="bg-background rounded-xl p-6 text-center">
                  <Heart className="w-8 h-8 text-accent mx-auto mb-3" />
                  <p className="font-serif text-3xl font-bold text-accent">₹1,200</p>
                  <p className="text-sm text-muted-foreground">Monthly Honorarium</p>
                </div>
                <div className="col-span-2 bg-background rounded-xl p-6 text-center">
                  <GraduationCap className="w-8 h-8 text-warm mx-auto mb-3" />
                  <p className="font-serif text-3xl font-bold text-warm">100+</p>
                  <p className="text-sm text-muted-foreground">Students Taught with Love</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Teacher Profiles */}
      <section className="section-padding bg-secondary/30">
        <div className="container-wide px-4 md:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-4">
              Meet Our Teachers
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Each educator brings unique skills and boundless dedication to our campus.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {teachers.map((teacher, index) => (
              <div 
                key={teacher.name} 
                className="bg-card rounded-xl p-6 shadow-sm border border-border/50 hover:shadow-md transition-shadow"
              >
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <span className="font-serif text-2xl font-bold text-primary">{index + 1}</span>
                </div>
                <div className="text-center">
                  <h3 className="font-serif text-lg font-semibold text-foreground mb-1">
                    {teacher.name}
                  </h3>
                  <p className="text-sm text-primary font-medium mb-1">{teacher.role}</p>
                  <p className="text-xs text-muted-foreground mb-4">
                    <BookOpen className="w-3 h-3 inline mr-1" />
                    {teacher.subjects}
                  </p>
                  <p className="text-sm text-muted-foreground italic leading-relaxed mb-4">
                    "{teacher.quote}"
                  </p>
                  <p className="text-xs text-primary">
                    {teacher.years} {teacher.years === 1 ? "year" : "years"} with us
                  </p>
                </div>
              </div>
            ))}
          </div>
          
          <p className="text-center text-sm text-muted-foreground mt-8">
            * Teacher names and specific details will be updated as we receive permissions and photos.
          </p>
        </div>
      </section>

      {/* Support Teachers */}
      <section className="section-padding bg-cream">
        <div className="container-narrow px-4 md:px-8 text-center">
          <h2 className="font-serif text-2xl md:text-3xl font-semibold text-foreground mb-6">
            Support Our Teachers
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-8 max-w-xl mx-auto">
            Our teachers give their all for a modest honorarium. Your support can help us 
            provide better compensation, training, and resources for these dedicated educators.
          </p>
          <div className="bg-background rounded-xl p-6 max-w-md mx-auto shadow-sm border border-border/50 mb-8">
            <p className="text-sm text-muted-foreground mb-2">With just</p>
            <p className="font-serif text-3xl font-bold text-primary mb-2">₹1,200</p>
            <p className="text-sm text-muted-foreground">
              you can sponsor one teacher's monthly honorarium
            </p>
          </div>
          <Button asChild size="lg">
            <Link to="/contact">
              Support a Teacher
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </Button>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding gradient-earth text-primary-foreground">
        <div className="container-narrow px-4 md:px-8 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-6">
            Join Our Teaching Family
          </h2>
          <p className="text-primary-foreground/80 mb-8 max-w-xl mx-auto">
            Are you passionate about education? Whether as a volunteer teacher or a supporter, 
            there's a place for you in our family.
          </p>
          <Button asChild size="lg" variant="secondary">
            <Link to="/contact">
              Get in Touch
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
