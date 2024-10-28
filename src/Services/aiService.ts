import express, { Request, Response } from 'express';
import { GoogleGenerativeAI } from "@google/generative-ai";
import dotenv from 'dotenv';

dotenv.config(); // Load environment variables from .env file

const apiKey = process.env.API_KEY;

if (!apiKey) {
  throw new Error('API_KEY environment variable is missing');
}

const aiClient = new GoogleGenerativeAI({ apiKey });

async function generateResponse(input: string) {
  try {
    const response = await aiClient.generateText(input);
    console.log(response);
    return response;
  } catch (error) {
    console.error('Error generating text:', error);
    throw error; // Handle error appropriately
  }
}

const app = express();
app.use(express.json());

app.post('/generate', async (req: Request, res: Response) => {
  const input = req.body.input;
  try {
    const response = await generateResponse(input);
    res.json({ response });
  } catch (error) {
    res.status(500).json({ error: 'Error generating response' });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});