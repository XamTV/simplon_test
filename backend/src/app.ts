import express from 'express';
import jokeRoutes from './routes/jokeRoutes';
import { errorHandler } from './middlewares/errorHandler';

const app = express();

app.use(express.json());

// Routes
app.use('/api/jokes', jokeRoutes);
app.use(errorHandler);

export default app;
