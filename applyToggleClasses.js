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
    content = `@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Playfair+Display:ital,wght@0,400;0,700;1,400&display=swap');
@import "tailwindcss";

@theme {
  --font-sans: "Inter", ui-sans-serif, system-ui, sans-serif;
  --font-serif: "Playfair Display", ui-serif, Georgia, Cambria, "Times New Roman", Times, serif;
}

@layer base {
  body {
    @apply font-sans bg-slate-50 text-slate-900 dark:bg-[#0B090A] dark:text-gray-200;
  }
  h1, h2, h3, h4, h5, h6 {
    @apply font-serif;
  }
}

.islamic-pattern {
  background-image: url("https://www.transparenttextures.com/patterns/arabesque.png");
}

.glass-nav {
  @apply bg-white/80 dark:bg-[#0B090A]/90 backdrop-blur-md border-b border-slate-200 dark:border-white/10;
}
`;
    fs.writeFileSync(file, content);
    continue;
  }

  // Restore Light Mode combined with Dark mode overrides.
  // We use direct colors for luxury values to avoid theme pollution:
  // Luxury Black: #0B090A
  // Luxury Gray: #1F2937
  // Luxury Gold: #D4AF37

  // Backgrounds
  content = content.replace(/bg-luxury-gray(\/\d+)?/g, 'bg-white dark:bg-[#1F2937]$1');
  content = content.replace(/bg-luxury-black(\/\d+)?/g, 'bg-slate-900 dark:bg-[#0B090A]$1');
  content = content.replace(/bg-luxury-gold(\/\d+)?/g, 'bg-sky-500 dark:bg-[#D4AF37]$1');

  // Muted backgrounds
  content = content.replace(/bg-white\s+dark:bg-\[#1F2937\]\/50/g, 'bg-slate-50 dark:bg-[#1F2937]/50'); // Fix for the division

  // Borders
  content = content.replace(/border-luxury-gray/g, 'border-slate-200 dark:border-[#1F2937]');
  content = content.replace(/border-luxury-gold/g, 'border-sky-500 dark:border-[#D4AF37]');
  content = content.replace(/border-white\/10/g, 'border-slate-800 dark:border-white/10');

  // Text Colors
  // We handle headings explicitly
  content = content.replace(/text-white/g, 'text-slate-900 dark:text-white');
  content = content.replace(/text-gray-400/g, 'text-slate-600 dark:text-gray-400');
  content = content.replace(/text-gray-500/g, 'text-slate-500 dark:text-gray-500');

  // Brands
  content = content.replace(/text-luxury-gold/g, 'text-sky-600 dark:text-[#D4AF37]');

  // Gradients
  content = content.replace(/from-luxury-black(\/\d+)?/g, 'from-slate-900 dark:from-[#0B090A]$1');
  content = content.replace(/via-luxury-gray(\/\d+)?/g, 'via-slate-800 dark:via-[#1F2937]$1');

  // EXCEPTIONS (Fixing buttons and hero titles manually since the generic replace ruins text inside colored buttons)
  content = content.replace(/bg-sky-500 dark:bg-\[#D4AF37\] text-sky-600 dark:text-\[#D4AF37\]/g, 'bg-sky-500 dark:bg-[#D4AF37] text-white dark:text-[#0B090A]'); // Fix buttons
  content = content.replace(/bg-slate-900 dark:bg-\[#0B090A\] text-slate-900 dark:text-white/g, 'bg-slate-900 dark:bg-[#0B090A] text-white'); // Fix CTA / Hero sections

  fs.writeFileSync(file, content);
}

console.log('Semantic Tailwind classes applied!');
