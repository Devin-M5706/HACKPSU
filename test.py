import ollama

something = '''

'''

url = something

stream = ollama.chat(
    model ='llama3.2',
    messages=[{'role': 'user','content': 'summarize the contents of this %s' %url}],
    stream = True,
)

for chunk in stream:
    print(chunk['message']['content'],end='', flush=True)
    output = chunk