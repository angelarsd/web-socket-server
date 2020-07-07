const app = require('express')();
const server = require('http').Server(app);

let dataSocket = {
  'room1': [{
    id: 1,
    text: 'Hola1',
  }],
  'room2': [{
    id: 1,
    text: 'Hola2',
  }]
}


app.get('/', (req, res) => {
  res.json(dataSocket);
});

server.listen(process.env.PORT || 3000, (err) => {
  if (err) process.exit(0);
  console.log(`> On your local: http://localhost:3000`);
});
