const express = require('express');
const socketio = require('socket.io');
const http = require('http');

const PORT = process.env.PORT || 5000;

const router = require('./router');

const app = express();
const server = http.createServer(app);
const io = socketio(server);

// importing helper functions from user.js
const  { addUser, removeUser, getUser, getUsersInRoom} = require('./users.js');


// io.on() is a method that will run when we have a client connection on our io connection
io.on('connection', (socket) => {
    console.log('We have a new connection!!!');


    socket.on('join', ({ name,room }, callback) => { 
        //console.log(name, room);
        const error = true;
        if(error) {
            callback({ error: 'error' }); // we can do some error handling. this corresponds to the error in the front end of join
            // we use callback for the error handling. the 3rd parameter of this fucntion
        }       
    });

    socket.on('disconnect', () => {
        console.log('User had left!!');
    });
});

app.use(router);

server.listen(PORT, () => {
    console.log(`Server has started on port ${PORT}`);
});


