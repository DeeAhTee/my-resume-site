const sharp = require('sharp');
const fs = require('fs');

async function compressImage() {
  const inputPath = 'd:/Documents/coding/my-resume-site/public/images/profile.jpg';
  const outputPath = 'd:/Documents/coding/my-resume-site/public/images/profile-vcard.jpg';

  try {
    // Resize to 400x400 and compress
    await sharp(inputPath)
      .resize(400, 400, {
        fit: 'cover',
        position: 'center'
      })
      .jpeg({ quality: 85 })
      .toFile(outputPath);

    // Get file sizes
    const originalSize = fs.statSync(inputPath).size;
    const compressedSize = fs.statSync(outputPath).size;

    console.log('✅ Image compressed successfully!');
    console.log('Original size:', (originalSize / 1024).toFixed(2), 'KB');
    console.log('Compressed size:', (compressedSize / 1024).toFixed(2), 'KB');
    console.log('Saved:', ((originalSize - compressedSize) / 1024).toFixed(2), 'KB');
    console.log('\nOutput file:', outputPath);

    // Convert to base64
    const imageBuffer = fs.readFileSync(outputPath);
    const base64Image = imageBuffer.toString('base64');

    // Write base64 to file
    fs.writeFileSync(
      'd:/Documents/coding/my-resume-site/scripts/photo-base64.txt',
      base64Image
    );

    console.log('\n✅ Base64 written to scripts/photo-base64.txt');
    console.log('Base64 size:', (base64Image.length / 1024).toFixed(2), 'KB');
  } catch (error) {
    console.error('Error:', error);
  }
}

compressImage();
