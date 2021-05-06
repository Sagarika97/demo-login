import React,{ useState } from "react";
import Axios from 'axios'
import {useHistory,Link} from 'react-router-dom'

import style from  "./register.module.css";
function Register() {
    const history = useHistory()
    const [fName,setFName]=useState('')
    const [lName,setLName]= useState('')
    const [email,setEmail]= useState('')
    const [password,setPassword]= useState('') 
    const RegisterHandler=(e)=>{
        e.preventDefault() 
        document.getElementById("regForm").reset();  
         Axios.post('http://localhost:3001/register', {
            firstName:fName,
            lastName:lName,
            Email:email,
            Password:password
        }).then(()=>{
            history.push('/login')
            console.log('RESPONSE FROM CLICK METHOD')

        })
           
        
    }

  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-6 offset-lg-3">
          <h1 style={{ margin: "50px" }}>Register</h1>
          <form id="regForm"onSubmit={RegisterHandler}>
          <input  type="text" placeholder="Enter First Name"   
          onChange={(e)=>{setFName(e.target.value)}} name="text" id="fname"  required  />
          <input type="text" placeholder="Enter Last Name"  
          onChange={(e)=>{setLName(e.target.value)}}  name="text" id="lname"  required  />
          <input type="email"  placeholder="Enter Email"   
          onChange={(e)=>{setEmail(e.target.value)}} name="email"  id="email"   required  />
          <input type="password"  placeholder="Enter Password"  onChange={(e)=>{setPassword(e.target.value)}}  name="psw"   id="psw" required  /> 
          <button type="submit" className={style.registerbtn}>  Register  </button>
          </form> 
          <Link to="/Login"><button type="button" className={style.registerbtn}>  Login  </button></Link>

        </div>
      </div>
    </div>
  );
}

export default Register;
