const request = require('request-promise');
const fs = require('fs');

const filePath = './images/flower.svg';

const postRequest = async () => {
  fs.readFile(filePath, async (err, data) => {
    const svg = Buffer.from(data).toString();
    const options = {
      method: 'POST',
      url: 'http://localhost:8082/print/',
      body: {
        svg,
        offset_x: 123.00237190055073,
        offset_y: 4.078080711935077,
        scale_x: 0.44548469836062077,
        scale_y: 0.44548469836062077,
        mode: 'once',

      },
      json: true,
    };

    try {
      await request(options);
    } catch (error) {
      // stop lint issue
    }
  });
};


postRequest();
