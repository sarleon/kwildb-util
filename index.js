const kwildb = require('./connector.js')
const cors = require('cors')
const express = require('express')
const bodyParser = require('body-parser')


async function createTable(){
    await kwildb.query("CREATE TABLE Persons ( PersonID int, LastName varchar(255), FirstName varchar(255), Address varchar(255), City varchar(255) );")
}


async function insertData(ID,LastName,FirstName,Address,City){
    await kwildb.query("INSERT INTO Persons VALUES (33,'Test' ,'Admin','TestADDR','TestCity' )")
}


const app = express()
app.use(bodyParser.json())
app.use(cors())
app.listen("8086",()=>{
    console.log("DB migration tool start ")
})

app.get('/index',async (req,res)=>{
    res.sendFile( __dirname + "/pages/" + "index.html" );
})

app.get('/api/migrate',async (req,res)=>{

})
