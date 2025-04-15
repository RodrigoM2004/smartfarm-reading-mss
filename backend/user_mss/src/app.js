import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';
import userRoutes from './routes/user_routes.js';

dotenv.config();

const app = express();

app.use(express.json());
app.use('/users', userRoutes);

connectDB();

export default app;
