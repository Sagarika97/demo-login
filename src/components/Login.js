import React ,{useState} from 'react'
import Axios from 'axios'  
import img1 from '../Images/img1.png'
import googleimg from '../Images/google.png'
import './login.css'
import {  useDispatch } from 'react-redux';
import {loginData} from '../redux/actions/action'
import {useHistory} from 'react-router-dom'
function Login() {
  const history = useHistory()
  const [email,setEmail]= useState('')
  const [password,setPassword]= useState('') 
  const [loginStatus,setLoginStatus]=useState('') 
  
  const dispatch = useDispatch()

  const loginHandler=(e)=>{
    e.preventDefault()  
     Axios.post('http://localhost:3001/login', { 
        Email:email,
        password:password
    }).then((res)=>{ 
      if(res.data.msg){ 
        setLoginStatus(res.data.msg) 
      }
      else{
        dispatch(loginData(res.data[0]))
        history.push('/DashBoard')
      } 
    })
       
}
    return (
      
      <div className="container ">
        <div className="row">
          <div className="col-lg-6"  
          style={{backgroundColor:'#D3D3D3'}}>
            <div className="row">
              <div className="col-lg-10 offset-lg-1" 
              style={{display:'flex',flexDirection:'column',alignItems:'center'}}>
              <img src={img1}  className='imgClass' alt="img"/>
              <h4 style={{marginTop:'50px'}}>Maecenas Mattis egestas</h4>
              <center>
              <p>Rural Literacy Solution extra-curricula education.
              Rural Literacy Solution extra-curricula education.
              Rural 
              </p>
              </center>
              </div>
            </div>
          </div> 
          
          <div className="col-lg-4 offset-lg-1"> 
          <div className="row" style={{display:'flex',flexDirection:'row',alignContent:'center'}}>
           <center><h3 style={{justifySelf:'center'}}>Lovebirds</h3></center>
            <center><h4 style={{margin :'50px'}}>Welcome ton Lovebirds</h4></center>
         
         
         
          <form className="form" onSubmit={loginHandler} id ='LoginForm'>
            <label class="form-label"  >Username or Email </label>
            <input type="email" class="form-control" required   onChange={(e)=>{setEmail(e.target.value)}}/>
            <label   class="form-label">password</label>
            <input type="password" class="form-control" required  onChange={(e)=>{setPassword(e.target.value)}}/>
            {/* // eslint-disable-next-line */}
            <a href="#" className="forgotPass">forgot Password?</a>
            <button type="submit"  class="btn ">Sign In</button>
          </form>
          <center>
          <p className="horizontal_line"><span>or</span></p>
          <button type = "button" className = "signIN" value = "myimage">
            <img src={googleimg} alt="img" style={{width:'25px',height:'25px'}}></img>
            <p>  Sign In with Google </p>
          </button> 

          <label>New Lovebirds ?<a>Create Account</a></label>
          </center>
         
          </div>
        
          
          </div>
        </div>
      </div>


     
    )
} 
export default Login
