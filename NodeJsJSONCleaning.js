// In the JavaScript file, write a program to perform a GET request on the route
// https://coderbyte.com/api/challenges/json/json-cleaning and then clean the object according to
// the following rules: Remove all keys that have values of N/A, -, or empty strings. If one of these
// values appear in an array, remove that single item from the array. Then console log the modified object as a string.

// Example Input
// {"name":{"first":"Daniel","middle":"N/A","last":"Smith"},"age":45}

// Example Output
// {"name":{"first":"Daniel","last":"Smith"},"age":45}

const https = require('https');

const valuesToRemove = ['N/A', '-', ''];
const filterArray = (arr) => arr.filter((v) => !valuesToRemove.includes(v));
const filterObject = (obj) => {
  for (const key in obj) {
    if (valuesToRemove.includes(obj[key])) {
      delete obj[key];
    }
  }
  return obj;
};

https.get('https://coderbyte.com/api/challenges/json/json-cleaning', (resp) => {
  let data = '';

  resp.on('data', (chunk) => {
    data += chunk;
  });

  resp.on('end', () => {
    data = JSON.parse(data);
    data = filterObject(data);
    Object.keys(data).forEach((key) => {
      if (Array.isArray(data[key])) {
        data[key] = filterArray(data[key]);
      } else if (data[key] instanceof Object) {
        data[key] = filterObject(data[key]);
      }
    });
    console.log(JSON.stringify(data));
  });
});
