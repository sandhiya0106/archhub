import React from "react";
import { Menu, X, Plus, Search } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface NavbarProps {
  onUploadClick: () => void;
  onExploreClick: () => void;
  onHomeClick: () => void;
  onAuthClick: () => void;
  currentUser: string | null;
  onLogout: () => void;
}

export default function Navbar({ 
  onUploadClick, 
  onExploreClick, 
  onHomeClick, 
  onAuthClick,
  currentUser,
  onLogout
}: NavbarProps) {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-paper/80 backdrop-blur-md border-b border-ink/10">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div 
          className="flex items-center gap-2 cursor-pointer group"
          onClick={onHomeClick}
        >
          <div className="w-8 h-8 bg-ink flex items-center justify-center text-paper font-bold text-xl group-hover:bg-accent transition-colors">
            A
          </div>
          <span className="text-xl font-bold tracking-tighter uppercase">ArchHub</span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <button onClick={onHomeClick} className="text-sm font-medium uppercase tracking-widest hover:text-accent transition-colors">Home</button>
          <button onClick={onExploreClick} className="text-sm font-medium uppercase tracking-widest hover:text-accent transition-colors">Explore</button>
          
          {currentUser ? (
            <div className="flex items-center gap-4">
              <span className="text-[10px] font-bold uppercase tracking-widest opacity-40">Hi, {currentUser}</span>
              <button 
                onClick={onLogout}
                className="text-[10px] font-bold uppercase tracking-widest text-accent hover:underline"
              >
                Logout
              </button>
              <button onClick={onUploadClick} className="flex items-center gap-2 bg-ink text-paper px-6 py-2.5 text-xs font-bold uppercase tracking-widest hover:bg-accent transition-colors">
                <Plus size={14} />
                Upload
              </button>
            </div>
          ) : (
            <button 
              onClick={onAuthClick}
              className="text-sm font-medium uppercase tracking-widest hover:text-accent transition-colors"
            >
              Sign In
            </button>
          )}
        </div>

        {/* Mobile Menu Toggle */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden absolute top-20 left-0 right-0 bg-paper border-b border-ink/10 p-6 flex flex-col gap-6"
          >
            <button onClick={() => { onHomeClick(); setIsOpen(false); }} className="text-left text-sm font-medium uppercase tracking-widest">Home</button>
            <button onClick={() => { onExploreClick(); setIsOpen(false); }} className="text-left text-sm font-medium uppercase tracking-widest">Explore</button>
            
            {currentUser ? (
              <>
                <div className="flex justify-between items-center">
                  <span className="text-[10px] font-bold uppercase tracking-widest opacity-40">Hi, {currentUser}</span>
                  <button onClick={onLogout} className="text-[10px] font-bold uppercase tracking-widest text-accent">Logout</button>
                </div>
                <button 
                  onClick={() => { onUploadClick(); setIsOpen(false); }}
                  className="flex items-center justify-center gap-2 bg-ink text-paper py-4 text-xs font-bold uppercase tracking-widest"
                >
                  <Plus size={14} />
                  Upload Design
                </button>
              </>
            ) : (
              <button 
                onClick={() => { onAuthClick(); setIsOpen(false); }}
                className="text-left text-sm font-medium uppercase tracking-widest"
              >
                Sign In
              </button>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
