import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const imageDirs = [
  'src/assets/images',
  'src/images'
];

async function compressImage(filePath) {
  const ext = path.extname(filePath).toLowerCase();
  const validExts = ['.png', '.jpg', '.jpeg'];

  if (!validExts.includes(ext)) return;

  // if it's already a webp, skip
  if (ext === '.webp') return;

  const fileName = path.basename(filePath, ext);
  const dirName = path.dirname(filePath);
  const newFilePath = path.join(dirName, `${fileName}.webp`);

  console.log(`Compressing ${filePath} -> ${newFilePath}`);
  try {
    const s = sharp(filePath);

    // resize large images
    const metadata = await s.metadata();
    if (metadata.width > 1920) {
      s.resize(1920); // max width 1920 for web heroes
    }

    await s.webp({ quality: 80 }).toFile(newFilePath);
    console.log(`Successfully compressed to ${newFilePath}`);
  } catch (err) {
    console.error(`Error compressing ${filePath}:`, err);
  }
}

async function run() {
  for (const dir of imageDirs) {
    if (!fs.existsSync(dir)) continue;

    const files = fs.readdirSync(dir);
    for (const file of files) {
      const fullPath = path.join(dir, file);
      if (fs.statSync(fullPath).isFile()) {
        await compressImage(fullPath);
      }
    }
  }
}

run();
