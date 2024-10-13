import ollama
import scraper

url = "https://www.cnn.com/2024/10/12/climate/hurricane-milton-helene-florida-homes/index.html"
urla = scraper.get_pageData(url)
stream = ollama.chat(
    model ='llama3.2',
    messages=[{'role': 'user','content': 'List the claims made by this article and list each one on a new line and in parenthesis %s' % urla}],
    stream=True,
)

def getClaims():
    claim_words = []
    for chunk in stream:
        claim_words.append(chunk['message']['content'])
    return claim_words
