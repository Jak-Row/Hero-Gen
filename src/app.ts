import express, { Request, Response, NextFunction } from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import userRouter from './routes/user-routes'; // Correct import for default export

dotenv.config(); // Load environment variables from .env file

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware to parse JSON request bodies
app.use(bodyParser.json());

// Use user routes
app.use('/users', userRouter);

// Error handling middleware
app.use((err: any, _req: Request, res: Response, _next: NextFunction) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Something went wrong!' });
});

// Root route for health check
app.get('/', (_req: Request, res: Response) => {
  res.send('API is running');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});