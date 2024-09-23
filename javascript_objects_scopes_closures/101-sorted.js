#!/usr/bin/node

const dict = require('./101-data').dict;
const newDict = {};
for (const key in dict) {
    const value = dict[key];
    console.log(`Processing key: ${key}, value: ${value}`);
    if (newDict[value] === undefined) {
        newDict[value] = [];
        newDict[value].push(key);
        console.log(`Creating new entry in newDict: ${value} => ${newDict[value]}`);
    } else {
        newDict[value].push(key);
        console.log(`Adding ${key} to existing entry in newDict: ${value} => ${newDict[value]}`);
    }
}
console.log(newDict);
