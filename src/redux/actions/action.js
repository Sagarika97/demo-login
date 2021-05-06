export const increment =()=>{
    return{
        type:'INCREMENT'
    }
}
export const decrement =()=>{
    return{
        type:'DECREMENT'
    }
}

export const isLogged=()=>{
    return{
        type:'SIN_IN'
    }
}

export const listOfUser = (users) =>{
    return {
        type:'USERS',
        payload:users
    }
}

export const loginData = (Data)=>{
    return {
        type:'LoggedIn',
        payload:Data
    }
}