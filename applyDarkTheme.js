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
    } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.ts') || fullPath.endsWith('.css')) {
      fileList.push(fullPath);
    }
  }
  return fileList;
}

const files = getFiles(path.join(__dirname, 'src'));

for (const file of files) {
  let content = fs.readFileSync(file, 'utf8');

  if (file.endsWith('index.css')) {
    // Completely rewrite index.css variables and body
    content = `@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Playfair+Display:ital,wght@0,400;0,700;1,400&display=swap');
@import "tailwindcss";

@theme {
  --font-sans: "Inter", ui-sans-serif, system-ui, sans-serif;
  --font-serif: "Playfair Display", ui-serif, Georgia, Cambria, "Times New Roman", Times, serif;
  
  --color-luxury-black: #0B090A;
  --color-luxury-gold: #D4AF37;
  --color-luxury-gray: #1F2937;
}

@layer base {
  body {
    @apply font-sans bg-luxury-black text-gray-200;
  }
  h1, h2, h3, h4, h5, h6 {
    @apply font-serif;
  }
}

.islamic-pattern {
  background-image: url("https://www.transparenttextures.com/patterns/arabesque.png");
}

.glass-nav {
  @apply bg-luxury-black/90 backdrop-blur-md border-b border-white/10;
}
`;
    fs.writeFileSync(file, content);
    continue;
  }

  // General Replacements for Dark Theme
  // Backgrounds
  content = content.replace(/bg-white(\/\d+)?/g, 'bg-luxury-gray$1');
  content = content.replace(/bg-slate-[1-9]00(\/\d+)?/g, 'bg-luxury-black$1');
  content = content.replace(/bg-blue-[1-9]00(\/\d+)?/g, 'bg-luxury-black$1');
  content = content.replace(/bg-sky-[4-6]00(\/\d+)?/g, 'bg-luxury-gold$1');
  content = content.replace(/bg-slate-50(\/\d+)?/g, 'bg-luxury-black$1');
  content = content.replace(/bg-blue-50/g, 'bg-luxury-gray/50');
  content = content.replace(/bg-sky-50/g, 'bg-luxury-gold/10');
  
  // Text Colors
  // Headings/Dark texts -> White
  content = content.replace(/text-slate-900/g, 'text-white');
  content = content.replace(/text-slate-800/g, 'text-white/90');
  content = content.replace(/text-slate-700/g, 'text-white/80');
  
  // Muted texts
  content = content.replace(/text-slate-600/g, 'text-gray-400');
  content = content.replace(/text-slate-500/g, 'text-gray-400');
  content = content.replace(/text-slate-400/g, 'text-gray-500');
  
  // Brand / Accents -> Gold
  content = content.replace(/text-blue-950/g, 'text-luxury-gold');
  content = content.replace(/text-blue-900/g, 'text-luxury-gold');
  content = content.replace(/text-blue-800/g, 'text-luxury-gold');
  content = content.replace(/text-blue-700/g, 'text-luxury-gold');
  content = content.replace(/text-blue-600/g, 'text-luxury-gold');
  content = content.replace(/text-sky-[4-6]00/g, 'text-luxury-gold');
  
  // Borders
  content = content.replace(/border-slate-[1-3]00/g, 'border-luxury-gray');
  content = content.replace(/border-slate-[8-9]00/g, 'border-white/10');
  content = content.replace(/border-blue-[1-9]00/g, 'border-luxury-gold');
  content = content.replace(/border-white(\/\d+)?/g, 'border-white/10');
  
  // Gradients
  content = content.replace(/from-blue-[8-9]50(\/\d+)?/g, 'from-luxury-black$1');
  content = content.replace(/via-blue-[8-9]00(\/\d+)?/g, 'via-luxury-gray$1');
  
  // Form elements / special components
  content = content.replace(/shadow-[a-z]+(\/10)?/g, 'shadow-2xl shadow-black/50');

  fs.writeFileSync(file, content);
}

console.log('Dark theme applied successfully!');
