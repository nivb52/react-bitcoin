import UserService from '../services/UserService';


const intialState = {
    user: {
        ...UserService.getUser()
    }

}

const reducer = (state = intialState, action) => {
    // const user = {}
    
    switch (action.type) {
        case 'LOGIN':
            // state.user =  { ...UserService.getUser()  }
            state.user =  action.user
            console.log(action);
            return state.user
            
        case 'MOVE':
        default:
            return state
            
    }
}


export default reducer;