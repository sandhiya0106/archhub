import React from "react";
import { motion, AnimatePresence } from "motion/react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import CategoryGrid from "./components/CategoryGrid";
import ProjectCard from "./components/ProjectCard";
import UploadModal from "./components/UploadModal";
import ProjectDetailModal from "./components/ProjectDetailModal";
import AuthModal from "./components/AuthModal";
import { Project, Category } from "./types";
import { STATIC_PROJECTS } from "./data";
import { Search, Filter, Loader2 } from "lucide-react";

export default function App() {
  const [projects, setProjects] = React.useState<Project[]>(STATIC_PROJECTS);
  const [loading, setLoading] = React.useState(false);
  const [selectedCategory, setSelectedCategory] = React.useState<Category | null>(null);
  const [searchQuery, setSearchQuery] = React.useState("");
  const [isUploadOpen, setIsUploadOpen] = React.useState(false);
  const [isAuthOpen, setIsAuthOpen] = React.useState(false);
  const [currentUser, setCurrentUser] = React.useState<string | null>(null);
  const [selectedProject, setSelectedProject] = React.useState<Project | null>(null);

  const filteredProjects = projects.filter(p => {
    const matchesCategory = selectedCategory ? p.category === selectedCategory : true;
    const matchesSearch = 
      p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.architect.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.location.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleUploadClick = () => {
    if (currentUser) {
      setIsUploadOpen(true);
    } else {
      setIsAuthOpen(true);
    }
  };

  const handleUploadSuccess = (newProject: Project) => {
    setProjects(prev => [newProject, ...prev]);
  };

  const handleLogout = () => {
    setCurrentUser(null);
  };

  const scrollToGallery = () => {
    document.getElementById("gallery")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen">
      <Navbar 
        onUploadClick={handleUploadClick}
        onExploreClick={scrollToGallery}
        onHomeClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        onAuthClick={() => setIsAuthOpen(true)}
        currentUser={currentUser}
        onLogout={handleLogout}
      />

      <Hero onExploreClick={scrollToGallery} />

      <main id="gallery" className="max-w-7xl mx-auto px-6 py-32">
        <div className="text-center mb-20">
          <span className="text-accent font-medium tracking-[0.3em] uppercase text-xs mb-4 block">
            Curated Collection
          </span>
          <h2 className="serif text-5xl md:text-6xl font-medium mb-8">Architectural Gallery</h2>
          <div className="max-w-xl mx-auto relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-ink/30" size={18} />
            <input 
              type="text"
              placeholder="Search by title, architect or location..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-ink/5 border-none p-5 pl-12 text-sm focus:ring-1 focus:ring-accent outline-none"
            />
          </div>
        </div>

        <CategoryGrid 
          selectedCategory={selectedCategory}
          onCategorySelect={setSelectedCategory}
        />

        {loading ? (
          <div className="flex flex-col items-center justify-center py-32 gap-4">
            <Loader2 className="animate-spin text-accent" size={40} />
            <span className="text-xs uppercase tracking-widest font-bold opacity-40">Loading Excellence...</span>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-20">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project) => (
                <ProjectCard 
                  key={project.id} 
                  project={project} 
                  onClick={setSelectedProject}
                />
              ))}
            </AnimatePresence>
          </div>
        )}

        {!loading && filteredProjects.length === 0 && (
          <div className="text-center py-32">
            <h3 className="serif text-3xl opacity-40">No projects found in this category.</h3>
            <button 
              onClick={() => setSelectedCategory(null)}
              className="mt-6 text-accent text-xs font-bold uppercase tracking-widest hover:underline"
            >
              View All Projects
            </button>
          </div>
        )}
      </main>

      <footer className="border-t border-ink/5 py-20 bg-ink text-paper">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-paper flex items-center justify-center text-ink font-bold text-xl">A</div>
              <span className="text-xl font-bold tracking-tighter uppercase">ArchHub</span>
            </div>
            <p className="text-paper/40 max-w-sm leading-relaxed">
              The premier platform for architectural showcase and exploration. 
              Connecting visionaries with the world's most inspiring structures.
            </p>
          </div>
          <div>
            <h4 className="text-[10px] font-bold uppercase tracking-widest mb-6 text-paper/40">Navigation</h4>
            <ul className="space-y-4 text-sm">
              <li><button onClick={() => window.scrollTo(0,0)} className="hover:text-accent transition-colors">Home</button></li>
              <li><button onClick={scrollToGallery} className="hover:text-accent transition-colors">Explore</button></li>
              <li><button onClick={() => setIsUploadOpen(true)} className="hover:text-accent transition-colors">Upload</button></li>
            </ul>
          </div>
          <div>
            <h4 className="text-[10px] font-bold uppercase tracking-widest mb-6 text-paper/40">Connect</h4>
            <ul className="space-y-4 text-sm">
              <li><a href="https://instagram.com/geswa7" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">Instagram</a></li>
              <li><a href="https://linkedin.com/in/sandhiya-g-9b7b3b356" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">LinkedIn</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Contact Us</a></li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-6 mt-20 pt-8 border-t border-paper/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <span className="text-[10px] uppercase tracking-widest opacity-40">© 2024 ArchHub Platform. All Rights Reserved.</span>
          <span className="text-[10px] uppercase tracking-widest opacity-40">Designed for Excellence</span>
        </div>
      </footer>

      <UploadModal 
        isOpen={isUploadOpen} 
        onClose={() => setIsUploadOpen(false)} 
        onSuccess={handleUploadSuccess}
      />

      <ProjectDetailModal 
        project={selectedProject} 
        onClose={() => setSelectedProject(null)} 
      />

      <AuthModal 
        isOpen={isAuthOpen}
        onClose={() => setIsAuthOpen(false)}
        onLogin={setCurrentUser}
      />
    </div>
  );
}

