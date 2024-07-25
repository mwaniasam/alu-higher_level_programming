#!/usr/bin/python3
# python script that fetches 'https://alu-intranet.hbtn.io/status'
import requests

def fetch_and_display_status():
    """Fetches the status from https://alu-intranet.hbtn.io/status and displays it."""

    try:
        response = requests.get("https://alu-intranet.hbtn.io/status")
        response.raise_for_status()  # Raise an exception for error HTTP statuses

        status_data = response.json()
        for key, value in status_data.items():
            print(f"\t-{ key}: {value}")

    except requests.exceptions.RequestException as e:
        print(f"Error fetching status: {e}")

if _name_ == "_main_":
    fetch_and_display_status()
