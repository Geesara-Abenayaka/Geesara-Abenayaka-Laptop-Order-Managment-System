
import fs from 'fs';
import path from 'path';

function convertImageToBase64(imagePath) {
  return new Promise((resolve, reject) => {
    // Check if the file exists
    fs.access(imagePath, fs.constants.F_OK, (err) => {
      if (err) {
        return reject(new Error('File does not exist.'));
      }

      // Read the image file as a buffer
      fs.readFile(imagePath, (err, data) => {
        if (err) {
          return reject(err);
        }

        // Convert the buffer to Base64 string
        const base64Image = data.toString('base64');

        // Get the file extension to create the appropriate data URI
        const extname = path.extname(imagePath).slice(1);
        const mimeType = `image/${extname}`;

        // Create a data URI (Base64 encoded image)
        const base64DataUri = `data:${mimeType};base64,${base64Image}`;

        resolve(base64DataUri);
      });
    });
  });
}

// Example usage
const imagePath = String.raw`c:\Users\acer\Desktop\React Project\myproject\src\assets\asus8.png`;  // Specify the image file path
convertImageToBase64(imagePath)
  .then((base64Image) => {
    const product = {
      model: "Asus Vivobook 15 X1504VA – i3",
      image: base64Image,
      price: 152,
      processor: "Core i3",
      ram: "4GB",
      vga: "Intel UHD Graphics",
      ssd: "256GB NVMe SSD",
      display: "15.6″ FHD",
      isinstock: false,
      count: 5
    };
    fetch("http://localhost:3000/productdata", { method: "POST", body: JSON.stringify(product), headers: { "Content-Type": "application/json" } }).then(res => console.log(res)).catch(e => console.log(e))

  })
  .catch((error) => {
    console.error('Error converting image:', error);
  });
