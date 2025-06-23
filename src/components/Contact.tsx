"use client";

import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import SpinnerMini from "./ui/SpinnerMini";
import {  FaLinkedin } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { FaFacebook, FaInstagram } from "react-icons/fa6";

type FormValues = {
  name: string;
  email: string;
  company: string;
  service: string;
  message: string;
};

const Contact = () => {
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit = async (data: FormValues) => {
    setLoading(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) throw new Error("Failed to send");

      toast.success("Message sent!");
      reset();
    } catch {
      setLoading(false);
      toast.error("Error sending message. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-20 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold  mb-4">
            Get Your Free Security Consultation
          </h2>
          <p className="text-xl max-w-3xl mx-auto">
            Ready to strengthen your cybersecurity posture? Our experts are
            standing by to help assess your current security and recommend the
            best solutions for your business.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <Card className="bg-white dark:bg-slate-800 text-gray-500 dark:text-white">
            <CardHeader>
              <CardTitle className=" text-2xl">
                Request Free Consultation
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm text-gray-300 mb-2"
                    >
                      Full Name *
                    </label>
                    <Input
                      {...register("name", { required: "Name is required" })}
                      placeholder="John Doe"
                    />
                    {errors.name && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.name.message}
                      </p>
                    )}
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm text-gray-300 mb-2"
                    >
                      Email Address *
                    </label>
                    <Input
                      {...register("email", { required: "Email is required" })}
                      type="email"
                      placeholder="john@company.com"
                    />
                    {errors.email && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.email.message}
                      </p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="company"
                      className="block text-gray-300 text-sm mb-2"
                    >
                      Company Name
                    </label>
                    <Input
                      {...register("company")}
                      placeholder="Your Company"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="service"
                      className="block text-sm text-gray-300 mb-2"
                    >
                      Service of Interest
                    </label>
                    <Controller
                      control={control}
                      name="service"
                      render={({ field }) => (
                        <Select
                          onValueChange={field.onChange}
                          value={field.value}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select a Service" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="penetration-testing">
                              Penetration Testing
                            </SelectItem>
                            <SelectItem value="vulnerability-assessment">
                              Vulnerability Assessment
                            </SelectItem>
                            <SelectItem value="cloud-security">
                              Cloud Security
                            </SelectItem>
                            <SelectItem value="Enrolling">
                              Enroll for a course
                            </SelectItem>
                            <SelectItem value="consulting">
                              General Consulting
                            </SelectItem>
                          </SelectContent>
                        </Select>
                      )}
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm text-gray-300 mb-2"
                  >
                    Message
                  </label>
                  <Textarea
                    {...register("message", {
                      required: "Message is required",
                    })}
                    rows={4}
                    placeholder="Tell us about your security needs..."
                  />
                  {errors.message && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.message.message}
                    </p>
                  )}
                </div>

                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold py-3 rounded-lg transition-all duration-300 shadow-lg hover:shadow-cyan-500/25"
                  disabled={loading}
                >
                  {loading ? <SpinnerMini /> : "Get Free Consultation"}
                </Button>
              </form>
            </CardContent>
          </Card>
          {/* Contact Information */}
          <div className="space-y-8 ">
            <Card className="bg-white dark:bg-slate-800 text-gray-500 dark:text-white">
              <CardHeader>
                <CardTitle className=" text-2xl">Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold">Phone</div>
                    <div>+234 (703) 932-5430 </div>
                    <div>+234 (901) 235-5433 </div>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <div className=" font-semibold">Email</div>
                    <div>contact@securesafetech.com</div>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <div className=" font-semibold">Address</div>
                    <div className="">
                      123 Security Blvd, Cyber City, CC 12345
                    </div>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg">
                    <Clock className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <div className=" font-semibold">Business Hours</div>
                    <div className="">Mon-Fri: 8:00 AM - 6:00 PM</div>
                    <div>Emergency Support: 24/7</div>
                  </div>
                </div>
                <div>
                  <h1>Follow Us</h1>
                  <div className="flex flex-row gap-4 py-4">
                    <a
                      href="#"
                      className="bg-gradient-to-r text-white from-cyan-500 to-blue-600 rounded-full p-3"
                    >
                      <FaLinkedin />
                    </a>
                    <a
                      href="#"
                      className="bg-gradient-to-r text-white from-cyan-500 to-blue-600 rounded-full p-3"
                    >
                      <BsTwitterX />
                    </a>
                    <a
                      href="#"
                      className="bg-gradient-to-r text-white from-cyan-500 to-blue-600 rounded-full p-3"
                    >
                      <FaFacebook />
                    </a>
                    <a
                      href="#"
                      className="bg-gradient-to-r text-white from-cyan-500 to-blue-600 rounded-full p-3"
                    >
                      <FaInstagram />
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
