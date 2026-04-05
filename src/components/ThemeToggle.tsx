import React from 'react';
import { Sun, Moon } from 'lucide-react';

interface ThemeToggleProps {
  theme: 'light' | 'dark';
  setTheme: (theme: 'light' | 'dark') => void;
}

const ThemeToggle: React.FC<ThemeToggleProps> = ({ theme, setTheme }) => {
  return (
    <button
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
      className="fixed right-6 top-24 z-[100] p-4 bg-white dark:bg-[#1F2937] text-amber-500 dark:text-[#D4AF37] rounded-full shadow-2xl hover:scale-110 transition-all border border-slate-200 dark:border-white/10 flex items-center justify-center group"
      aria-label="Toggle Theme"
    >
      <div className="absolute right-full mr-4 bg-white dark:bg-[#1F2937] text-slate-800 dark:text-[#D4AF37] px-3 py-1 rounded-lg text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-lg">
        {theme === 'light' ? 'Switch to Luxury Dark' : 'Switch to Light Mode'}
      </div>
      {theme === 'light' ? <Moon size={28} /> : <Sun size={28} />}
    </button>
  );
};

export default ThemeToggle;
