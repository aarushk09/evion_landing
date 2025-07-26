import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "../../Components/ui/card";
import { AlertTriangle, CheckCircle, DollarSign, Camera, BarChart3 } from "lucide-react";
import { motion } from "framer-motion";

const ProblemItem = ({ icon: Icon, children }) => (
  <div className="flex items-start gap-3 text-slate-400">
    <Icon className="w-5 h-5 text-red-400/80 mt-1 flex-shrink-0" />
    <span>{children}</span>
  </div>
);

const SolutionItem = ({ icon: Icon, children }) => (
  <div className="flex items-start gap-3 text-slate-300">
    <Icon className="w-5 h-5 text-lime-400/80 mt-1 flex-shrink-0" />
    <span>{children}</span>
  </div>
);

export default function ProblemSolution() {
  return (
    <section id="features" className="py-24 bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-editorial text-4xl md:text-6xl text-white mb-4"
          >
            The End of Costly Hardware
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xl text-slate-400 max-w-3xl mx-auto"
          >
            Move from complex sensors to intelligent software.
          </motion.p>
        </div>

        <div className="relative grid lg:grid-cols-2 gap-8">
          <motion.div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-px h-3/4 bg-gradient-to-b from-transparent via-slate-600 to-transparent"
            initial={{ height: 0 }}
            whileInView={{ height: '75%' }}
            transition={{ duration: 0.8, delay: 0.5 }}
          />

          {/* Problem Section */}
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="h-full"
          >
            <Card className="border border-slate-800 bg-slate-900/50 h-full">
              <CardHeader className="flex-row items-center gap-4 p-6">
                <div className="w-12 h-12 bg-red-900/30 rounded-lg flex items-center justify-center flex-shrink-0 border border-red-800/50">
                  <AlertTriangle className="w-6 h-6 text-red-400" />
                </div>
                <CardTitle className="text-2xl font-bold text-white">The Old Way</CardTitle>
              </CardHeader>
              <CardContent className="px-6 pb-6">
                <p className="text-slate-300 text-lg leading-relaxed mb-8">
                  Traditional NIR sensors are expensive and complex, limiting farmers' ability to truly understand crop health.
                </p>
                <div className="space-y-4">
                  <ProblemItem icon={DollarSign}>High equipment costs ($10k+ per sensor)</ProblemItem>
                  <ProblemItem icon={BarChart3}>Complex setup and maintenance</ProblemItem>
                  <ProblemItem icon={Camera}>Limited accessibility for smaller farms</ProblemItem>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Solution Section */}
          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-full"
          >
            <Card className="border border-lime-800/50 bg-lime-900/10 h-full shadow-[0_0_30px_rgba(163,230,53,0.1)]">
              <CardHeader className="flex-row items-center gap-4 p-6">
                <div className="w-12 h-12 bg-lime-900/30 rounded-lg flex items-center justify-center flex-shrink-0 border border-lime-800/50">
                  <CheckCircle className="w-6 h-6 text-lime-400" />
                </div>
                <CardTitle className="text-2xl font-bold text-white">The Evion Way</CardTitle>
              </CardHeader>
              <CardContent className="px-6 pb-6">
                <p className="text-slate-300 text-lg leading-relaxed mb-8">
                  Evion's ML model converts standard RGB images into accurate NDVI data, making analysis accessible and affordable.
                </p>
                <div className="space-y-4">
                  <SolutionItem icon={DollarSign}>Save on equipment costs</SolutionItem>
                  <SolutionItem icon={Camera}>Use any camera or drone</SolutionItem>
                  <SolutionItem icon={BarChart3}>Instant, actionable insights</SolutionItem>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}