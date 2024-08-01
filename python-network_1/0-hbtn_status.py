#!/usr/bin/python3
"""Fetches responses from specified URLs and prints their status."""

import urllib.request

def fetch_url(url):
    """Fetch and print the response from the specified URL."""
    try:
        request = urllib.request.Request(url)
        with urllib.request.urlopen(request) as response:
            body = response.read()
            print(f"Response from {url}:")
            print("\t- type: {}".format(type(body)))
            print("\t- content: {}".format(body))
            print("\t- utf8 content: {}".format(body.decode("utf-8")))
    except Exception as e:
        print(f"Error fetching {url}: {e}")

if __name__ == "__main__":
    urls = [
        "https://intranet.hbtn.io/status",
        "http://0.0.0.0:5050/status"
    ]
    
    for url in urls:
        fetch_url(url)
