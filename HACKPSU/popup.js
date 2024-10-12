window.addEventListener('DOMContentLoaded'), () => {
console.log('This is a popup!');
document.getElementById('sendButton').addEventListener('click', async () => {
    const userInput = document.getElementById('userInput').value;
  
    // Call the OpenAI API
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer YOUR_OPENAI_API_KEY'
      },
      body: JSON.stringify({
        model: "gpt-4",  // Or gpt-3.5-turbo based on your plan
        messages: [{role: "user", content: userInput}]
      })
    });
  
    const data = await response.json();
    const output = data.choices[0].message.content;
  
    // Display ChatGPT's response in the extension
    document.getElementById('chatResponse').innerText = output;
  });
}
