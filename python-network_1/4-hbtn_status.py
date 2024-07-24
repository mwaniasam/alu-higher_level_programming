#!/usr/bin/python3
"""Fetches https://intranet.hbtn.io/status and prints the response."""

import requests

if __name__ == "__main__":
    r = requests.get("https://intranet.hbtn.io/status")
    print("Body response:")
    print("\t- type: {}".format(type(r.text)))
    print("\t- content: {}".format(r.text.strip()))
