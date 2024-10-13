const dotenv = require('dotenv');
dotenv.config();
const genai = require('google-generativeai-sdk');
genai.configure({
  apiKey: process.env.API_KEY
});

model = genai.GenerativeModel("gemini-1.5-flash");

export function getGEMResponse(prompt){
  return model.generate_content(prompt);;
}