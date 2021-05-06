const express = require('express')
const mysql = require('mysql')
const cors = require('cors')
const app= express()
app.use(cors())
app.use(express.json())
const db = mysql.createConnection({
    user:'root',
    host:'localhost',
    password:'Sagarika@08',
    database:'newdb'
});
app.post('/register',(req,res)=>{
    db.query('INSERT INTO User(firstName,lastName,Email,Password) VALUES (?,?,?,?)',
    [req.body.firstName,req.body.lastName,req.body.Email,req.body.Password], 
    (err,result)=>{
        if(err)
            console.log('ERROR FROM SERVER PAGE',err)
        else
            console.log('SUCCESS',result)
            res.send(result)
    })
})



app.post('/login',(req,res)=>{
    const Email = req.body.Email;
    const password = req.body.password;
    db.query( "SELECT * FROM User where Email = ? AND password = ?",
        [Email,password],
        (err,result)=>{ 
            if(err){ 
                res.send({err:err})
            }


            if(result.length>0){ 
                res.send(result)
            }
              
            else{ 
                res.send({msg:'Incorrect Email or Password'})
            }   
        }
    )
})
app.get('/listUsers',(req,res)=>{ 
    db.query( "SELECT * from User",
        (err,result)=>{
            if(err){ 
                res.send({err:err})
            }


            if(result.length>0){ 
                res.send(result)
            }
              
            else{ 
                res.send({msg:'No Users'})
            }   
        }
    )

})
app.listen(3001,()=>{
    console.log('running server on port 3001')
})