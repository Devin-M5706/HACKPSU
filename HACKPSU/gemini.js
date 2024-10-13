const dotenv = require('dotenv');
dotenv.config();
const genai = require('google-generativeai-sdk');
genai.configure({
  apiKey: process.env.API_KEY
});

model = genai.GenerativeModel("gemini-1.5-flash");
response = model.generate_content("Do you like cookies?");
print(response.text);