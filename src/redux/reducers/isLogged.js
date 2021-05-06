const initial_state= {
    loggedUser:['']
}
const loggedReducers = (state=initial_state.loggedUser,action)=>{
    switch(action.type){
        case 'LoggedIn':
            return {
                state:action.payload
            }

        default:
            return state;
    }
}
export default loggedReducers

 