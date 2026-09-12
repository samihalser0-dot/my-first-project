// Example API endpoints (for future expansion)

/**
 * Simple HTTP server setup
 * This is a template for adding HTTP endpoints
 */

const http = require('http');
const logger = require('../utils/logger');
const { getConfig } = require('../config/config');

const port = getConfig('server.port');
const host = getConfig('server.host');

/**
 * Request handler for HTTP server
 */
const requestHandler = (req, res) => {
  logger.debug(`${req.method} ${req.url}`);

  // Enable CORS
  res.setHeader('Content-Type', 'application/json');
  res.setHeader('Access-Control-Allow-Origin', '*');

  // Route handlers
  if (req.url === '/' && req.method === 'GET') {
    res.writeHead(200);
    res.end(JSON.stringify({
      message: 'Welcome to my-first-project API',
      version: '1.0.0',
      endpoints: [
        { method: 'GET', path: '/', description: 'API info' },
        { method: 'GET', path: '/health', description: 'Health check' },
        { method: 'GET', path: '/api/hello', description: 'Get greeting' }
      ]
    }));
  } else if (req.url === '/health' && req.method === 'GET') {
    res.writeHead(200);
    res.end(JSON.stringify({
      status: 'OK',
      timestamp: new Date().toISOString()
    }));
  } else if (req.url === '/api/hello' && req.method === 'GET') {
    res.writeHead(200);
    res.end(JSON.stringify({
      message: 'Hello from my-first-project!',
      greeting: '👋 Welcome!'
    }));
  } else {
    res.writeHead(404);
    res.end(JSON.stringify({
      error: 'Endpoint not found',
      path: req.url
    }));
  }
};

/**
 * Create and start HTTP server
 */
const startServer = () => {
  const server = http.createServer(requestHandler);

  server.listen(port, host, () => {
    logger.success(`🌐 Server running at http://${host}:${port}/`);
    logger.info('Press Ctrl+C to stop the server');
  });

  server.on('error', (error) => {
    logger.error('Server error:', error.message);
  });

  return server;
};

module.exports = {
  startServer,
  requestHandler
};
