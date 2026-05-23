import dotenv from 'dotenv';
import mongoose from 'mongoose';
import Product from '../models/Product.js';

dotenv.config();

const products = [
  {
    name: 'Wireless Keyboard',
    price: 1299,
    description: 'Compact keyboard for daily coding and office work.',
    category: 'Accessories',
    inStock: true
  },
  {
    name: 'USB-C Mouse',
    price: 699,
    description: 'Smooth, lightweight mouse with ergonomic design.',
    category: 'Accessories',
    inStock: true
  },
  {
    name: 'Laptop Stand',
    price: 999,
    description: 'Adjustable stand that keeps your desk setup comfortable.',
    category: 'Workspace',
    inStock: false
  },
  {
    name: 'Bluetooth Speaker',
    price: 1599,
    description: 'Portable speaker with clear sound for a small room.',
    category: 'Audio',
    inStock: true
  },
  {
    name: 'Gaming Mouse Pad',
    price: 349,
    description: 'Large desk mat with smooth surface and stitched edges.',
    category: 'Accessories',
    inStock: true
  },
  {
    name: 'USB Hub 4 Port',
    price: 549,
    description: 'Useful hub for connecting keyboard, mouse, and pendrive.',
    category: 'Accessories',
    inStock: true
  },
  {
    name: 'Webcam HD',
    price: 1899,
    description: 'HD camera for online classes, meetings, and interviews.',
    category: 'Camera',
    inStock: false
  },
  {
    name: 'Laptop Sleeve',
    price: 499,
    description: 'Soft sleeve that protects a 15 inch laptop while travelling.',
    category: 'Bags',
    inStock: true
  },
  {
    name: 'Noise Cancelling Headphones',
    price: 2499,
    description: 'Comfortable headphones for study sessions and daily music.',
    category: 'Audio',
    inStock: true
  },
  {
    name: 'Mechanical Keyboard',
    price: 3299,
    description: 'Tactile keyboard for typing practice and programming.',
    category: 'Accessories',
    inStock: true
  },
  {
    name: 'Phone Tripod',
    price: 799,
    description: 'Adjustable tripod for recording videos and attending calls.',
    category: 'Camera',
    inStock: true
  },
  {
    name: 'Portable SSD 512GB',
    price: 4199,
    description: 'Fast storage drive for project backups and large files.',
    category: 'Storage',
    inStock: false
  },
  {
    name: 'Power Bank 10000mAh',
    price: 1199,
    description: 'Backup battery for phones and small USB devices.',
    category: 'Power',
    inStock: true
  },
  {
    name: 'Smart Watch',
    price: 1999,
    description: 'Basic watch with steps, heart rate, and phone notifications.',
    category: 'Wearables',
    inStock: true
  },
  {
    name: 'LED Desk Lamp',
    price: 899,
    description: 'Adjustable study lamp with three brightness levels.',
    category: 'Workspace',
    inStock: true
  },
  {
    name: 'Monitor Stand',
    price: 1099,
    description: 'Raises the monitor and gives extra space under the screen.',
    category: 'Workspace',
    inStock: true
  },
  {
    name: 'Ethernet Cable',
    price: 199,
    description: 'Two meter LAN cable for a stable internet connection.',
    category: 'Networking',
    inStock: true
  },
  {
    name: 'WiFi Range Extender',
    price: 1499,
    description: 'Improves WiFi signal in rooms far from the router.',
    category: 'Networking',
    inStock: false
  },
  {
    name: 'USB-C Charger',
    price: 999,
    description: 'Fast charger for phones, tablets, and supported laptops.',
    category: 'Power',
    inStock: true
  },
  {
    name: 'Wireless Earbuds',
    price: 1799,
    description: 'Compact earbuds with charging case and clear microphone.',
    category: 'Audio',
    inStock: true
  },
  {
    name: 'External Hard Drive 1TB',
    price: 3599,
    description: 'Reliable storage for movies, notes, and college projects.',
    category: 'Storage',
    inStock: true
  },
  {
    name: 'Cable Organizer Clips',
    price: 149,
    description: 'Small clips to keep charging cables neat on the desk.',
    category: 'Workspace',
    inStock: true
  }
];

async function seedProducts() {
  try {
    if (!process.env.MONGODB_URI) {
      throw new Error('MONGODB_URI is missing in .env');
    }

    await mongoose.connect(process.env.MONGODB_URI, {
      serverSelectionTimeoutMS: 10000
    });
    await Product.deleteMany({});
    await Product.insertMany(products);
    console.log('Products seeded successfully');
  } catch (error) {
    console.error(`Seed failed: ${error.message}`);
    process.exitCode = 1;
  } finally {
    await mongoose.disconnect();
  }
}

seedProducts();
