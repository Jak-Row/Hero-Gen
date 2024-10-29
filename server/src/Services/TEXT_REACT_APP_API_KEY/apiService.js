import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

// Set your API key and endpoint from environment variables
const API_KEY = process.env.API_KEY || '';
const ENDPOINT = process.env.ENDPOINT || 'https://your-text-api-endpoint.com/v1/text:generate';

// Check if API_KEY and ENDPOINT are set
if (!API_KEY || !ENDPOINT) {
  throw new Error('API_KEY and ENDPOINT must be set in the environment variables');
}

// Set up the request configuration
const config = {
  headers: {
    'Authorization': `Bearer ${API_KEY}`,
    'Content-Type': 'application/json'
  }
};

/**
 * Makes a POST request to the specified endpoint with the given data.
 * @param {string} endpoint - The API endpoint to send the request to.
 * @param {object} data - The data to send in the request body.
 * @returns {Promise<any>} - The response data from the API.
 */
const postRequest = async (endpoint, data) => {
  try {
    const response = await axios.post(endpoint, data, config);
    return response.data;
  } catch (error) {
    if (error.response) {
      console.error(`Error: ${error.response.status}, ${error.response.data}`);
    } else {
      console.error(`Error: ${error.message}`);
    }
    throw error;
  }
};

export default {
  postRequest
};
