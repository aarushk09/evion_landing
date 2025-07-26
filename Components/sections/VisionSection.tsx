import React from 'react';
import { motion } from "framer-motion";

const VisionMetric = ({ number, label, description, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay }}
    className="text-center group"
  >
    <div className="relative mb-4">
      <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-br from-lime-400/20 to-green-400/20 border border-lime-400/30 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
        <span className="font-mono text-2xl font-bold text-lime-400">{number}</span>
      </div>
      <motion.div
        className="absolute inset-0 rounded-full bg-lime-400/10"
        initial={{ scale: 0.8, opacity: 0 }}
        whileInView={{ scale: 1.2, opacity: 0 }}
        transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
      />
    </div>
    <h3 className="text-xl font-bold text-white mb-2">{label}</h3>
    <p className="text-slate-400 text-sm leading-relaxed">{description}</p>
  </motion.div>
);

export default function VisionSection() {
  return (
    <section id="vision" className="py-24 bg-slate-900/50 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-lime-900/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-green-900/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-editorial text-4xl md:text-6xl text-white mb-6"
          >
            Our Vision: <span className="text-green-400">Smarter</span>,
            <br />
            More <span className="text-lime-400">Sustainable</span> Farms
          </motion.h2>
        </div>

        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <p className="text-xl md:text-2xl text-slate-300 leading-relaxed max-w-4xl mx-auto">
              Evion is committed to leveraging AI to make precision agriculture more accessible, 
              affordable, and sustainable for every farm. Our mission is to empower farmers with 
              actionable insights and advanced technology.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-12">
            <VisionMetric
              number="01"
              label="Accessible"
              description="Technology designed for farms of all sizes, from small family operations to large commercial enterprises"
              delay={0.2}
            />
            <VisionMetric
              number="02"
              label="Affordable"
              description="Reduce operational costs while dramatically improving crop health analysis and decision-making"
              delay={0.4}
            />
            <VisionMetric
              number="03"
              label="Sustainable"
              description="Supporting environmental stewardship through data-driven resource optimization and reduced waste"
              delay={0.6}
            />
          </div>

          {/* Call to action section */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-center mt-16"
          >
            <div className="bg-slate-900/80 backdrop-blur-sm rounded-2xl border border-slate-800 p-8 max-w-3xl mx-auto">
              <h3 className="font-mono text-lg text-lime-400 mb-4">DRIVING AGRICULTURAL INNOVATION</h3>
              <p className="text-slate-300 text-lg leading-relaxed">
                Join us in revolutionizing how farmers understand and optimize their crop health through the power of artificial intelligence.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}