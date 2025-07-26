
import React from 'react';
import { Button } from "../../Components/ui/button";
import { ArrowRight, Play, Zap, ImageIcon, BarChartHorizontal } from "lucide-react";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-[#0A0A0A] pt-24 pb-20">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-[50rem] h-[50rem] bg-green-900/20 rounded-full blur-3xl opacity-30" />
        <div className="absolute bottom-0 right-0 w-[40rem] h-[40rem] bg-lime-900/20 rounded-full blur-3xl opacity-30" />
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-5xl mx-auto">
          {/* Badge */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-slate-800/50 border border-slate-700/50 rounded-full px-4 py-2 mb-8"
          >
            <Zap className="w-4 h-4 text-lime-400" />
            <span className="text-sm font-medium text-slate-300">Revolutionizing Crop Health Analysis</span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-editorial text-6xl md:text-8xl tracking-tight mb-6 text-slate-100"
          >
            See Your Farm's Future
            <br />
            in <span className="text-lime-400">Full Color</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-slate-400 mb-10 leading-relaxed max-w-3xl mx-auto"
          >
            Convert standard RGB images into precise NDVI data with AI.
            <br className="hidden md:block" />
            <span className="font-semibold text-slate-200">Save Costs. Maximize Yields.</span>
          </motion.p>

          {/* CTA Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
          >
            <Button 
              size="lg" 
              className="bg-lime-400 hover:bg-lime-500 text-black shadow-lg shadow-lime-500/10 hover:shadow-lime-500/20 transition-all duration-300 px-8 py-3 text-lg font-semibold group"
            >
              Get a Demo
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border border-slate-700 bg-slate-800/50 text-slate-300 hover:border-slate-500 hover:text-white hover:bg-slate-700/50 px-8 py-3 text-lg font-semibold group"
            >
              <Play className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform" />
              Watch Demo
            </Button>
          </motion.div>

          {/* Visual Comparison */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="relative max-w-5xl mx-auto"
          >
            <div className="bg-slate-900/50 backdrop-blur-sm rounded-2xl border border-slate-800 shadow-2xl shadow-black/20 p-8">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="space-y-4">
                  <div className="text-sm font-semibold text-slate-400 uppercase tracking-wider">RGB Input</div>
                  <div className="aspect-video bg-slate-800/50 rounded-xl border border-slate-700 flex items-center justify-center">
                    <div className="text-center text-slate-500">
                      <ImageIcon className="w-12 h-12 mx-auto mb-3" />
                      <p className="font-medium">Standard RGB Image</p>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="text-sm font-semibold text-lime-400 uppercase tracking-wider">NDVI Output</div>
                  <div className="aspect-video bg-lime-900/10 rounded-xl border border-lime-800/50 flex items-center justify-center">
                     <div className="text-center text-lime-400">
                      <BarChartHorizontal className="w-12 h-12 mx-auto mb-3" />
                      <p className="font-medium">Precise Health Analysis</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 hidden md:block">
                <div className="bg-slate-800 rounded-full p-3 shadow-lg border-2 border-slate-700">
                  <ArrowRight className="w-6 h-6 text-lime-400" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
