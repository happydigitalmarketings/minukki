const fs = require('fs');
const path = require('path');

// Paths for placeholder images
const placeholders = {
  product: path.join(__dirname, '../public/images/products/placeholder.jpg'),
  weaver: path.join(__dirname, '../public/images/about/weaver.jpg'),
};

// Create placeholder images
Object.entries(placeholders).forEach(([key, filepath]) => {
  if (!fs.existsSync(filepath)) {
    const dir = path.dirname(filepath);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    
    // Create a text-based placeholder image (you should replace this with actual images)
    const content = `This is a placeholder for ${key} image. Please replace with an actual image.`;
    fs.writeFileSync(filepath, content);
    
    console.log(`Created placeholder for ${key} at ${filepath}`);
  }
});

console.log('Placeholder images have been created successfully!');