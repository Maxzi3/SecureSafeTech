"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  GraduationCap,
  Users,
  Award,
  BookOpen,
  Clock,
  Globe,
} from "lucide-react";

const Training = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [showAll, setShowAll] = useState(false);

  const courses = [
    {
      title: "Cybersecurity Fundamentals",
      description:
        "Learn the essential principles of cybersecurity, including threat landscape, risk management, and basic security controls.",
      duration: "6 weeks",
      level: "Beginner",
      category: "Certification",
    },
    {
      title: "Network Security Specialist",
      description:
        "Master network security protocols, firewalls, intrusion detection systems, and network monitoring techniques.",
      duration: "8 weeks",
      level: "Intermediate",
      category: "Certification",
    },
    {
      title: "Active Directory Penetration Testing",
      description:
        "Advanced techniques for testing and securing Active Directory environments against sophisticated attacks.",
      duration: "4 weeks",
      level: "Advanced",
      category: "Certification",
    },
    {
      title: "Incident Response Management",
      description:
        "Comprehensive training on incident response procedures, forensics, and crisis management strategies.",
      duration: "5 weeks",
      level: "Intermediate",
      category: "Certification",
    },
    {
      title: "Cloud Security Specialist",
      description:
        "Secure cloud infrastructure across AWS, Azure, and GCP with best practices and compliance frameworks.",
      duration: "7 weeks",
      level: "Intermediate",
      category: "Certification",
    },
    {
      title: "Web Applications Penetration Testing",
      description:
        "Hands-on training in identifying and exploiting web application vulnerabilities using industry-standard tools.",
      duration: "6 weeks",
      level: "Advanced",
      category: "Certification",
    },
    {
      title: "API Penetration Testing",
      description:
        "Specialized course on testing REST and GraphQL APIs for security vulnerabilities and implementation flaws.",
      duration: "3 weeks",
      level: "Advanced",
      category: "Certification",
    },
    {
      title: "Fullstack Development",
      description:
        "Complete web development course covering both frontend and backend technologies with security best practices.",
      duration: "12 weeks",
      level: "Intermediate",
      category: "Development",
    },
    {
      title: "Frontend Development",
      description:
        "Modern frontend development with React, TypeScript, and secure coding practices for web applications.",
      duration: "8 weeks",
      level: "Beginner",
      category: "Development",
    },
    {
      title: "Backend Development",
      description:
        "Server-side development with Node.js, databases, and API security implementation techniques.",
      duration: "10 weeks",
      level: "Intermediate",
      category: "Development",
    },
    {
      title: "Security Awareness for Employees",
      description:
        "Essential cybersecurity training for all staff members to recognize and prevent common cyber threats.",
      duration: "2 weeks",
      level: "Beginner",
      category: "Awareness",
    },
  ];

  const filters = [
    "All",
    "Beginner",
    "Intermediate",
    "Advanced",
    "Certification",
  ];

  const filteredCourses = courses.filter((course) => {
    if (activeFilter === "All") return true;
    if (activeFilter === "Certification")
      return course.category === "Certification";
    return course.level === activeFilter;
  });

  const displayedCourses = showAll
    ? filteredCourses
    : filteredCourses.slice(0, 6);

    const scrollToSection = (sectionId: string) => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    };

  return (
    <section id="training" className="py-20 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full">
              <GraduationCap className="h-12 w-12 text-white" />
            </div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold  mb-4">
            Cybersecurity Training & Certification
          </h2>
          <p className="text-xl max-w-3xl mx-auto mb-8">
            Empower your team with the knowledge and skills to defend against
            cyber threats. Our expert-led training programs are designed for all
            skill levels.
          </p>
        </div>

        {/* Training Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <Users className="h-12 w-12 text-cyan-400" />
            </div>
            <div className="text-3xl font-bold  mb-2">10,000+</div>
            <div className="">Professionals Trained</div>
          </div>
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <Award className="h-12 w-12 text-cyan-400" />
            </div>
            <div className="text-3xl font-bold mb-2">95%</div>
            <div className="">Certification Pass Rate</div>
          </div>
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <BookOpen className="h-12 w-12 text-cyan-400" />
            </div>
            <div className="text-3xl font-bold  mb-2">50+</div>
            <div className="">Training Modules</div>
          </div>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <Button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              variant={activeFilter === filter ? "default" : "outline"}
              className={
                activeFilter === filter
                  ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white"
                  : " text-gray-300 hover:bg-slate-800 hover:text-white"
              }
            >
              {filter}
            </Button>
          ))}
        </div>

        {/* Training Courses */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {displayedCourses.map((course, index) => (
            <Card
              key={index}
              className="bg-white dark:bg-slate-900  hover:border-cyan-500/50 transition-all duration-300 ease-in-out h-full flex flex-col"
            >
              <CardHeader className="flex-grow">
                <CardTitle className="text-xl mb-2 text-gray-500 dark:text-white">
                  {course.title}
                </CardTitle>
                <CardDescription className="text-sm">
                  {course.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="space-y-3 mb-6">
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center space-x-2">
                      <Clock className="h-4 w-4 text-cyan-400" />
                      <span>{course.duration}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Globe className="h-4 w-4 text-cyan-400" />
                      <span>Online</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <div className="text-cyan-400 font-semibold">
                      Level: {course.level}
                    </div>
                  </div>
                </div>
                <Button
                  onClick={() => scrollToSection("contact")}
                  className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold transition-all duration-300"
                >
                  Enroll Now
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View All / See Less Button */}
        {filteredCourses.length > 6 && (
          <div className="text-center">
            <Button
              onClick={() => setShowAll(!showAll)}
              className="bg-slate-900/50 hover:bg-slate-600 text-white font-semibold px-8 py-3 rounded-lg transition-all duration-300"
            >
              {showAll ? "See Less" : "View All Training Courses"}
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Training;
