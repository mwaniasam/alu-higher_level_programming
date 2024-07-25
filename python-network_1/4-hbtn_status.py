#!/usr/bin/python3
"""Python script that Fetches https://intranet.hbtn.io/status and prints the response"""
import requests

if __name__ == "__main__":
    res = requests.get("https://intranet.hbtn.io/status")
    print("Body response:")
    print("\t- type: {}".format(type(res.text)))
    print("\t- content: {}".format(res.text))
