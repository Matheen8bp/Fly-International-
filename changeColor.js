import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function replaceInDir(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      replaceInDir(fullPath);
    } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.ts') || fullPath.endsWith('.css')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      content = content.replace(/emerald/g, 'blue');
      content = content.replace(/gold-500/g, 'sky-400').replace(/gold-600/g, 'sky-500').replace(/gold-50/g, 'sky-50').replace(/gold-100/g, 'sky-100');
      
      // Update custom variables in index.css if necessary
      if (fullPath.endsWith('index.css')) {
          content = content.replace(/--color-blue-950: #064e3b;/g, '--color-blue-950: #172554;');
          content = content.replace(/--color-blue-900: #064e3b;/g, '--color-blue-900: #1e3a8a;');
          content = content.replace(/--color-blue-800: #065f46;/g, '--color-blue-800: #1e40af;');
      }
      
      fs.writeFileSync(fullPath, content);
    }
  }
}

replaceInDir(path.join(__dirname, 'src'));
console.log('Done replacing colors!');
