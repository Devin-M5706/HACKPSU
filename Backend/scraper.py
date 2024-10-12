import requests
from bs4 import BeautifulSoup

def get_url():
    # Replace with your URL
    url = "https://www.example.com"

    try:
        # Send GET request
        response = requests.get(url)

        # Check if the request was successful
        if response.status_code == 200:
            page_content = response.text

            # Parse HTML content using BeautifulSoup
            soup = BeautifulSoup(page_content, 'html.parser')

            # Find URL tag in HTML content (assuming it's present with class 'url')
            url_tag = soup.find('a', {'class': 'url'})

            if url_tag:
                scraped_url = url_tag.get('href')  # Return the value of 'href' attribute
                return scraped_url
            else:
                print("No URL found on the webpage")
        else:
            print(f"Failed to retrieve page content. Status code: {response.status_code}")
    except requests.exceptions.RequestException as e:
        print(f"An error occurred while sending GET request: {e}")

    return None

url = get_url()