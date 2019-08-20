export default {
    getUser,
    signup,
    addMove
}
const USERS_DB = []

function signup(name) {    
    if (!USERS_DB.find(user => user.name === name) ) {
        const newUser = {
            _id: _makeId(),
            name,
            coins: 100,
            moves: []
        }
        USERS_DB.push({ newUser })        
        return newUser
    } else {
        return 'cannot choose this name please choose other name'
    }
}


function addMove(contact, amount) {
    const newMove = 
    {
        toId: contact._id,
        to : contact.name,
        at: new Date(),
        amount
    }
    contact.moves.push(newMove)
}

function getUser() {
    return {
        name: 'Puki',
        coins: 100,
        moves: []
    }
}


function _makeId(length = 10) {
    var txt = ''
    var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    for (var i = 0; i < length; i++) {
      txt += possible.charAt(Math.floor(Math.random() * possible.length))
    }
    return txt
  }
