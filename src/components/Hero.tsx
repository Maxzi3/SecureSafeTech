"use client";
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Lock, Eye } from "lucide-react";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 light:bg-gradient-to-br from-gray-50 via-white to-gray-100" />

      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-20 w-72 h-72 bg-cyan-500 rounded-full filter blur-xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-600 rounded-full filter blur-xl animate-pulse delay-1000" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="text-center">
          {/* Main heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold dark:text-white text-slate-800 mb-6 leading-tight">
            <span className="block">Secure Your</span>
            <span className="block bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">
              Digital Future
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-gray-500 mb-8 max-w-3xl mx-auto leading-relaxed">
            Protecting your business from cyber threats with cutting-edge
            security solutions, expert training, and 24/7 monitoring services.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button
              onClick={() => scrollToSection("contact")}
              className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 shadow-lg hover:shadow-cyan-500/25 text-lg"
            >
              Get Free Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              onClick={() => scrollToSection("about")}
              variant="outline"
              className="border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 px-8 py-4 rounded-lg transition-all duration-300 text-lg"
            >
              Learn More
            </Button>
          </div>

          {/* Feature highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="flex items-center justify-center text-gray-500 whitespace-nowrap">
              <Shield className="h-8 w-9 text-cyan-400" />
              <span className="text-sm md:text-lg">
                Advanced Threat Protection
              </span>
            </div>
            <div className="flex items-center justify-center space-x-3 text-gray-500 whitespace-nowrap">
              <Lock className="h-8 w-8 text-cyan-400" />
              <span className="text-sm md:text-lg">Zero-Trust Security</span>
            </div>
            <div className="flex items-center justify-center space-x-3 text-gray-500 whitespace-nowrap">
              <Eye className="h-8 w-8 text-cyan-400" />
              <span className="text-sm md:text-lg">24/7 Monitoring</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
