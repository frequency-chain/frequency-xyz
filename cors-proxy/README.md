# Serverless CORS Proxy

This is a simple serverless CORS proxy that supports `POST` requests.

This is used by the contact form.

## Features

- Supports `POST` requests to a single `PROXY_TARGET_URL`
- Adds CORS headers for cross-origin requests

## Serverless.yaml

See [./serverless.yaml] to use [serverless.com config](https://www.serverless.com/)

## Environment Variables

These are the environment variables used by the handler.

- `PROXY_TARGET_URL`: Where the proxy will redirect the requests to
- `PROXY_ALLOWED_ORIGIN`: (Default `'*'`) The `Access-Control-Allow-Origin` string for the local server.

## Setup

### 1. Running Locally

To run the CORS proxy locally:

1. Run the proxy locally:

   ```bash
   PROXY_TARGET_URL="https://example.com/submit-form" npm run start
   ```

   - Replace `https://example.com/submit-form` with the target URL.

2. Use the following `curl` example to test a `POST` request from your terminal:

   ```bash
   curl -X POST "http://localhost:3000/" \
       -d "param1=value1&param2=value2"
   ```

   - Replace `param1=value1&param2=value2` with your actual form data.

### 2. Using with an HTML Form and JavaScript Fetch

You can use this proxy to submit a form using JavaScript `fetch`. Here’s an example:

#### HTML Form:

```html
<form id="exampleForm">
  <input type="text" name="param1" value="value1" />
  <input type="text" name="param2" value="value2" />
  <button type="submit">Submit</button>
</form>

<script>
  document.getElementById('exampleForm').addEventListener('submit', async (e) => {
    e.preventDefault(); // Prevent the default form submission

    const formData = new FormData(e.target);
    const params = new URLSearchParams(formData).toString();

    try {
      const response = await fetch('https://localhost:3000', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: params,
      });

      const result = await response.json();
      console.log(result); // Handle the response
    } catch (error) {
      console.error('Error:', error);
    }
  });
</script>
```
