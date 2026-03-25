const express= require('express')
const app = express() // server name

// api
app.get('/',(req,res)=>{
    const tmp= "not-used variable"
    let output=''
    //duplicate logics
    for(let i=0; i<5;,i++){
        output+='Hello!'
    }
    for(let i=0; i<5;i++){
        output+='Hello!'
    }
    res.send(output)
})
//unused fuction
function debugLog(msg){
    console.log('Debug: ',msg)
}

//security problems
const dbUser='admin'
const dbPassword='password123'

// server starting
app.listen(3000,()=>console.log('server started'))
