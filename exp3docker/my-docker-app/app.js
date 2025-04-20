const http = require('http');
const port = 8080;

const requestHandler = (req, res) => {
  res.write('Hello, Docker!');
  res.end();
};

const server = http.createServer(requestHandler);

server.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
