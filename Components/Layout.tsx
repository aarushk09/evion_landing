import React from "react";
import { Leaf, Menu, X } from "lucide-react";
import { Button } from "../Components/ui/button";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <>
      <div className="min-h-screen bg-[#0A0A0A]">
        {/* Navigation */}
        <nav className="fixed top-0 w-full bg-[#0A0A0A]/80 backdrop-blur-md border-b border-slate-800/50 z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-20">
              {/* Logo */}
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 bg-lime-400 rounded-lg flex items-center justify-center">
                  <Leaf className="w-5 h-5 text-black" />
                </div>
                <div className="text-2xl font-bold text-white">Evion</div>
              </div>

              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center gap-8">
                <button 
                  onClick={() => scrollToSection('features')}
                  className="text-slate-300 hover:text-white font-medium transition-colors"
                >
                  Features
                </button>
                <button 
                  onClick={() => scrollToSection('process')}
                  className="text-slate-300 hover:text-white font-medium transition-colors"
                >
                  How it Works
                </button>
                <button 
                  onClick={() => scrollToSection('benefits')}
                  className="text-slate-300 hover:text-white font-medium transition-colors"
                >
                  Benefits
                </button>
                <button 
                  onClick={() => scrollToSection('vision')}
                  className="text-slate-300 hover:text-white font-medium transition-colors"
                >
                  Vision
                </button>
                <Button variant="outline" className="border-slate-700 bg-slate-800/50 hover:bg-slate-700/50 hover:text-white text-slate-300">
                  Login
                </Button>
                <Button className="bg-lime-400 hover:bg-lime-500 text-black font-semibold">
                  Get Demo
                </Button>
              </div>

              {/* Mobile menu button */}
              <div className="md:hidden">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="text-white hover:bg-slate-800"
                >
                  {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </Button>
              </div>
            </div>

            {/* Mobile Navigation */}
            {isMenuOpen && (
              <div className="md:hidden border-t border-slate-800 bg-[#0A0A0A]">
                <div className="px-4 py-6 space-y-4">
                  <button 
                    onClick={() => scrollToSection('features')}
                    className="block text-slate-300 hover:text-white font-medium"
                  >
                    Features
                  </button>
                  <button 
                    onClick={() => scrollToSection('process')}
                    className="block text-slate-300 hover:text-white font-medium"
                  >
                    How it Works
                  </button>
                  <button 
                    onClick={() => scrollToSection('benefits')}
                    className="block text-slate-300 hover:text-white font-medium"
                  >
                    Benefits
                  </button>
                  <button 
                    onClick={() => scrollToSection('vision')}
                    className="block text-slate-300 hover:text-white font-medium"
                  >
                    Vision
                  </button>
                  <Button className="w-full bg-lime-400 hover:bg-lime-500 text-black font-semibold">
                    Get Demo
                  </Button>
                </div>
              </div>
            )}
          </div>
        </nav>

        {/* Main Content */}
        <main className="pt-20">
          {children}
        </main>

        {/* Footer */}
        <footer className="bg-[#0A0A0A] border-t border-slate-800/50 text-white py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-4 gap-8">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-lime-400 rounded-lg flex items-center justify-center">
                    <Leaf className="w-5 h-5 text-black" />
                  </div>
                  <div className="text-xl font-bold">Evion</div>
                </div>
                <p className="text-slate-400">
                  Revolutionizing crop health analysis with AI-powered RGB to NDVI conversion.
                </p>
              </div>
              
              <div>
                <h3 className="font-semibold mb-4 text-slate-200">Product</h3>
                <ul className="space-y-2 text-slate-400">
                  <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">How it Works</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">API</a></li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold mb-4 text-slate-200">Company</h3>
                <ul className="space-y-2 text-slate-400">
                  <li><a href="#" className="hover:text-white transition-colors">About</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold mb-4 text-slate-200">Support</h3>
                <ul className="space-y-2 text-slate-400">
                  <li><a href="#" className="hover:text-white transition-colors">Documentation</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Community</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Status</a></li>
                </ul>
              </div>
            </div>
            
            <div className="border-t border-slate-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
              <p className="text-slate-400">© 2024 Evion. All rights reserved.</p>
              <div className="flex gap-6 mt-4 md:mt-0">
                <a href="#" className="text-slate-400 hover:text-white transition-colors">FB</a>
                <a href="#" className="text-slate-400 hover:text-white transition-colors">TW</a>
                <a href="#" className="text-slate-400 hover:text-white transition-colors">LN</a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
