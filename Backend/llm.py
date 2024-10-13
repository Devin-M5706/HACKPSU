import ollama
import scraper

url = "https://www.cnn.com/2024/10/12/climate/hurricane-milton-helene-florida-homes/index.html"
urla = scraper.get_pageData(url)
stream = ollama.chat(
    model ='llama3.2',
    messages=[{'role': 'user','content': 'List each claim made by this article and list each one on a new line %s' %urla}],
    stream = True,
)

for chunk in stream:
    print(chunk['message']['content'],end='', flush=True)
    output = chunk

output = output