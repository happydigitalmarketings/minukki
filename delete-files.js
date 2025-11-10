const fs = require('fs');
const path = require('path');

const filesToDelete = [
  path.join(__dirname, 'pages', 'admin', 'blogs', '[id].js'),
  path.join(__dirname, 'pages', 'admin', 'blogs', 'edit', '[id].js')
];

filesToDelete.forEach(file => {
  try {
    if (fs.existsSync(file)) {
      fs.unlinkSync(file);
      console.log(`Deleted: ${file}`);
    } else {
      console.log(`File doesn't exist: ${file}`);
    }
  } catch (err) {
    console.error(`Error deleting ${file}:`, err);
  }
});