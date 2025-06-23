import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Network,
  Lock,
  Zap,
  Monitor,
  GraduationCap,
  BugIcon,
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Monitor,
      title: "IT Consulting",
      description:
        "Strategic technology guidance to optimize your IT infrastructure and align with business goals.",
      features: [
        "IT Strategy Development",
        "Infrastructure Optimization",
        "Technology Roadmap Planning",
      ],
    },
    {
      icon: Network,
      title: "Cyber Security Consulting",
      description:
        "Expert assessment and implementation of security measures to protect your digital assets.",
      features: [
        "Risk Assessment",
        "Security Framework Development",
        "Compliance Consulting",
      ],
    },
    {
      icon: GraduationCap,
      title: "Cyber Security Training",
      description:
        "Comprehensive training programs to develop cybersecurity skills for your team.",
      features: [
        "Security Awareness Training",
        "Technical Skills Development",
        "Compliance Training",
      ],
    },
    {
      icon: Lock,
      title: "Identity & Access Management",
      description:
        "Secure identity solutions with multi-factor authentication and privileged access management.",
      features: [
        "Single Sign-On (SSO)",
        "Multi-Factor Authentication (MFA)",
        "Privileged Access Management",
      ],
    },
    {
      icon: Zap,
      title: "Incident Response",
      description:
        "Rapid incident response services to minimize damage and restore operations quickly.",
      features: [
        "Incident Detection",
        "Containment and Eradication",
        "Post-Incident Analysis",
      ],
    },
    {
      icon: BugIcon,
      title: "Penetration Testing",
      description:
        "Simulated cyber attacks to identify and address vulnerabilities in your systems.",
      features: [
        "Network Penetration Testing",
        "Application Penetration Testing",
        "Vulnerability Assessment",
      ],
    },
  ];
  return (
    <section id="services" className="py-20 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold  mb-4">
            Comprehensive Security Services
          </h2>
          <p className="text-xl max-w-3xl mx-auto">
            Comprehensive cybersecurity solutions designed to protect your business from evolving digital threats.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="bg-white dark:bg-slate-900  hover:border-cyan-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10"
            >
              <CardHeader>
                <div className="flex items-center space-x-3 mb-3">
                  <div className="p-2 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg">
                    <service.icon className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-xl">
                    {service.title}
                  </CardTitle>
                </div>
                <CardDescription className="text-base leading-relaxed ">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-center"
                    >
                      <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
