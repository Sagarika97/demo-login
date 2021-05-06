const initial_state = {
    count : 0
}
const counterReducers = (state=initial_state.count,action)=>{
    switch(action.type){
        case 'INCREMENT':
            return state+1;
        case 'DECREMENT':
            return state-1

        default:
            return state
    }
}
export default counterReducers
