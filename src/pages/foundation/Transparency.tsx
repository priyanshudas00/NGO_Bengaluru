import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Shield,
  FileText,
  Eye,
  Heart,
  Users,
  CheckCircle,
  ArrowRight,
  FileCheck,
  Award,
  Building,
  Download,
  ExternalLink
} from "lucide-react";

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

  // NGO Certificates & Registrations Required in India
  const certificates = [
    {
      id: 1,
      name: "12A Registration",
      issuingAuthority: "Income Tax Department",
      description: "Exemption from income tax on surplus funds",
      validity: "Permanent",
      status: "active",
      fileUrl: "/images/12A Certificate (1).pdf",
      registrationNo: "AAGTA8562PE20213"
    },
    {
      id: 2,
      name: "80G Registration",
      issuingAuthority: "Income Tax Department",
      description: "Tax exemption benefits for donors",
      validity: "Permanent",
      status: "active",
      fileUrl: "/images/80G Certificate (1).pdf",
      registrationNo: "AAGTA8562PF20211"
    },
    {
      id: 4,
      name: "CSR Registration",
      issuingAuthority: "Ministry of Corporate Affairs",
      description: "Eligible to receive CSR funds from companies",
      validity: "Permanent",
      status: "active",
      fileUrl: "/images/12A Certificate (1).pdf",
      registrationNo: "CSR00012345"
    },
    {
      id: 5,
      name: "NITI Aayog NGO Darpan",
      issuingAuthority: "NITI Aayog",
      description: "Registered on Government's NGO portal",
      validity: "Permanent",
      status: "active",
      fileUrl: "/images/80G Certificate (1).pdf",
      registrationNo: "MH/2021/1234567"
    },
    {
      id: 6,
      name: "Society Registration",
      issuingAuthority: "Registrar of Societies",
      description: "Registered under Societies Registration Act, 1860",
      validity: "Permanent",
      status: "active",
      fileUrl: "/images/12A Certificate (1).pdf",
      registrationNo: "IV-00093/2018"
    }
  ];

  // Additional Government Registrations
  const govtRegistrations = [
    {
      name: "PAN Card",
      number: "AAGTA8562P",
      purpose: "Permanent Account Number for financial transactions"
    }
  ];

  const commitments = [
    "100% of designated donations go directly to the specified cause",
    "Minimal administrative overhead to maximize impact",
    "Regular photo and video updates from the ground",
    "Open invitation to visit our programs anytime",
    "Annual impact reports shared with all supporters",
    "Direct communication with beneficiaries when possible"
  ];

  const annualCompliances = [
    "Annual audited financial statements",
    "Income Tax Returns (ITR) filed regularly",
    "Society annual report filing",
    "Donation receipts issued with 80G certificates",
    "Project-wise impact assessment reports"
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
              Transparency & Compliance
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              We operate with full compliance under Indian laws and regulations. 
              All necessary registrations and certificates are maintained and updated regularly.
            </p>
            <div className="flex flex-wrap justify-center gap-2 mt-8">
              <Badge variant="secondary" className="gap-1">
                <FileCheck className="w-3 h-3" /> 12A Registered
              </Badge>
              <Badge variant="secondary" className="gap-1">
                <Award className="w-3 h-3" /> 80G Certified
              </Badge>
              <Badge variant="secondary" className="gap-1">
                <Building className="w-3 h-3" /> CSR Eligible
              </Badge>
            </div>
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
              <Card key={index} className="bg-gray-50 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
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

      {/* NGO Certificates Section */}
      <section className="py-16 bg-secondary/30">
        <div className="container px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                <Award className="w-8 h-8 text-primary" />
              </div>
              <h2 className="font-display text-3xl font-bold text-foreground mb-4">
                Certifications & Registrations
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                We maintain all mandatory and voluntary certifications required for NGOs in India.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {certificates.map((cert) => (
                <Card key={cert.id} className="bg-gray-50 hover:shadow-lg transition-all duration-300">
                  <CardHeader className="pb-3">
                    <div className="flex justify-between items-start">
                      <CardTitle className="font-display text-lg">{cert.name}</CardTitle>
                      <Badge variant={cert.status === 'active' ? 'default' : 'secondary'}>
                        {cert.status}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Issuing Authority:</span>
                        <span className="font-medium">{cert.issuingAuthority}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Registration No:</span>
                        <span className="font-medium text-primary">{cert.registrationNo}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Validity:</span>
                        <span className="font-medium">{cert.validity}</span>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground">{cert.description}</p>
                    <div className="flex gap-2 pt-2">
                      <Button variant="outline" size="sm" className="flex-1" asChild>
                        <a href={cert.fileUrl} target="_blank" rel="noopener noreferrer">
                          <Download className="w-4 h-4 mr-2" />
                          View PDF
                        </a>
                      </Button>
                      <Button variant="ghost" size="sm">
                        <ExternalLink className="w-4 h-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Additional Registrations */}
            <Card className="bg-gray-50 border-primary/20">
              <CardHeader>
                <CardTitle className="font-display text-xl flex items-center gap-2">
                  <Building className="w-5 h-5" />
                  Additional Government Registrations
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid sm:grid-cols-2 gap-4">
                  {govtRegistrations.map((reg, index) => (
                    <div key={index} className="bg-secondary/50 p-4 rounded-lg">
                      <div className="flex justify-between items-start mb-2">
                        <span className="font-medium">{reg.name}</span>
                        <Badge variant="outline" className="text-xs">
                          {reg.number}
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">{reg.purpose}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Annual Compliance Section */}
      <section className="py-16">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-display text-3xl font-bold text-foreground mb-4">
                Annual Compliances & Filings
              </h2>
              <p className="text-muted-foreground">
                We maintain 100% compliance with all statutory requirements
              </p>
            </div>

            <Card className="bg-gray-50">
              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="font-display text-lg font-semibold mb-4 flex items-center gap-2">
                      <FileCheck className="w-5 h-5 text-primary" />
                      Mandatory Filings
                    </h3>
                    <ul className="space-y-3">
                      {annualCompliances.slice(0, 4).map((item, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-muted-foreground">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-semibold mb-4 flex items-center gap-2">
                      <Shield className="w-5 h-5 text-primary" />
                      Additional Disclosures
                    </h3>
                    <ul className="space-y-3">
                      {annualCompliances.slice(4).map((item, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-muted-foreground">{item}</span>
                        </li>
                      ))}
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">
                          GST registration and compliance (if applicable)
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
                
                <div className="mt-8 pt-8 border-t border-border text-center">
                  <p className="text-sm text-muted-foreground">
                    Last Audit Date: March 31, 2024 | Next Compliance Due: December 31, 2024
                  </p>
                </div>
              </CardContent>
            </Card>
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
            
            <Card className="bg-gray-50">
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
                  * Allocation percentages are based on FY 2023-24 audited financial statements
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Commitments */}
      <section className="py-16">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-display text-3xl font-bold text-foreground mb-4">
                Our Commitments to You
              </h2>
            </div>
            
            <Card className="bg-gray-50">
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

      {/* Verification & Contact */}
      <section className="py-16 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container px-4">
          <Card className="max-w-4xl mx-auto bg-gray-50 border-primary/20">
            <CardContent className="p-8 md:p-12">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                    <FileText className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-display text-2xl font-bold text-foreground mb-4">
                    Verification & Documentation
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    All our certificates and registrations are available for verification. 
                    We welcome due diligence by donors, partners, and regulatory authorities.
                  </p>
                  <div className="space-y-2">
                    <p className="text-sm font-medium">For verification requests:</p>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Email: compliance@asangoham.org</li>
                      <li>• Phone: +91-9620555694</li>
                      <li>• Address: Sundarban Area, West Bengal, India</li>
                    </ul>
                  </div>
                </div>
                <div className="space-y-4">
                  <Button asChild className="w-full justify-start" variant="outline">
                    <a href={`https://wa.me/919620555694?text=${encodeURIComponent("I would like to view all certificates")}`} target="_blank" rel="noopener noreferrer">
                      <FileCheck className="w-4 h-4 mr-2" />
                      View All Certificates
                    </a>
                  </Button>
                  <Button asChild className="w-full justify-start" variant="outline">
                    <a href={`https://wa.me/919620555694?text=${encodeURIComponent("I would like to view financial statements")}`} target="_blank" rel="noopener noreferrer">
                      <FileText className="w-4 h-4 mr-2" />
                      Financial Statements
                    </a>
                  </Button>
                  <Button asChild className="w-full justify-start" variant="outline">
                    <a href={`https://wa.me/919620555694?text=${encodeURIComponent("I would like to view annual reports")}`} target="_blank" rel="noopener noreferrer">
                      <Award className="w-4 h-4 mr-2" />
                      Annual Reports
                    </a>
                  </Button>
                  <Button asChild className="w-full">
                    <a href={`https://wa.me/919620555694?text=${encodeURIComponent("I would like to request documents: View All Certificates, Financial Statements, Annual Reports")}`} target="_blank" rel="noopener noreferrer">
                      Request Documents
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Transparency;