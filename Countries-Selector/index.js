import express from "express";
import bodyParser from "body-parser";
import pg from "pg";

const app = express();
const port = 3000;

const db = new pg.Client({
  user: "postgres",
  host: "localhost",
  database: "world",
  password: "sunny222",
  port: 5432,
});
db.connect();


app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

async function checkVisisted() {
  const result = await db.query("SELECT country_code FROM visited_countries");
  let countries = [];
  result.rows.forEach((country) => {
    countries.push(country.country_code);
  });
  return countries;
}
app.get("/", async (req, res) => {
  const countries = await checkVisisted();
  res.render("index.ejs", { countries: countries, total: countries.length});
});

app.post("/add", async (req, res) => {  
  const input = req.body["country"].toLowerCase();
  const result = await db.query(
    "SELECT country_code FROM countries WHERE lower(country) LIKE  '%'||$1||'%'",
    [input]
  );
  try {
    const data = result.rows[0];
    const countryCode = data.country_code;
    try{
      await db.query("INSERT INTO visited_countries (country_code) VALUES ($1)", [(countryCode),]);
      res.redirect("/");
    }catch(error){
      const countries = await checkVisisted();
      res.render("index.ejs", { countries: countries, total: countries.length,error:"Duplicate Entry" });
    }
  }catch(error){
    const countries = await checkVisisted();
    res.render("index.ejs", { countries: countries, total: countries.length,error:"Country Does Not Exist" });
  }
  });

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
