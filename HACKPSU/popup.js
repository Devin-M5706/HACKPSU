import {getResponse} from 'gemini.js';
window.addEventListener('DOMContentLoaded', async () => {
	const article = await extract("https://www.cnn.com/2024/10/12/politics/helene-milton-early-voting-north-carolina-florida-south-carolina/index.html");
	document.body.innerHTML += article;
	document.getElementById('scanButton').addEventListener('click', async (ev) => {
		ai_prompt= "";
		geminiResponse = getResponse(ai_prompt);
	})
});

/*
document.getElementById('scanButton').addEventListener('click', async () => {
    
  
  /*
    
  });
*/