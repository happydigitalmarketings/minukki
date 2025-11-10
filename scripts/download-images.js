const https = require('https');
const fs = require('fs');
const path = require('path');

const images = [
  {
    name: 'dark-pink-green-silk.jpg',
    url: 'https://raw.githubusercontent.com/siddharthvaddem/temp-images/main/sarees/dark-pink-green-silk.jpg'
  },
  {
    name: 'navy-blue-red-silk.jpg',
    url: 'https://raw.githubusercontent.com/siddharthvaddem/temp-images/main/sarees/navy-blue-red-silk.jpg'
  },
  {
    name: 'dark-orange-pink-silk.jpg',
    url: 'https://raw.githubusercontent.com/siddharthvaddem/temp-images/main/sarees/dark-orange-pink-silk.jpg'
  },
  {
    name: 'lime-green-violet-silk.jpg',
    url: 'https://raw.githubusercontent.com/siddharthvaddem/temp-images/main/sarees/lime-green-violet-silk.jpg'
  },
  {
    name: 'violet-pink-silk.jpg',
    url: 'https://raw.githubusercontent.com/siddharthvaddem/temp-images/main/sarees/violet-pink-silk.jpg'
  }
];

const downloadImage = (url, filepath) => {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      if (res.statusCode === 200) {
        res.pipe(fs.createWriteStream(filepath))
           .on('error', reject)
           .once('close', () => resolve(filepath));
      } else {
        res.resume();
        reject(new Error(`Request Failed With a Status Code: ${res.statusCode}`));
      }
    });
  });
};

async function downloadAllImages() {
  const imagesDir = path.join(__dirname, '..', 'public', 'images', 'sarees');
  
  // Create directory if it doesn't exist
  if (!fs.existsSync(imagesDir)) {
    fs.mkdirSync(imagesDir, { recursive: true });
  }

  console.log('Downloading images...');
  
  for (const image of images) {
    const filepath = path.join(imagesDir, image.name);
    try {
      await downloadImage(image.url, filepath);
      console.log(`Downloaded: ${image.name}`);
    } catch (err) {
      console.error(`Error downloading ${image.name}:`, err.message);
    }
  }
  
  console.log('All downloads completed!');
}

downloadAllImages().catch(console.error);