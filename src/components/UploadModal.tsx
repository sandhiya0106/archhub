import React from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, Upload, Sparkles, Loader2 } from "lucide-react";
import { Project, CATEGORIES, Category } from "../types";

interface UploadModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: (project: Project) => void;
}

export default function UploadModal({ isOpen, onClose, onSuccess }: UploadModalProps) {
  const [formData, setFormData] = React.useState({
    title: "",
    architect: "",
    location: "",
    category: CATEGORIES[0] as Category,
    area: "",
    description: "",
    image: ""
  });
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData(prev => ({ ...prev, image: reader.result as string }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.image) {
      alert("Please upload an image");
      return;
    }
    setIsSubmitting(true);
    
    // Simulate a short delay for "uploading"
    setTimeout(() => {
      const newProject: Project = {
        ...formData,
        id: Math.floor(Math.random() * 1000000),
        createdAt: new Date().toISOString()
      };
      
      onSuccess(newProject);
      onClose();
      setFormData({
        title: "",
        architect: "",
        location: "",
        category: CATEGORIES[0],
        area: "",
        description: "",
        image: ""
      });
      setIsSubmitting(false);
    }, 800);
  };

  return (
    <AnimatePresence>
      {isOpen && (
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
            className="relative bg-paper w-full max-w-4xl max-h-[90vh] overflow-y-auto shadow-2xl"
          >
            <div className="sticky top-0 bg-paper border-b border-ink/5 p-6 flex justify-between items-center z-10">
              <h2 className="serif text-3xl font-medium">Upload Design</h2>
              <button onClick={onClose} className="p-2 hover:bg-ink/5 rounded-full transition-colors">
                <X size={24} />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="p-8 grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-widest mb-2">Project Title</label>
                  <input
                    required
                    type="text"
                    value={formData.title}
                    onChange={e => setFormData(prev => ({ ...prev, title: e.target.value }))}
                    className="w-full bg-ink/5 border-none p-4 text-sm focus:ring-1 focus:ring-accent outline-none"
                    placeholder="e.g. The Glass Pavilion"
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-widest mb-2">Architect Name</label>
                  <input
                    required
                    type="text"
                    value={formData.architect}
                    onChange={e => setFormData(prev => ({ ...prev, architect: e.target.value }))}
                    className="w-full bg-ink/5 border-none p-4 text-sm focus:ring-1 focus:ring-accent outline-none"
                    placeholder="e.g. Ludwig Mies van der Rohe"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-widest mb-2">Location</label>
                    <input
                      required
                      type="text"
                      value={formData.location}
                      onChange={e => setFormData(prev => ({ ...prev, location: e.target.value }))}
                      className="w-full bg-ink/5 border-none p-4 text-sm focus:ring-1 focus:ring-accent outline-none"
                      placeholder="City, Country"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-widest mb-2">Area Size</label>
                    <input
                      required
                      type="text"
                      value={formData.area}
                      onChange={e => setFormData(prev => ({ ...prev, area: e.target.value }))}
                      className="w-full bg-ink/5 border-none p-4 text-sm focus:ring-1 focus:ring-accent outline-none"
                      placeholder="e.g. 2,500 sq.ft"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-widest mb-2">Category</label>
                  <select
                    value={formData.category}
                    onChange={e => setFormData(prev => ({ ...prev, category: e.target.value as Category }))}
                    className="w-full bg-ink/5 border-none p-4 text-sm focus:ring-1 focus:ring-accent outline-none appearance-none"
                  >
                    {CATEGORIES.map(cat => (
                      <option key={cat} value={cat}>{cat}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-widest mb-2">Description</label>
                  <textarea
                    required
                    rows={4}
                    value={formData.description}
                    onChange={e => setFormData(prev => ({ ...prev, description: e.target.value }))}
                    className="w-full bg-ink/5 border-none p-4 text-sm focus:ring-1 focus:ring-accent outline-none resize-none"
                    placeholder="Describe the architectural philosophy..."
                  />
                </div>

                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-widest mb-2">Project Image</label>
                  <div className="relative aspect-video bg-ink/5 border-2 border-dashed border-ink/10 flex flex-col items-center justify-center overflow-hidden group">
                    {formData.image ? (
                      <>
                        <img src={formData.image} alt="Preview" className="w-full h-full object-cover" />
                        <div className="absolute inset-0 bg-ink/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                          <label className="cursor-pointer bg-paper text-ink px-4 py-2 text-xs font-bold uppercase tracking-widest">
                            Change Image
                            <input type="file" accept="image/*" className="hidden" onChange={handleImageChange} />
                          </label>
                        </div>
                      </>
                    ) : (
                      <label className="cursor-pointer flex flex-col items-center gap-3">
                        <Upload className="text-ink/20" size={32} />
                        <span className="text-xs font-medium opacity-40">Click to upload image</span>
                        <input type="file" accept="image/*" className="hidden" onChange={handleImageChange} />
                      </label>
                    )}
                  </div>
                </div>

                <button
                  disabled={isSubmitting}
                  type="submit"
                  className="w-full bg-ink text-paper py-5 text-sm font-bold uppercase tracking-widest hover:bg-accent transition-colors flex items-center justify-center gap-3 disabled:opacity-50"
                >
                  {isSubmitting ? <Loader2 className="animate-spin" size={18} /> : "Publish Project"}
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
