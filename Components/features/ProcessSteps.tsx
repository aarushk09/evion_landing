import React from 'react';
import { Camera, Upload, Cpu, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";

interface Step {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  color: string;
}

const steps: Step[] = [
  {
    icon: Camera,
    title: "Capture RGB",
    description: "Use your existing drone or camera to capture standard RGB images.",
    color: "text-blue-400"
  },
  {
    icon: Upload,
    title: "Upload to Evion",
    description: "Our secure platform processes your images instantly.",
    color: "text-purple-400"
  },
  {
    icon: Cpu,
    title: "AI Transforms & Analyzes",
    description: "Our proprietary ML model instantly converts RGB to precise NDVI, identifying health trends.",
    color: "text-green-400"
  },
  {
    icon: TrendingUp,
    title: "Actionable Insights",
    description: "Receive clear maps and reports to make informed decisions.",
    color: "text-lime-400"
  }
];

interface TimelineStepProps {
  step: Step;
  index: number;
}

const TimelineStep = ({ step, index }: TimelineStepProps) => {
  const isEven = index % 2 === 0;
  
  return (
    <div className="relative mb-16 last:mb-0">
      <div className="flex items-center">
        {/* Left side content for even steps */}
        {isEven && (
          <motion.div
            className="w-1/2 pr-8 text-right"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <h3 className="text-2xl font-bold text-white mb-2">{step.title}</h3>
            <p className="text-slate-400">{step.description}</p>
          </motion.div>
        )}

        {/* Center circle with icon */}
        <motion.div
          className="relative z-20 flex-shrink-0"
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 0.5, type: 'spring', stiffness: 300, delay: index * 0.2 }}
        >
          <div className="w-16 h-16 rounded-full bg-slate-900 border-2 border-slate-700 flex items-center justify-center shadow-lg">
            <div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center">
              <step.icon className={`w-6 h-6 ${step.color}`} />
            </div>
          </div>
        </motion.div>

        {/* Right side content for odd steps */}
        {!isEven && (
          <motion.div
            className="w-1/2 pl-8 text-left"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <h3 className="text-2xl font-bold text-white mb-2">{step.title}</h3>
            <p className="text-slate-400">{step.description}</p>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default function ProcessSteps() {
  return (
    <section id="process" className="py-24 bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-editorial text-4xl md:text-6xl text-white mb-4"
          >
            RGB In. Insights Out.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xl text-slate-400"
          >
            A simple, four-step workflow.
          </motion.p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Vertical timeline line */}
          <motion.div
            className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-lime-500/30 via-lime-500/60 to-lime-500/30 z-10"
            initial={{ height: 0 }}
            whileInView={{ height: '100%' }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          />

          {/* Timeline steps */}
          <div className="relative z-20">
            {steps.map((step, index) => (
              <TimelineStep key={index} step={step} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}