const { createProxyMiddleware } = require('http-proxy-middleware')

module.exports = function (app) {
  const port = process.env.REACT_APP_PORT_SERVER || 5000
  app.use('/api', createProxyMiddleware({ target: `http://localhost:${port}/` }))
}
