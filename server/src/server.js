import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import connectDB from './config/db.js';
import productRoutes from './routes/productRoutes.js';

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.json({ message: 'MERN Task 1 API is running' });
});

app.use('/api/products', productRoutes);

connectDB().then(() => {
  app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
});
