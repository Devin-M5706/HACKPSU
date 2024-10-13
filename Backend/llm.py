import ollama
import scraper

url = "https://www.cnn.com/2024/10/12/climate/hurricane-milton-helene-florida-homes/index.html"
urla = scraper.get_pageData(url)
stream = ollama.chat(
    model ='llama3.2',
    messages=[{'role': 'user','content': 'List the claims made by this article and list each one on a new line, then determine if the article is completely factual out of 0-100 percent. Finally, give reasons and specific text details where the article may be factually incorrect. %s' %urla}],
    stream = True,
)

def getClaims():
    claim_words = []
    for chunk in stream:
        print(chunk['message']['content'],end='', flush=True)
        claim_words += chunk
    return claim_words

getClaims()