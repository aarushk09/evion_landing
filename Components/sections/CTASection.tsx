import React from 'react';
import { Button } from "../../Components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function CTASection() {
  return (
    <section className="py-24 bg-[#0A0A0A] relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 w-[60rem] h-[60rem] bg-lime-900/20 rounded-full blur-3xl opacity-40 -translate-x-1/2 -translate-y-1/2" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-editorial text-5xl md:text-7xl text-white mb-6">
            Ready to Transform
            <br />
            Your Farm's Future?
          </h2>
          
          <p className="text-xl text-slate-400 mb-12 max-w-3xl mx-auto">
            Experience the power of RGB to NDVI conversion. Connect with Evion today and discover 
            how AI can revolutionize your crop health analysis.
          </p>

          <div className="flex justify-center items-center mb-16">
            <Button 
              size="lg" 
              className="bg-lime-400 hover:bg-lime-500 text-black shadow-lg shadow-lime-500/10 hover:shadow-lime-500/20 transition-all duration-300 px-10 py-4 text-xl font-semibold group"
            >
              Get a Demo
              <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}