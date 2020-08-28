const https = require('https');

https.get(
  'https://coderbyte.com/api/challenges/json/rest-get-simple',
  (resp) => {
    let data = '';

    resp.on('data', (chunk) => {
      data += chunk;
    });
    resp.on('end', () => {
      data = JSON.parse(data);
      console.log(data.hobbies.join(', '));
    });

    resp.on('error', (error) => {
      console.log(`ERROR: ${error}`);
    });
  }
);
