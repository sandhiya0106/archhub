import React from "react";
import { motion } from "motion/react";
import { MapPin, Maximize2 } from "lucide-react";
import { Project } from "../types";

interface ProjectCardProps {
  project: Project;
  onClick: (project: Project) => void;
  key?: React.Key;
}

export default function ProjectCard({ project, onClick }: ProjectCardProps) {
  return (
    <motion.div 
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -10 }}
      className="group cursor-pointer"
      onClick={() => onClick(project)}
    >
      <div className="relative aspect-[4/5] overflow-hidden mb-6 bg-ink/5">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-ink/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
          <div className="w-12 h-12 rounded-full bg-paper flex items-center justify-center text-ink">
            <Maximize2 size={20} />
          </div>
        </div>
        <div className="absolute top-4 left-4">
          <span className="bg-paper/90 backdrop-blur-sm text-[10px] font-bold uppercase tracking-widest px-3 py-1.5">
            {project.category}
          </span>
        </div>
      </div>
      
      <div className="space-y-2">
        <div className="flex items-center gap-2 text-accent text-[10px] font-bold uppercase tracking-widest">
          <MapPin size={10} />
          {project.location}
        </div>
        <h3 className="serif text-2xl font-medium group-hover:text-accent transition-colors">
          {project.title}
        </h3>
        <div className="flex justify-between items-center pt-2 border-t border-ink/5">
          <span className="text-[11px] uppercase tracking-widest font-medium opacity-60">
            By {project.architect}
          </span>
          <span className="text-[11px] font-mono opacity-40">
            {project.area}
          </span>
        </div>
      </div>
    </motion.div>
  );
}
