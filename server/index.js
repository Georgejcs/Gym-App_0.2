const express = require("express");
const app = express();
const mysql = require ("mysql2");
const cors = require("cors");

app.use(cors());
app.use(express.json());

const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "",
    database: "bditens",
    port: 3301,

 }) 

 

 app.get("/", (req, res) =>{
    let SQL = "INSERT INTO listaitens ( itens ) VALUES ('Comprar comidas')";
    

    db.query(SQL, (err, result) => {
        console.log(err);
    })

    res.send("enviado")
 })

app.listen(3001, () => {

    console.log ("rodando servidor");

});



