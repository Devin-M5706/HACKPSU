const userInput = "For each major controversial claim in the following article, search the web for at least 20 sources and return the following (Keep all text the same and do not deviate from this format):\n1. CLAIM TEXT: Claim text\n2. TRUTH VALUE: Number of sources that agree with the claim divided by the total sources checked\n3. Total sources: Total number of sources checked.\n\n";

// Call the OpenAI API
async function consultTheGPT(article) {
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer '
        },
        body: JSON.stringify({
          model: "gpt-3.5-turbo",
          messages: [{role: "user", content: userInput + article}]
        })
    });
      
    const data = await response.json();
    const output = JSON.parse(data.choices[0].message.content);
    
    document.getElementById("trustPG").innerText = "Trustworthyness: " + output["accuracy"] + "\%";
    document.getElementById("trustworthyness").setAttribute("value", output["accuracy"])
}


// Display ChatGPT's response in the extension
// document.getElementById('chatResponse').innerText = output;
// console.log(output);
// document.getElementById("trustPG").innerText = "Trustworthyness: " + output + "\%";
// document.getElementById("trustworthyness").setAttribute("value", output)