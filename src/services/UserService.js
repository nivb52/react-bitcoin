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
    if (currUser) {
        console.log(' you log out and login in in diffrent name');
    }
        const newUser = {
            _id: _makeId(),
            name,
            coins: 100,
            moves: []
        }
        storageService.store(USER_KEY, newUser)
        return newUser
}
function logout() {
    const currUser = storageService.load(USER_KEY) || null
    if (currUser) {
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
        to: contact.name,
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
