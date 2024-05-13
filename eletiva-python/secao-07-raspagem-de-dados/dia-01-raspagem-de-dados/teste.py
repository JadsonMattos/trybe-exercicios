from parsel import Selector
import requests


URL_BASE = "http://books.toscrape.com/catalogue/"

response = requests.get(URL_BASE + "page-1.html")
selector = Selector(text=response.text)

href = selector.css(".product_pod h3 a::attr(href)").get()
detail_page_url = URL_BASE + href

detail_response = requests.get(detail_page_url)
detail_selector = Selector(text=detail_response.text)

description = detail_selector.css("#product_description ~ p::text").get()
print(description)


response = requests.get("http://books.toscrape.com/")
selector = Selector(text=response.text)
prices = selector.css(".product_price .price_color::text").re(r"£\d+\.\d{2}")
print(prices)


response = requests.get("http://books.toscrape.com/catalogue/a-light-in-the-attic_1000/index.html")
selector = Selector(text=response.text)

description = selector.css("#product_description ~ p::text").get()
print(description)

suffix = "...more"
if description.endswith(suffix):
    description = description[:-len(suffix)]
print(description)
