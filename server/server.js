const express = require('express');
const socketio = require('socket.io');
const http = require('http');

const PORT = process.env.PORT || 5000;

const router = require('./router');

const app = express();
const server = http.createServer(app);
const io = socketio(server);

// importing helper functions from user.js
const  { addUser, removeUser, getUser, getUsersInRoom} = require('./user.js');


// io.on() is a method that will run when we have a client connection on our io connection
io.on('connection', (socket) => {
    console.log('We have a new connection!!!');


    socket.on('join', ({ name,room }, callback) => { 
        //console.log(name, room);


        const { error, user} = addUser({ id: socket.id, name, room });  // addUser can have  2 properties. an object with error or user;
        if(error) {
            return callback(error); // if error exists then it will get out of this fuction
        }

        socket.emit('message', { user: 'admin', text: `${user.name}, welcome to the room ${user.room}`});

        // broadcast() is going to send message to everyone besides that specific user
        socket.broadcast.to(user.room).emit('message', { user: 'admin', text: `${user.name}, has joined`});

        // if no error we will do following:
        socket.join(user.room);
        callback();  
        // const error = true;
        // if(error) {
        //     callback({ error: 'error' }); // we can do some error handling. this corresponds to the error in the front end of join
        //     // we use callback for the error handling. the 3rd parameter of this fucntion
        // }      
        
        
    });



    // events for user generated messages:
    socket.on('sendMessage', (message, callback) => {
        const user = getUser(socket.id); // specific client instance. we also have his id
        
        io.to(user.room).emit('message', { user: user.name, text: message});

        callback(); // to do sth after the message is sent to the frontend
    });




    socket.on('disconnect', () => {
        console.log('User had left!!');
    });
});

app.use(router);

server.listen(PORT, () => {
    console.log(`Server has started on port ${PORT}`);
});


