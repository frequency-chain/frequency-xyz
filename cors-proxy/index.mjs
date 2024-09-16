import https from 'node:https';
import process from 'node:process';

export const handler = async (event) => {
  const targetUrl = process.env.PROXY_TARGET_URL;

  const postData = event.body;

  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
  };

  return new Promise((resolve, _reject) => {
    const req = https.request(targetUrl, options, (response) => {
      let data = '';

      // Collect response data
      response.on('data', (chunk) => (data += chunk));

      // When the request is complete
      response.on('end', () => {
        resolve({
          statusCode: 200,
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            status: response.statusCode,
            headers: response.headers,
            body: data,
          }),
        });
      });
    });

    req.on('error', (error) => {
      resolve({
        statusCode: 500,
        body: JSON.stringify({ message: 'Error in request', error: error.message }),
      });
    });

    req.write(postData);
    req.end();
  });
};
