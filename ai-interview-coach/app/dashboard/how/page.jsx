"use client";
import React, { useEffect, useRef } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const steps = [
  {
    number: "01",
    title: "Create Your Interview",
    description:
      "Click '+ Add New' on the dashboard. Enter your target job title, tech stack or job description, and years of experience. Our AI uses this to craft personalized interview questions just for you.",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-10 h-10">
        <rect
          x="6"
          y="8"
          width="28"
          height="24"
          rx="3"
          stroke="currentColor"
          strokeWidth="2"
        />
        <path
          d="M13 20h14M20 13v14"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Enable Camera & Mic",
    description:
      "Allow access to your webcam and microphone. This simulates a real interview environment so you can practice speaking naturally and confidently on camera.",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-10 h-10">
        <rect
          x="8"
          y="10"
          width="18"
          height="14"
          rx="2"
          stroke="currentColor"
          strokeWidth="2"
        />
        <path
          d="M26 15l6-4v18l-6-4V15z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinejoin="round"
        />
        <circle cx="17" cy="17" r="3" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Answer the Questions",
    description:
      "Five AI-generated questions appear one by one. Click 'Record Answer', speak your response clearly, then click again to stop. Move through each question at your own pace.",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-10 h-10">
        <circle cx="20" cy="16" r="6" stroke="currentColor" strokeWidth="2" />
        <path
          d="M12 16c0 4.418 3.582 8 8 8s8-3.582 8-8"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M20 24v6M16 30h8"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    number: "04",
    title: "Get AI Feedback",
    description:
      "After completing all questions, click 'End Interview'. The AI evaluates each answer and gives you a rating out of 10, the ideal answer, and specific feedback on how to improve.",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-10 h-10">
        <path
          d="M10 20l6 6 14-14"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="20" cy="20" r="13" stroke="currentColor" strokeWidth="2" />
      </svg>
    ),
  },
];

const features = [
  {
    title: "Personalized Questions",
    description:
      "Questions are tailored to your exact job role, tech stack, and experience level — not generic templates.",
  },
  {
    title: "Real-time Speech Recognition",
    description:
      "Your spoken answers are transcribed live so you can focus on speaking, not typing.",
  },
  {
    title: "Instant AI Evaluation",
    description:
      "Each answer is scored and compared against the ideal response with actionable improvement tips.",
  },
  {
    title: "Practice Anytime",
    description:
      "No scheduling needed. Practice as many interviews as you want, whenever you want.",
  },
  {
    title: "Track Progress",
    description:
      "Review past interviews and feedback from your dashboard to measure how you're improving over time.",
  },
  {
    title: "Camera Simulation",
    description:
      "Practice on camera just like a real video interview — build comfort and reduce anxiety.",
  },
];

export default function HowItWorks() {
  const stepRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in");
          }
        });
      },
      { threshold: 0.15 },
    );
    stepRefs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <style>{`
        .step-card { opacity: 0; transform: translateY(32px); transition: opacity 0.6s ease, transform 0.6s ease; }
        .step-card.animate-in { opacity: 1; transform: translateY(0); }
        .step-card:nth-child(2) { transition-delay: 0.1s; }
        .step-card:nth-child(3) { transition-delay: 0.2s; }
        .step-card:nth-child(4) { transition-delay: 0.3s; }
        .feature-card { transition: transform 0.2s ease, box-shadow 0.2s ease; }
        .feature-card:hover { transform: translateY(-4px); box-shadow: 0 12px 32px rgba(0,0,0,0.1); }
      `}</style>

      {/* Hero */}
      <div className="bg-white border-b">
        <div className="max-w-4xl mx-auto px-6 py-16 text-center">
          <span className="inline-block bg-gray-100 text-gray-600 text-sm font-medium px-4 py-1.5 rounded-full mb-6">
            How It Works
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-5 leading-tight">
            Ace your next interview
            <br />
            with AI-powered practice
          </h1>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto mb-8">
            AI Interview Coach simulates real job interviews using your camera
            and microphone, then gives you detailed feedback to help you improve
            — in just minutes.
          </p>
          <Link href="/dashboard">
            <Button className="bg-gray-900 text-white hover:bg-gray-700 px-8 py-3 text-base rounded-lg">
              Start Practicing Free
            </Button>
          </Link>
        </div>
      </div>

      {/* Steps */}
      <div className="max-w-5xl mx-auto px-6 py-20">
        <h2 className="text-2xl font-bold text-gray-900 text-center mb-3">
          Four simple steps
        </h2>
        <p className="text-gray-500 text-center mb-14">
          From setup to feedback in under 10 minutes
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {steps.map((step, i) => (
            <div
              key={i}
              ref={(el) => (stepRefs.current[i] = el)}
              className="step-card bg-white rounded-2xl p-8 border border-gray-200 shadow-sm"
            >
              <div className="flex items-start gap-5">
                <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-gray-900 text-white flex items-center justify-center">
                  {step.icon}
                </div>
                <div>
                  <span className="text-xs font-bold text-gray-400 tracking-widest uppercase">
                    Step {step.number}
                  </span>
                  <h3 className="text-lg font-bold text-gray-900 mt-1 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Features */}
      <div className="bg-white border-t border-b">
        <div className="max-w-5xl mx-auto px-6 py-20">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-3">
            Why use AI Interview Coach?
          </h2>
          <p className="text-gray-500 text-center mb-14">
            Everything you need to prepare with confidence
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {features.map((f, i) => (
              <div
                key={i}
                className="feature-card bg-gray-50 rounded-xl p-6 border border-gray-200"
              >
                <div className="w-8 h-8 rounded-lg bg-gray-900 mb-4 flex items-center justify-center">
                  <div className="w-2 h-2 bg-white rounded-full" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{f.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {f.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="max-w-2xl mx-auto px-6 py-20 text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Ready to start practicing?
        </h2>
        <p className="text-gray-500 mb-8">
          Create your first mock interview in under a minute. No credit card
          required.
        </p>
        <Link href="/dashboard">
          <Button className="bg-gray-900 text-white hover:bg-gray-700 px-8 py-3 text-base rounded-lg">
            Go to Dashboard
          </Button>
        </Link>
      </div>
    </div>
  );
}
