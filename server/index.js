const express = require ("express");
const app = express();
const mysql = require('mysql');
const cors = require('cors');

app.use(cors());
app.use(express.json());


const db = mysql.createConnection({
    user: "root",
    host: "localhost", 
    password: "",
    database: "cricketLeague",
});

app.post("/create",(req,res) => {
    const country = req.body.country;
    const team = req.body.team;
    const player = req.body.player;
    const venue = req.body.venue;
    const matches = req.body.matches;

    db.query("INSERT INTO teams (country, team, player, venue, matches) VALUES (?,?,?,?,?)",
    [country, team, player, venue, matches],
    (err, result) => {
        if (err) {
          console.log(err);
        } else {
          res.send("Values Inserted");
        }
      }
    )
})

app.get('/teams',(req,res) => {
    db.query("SELECT * from teams", (err, result)=>{
        if(err){
            console.log(err);
        }else{
            res.send(result);
        }
    })
})

app.delete("/delete/:id", (req, res) => {
    const id = req.params.id;
    db.query("DELETE FROM teams WHERE id = ?", id, (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    });
  });

app.listen(3001, ()=>{

    console.log("yey");
})