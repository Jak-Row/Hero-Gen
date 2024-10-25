// src/textService.ts
const axios = require('axios');
const fs = require('fs');

require('dotenv').config();

// Set your API key and endpoint
const API_KEY = "AIzaSyCmFdp4iqd0j1kq2kXTkA9JSb-fA8nsA6s";
const ENDPOINT = 'https://your-text-api-endpoint.com/v1/text:generate';

// Set up the request
const config = {
  headers: {
      'Authorization': `Bearer ${API_KEY}`,
      'Content-Type': 'application/json'
  }
};

interface Description {
  prompt: string;
  maxTokens: number;
  temperature: number;
}

const fetchDataFromAPI = async (description: Description): Promise<any> => {
  try {
    // Make the request
    const response = await axios.post(ENDPOINT, description, config);
    
    // Save the generated text
    fs.writeFileSync('generated_text.txt', response.data.text, 'utf-8');
    console.log("Text generated successfully!");
  } catch (error: any) {
    console.error(`Error: ${error.response.status}, ${error.response.data}`);
  }
};

fetchDataFromAPI({ prompt: "Write a short story about a superhero", maxTokens: 150, temperature: 0.7 });

export default fetchDataFromAPI;
