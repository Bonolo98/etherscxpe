"use client";
import type React from "react";
import { useState } from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { cn } from "@/lib/utils";
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";

export default function ContactPage() {
  // Replace with your actual contact information
  const contactInfo = {
    address: "Johannesburg",
    email: "bonolosolomon9846@gmail.com",
    phone: "064 862 1677",
    hours: "Monday - Friday: 9AM - 5PM",
  };

  const [status, setStatus] = useState({
    submitted: false,
    submitting: false,
    info: { error: false, msg: null as string | null },
  });

  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleServerResponse = (ok: boolean, msg: string) => {
    if (ok) {
      setStatus({
        submitted: true,
        submitting: false,
        info: { error: false, msg },
      });
      setInputs({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
    } else {
      setStatus({
        submitted: false,
        submitting: false,
        info: { error: true, msg },
      });
    }
  };

  const handleOnChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    e.persist();
    setInputs((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
    setStatus({
      submitted: false,
      submitting: false,
      info: { error: false, msg: null },
    });
  };

  const handleOnSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus((prevStatus) => ({ ...prevStatus, submitting: true }));

    // Replace with your Formspree endpoint
    const formspreeEndpoint = "https://formspree.io/f/mjkypyyy";

    try {
      const response = await fetch(formspreeEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(inputs),
      });

      const data = await response.json();
      handleServerResponse(
        response.ok,
        response.ok
          ? "Thank you for your message. We'll get back to you soon!"
          : data.error
      );
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      handleServerResponse(
        false,
        "An error occurred while submitting the form."
      );
    }
  };

  return (
    <>
      <div className="w-full max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Contact Information */}

        <div className="shadow-input rounded-2xl bg-white p-6 dark:bg-black">
          <h2 className="text-2xl font-bold text-neutral-800 dark:text-neutral-200 mb-6">
            Get in Touch
          </h2>

          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="bg-gray-100 p-3 rounded-full dark:bg-zinc-800">
                <MapPin className="h-5 w-5 text-neutral-700 dark:text-neutral-300" />
              </div>
              <div>
                <h3 className="font-medium text-neutral-800 dark:text-neutral-200">
                  Address
                </h3>
                <p className="mt-1 text-neutral-600 dark:text-neutral-400">
                  {contactInfo.address}
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-gray-100 p-3 rounded-full dark:bg-zinc-800">
                <Mail className="h-5 w-5 text-neutral-700 dark:text-neutral-300" />
              </div>
              <div>
                <h3 className="font-medium text-neutral-800 dark:text-neutral-200">
                  Email
                </h3>
                <p className="mt-1 text-neutral-600 dark:text-neutral-400">
                  {contactInfo.email}
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-gray-100 p-3 rounded-full dark:bg-zinc-800">
                <Phone className="h-5 w-5 text-neutral-700 dark:text-neutral-300" />
              </div>
              <div>
                <h3 className="font-medium text-neutral-800 dark:text-neutral-200">
                  Phone
                </h3>
                <p className="mt-1 text-neutral-600 dark:text-neutral-400">
                  {contactInfo.phone}
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-gray-100 p-3 rounded-full dark:bg-zinc-800">
                <Clock className="h-5 w-5 text-neutral-700 dark:text-neutral-300" />
              </div>
              <div>
                <h3 className="font-medium text-neutral-800 dark:text-neutral-200">
                  Business Hours
                </h3>
                <p className="mt-1 text-neutral-600 dark:text-neutral-400">
                  {contactInfo.hours}
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8">
            <div className="h-[200px] w-full rounded-lg bg-gray-200 dark:bg-zinc-800 flex items-center justify-center">
              <p className="text-neutral-500 dark:text-neutral-400">
                Map placeholder
              </p>
              {/* You can replace this with an actual map component */}
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="shadow-input rounded-2xl bg-white p-6 dark:bg-black">
          <h2 className="text-2xl font-bold text-neutral-800 dark:text-neutral-200 mb-6">
            Send Us a Message
          </h2>

          <form className="space-y-4" onSubmit={handleOnSubmit}>
            <LabelInputContainer>
              <Label htmlFor="name">Full Name</Label>
              <Input
                id="name"
                placeholder="John Doe"
                type="text"
                value={inputs.name}
                onChange={handleOnChange}
                required
              />
            </LabelInputContainer>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <LabelInputContainer>
                <Label htmlFor="email">Email Address</Label>
                <Input
                  id="email"
                  placeholder="you@example.com"
                  type="email"
                  value={inputs.email}
                  onChange={handleOnChange}
                  required
                />
              </LabelInputContainer>

              <LabelInputContainer>
                <Label htmlFor="phone">Phone Number</Label>
                <Input
                  id="phone"
                  placeholder="+1 (555) 123-4567"
                  type="tel"
                  value={inputs.phone}
                  onChange={handleOnChange}
                />
              </LabelInputContainer>
            </div>

            <LabelInputContainer>
              <Label htmlFor="subject">Subject</Label>
              <Input
                id="subject"
                placeholder="How can we help you?"
                type="text"
                value={inputs.subject}
                onChange={handleOnChange}
                required
              />
            </LabelInputContainer>

            <LabelInputContainer>
              <Label htmlFor="message">Message</Label>
              <Textarea
                id="message"
                placeholder="Your message here..."
                className="min-h-[120px] shadow-input dark:placeholder-text-neutral-600 w-full rounded-md border-none bg-gray-50 px-3 py-2 text-sm text-black transition duration-400 file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-neutral-400 focus-visible:ring-[2px] focus-visible:ring-neutral-400 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 dark:bg-zinc-800 dark:text-white dark:shadow-[0px_0px_1px_1px_#404040] dark:focus-visible:ring-neutral-600"
                value={inputs.message}
                onChange={handleOnChange}
                required
              />
            </LabelInputContainer>

            <button
              className="group/btn relative flex h-10 w-full items-center justify-center rounded-md bg-gradient-to-br from-teal-500 to-emerald-600 font-medium text-white shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] disabled:opacity-70 disabled:cursor-not-allowed"
              type="submit"
              disabled={status.submitting}
            >
              {!status.submitting ? (
                <>
                  <Send className="h-4 w-4 mr-2" />
                  {!status.submitted ? "Send Message" : "Message Sent"}
                </>
              ) : (
                "Sending..."
              )}
              <BottomGradient />
            </button>

            {status.info.error && (
              <div className="mt-4 p-3 bg-red-50 text-red-700 rounded-md text-sm dark:bg-red-900/30 dark:text-red-400">
                Error: {status.info.msg}
              </div>
            )}

            {!status.info.error && status.info.msg && (
              <div className="mt-4 p-3 bg-green-50 text-green-700 rounded-md text-sm dark:bg-green-900/30 dark:text-green-400">
                {status.info.msg}
              </div>
            )}
          </form>
        </div>
      </div>
    </>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="absolute inset-x-0 -bottom-px block h-px w-full bg-gradient-to-r from-transparent via-teal-500 to-transparent opacity-0 transition duration-500 group-hover/btn:opacity-100" />
      <span className="absolute inset-x-10 -bottom-px mx-auto block h-px w-1/2 bg-gradient-to-r from-transparent via-emerald-500 to-transparent opacity-0 blur-sm transition duration-500 group-hover/btn:opacity-100" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex w-full flex-col space-y-2", className)}>
      {children}
    </div>
  );
};
