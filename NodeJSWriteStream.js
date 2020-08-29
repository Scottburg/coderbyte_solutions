// In the JavaScript file, write a program to perform a GET request on the route
//  https://coderbyte.com/api/challenges/json/age-counting which contains a data key and the
//  value is a string which contains items in the format: key=STRING, age=INTEGER. Your goal
//  is to count how many items exist that have an age equal to 32. Then you should create a write
//  stream to a file called output.txt and the contents should be the key values (from the json) each
//  on a separate line in the order they appeared in the json file. Finally, then output the SHA1 hash of the file.

// Example Input
// {"data":"key=IAfpK, age=32, key=WNVdi, age=64, key=jp9zt, age=40, key=9snd2, age=32"}

// Example Output
// 7caa78c7180ea52e5193d2b4c22e5e8a9e03b486

const https = require('https');
const fs = require('fs');
const crypto = require('crypto');

https.get('https://coderbyte.com/api/challenges/json/age-counting', (resp) => {
  let data = '';

  resp.on('data', (chunk) => {
    data += chunk;
  });

  resp.on('end', () => {
    data = JSON.parse(data);

    let fileData = '';
    let temp = data.data.split('key=');

    for (let i = 0; i < temp.length; i++) {
      let record = temp[i].split(', age=');

      if (record.length > 1 && record[1].replace(', ', '') == 32)
        fileData += record[0] + '\n';
    }

    const shasum = crypto.createHash('sha1');

    shasum.update(fileData);

    const returnValue = shasum.digest('hex');

    fs.writeFile('./output.txt', data, () => {});

    console.log(returnValue);
  });
});
