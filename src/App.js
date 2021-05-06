import './App.css';
import React ,{useEffect} from 'react'
import Axios from 'axios' 
import Register from './components/Register'
import Login from './components/Login';
import {listOfUser} from './redux/actions/action'
import DashBoard from './components/Dashboard'
import { BrowserRouter as Router , Route} from 'react-router-dom';
import {  useDispatch , useSelector } from 'react-redux';
// import {increment,decrement} from './redux/actions/action'
 

function App() {
  // const counter =  useSelector(state => state.counter)
  const isLogged =  useSelector(state => state.isLogged)
  const dispatch = useDispatch()

  useEffect(() => {
    const listUsers=(e)=>{ 
      Axios.get('http://localhost:3001/listUsers')
      .then((res)=>{ 
        dispatch(listOfUser(res.data)) 
      })
      }
      listUsers()
},[isLogged]) 

  return (
        <Router> 

          <div className="App">
            {/* <h1>count {counter} {isLogged? '   loggedin' :'    loggedout'}</h1>
            <button onClick={()=> dispatch(increment())}>+</button>
            <button onClick={()=> dispatch(decrement())}>-</button>  */}
            <Route exact path="/" component={Register} />
            <Route exact path="/login" component={Login}/> 
            <Route exact path='/DashBoard' component={DashBoard}/>
          </div>
        </Router>
   
  );
}

export default App;
