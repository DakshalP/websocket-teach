const express = require("express");
const app = express();
const socket = require("socket.io")




//server
app.use(express.static("public"));

const server = app.listen(4000, () => {
    console.log("Server listening to requests on port 4000");
})

//socket setup
const io = socket(server);

io.on('connection', (socket) => {
    console.log("Made a socket connection!", socket.id);

    socket.on('chat', (data) => {
        io.sockets.emit('chat', data);
    })
})