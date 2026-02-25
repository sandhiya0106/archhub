import React from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, MapPin, Ruler, User, Calendar, Share2 } from "lucide-react";
import { Project } from "../types";

interface ProjectDetailModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectDetailModal({ project, onClose }: ProjectDetailModalProps) {
  if (!project) return null;

  return (
    <AnimatePresence>
      {project && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-ink/60 backdrop-blur-sm"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative bg-paper w-full max-w-6xl max-h-[90vh] overflow-y-auto shadow-2xl flex flex-col md:flex-row"
          >
            <button 
              onClick={onClose} 
              className="absolute top-6 right-6 z-20 p-2 bg-paper/80 backdrop-blur-sm hover:bg-paper rounded-full transition-colors"
            >
              <X size={24} />
            </button>

            <div className="w-full md:w-3/5 h-[40vh] md:h-auto relative bg-ink/5">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>

            <div className="w-full md:w-2/5 p-10 md:p-16 overflow-y-auto">
              <div className="mb-10">
                <span className="text-accent text-[10px] font-bold uppercase tracking-[0.3em] mb-4 block">
                  {project.category}
                </span>
                <h2 className="serif text-5xl font-medium leading-tight mb-6">
                  {project.title}
                </h2>
                <div className="flex flex-wrap gap-6 text-ink/40">
                  <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest">
                    <MapPin size={12} />
                    {project.location}
                  </div>
                  <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest">
                    <Calendar size={12} />
                    {new Date(project.createdAt).toLocaleDateString()}
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-8 mb-12 border-y border-ink/5 py-8">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-widest opacity-40 block mb-2">Architect</span>
                  <div className="flex items-center gap-2 font-medium">
                    <User size={14} className="text-accent" />
                    {project.architect}
                  </div>
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-widest opacity-40 block mb-2">Project Area</span>
                  <div className="flex items-center gap-2 font-medium">
                    <Ruler size={14} className="text-accent" />
                    {project.area}
                  </div>
                </div>
              </div>

              <div className="mb-12">
                <h4 className="text-[10px] font-bold uppercase tracking-widest mb-4">Design Philosophy</h4>
                <p className="text-ink/70 leading-relaxed text-lg italic serif">
                  "{project.description}"
                </p>
              </div>

              <button className="w-full border border-ink/10 py-4 text-xs font-bold uppercase tracking-widest hover:bg-ink hover:text-paper transition-all flex items-center justify-center gap-3">
                <Share2 size={16} />
                Share Project
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
