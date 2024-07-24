#!/bin/bash
# Script to send a PUT request to 0.0.0.0:5000/catch_me to receive a response containing "You got me!" in the body

curl -s -X PUT -H "Origin:HolbertonSchool" -d "user_id=98" http://0.0.0.0:5000/catch_me

