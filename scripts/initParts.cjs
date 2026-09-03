const fs = require('fs');
const path = require('path');

// Ensure parts directory exists
const partsDir = path.join(__dirname, 'parts');
if (!fs.existsSync(partsDir)) {
  fs.mkdirSync(partsDir, { recursive: true });
}

console.log('Parts directory verified');
