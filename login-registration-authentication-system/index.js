import express from "express";
import bodyParser from "body-parser";
import pg from "pg";

const app = express();
const port = 3000;

const db = new pg.Client({
  user: 'postgres',
  host: 'localhost',
  database: 'secrets',
  password: 'sunny222',
  port: 5432,
});
db.connect();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("home.ejs");
});

app.get("/login", (req, res) => {
  res.render("login.ejs");
});

app.get("/register", (req, res) => {
  res.render("register.ejs");
});

app.post("/register", async (req, res) => {
  const email=req.body["username"];
  const pass =req.body["password"];
  console.log(email,pass);

  const check = await db.query("SELECT * FROM users WHERE email=$1",[email]);
  if(check.rows.length>0){
    res.render("login.ejs",{error:"Email already registered,try logging in",password:pass,email:email})
  }else{
    const result = await db.query("INSERT INTO users (email,password) VALUES ($1,$2)",[email,pass]);
    res.render("secrets.ejs")
  }
});

app.post("/login", async (req, res) => {
  const email=req.body["username"];
  const pass =req.body["password"];
  console.log(email,pass);
  const check = await db.query("SELECT email FROM users WHERE email=$1",[email]);
  if(check.rows.length>0){
    const result = await db.query("SELECT password FROM users WHERE email=$1",[email]);
    if(result.rows[0].password==pass){
      res.render("secrets.ejs")
    }
    else{
      console.log(result.rows[0]);
      res.render("login.ejs",{error:"Password does not match"})
    }
  }else{
    res.render("login.ejs",{error:"Email does not exist in database"})
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
