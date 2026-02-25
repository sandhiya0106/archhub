import React from "react";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

interface HeroProps {
  onExploreClick: () => void;
}

export default function Hero({ onExploreClick }: HeroProps) {
  return (
    <section className="relative h-screen flex items-center overflow-hidden pt-20">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=1920&q=80" 
          alt="Hero" 
          className="w-full h-full object-cover opacity-40"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-paper via-paper/80 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-accent font-medium tracking-[0.3em] uppercase text-sm mb-4 block">
              Architectural Excellence
            </span>
            <h1 className="serif text-7xl md:text-8xl font-light leading-tight mb-8">
              Designing the <br />
              <span className="italic">Future</span> of Living
            </h1>
            <p className="text-ink/60 text-lg mb-10 leading-relaxed">
              Explore a curated collection of world-class architectural designs. 
              From minimalist residential spaces to grand commercial landmarks, 
              discover the art of structural innovation.
            </p>
            
            <div className="flex flex-wrap gap-6">
              <button 
                onClick={onExploreClick}
                className="bg-ink text-paper px-10 py-5 text-sm font-bold uppercase tracking-widest hover:bg-accent transition-all flex items-center gap-3 group"
              >
                Explore Gallery
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
              
              <div className="flex items-center gap-4">
                <div className="h-[1px] w-12 bg-ink/20" />
                <span className="text-xs uppercase tracking-widest font-medium opacity-50">
                  Over 500+ Projects
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Vertical Rail Text */}
      <div className="absolute right-10 bottom-20 hidden lg:block">
        <div className="writing-vertical-rl rotate-180 text-[10px] uppercase tracking-[0.5em] font-bold opacity-20 select-none">
          ESTABLISHED MMXXIV • ARCHHUB PLATFORM
        </div>
      </div>
    </section>
  );
}
