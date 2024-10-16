const userInput = "Using the following article, give a response in json format with a key called 'claims' of 2D lists containing every claim, no matter the accuracy, the article makes along with the accuracy of the claim being true, false, or inaccurate. The second key in the main object should be called 'accuracy' with a rating of how trustworthy the article is from 0 to 100.\n\n";

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
    
    document.getElementById("trustPG").innerText = "Trustworthyness: " + output["accuracy"];
    document.getElementById("trustworthyness").setAttribute("value", output["accuracy"])

    document.body.innerHTML += "<h3>Inaccurate/False Claims</h3>"; 
    output["claims"].forEach((claim) => {
        if (claim[1].toLowerCase() != "true") {
            document.body.innerHTML += claim[0] + " - " + claim[1] + "<br>";
        }
    });
}


// Display ChatGPT's response in the extension
// document.getElementById('chatResponse').innerText = output;
// console.log(output);
// document.getElementById("trustPG").innerText = "Trustworthyness: " + output + "\%";
// document.getElementById("trustworthyness").setAttribute("value", output)