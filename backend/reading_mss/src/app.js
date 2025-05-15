import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';
import readingRoutes from './routes/reading_routes.js';

dotenv.config();

const app = express();

app.use(express.json());
app.use('/readings', readingRoutes);

connectDB();

export default app;
