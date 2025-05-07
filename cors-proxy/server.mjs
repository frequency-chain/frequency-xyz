import http from 'http';
import { Buffer } from 'node:buffer';
import process from 'node:process';
import url from 'url';
import { handler } from './index.mjs';

const allowedOrigin = process.env.PROXY_ALLOWED_ORIGIN || '*';

// Function to parse the HTTP request body
const getRequestBody = (req) => {
  return new Promise((resolve, reject) => {
    let body = '';
    req.on('data', (chunk) => {
      body += chunk.toString();
    });
    req.on('end', () => {
      resolve(body);
    });
    req.on('error', (err) => {
      reject(err);
    });
  });
};

// Start the HTTP server
const server = http.createServer(async (req, res) => {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Origin', allowedOrigin);
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // Handle OPTIONS request for CORS preflight
  if (req.method === 'OPTIONS') {
    res.writeHead(200);
    res.end();
    return;
  }

  if (req.method === 'POST') {
    const parsedUrl = url.parse(req.url, true);
    const body = await getRequestBody(req);

    // Convert HTTP request into a Lambda event format
    const lambdaEvent = {
      httpMethod: req.method,
      queryStringParameters: parsedUrl.query,
      body: Buffer.from(body).toString('base64'),
      isBase64Encoded: true,
    };

    // Call the handler (same code used in AWS Lambda)
    const lambdaResponse = await handler(lambdaEvent);

    // Send response
    res.writeHead(lambdaResponse.statusCode, {
      ...lambdaResponse.headers,
      'Access-Control-Allow-Origin': '*', // Make sure to include CORS in response too
    });
    res.end(lambdaResponse.body);
  } else {
    res.statusCode = 405;
    res.end('Only POST requests are supported');
  }
});

// Start server on port 3000
server.listen(3000, () => {
  console.log('Local server running on http://localhost:3000');
});
