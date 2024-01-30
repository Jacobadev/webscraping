const http = require('http');
const httpProxy = require('http-proxy');

const proxy = httpProxy.createProxyServer();

const server = http.createServer((req, res) => {
  // Encaminhar a solicitação para a API desejada
  proxy.web(req, res, { target: 'https://example.com' });
});

server.listen(3000, () => {
  console.log('Servidor proxy rodando na porta 3000');
});
