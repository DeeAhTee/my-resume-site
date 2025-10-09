const fs = require('fs');
const path = require('path');

// Simple image compression using canvas (Node.js built-in)
const inputPath = 'd:/Documents/coding/my-resume-site/public/images/profile.jpg';
const outputPath = 'd:/Documents/coding/my-resume-site/public/images/profile-vcard.jpg';

// Read the image and convert to base64
const imageBuffer = fs.readFileSync(inputPath);
const base64Image = imageBuffer.toString('base64');

console.log('Original file size:', (imageBuffer.length / 1024).toFixed(2), 'KB');
console.log('Base64 size:', (base64Image.length / 1024).toFixed(2), 'KB');
console.log('\nBase64 output (first 100 chars):', base64Image.substring(0, 100));

// Write base64 to a text file for easy copying
fs.writeFileSync(
  'd:/Documents/coding/my-resume-site/scripts/photo-base64.txt',
  base64Image
);

console.log('\n✅ Base64 written to scripts/photo-base64.txt');
