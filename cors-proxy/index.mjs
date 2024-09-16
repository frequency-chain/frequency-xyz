import process from 'node:process';

export const handler = async (event) => {
  const targetUrl = process.env.PROXY_TARGET_URL;

  const response = await fetch(targetUrl, {
    method: 'POST',
    body: event.body,
    headers: {
      'Content-type': 'application/x-www-form-urlencoded',
    },
    mode: 'no-cors',
  });

  if (response.status >= 200 && response.status < 300) {
    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        status: response.status,
        body: await response.text(),
      }),
    };
  }

  console.error('Received an error response', {
    statusCode: response.status,
    message: response.message,
    headers: response.headers,
  });

  return {
    statusCode: 400,
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      error: 'Failed to submit form',
      status: response.status,
    }),
  };
};
