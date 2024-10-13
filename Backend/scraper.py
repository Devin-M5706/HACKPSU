from newspaper import Article

def get_pageData(url: str) -> str:
    article = Article(url)
    article.download()
    article.parse()
    return article.text

print(get_pageData("https://www.cnn.com/2024/10/12/climate/hurricane-milton-helene-florida-homes/index.html"))