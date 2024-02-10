const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

const db= mysql.createConnection({
    host: "sql6.freesqldatabase.com",
    user: "sql6683113",
    password: "B3A2gwUNaB",
    database: "sql6683113"
})

app.post('/signup',(req,res) => {
    const sql = "INSERT INTO login ('name','contact','age','email','password') VALUES (?)";
    const values = [
        req.body.name,
        req.body.contact,
        req.body.age,
        req.body.email,
        req.bady.password
    ]
    db.query(sql,[values], (err,data) => {
        if(err){
            return res.json("Error");
        }
        return res.json(data);
    })
})

app.post('/login',(req,res) => {
    const sql = "SELECT * FROM login WHERE 'email'= ? AND 'password'=?";
    db.query(sql,[req.body.email,req.body.password], (err,data) => {
        if(err){
            return res.json("Error");
        }
        if(data.length >0){
            return res.json("Success");
        }else{
            return res.json("Fail");
        }
    })
})

app.listen(port,()=>{
    console.log("listening");
})