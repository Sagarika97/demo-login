import loggedReducers from './isLogged'
import counterReducers from './counter'
import usersList from './users' 
import {combineReducers} from 'redux'
const allReducers = combineReducers({
     isLogged:loggedReducers,
     counter:counterReducers,
     users:usersList
})
export default allReducers;