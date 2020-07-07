const express = require('express');
const app = express();
const socketIO = require('socket.io');
const io = socketIO(app);

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

io.on('connection', (socket) => {

  socket.on('join', (room) => {
    socket.join(room);
    socket.on('message', (data) => {
      dataSocket[room].push(data);
      socket.broadcast.to(room).emit('message', dataSocket[room]);
      socket.broadcast.emit('admin', dataSocket);
    });
  });

});


app.get('/', (req, res) => {
  res.json(dataSocket);
});

app.listen(process.env.PORT || 3000, (err) => {
  if (err) process.exit(0);
  console.log(`> On your local: http://localhost:3000`);
});
