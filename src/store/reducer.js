const intialState = {
    user: {
        _id: null,
        name: '',
        coins: null,
        moves: []
    }

}

const reducer = (state = intialState, action) => {
    switch (action.type) {
        case 'LOGIN':
            console.log(state);
            return state.user = action.currUser

        default:
            return state
            
    }
}


export default reducer;