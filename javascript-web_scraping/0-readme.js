#!/usr/bin/node

const fs = require('fs');
const crypto = require('crypto');

fs.readFile(process.argv[2], (err, contents) => {
    if (err) {
        console.error(err);
        return;
    }

    // Calculate the SHA-256 hash of the file contents
    const hash = crypto.createHash('sha256').update(contents).digest('hex');

    // Print the hash instead of the original contents
    console.log(hash);
});
