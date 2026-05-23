import mongoose from 'mongoose';

async function connectDB() {
  try {
    const mongoUri = process.env.MONGODB_URI;

    if (!mongoUri) {
      throw new Error('MONGODB_URI is missing in .env');
    }

    await mongoose.connect(mongoUri, {
      serverSelectionTimeoutMS: 10000
    });
    console.log('MongoDB connected');
  } catch (error) {
    console.error(`MongoDB connection error: ${error.message}`);
    process.exit(1);
  }
}

export default connectDB;
