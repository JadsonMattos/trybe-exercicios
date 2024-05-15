from selenium import webdriver
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.common.by import By

firefox = webdriver.Firefox()

response = firefox.get("https://www.python.org/")
response = firefox.get("https://www.google.com.br/")

search_input = firefox.find_element("name", "q")

search_input.send_keys("selenium")

search_input.send_keys(Keys.ENTER)