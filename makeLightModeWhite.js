import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function getFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      getFiles(fullPath, fileList);
    } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.ts')) {
      fileList.push(fullPath);
    }
  }
  return fileList;
}

const files = getFiles(path.join(__dirname, 'src'));

for (const file of files) {
  let content = fs.readFileSync(file, 'utf8');

  // Accents: Remove Blue/Sky, use Gold (#D4AF37) across both modes
  content = content.replace(/bg-sky-500 dark:bg-\[#D4AF37\]/g, 'bg-[#D4AF37]');
  content = content.replace(/bg-sky-600 dark:bg-\[#D4AF37\]/g, 'bg-[#D4AF37]');
  content = content.replace(/bg-sky-700/g, 'bg-[#C5A030]');
  content = content.replace(/bg-sky-400/g, 'bg-[#D4AF37]');
  content = content.replace(/text-sky-600 dark:text-\[#D4AF37\]/g, 'text-[#D4AF37]');
  content = content.replace(/text-sky-[4-6]00/g, 'text-[#D4AF37]');
  content = content.replace(/border-sky-500 dark:border-\[#D4AF37\]/g, 'border-[#D4AF37]');
  content = content.replace(/text-blue-500/g, 'text-[#D4AF37]');
  content = content.replace(/bg-blue-500/g, 'bg-[#D4AF37]');

  // Backgrounds: Make Light Mode fully White/Light Gray instead of Dark Slate
  content = content.replace(/bg-slate-900 dark:bg-\[#0B090A\]/g, 'bg-slate-50 dark:bg-[#0B090A]');
  content = content.replace(/from-slate-900 dark:from-\[#0B090A\]/g, 'from-white dark:from-[#0B090A]');
  content = content.replace(/via-slate-800 dark:via-\[#1F2937\]/g, 'via-slate-50 dark:via-[#1F2937]');
  content = content.replace(/bg-slate-50 dark:bg-\[#1F2937\]\/50/g, 'bg-white dark:bg-[#1F2937]/50'); // Keep cards white

  // Text Colors: Fix hardcoded text-white so it's dark in light mode
  // The generic text-white replace MUST NOT replace text-white inside buttons which are bg-[#D4AF37]
  // We can do this carefully.
  // In Home.tsx, many h2/h3 elements are text-white. We'll change text-white to text-slate-900 dark:text-white. 
  // Wait, if we do a blanket replace, we ruin buttons.
  // However, I can use a negative lookaround if it wasn't node. But Node does support negative lookbehind!
  content = content.replace(/(?<!bg-\[#D4AF37\].*?)text-white/g, 'text-slate-900 dark:text-white');
  
  // Actually, lookbehind with variable length isn't perfectly supported in JS.
  // Instead, let's just do text-white -> text-slate-900 dark:text-white everywhere, 
  // and then FIX the buttons specifically.
  content = content.replace(/text-white/g, 'text-slate-900 dark:text-white');
  
  // Fix Buttons and specific components
  content = content.replace(/bg-\[#D4AF37\] text-slate-900 dark:text-white/g, 'bg-[#D4AF37] text-white');
  content = content.replace(/text-slate-900 dark:text-white dark:text-\[#0B090A\]/g, 'text-slate-900 dark:text-[#0B090A]');
  
  // Re-fix specific nav elements so they hover correctly
  content = content.replace(/text-slate-900 dark:text-white dark:text-blue-500/g, 'text-slate-900 dark:text-white hover:text-[#D4AF37] dark:hover:text-[#D4AF37]');
  
  fs.writeFileSync(file, content);
}

console.log('App converted to completely White Light Mode and Unified Gold accents!');
