import requests
from bs4 import BeautifulSoup
from typing import Optional


def get_text_from_webpage(url: str) -> Optional[str]:
    try:
        # Add headers to simulate a browser request (important for sites like YouTube)
        headers = {
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/129.0.0.0 Safari/537.36"
        }

        response = requests.get(url, headers=headers)

        if response.status_code == 200:
            soup = BeautifulSoup(response.text, 'html.parser')
            return soup.get_text()
        else:
            print(f"Failed to retrieve content. Status code: {response.status_code}")
    except requests.exceptions.RequestException as e:
        print(f"Request error: {e}")

    return None

# Example usage with debug print statements:
url = "https://www.youtube.com"  # Make sure to include 'https://'
text = get_text_from_webpage(url)

if text:
    print(text[:500])  # Print only the first 500 characters for readability
else:
    print("Failed to retrieve text from the webpage.")
