const https = require('https');
const fs = require('fs');
const path = require('path');

// Sample image URLs (replace with actual Kerala saree category images)
const categoryImages = [
  { 
    name: 'kasavu.jpg',
    url: 'https://example.com/kasavu.jpg'
  },
  { 
    name: 'set.jpg',
    url: 'https://example.com/set.jpg'
  },
  { 
    name: 'tissue.jpg',
    url: 'https://example.com/tissue.jpg'
  },
  { 
    name: 'handloom.jpg',
    url: 'https://example.com/handloom.jpg'
  },
  { 
    name: 'designer.jpg',
    url: 'https://example.com/designer.jpg'
  },
  { 
    name: 'silk-kasavu.jpg',
    url: 'https://example.com/silk-kasavu.jpg'
  }
];

const download = (url, filename) => {
  return new Promise((resolve, reject) => {
    const targetPath = path.join(__dirname, '../public/images/categories', filename);
    
    if (fs.existsSync(targetPath)) {
      console.log(`${filename} already exists, skipping...`);
      resolve();
      return;
    }

    https.get(url, (response) => {
      if (response.statusCode !== 200) {
        reject(new Error(`Failed to download ${url}: ${response.statusCode}`));
        return;
      }

      const file = fs.createWriteStream(targetPath);
      response.pipe(file);
      
      file.on('finish', () => {
        file.close();
        console.log(`Downloaded ${filename}`);
        resolve();
      });
    }).on('error', (error) => {
      fs.unlink(targetPath, () => {});
      reject(error);
    });
  });
};

(async () => {
  try {
    for (const image of categoryImages) {
      await download(image.url, image.name);
    }
    console.log('All category images downloaded successfully!');
  } catch (error) {
    console.error('Error downloading images:', error);
    process.exit(1);
  }
})();