import { Request, Response } from 'express';
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

// Use the function somewhere if needed
async function someHandler(req: Request, res: Response) {
  const input = req.body.input; // Get input from the request
  try {
    const response = await generateResponse(input);
    res.json({ response });
  } catch (error) {
    res.status(500).json({ error: 'Failed to generate response' });
  }
}

// Export the handler if you plan to use it
export { someHandler };
