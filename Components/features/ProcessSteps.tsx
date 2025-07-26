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
}];

interface StepProps {
  step: Step;
  index: number;
}

const Step = ({ step, index }: StepProps) => {
  const isRightSide = index % 2 !== 0;

  const content = (
    <div className={`p-6 max-w-md ${isRightSide ? 'text-left' : 'text-right'}`}>
      <h3 className="font-bold text-2xl mb-3 text-white">{step.title}</h3>
      <p className="text-slate-400 leading-relaxed">{step.description}</p>
    </div>
  );

  return (
    <div className="relative flex justify-center items-start mb-20 last:mb-0">
      {/* Left side content */}
      <motion.div
        className="w-1/2 flex justify-end"
        initial={{ opacity: 0, x: -40 }}
        whileInView={!isRightSide ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        {!isRightSide && content}
      </motion.div>

      {/* Circle in the middle */}
      <motion.div
        className="absolute left-1/2 -translate-x-1/2 z-10"
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 0.5, type: 'spring', stiffness: 300, damping: 20, delay: 0.1 }}
      >
        <div className="w-20 h-20 rounded-full bg-slate-900 border-2 border-slate-700 flex items-center justify-center">
          <div className="w-16 h-16 rounded-full bg-slate-800/80 flex items-center justify-center">
            <step.icon className={`w-8 h-8 ${step.color}`} />
          </div>
        </div>
      </motion.div>

      {/* Right side content */}
      <motion.div
        className="w-1/2 flex justify-start"
        initial={{ opacity: 0, x: 40 }}
        whileInView={isRightSide ? { opacity: 1, x: 0 } : { opacity: 0, x: 40 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        {isRightSide && content}
      </motion.div>
    </div>
  );
};


export default function ProcessSteps() {
  return (
    <section id="process" className="py-24 bg-slate-900/50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-editorial text-4xl md:text-6xl text-white mb-4">
            RGB In. Insights Out.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xl text-slate-400">
            A simple, four-step workflow.
          </motion.p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* The connecting line */}
          <motion.div
            className="absolute left-1/2 transform -translate-x-1/2 top-10 bottom-10 w-0.5 bg-gradient-to-b from-transparent via-lime-500/50 to-transparent"
            initial={{ height: 0 }}
            whileInView={{ height: 'calc(100% - 5rem)' }}
            transition={{ duration: 2, ease: "linear" }}
          />

          {steps.map((step, index) => (
            <Step key={index} step={step} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}