// this will handle everything with users.




const users = [];


// helper functions
const addUser = ({ id, name, room}) => {
    // javascript Mastery = javascriptmastery

    name = name.trim().toLowerCase();
    room = room.trim().toLowerCase();

    const existingUser = users.find((user) => user.room === room && user.name === name);

    if(existingUser) {
        return { error: 'Username is taken'}; // exit the function
    }

    const user = { id, name, room };
    users.push(user);

    return { user }; // to know which user was pushed
}

const removeUser = (id) => {

    const index = users.findIndex((user) => user.id === id);

    if(index !== -1) {
        return users.splice(index, 1)[0]; // will remove that user
    }

}

const getUser = (id) => {
    users.find((user) => user.id == id);
}

const getUsersInRoom = (room) => {

    user.filter((user) => user.room === room);

}

module.exports = { addUser, removeUser, getUser, getUsersInRoom}; // we will use this in server.js so that we can properly manage the user