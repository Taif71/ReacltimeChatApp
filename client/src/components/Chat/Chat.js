import React, { useState, useEffect } from 'react';
// we will use hooks. useEffects is lifecycle methods or sideeffects in functional component inside of hooks
// 
import queryString from 'query-string';
import io from 'socket.io-client';

import './chat.css';




let socket;


const Chat = ({ location }) => {

  const [name, setName] = useState('');
  const [room, setRoom] = useState('');
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]); // why [] ?? 1:08

  const ENDPOINT = 'localhost:5000';



  useEffect(() => {
    // it will run when our components run first

    //const data = queryString.parse(location.search); // location comes from react router. it is a prop from location,history, match  
    // console.log(location.search);
    // console.log(data); 


    const { name, room } = queryString.parse(location.search); // ??????


    socket = io(ENDPOINT);
    

    //console.log(name, room)
    setName(name);
    setRoom(room);


    //console.log(socket);
    socket.emit('join', { name, room }, () => { // The 'join' here corresponds to the join in the server socket.on('join').
      // error here corresponds the callback() inside of server.js
      //alert('ERROR FOUND ' + error );


    }); // 

    // to finish the useEffect hook we need to implement a return
    // this is used for unmounting

    return () => {

      socket.emit('disconnect'); // the disconnect must be same as backend disconnect

      socket.off(); // this will close current client 
    }

  }, [ENDPOINT, location.search]); // only if these 2 values change we will have to rerender the useEffect. now w will only see 1 output of the console.log for each




  // with hooks you can use as many useEffect as you want
  useEffect(() => {
    socket.on('message', (message) => {
      setMessages([...messages, message]); // spread all messages then add 1 message here
    }, [messages]); // we want to run this only when 1 messages array changes
  });


  // function for sending messages:
  const sendMessage = (event) => {
    event.preventDefault();
    if(message) {
      socket.emit('sendMessage', message, 
      () => {
        // callback
        setMessage(''); // when you send the message our input field clears.
      });
    }
  }

console.log(sendMessage);


return (
  <div className="outerContainer">
    <div className="container">
      {/* <input 
        value={message} 
        onChange={(event) => setMessage(event.target.value)} 
        onKeyPress={event => event.key === 'Enter' ? sendMessage(event) : null } 
      />  */}


      <Infobar room={room} /> 
    </div>
  </div>
);

}

export default Chat;