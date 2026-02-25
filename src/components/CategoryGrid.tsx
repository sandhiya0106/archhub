import React from "react";
import { motion } from "motion/react";
import { CATEGORIES, Category } from "../types";

interface CategoryGridProps {
  onCategorySelect: (category: Category | null) => void;
  selectedCategory: Category | null;
}

export default function CategoryGrid({ onCategorySelect, selectedCategory }: CategoryGridProps) {
  return (
    <div className="flex flex-wrap gap-4 justify-center mb-16">
      <button
        onClick={() => onCategorySelect(null)}
        className={`px-6 py-3 text-[10px] font-bold uppercase tracking-[0.2em] border transition-all ${
          selectedCategory === null 
            ? "bg-ink text-paper border-ink" 
            : "bg-transparent text-ink border-ink/10 hover:border-ink"
        }`}
      >
        All Projects
      </button>
      {CATEGORIES.map((cat) => (
        <button
          key={cat}
          onClick={() => onCategorySelect(cat)}
          className={`px-6 py-3 text-[10px] font-bold uppercase tracking-[0.2em] border transition-all ${
            selectedCategory === cat 
              ? "bg-ink text-paper border-ink" 
              : "bg-transparent text-ink border-ink/10 hover:border-ink"
          }`}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}
