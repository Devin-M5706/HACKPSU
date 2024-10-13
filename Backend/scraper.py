import requests

def get_pageData(url: str) -> str:
    req = requests.get(url)
    return str(req.text)

print(get_pageData("https://www.cnn.com/2024/10/12/climate/hurricane-milton-helene-florida-homes/index.html"))