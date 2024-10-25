// services/apiService.ts
const axios = require('axios');
const fs = require('fs');

require('dotenv').config();

// Set your API key and endpoint
const API_KEY = "AIzaSyDKCvKXHVimHJ0DIMtToSdNFutThjpAW-s";
const ENDPOINT = 'https://gemini.googleapis.com/v1/images:generate';


// Set up the request
const config = {
  headers: {
      'Authorization': `Bearer ${API_KEY}`,
      'Content-Type': 'application/json'
  }
};

interface Description {
  prompt : string;
  style : string;
  resolution : string;
}
console.log(config);

const fetchDataFromAPI = async (description:Description): Promise<any> => {
  // Make the request
axios.post(ENDPOINT, description, config)
.then((response:any)  => {
    // Save the generated image
    fs.writeFileSync('superhero_image.jpg', response.data, 'binary');
    console.log("Superhero image generated successfully!");
})
.catch((error:any) => {
    console.error(`Error: ${error.response.status}, ${error.response.data}`);
});
};
fetchDataFromAPI({prompt: "A superhero in a futuristic city", style: "modern", resolution: "1024x1024"});
export default fetchDataFromAPI;