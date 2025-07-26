import React, { useRef, useState } from 'react';
import { Card, CardContent } from "../../Components/ui/card";
import { MapPin, DollarSign, AlertCircle, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";

interface Benefit {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  color: string;
}

const benefits: Benefit[] = [
    {
      icon: MapPin,
      title: "Precision Health Mapping",
      description: "Detailed NDVI maps from RGB data reveal crop health variations you couldn't see before.",
      color: "text-blue-400",
    },
    {
      icon: DollarSign,
      title: "Cost Efficiency",
      description: "Eliminate the need for expensive NIR sensors and specialized equipment.",
      color: "text-green-400",
    },
    {
      icon: AlertCircle,
      title: "Early Problem Detection",
      description: "Identify stress, disease, and nutrient deficiencies sooner, with greater accuracy.",
      color: "text-orange-400",
    },
    {
      icon: TrendingUp,
      title: "Yield Optimization",
      description: "Make data-driven decisions for targeted irrigation, fertilization, and resource allocation.",
      color: "text-purple-400",
    }
];

interface BenefitCardProps {
  benefit: Benefit;
  index: number;
}

const BenefitCard = ({ benefit, index }: BenefitCardProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: "-50%", y: "-50%" });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      setMousePosition({ x: `${x}px`, y: `${y}px` });
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      <Card 
        ref={ref}
        onMouseMove={handleMouseMove}
        className="h-full border border-slate-800 bg-slate-900/40 transition-all duration-300 group relative overflow-hidden"
      >
        <motion.div 
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{
            background: `radial-gradient(circle at ${mousePosition.x} ${mousePosition.y}, rgba(163, 230, 53, 0.1) 0%, transparent 50%)`,
          }}
        />
        <CardContent className="p-8 relative z-10">
          <div className={`mb-6 w-12 h-12 flex items-center justify-center bg-slate-800 rounded-lg border border-slate-700`}>
            <benefit.icon className={`w-8 h-8 ${benefit.color} group-hover:scale-110 transition-transform duration-300`} />
          </div>
          <h3 className="text-2xl font-bold text-white mb-4">{benefit.title}</h3>
          <p className="text-slate-400 text-lg leading-relaxed">{benefit.description}</p>
        </CardContent>
      </Card>
    </motion.div>
  );
};


export default function BenefitsGrid() {
  return (
    <section id="benefits" className="py-24 bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-editorial text-4xl md:text-6xl text-white mb-4"
          >
            Unlock Agricultural Intelligence
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {benefits.map((benefit, index) => (
            <BenefitCard key={index} benefit={benefit} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}