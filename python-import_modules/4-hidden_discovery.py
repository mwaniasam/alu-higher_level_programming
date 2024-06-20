#!/usr/bin/python3

import hidden_4

if _name_ == "_main_":
    names = dir(hidden_4)
    sorted_names = sorted(name for name in names if not name.startswith(""))
    for name in sorted_names:
        print(name)
