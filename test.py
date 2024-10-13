import ollama

url = "https://www.youtube.com/watch?v=Nox89Narr84"

stream = ollama.chat(
    model ='llama3.2',
    messages=[{'role': 'user','content': 'summarize the contents of this %s' %url}],
    stream = True,
)

for chunk in stream:
    print(chunk['message']['content'],end='', flush=True)