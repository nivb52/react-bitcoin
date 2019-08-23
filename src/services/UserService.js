import { storageService } from './StorageService.js'
import { USER_KEY } from './Keys.js'
export default {
    getUser,
    signup,
    logout,
    addMove
}
// const USER_KEY = 'user';

function signup(name) {    
    const currUser = storageService.load(USER_KEY) || null
    if (!currUser ) {
        const newUser = {
            _id: _makeId(),
            name,
            coins: 100,
            moves: []
        }
        // currUser = newUser 
        storageService.store(USER_KEY, newUser)
        return newUser
    } else {
        return 'cannot choose this name please choose other name'
    }
}
function logout() {    
    const currUser = storageService.load(USER_KEY) || null
    if (currUser ) { 
        storageService.store(USER_KEY, null)
        return true
    } else {
        return 'you are not logged in'
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
