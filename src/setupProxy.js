const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/api/cleverpush',
    createProxyMiddleware({
      target: 'https://api-stage.cleverpush.com',
      changeOrigin: true,
      pathRewrite: { '^/api/cleverpush': '' },
    })
  );
};
