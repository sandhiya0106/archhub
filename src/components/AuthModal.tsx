import React from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, User, Lock, Mail } from "lucide-react";

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  onLogin: (username: string) => void;
}

export default function AuthModal({ isOpen, onClose, onLogin }: AuthModalProps) {
  const [isLogin, setIsLogin] = React.useState(true);
  const [formData, setFormData] = React.useState({
    username: "",
    email: "",
    password: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simple client-side simulation
    onLogin(formData.username || formData.email.split('@')[0]);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[110] flex items-center justify-center p-6">
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
            className="relative bg-paper w-full max-w-md shadow-2xl overflow-hidden"
          >
            <div className="p-8">
              <div className="flex justify-between items-center mb-8">
                <h2 className="serif text-3xl font-medium">
                  {isLogin ? "Welcome Back" : "Join ArchHub"}
                </h2>
                <button onClick={onClose} className="p-2 hover:bg-ink/5 rounded-full transition-colors">
                  <X size={20} />
                </button>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                {!isLogin && (
                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-widest mb-2">Username</label>
                    <div className="relative">
                      <User className="absolute left-4 top-1/2 -translate-y-1/2 text-ink/30" size={16} />
                      <input
                        required
                        type="text"
                        value={formData.username}
                        onChange={e => setFormData(prev => ({ ...prev, username: e.target.value }))}
                        className="w-full bg-ink/5 border-none p-4 pl-12 text-sm focus:ring-1 focus:ring-accent outline-none"
                        placeholder="Your name"
                      />
                    </div>
                  </div>
                )}
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-widest mb-2">Email Address</label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-ink/30" size={16} />
                    <input
                      required
                      type="email"
                      value={formData.email}
                      onChange={e => setFormData(prev => ({ ...prev, email: e.target.value }))}
                      className="w-full bg-ink/5 border-none p-4 pl-12 text-sm focus:ring-1 focus:ring-accent outline-none"
                      placeholder="email@example.com"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-widest mb-2">Password</label>
                  <div className="relative">
                    <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-ink/30" size={16} />
                    <input
                      required
                      type="password"
                      value={formData.password}
                      onChange={e => setFormData(prev => ({ ...prev, password: e.target.value }))}
                      className="w-full bg-ink/5 border-none p-4 pl-12 text-sm focus:ring-1 focus:ring-accent outline-none"
                      placeholder="••••••••"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-ink text-paper py-4 text-sm font-bold uppercase tracking-widest hover:bg-accent transition-colors mt-4"
                >
                  {isLogin ? "Sign In" : "Create Account"}
                </button>
              </form>

              <div className="mt-8 pt-6 border-t border-ink/5 text-center">
                <p className="text-xs opacity-60">
                  {isLogin ? "Don't have an account?" : "Already have an account?"}
                  <button
                    onClick={() => setIsLogin(!isLogin)}
                    className="ml-2 text-accent font-bold uppercase tracking-widest hover:underline"
                  >
                    {isLogin ? "Sign Up" : "Sign In"}
                  </button>
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
