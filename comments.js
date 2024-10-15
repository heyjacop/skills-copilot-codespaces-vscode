// create a web server
// 1. create a web server
// 2. create a route for /comments
// 3. return a list of comments

// 1. create a web server
const http = require('http');
const server = http.createServer((req, res) => {
  // 2. create a route for /comments
  if (req.url === '/comments') {
    // 3. return a list of comments
    res.write(JSON.stringify([{ id: 1, body: 'comment 1' }, { id: 2, body: 'comment 2' }]));
  } else {
    res.write('Not found');
  }
  res.end();
});
server.listen(3000);
console.log('Server is listening on port 3000');