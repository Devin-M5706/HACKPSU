import ollama
import scraper

url = scraper.url

stream = ollama.chat(
    model ='llama3.2',
    messages=[{'role': 'user','content': 'summarize the contents of this article'}],
    stream = True,
)

for chunk in stream:
    print(chunk['message']['content'],end='', flush=True)