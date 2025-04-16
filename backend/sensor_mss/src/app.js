import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';
import sensorRoutes from './routes/sensors_routes.js';

dotenv.config();

const app = express();

app.use(express.json());
app.use('/sensors', sensorRoutes);

connectDB();

export default app;
