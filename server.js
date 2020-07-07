const app = require('express')();
const server = require('http').Server(app);

app.get('/', (req, res) => {
  res.json({ "test": "ok"});
});

app.get('/hola', (req, res) => {
  res.json({ "test": "hola"});
});

server.listen(process.env.PORT || 3000, (err) => {
  if (err) process.exit(0);
  console.log(`> On your local: http://localhost:3000`);
});
