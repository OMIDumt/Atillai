export default async (req, res) => {
  try {
    // Import the server entry from the build output
    const { default: handler } = await import('../.output/server/index.mjs');
    
    // Create a Request object
    const url = new URL(req.url, `http://${req.headers.host}`);
    const request = new Request(url.toString(), {
      method: req.method,
      headers: req.headers,
      body: ['GET', 'HEAD'].includes(req.method) ? undefined : req.body,
    });

    // Call the server handler
    const response = await handler.fetch(request, process.env, {});
    
    // Set response headers
    response.headers.forEach((value, key) => {
      res.setHeader(key, value);
    });
    
    // Send response
    res.status(response.status);
    const text = await response.text();
    res.send(text);
  } catch (error) {
    console.error('Server error:', error);
    res.status(500).json({ error: 'Internal Server Error', details: error.message });
  }
};
