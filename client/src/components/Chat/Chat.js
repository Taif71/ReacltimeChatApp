import React, { useState, useEffect } from 'react';
// we will use hooks. useEffects is lifecycle methods or sideeffects in functional component inside of hooks
// 
import queryString from 'query-string';
import io from 'socket.io-client';

import './chat.css';

const Chat = ({ location }) => {

  const [name, setName] = useState('');
  const [room, setRoom] = useState('');

  useEffect(() => {
    // it will run when our components run first

    //const data = queryString.parse(location.search); // location comes from react router. it is a prop from location,history, match  
    // console.log(location.search);
    // console.log(data); 


    const { name, room } = queryString.parse(location.search);

    //console.log(name, room);

    setName(name);
    setRoom(room);
  });

return (
  <h1>Chat Component</h1>
);

}

export default Chat;