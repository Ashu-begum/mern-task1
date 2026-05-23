# MERN Stack Internship - Task 1

Basic React app with an Express + MongoDB backend API.

## What This Project Includes

- React frontend that fetches and displays product data.
- Reusable `ProductCard` component that receives data through props.
- Express server with CRUD API routes for products.
- MongoDB connection using Mongoose.

## Folder Structure

```text
mern-task1-starter/
  client/   React frontend
  server/   Express + MongoDB backend
```

## Setup

Install dependencies:

```bash
npm run install:all
```

Create the backend environment file:

```bash
cp server/.env.example server/.env
```

Update `server/.env` with your MongoDB Atlas connection string:

```env
MONGODB_URI=your_mongodb_connection_string
PORT=5000
```

## Run The Project

Start frontend and backend together:

```bash
npm run dev
```

Frontend:

```text
http://localhost:3000
```

Backend API:

```text
http://localhost:5000/api/products
```

## API Routes

| Method | Route | Description |
| --- | --- | --- |
| GET | `/api/products` | Get all products |
| GET | `/api/products/:id` | Get one product |
| POST | `/api/products` | Create product |
| PUT | `/api/products/:id` | Update product |
| DELETE | `/api/products/:id` | Delete product |

## Sample Product JSON

```json
{
  "name": "Wireless Keyboard",
  "price": 1299,
  "description": "Compact keyboard for daily work",
  "category": "Accessories",
  "inStock": true
}
```

## Add Sample Products To MongoDB

Run this once after adding your MongoDB connection string:

```bash
npm run seed --prefix server
```
