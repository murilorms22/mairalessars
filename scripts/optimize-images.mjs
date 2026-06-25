import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const PUBLIC_DIR = path.join(process.cwd(), 'public');
const OPTIMIZED_DIR = path.join(PUBLIC_DIR, 'optimized');

if (!fs.existsSync(OPTIMIZED_DIR)) {
  fs.mkdirSync(OPTIMIZED_DIR, { recursive: true });
}

// Configurações de redimensionamento baseadas no uso
const imageConfigs = {
  // Hero (LCP e Backgrounds maiores)
  'background-hero.png': { width: 1920, quality: 80 },
  'banner-hero.png': { width: 1920, quality: 80 },
  'maira-hero.png': { width: 1000, quality: 82 },
  'maira-hero2.png': { width: 1000, quality: 82 },
  'fundo-proposito.png': { width: 1920, quality: 75 },
  
  // Cards de Propósito
  'proposito-agro.jpeg': { width: 600, quality: 75 },
  'proposito-cidades.jpeg': { width: 600, quality: 75 },
  'proposito-escuta.jpeg': { width: 600, quality: 75 },
  'proposito-familia.jpeg': { width: 600, quality: 75 },
  'proposito-inclusao.jpeg': { width: 600, quality: 75 },
  'proposito-maternidade.jpeg': { width: 600, quality: 75 },

  // Galeria/Carrossel e Caminhada
  'caminhada-1.jpeg': { width: 800, quality: 75 },
  'caminhada-2.jpeg': { width: 1200, quality: 75 },
  'caminhada-3.jpeg': { width: 800, quality: 75 },
  'caminhada-4.jpeg': { width: 800, quality: 75 },
  
  // Outros
  'jornada.jpeg': { width: 1200, quality: 75 },
  'final-1.jpeg': { width: 800, quality: 75 },
  'final-2.jpeg': { width: 800, quality: 75 },
  'final-extra.jpeg': { width: 800, quality: 75 },
};

// Adiciona dinamicamente as imagens do carrossel
for (let i = 1; i <= 12; i++) {
  imageConfigs[`carrossel-${i}.jpeg`] = { width: 600, quality: 75 };
}

async function optimizeImages() {
  const files = fs.readdirSync(PUBLIC_DIR);
  
  for (const file of files) {
    const ext = path.extname(file).toLowerCase();
    
    // Processar apenas png e jpeg/jpg
    if (ext === '.png' || ext === '.jpg' || ext === '.jpeg') {
      const inputPath = path.join(PUBLIC_DIR, file);
      const nameWithoutExt = path.basename(file, ext);
      const outputPath = path.join(OPTIMIZED_DIR, `${nameWithoutExt}.webp`);
      
      const config = imageConfigs[file] || { width: 1200, quality: 75 }; // fallback
      
      try {
        await sharp(inputPath)
          .resize({ width: config.width, withoutEnlargement: true })
          .webp({ quality: config.quality })
          .toFile(outputPath);
          
        console.log(`✅ Optimized: ${file} -> ${nameWithoutExt}.webp (width: ${config.width})`);
      } catch (err) {
        console.error(`❌ Error optimizing ${file}:`, err);
      }
    }
  }
}

optimizeImages();
