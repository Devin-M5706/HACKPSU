const userInput = "Pick a random number between 0 and 100";
  
// Call the OpenAI API
const response = await fetch('https://api.openai.com/v1/chat/completions', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer '
  },
  body: JSON.stringify({
    model: "gpt-4",
    messages: [{role: "user", content: userInput}]
  })
});

const data = await response.json();
const output = data.choices[0].message.content;

// Display ChatGPT's response in the extension
// document.getElementById('chatResponse').innerText = output;
console.log(output);
document.getElementById("trustPG").innerText = "Trustworthyness: " + output + "\%";
document.getElementById("trustworthyness").setAttribute("value", output)