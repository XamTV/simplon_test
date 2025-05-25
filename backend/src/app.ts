import express from 'express';
import jokeRoutes from './routes/jokeRoutes';
import { errorHandler } from './middlewares/errorHandler';
import cors from 'cors';

const app = express();

app.use(cors());
app.use(express.json());

// Routes
app.use('/api/jokes', jokeRoutes);
app.use(errorHandler);

export default app;
