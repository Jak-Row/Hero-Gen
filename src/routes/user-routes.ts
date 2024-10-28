import express, { Router, Request, Response } from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';

dotenv.config(); // Load environment variables from .env file

const app = express();
const userRouter = Router();

const PORT = process.env.PORT || 3000;
// Use userRouter as the router name

// Middleware to parse JSON request bodies
app.use(bodyParser.json());

// Define your routes here
userRouter.get('/', (_req: Request, res: Response) => {
  res.send('User route');
});

// Use user routes
app.use('/users', userRouter);

// Error handling middleware
app.use((err: any, _req: Request, _res: Response, _next: Function) => {
  console.error(err.stack);
  _res.status(500).json({ message: 'Something went wrong!' });
});

// Root route for health check
app.get('/', (_req: Request, res: Response) => {
  res.send('API is running');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});



// Export userRouter for use in app.ts
export default userRouter;