import {getGEMResponse} from 'gemini.js';
import {getGPTResponse} from 'chatgpt.js';
window.addEventListener('DOMContentLoaded', async () => {
	const article = await extract("https://www.cnn.com/2024/10/12/politics/helene-milton-early-voting-north-carolina-florida-south-carolina/index.html");
	document.body.innerHTML += article;
	document.getElementById('scanButton').addEventListener('click', async (ev) => {
		ai_prompt = "Please check this article: ${article} For each major claim in the article, search the web and return the following (Keep all text the same and do not deviate from this format): 1. CLAIM TEXT: Claim text   2. TRUTH VALUE: Number of sources that agree with the claim divided by the total sources checked    3. TOTAL SOURCES: Total number of sources checked";
		geminiResponse = getGEMResponse(ai_prompt);
		gptResponse = getGPTResponse(ai_prompt);

		
	})
});

/*
document.getElementById('scanButton').addEventListener('click', async () => {
    
  
  /*
    
  });
*/