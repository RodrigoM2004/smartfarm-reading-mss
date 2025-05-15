import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';
import eventBusRoutes from './routes/event_bus_routes.js';

dotenv.config();

const app = express();

app.use(express.json());
app.use('/event_bus', eventBusRoutes);

connectDB();

export default app;
