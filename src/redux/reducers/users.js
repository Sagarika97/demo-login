const initial_state = {
    usersList : ['']
}
const usersList = (state=initial_state.usersList,action)=>{
    switch(action.type){
        case 'USERS':
            return{
                usersList:action.payload
            } 
        default:
            return state
    }
}
export default usersList;