const app = require('express')();
const http = require('http').createServer(app);
const io = require('socket.io')(http);

let currentText = "";

io.on('connection', function(socket){
  console.log('a user connected');
  socket.emit('data', currentText);
  socket.on('data', data => {
    currentText = data;
    socket.broadcast.emit('data', data);
    console.log(`Got ${data}`);
  });
  socket.on('disconnect', function(){
    console.log('user disconnected');
  });
});

http.listen(3000, function(){
  console.log('listening on *:3000');
});
