 
import React ,{useState} from 'react'
import { useSelector } from 'react-redux'; 
function Dashboard() { 
    const data = useSelector(state => state.users)
    const [showUsers,setShowUsers] =useState(false)  
    const loggedUser= useSelector(state => state.isLogged)  
    
    
    return (
        <div> 
            
            <div className="col-lg-3"style={{ margin: "50px",cursor:'pointer' }}> 
            <div className="row">
              <div className="col">
                <h1>Welcome {loggedUser.state.firstName}</h1>
              <button onClick={()=>setShowUsers(!showUsers)}>Show all users</button>
              </div>
            </div>


            <div className="row">
              <div className="col-lg-8 offset-lg-1">

            <ul style={{listStyle:'none',marginTop:'30px'}}> 
              {showUsers ? (
               
                data.usersList ? (
                                  data.usersList.map((user,index)=>{
                                        return(<li 
                                          style={{marginTop:'5px',backgroundColor:'#ededed'}} 
                                          key={index}>{user.firstName}
                                          </li>)
                                  })
     
                                ) :('')
                            ) 
              : ('')}
          
            </ul>
            </div>
            </div>
         
            
            </div>

          
            {/* <h1>{loggedUser}</h1> */}
        </div>
    )
}

export default Dashboard
