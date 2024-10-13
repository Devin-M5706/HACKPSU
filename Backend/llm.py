import ollama
import scraper

url = "https://www.cnn.com/2024/10/12/climate/hurricane-milton-helene-florida-homes/index.html"

stream = ollama.chat(
    model ='llama3.2',
    messages=[{'role': 'user','content': 'Here is unformatted code for a web page, please find the english contents of the article\n' + scraper.get_pageData(url)}],
    stream = True,
)

for chunk in stream:
    print(chunk['message']['content'],end='', flush=True)