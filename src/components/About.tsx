import React from 'react'
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Target, Eye, Users } from "lucide-react";

const About = () => {
  const stats = [
    { number: "15+", label: "Years of Experience" },
    { number: "500+", label: "Clients Protected" },
    { number: "99.9%", label: "Uptime Guarantee" },
    { number: "24/7", label: "Support Available" },
  ];

  const values = [
    {
      icon: Target,
      title: "Precision",
      description:
        "We deliver targeted security solutions that address your specific threats and vulnerabilities.",
    },
    {
      icon: Eye,
      title: "Vigilance",
      description:
        "Constant monitoring and proactive threat hunting to stay ahead of cybercriminals.",
    },
    {
      icon: CheckCircle,
      title: "Excellence",
      description:
        "Committed to the highest standards of security practices and customer service.",
    },
    {
      icon: Users,
      title: "Partnership",
      description:
        "We work as an extension of your team, ensuring seamless integration and support.",
    },
  ];

  return (
    <section id="about" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold  mb-6">
              Leading Cybersecurity Experts
            </h2>
            <p className="text-xl mb-8 leading-relaxed">
              We offer our Services on Specialized domains such as
              cybersecurity, cyber awareness traning, penetration testing, cloud
              computing empowering clients with the tools and exxpertise
              required to stay secure, efficient and competitive in the digital
              era
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-6 w-6 text-cyan-400 flex-shrink-0" />
                <span>ISO 27001 Certified Security Management</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-6 w-6 text-cyan-400 flex-shrink-0" />
                <span>CISSP and CISM Certified Professionals</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-6 w-6 text-cyan-400 flex-shrink-0" />
                <span>Award-Winning Incident Response Team</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-6 w-6 text-cyan-400 flex-shrink-0" />
                <span>Trusted by Fortune 500 Companies</span>
              </div>
            </div>

            <Button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold px-8 py-3 rounded-lg transition-all duration-300">
              Learn More About Us
            </Button>
          </div>

          {/* Right Column - Stats & Values */}
          <div className="space-y-8">
            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <Card
                  key={index}
                  className="bg-white dark:bg-slate-900 hover:border-cyan-500/50 transition-all duration-300 text-center p-6"
                >
                  <CardContent className="p-0">
                    <div className="text-3xl font-bold text-cyan-400 mb-2">
                      {stat.number}
                    </div>
                    <div>{stat.label}</div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Values */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold">Our Core Values</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {values.map((value, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="p-2 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex-shrink-0">
                      <value.icon className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <div className=" font-semibold mb-1">{value.title}</div>
                      <div className=" text-sm">{value.description}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About