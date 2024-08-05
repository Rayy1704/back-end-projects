import express from "express";
import bodyParser from "body-parser";
import pg from "pg";

const app = express();
const port = 3000;

const db = new pg.Client({
  user: "postgres",
  host: "localhost",
  database: "postgres",
  password: "",//enter your password
  port: 5432,
});
db.connect();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

async function getItems() {
  const result = await db.query("SELECT * from list");
  let temp=[];
  result.rows.forEach((item)=>{
    temp.push(item);
  });
  return temp;
}
function getTitle(){
  const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

  const today = new Date();
  const title = `${daysOfWeek[today.getDay()]}, ${today.getDay()}${(today.getDay() % 10 === 1 && today.getDay() % 100 !== 11 ? 'st' : today.getDay() % 10 === 2 && today.getDay() % 100 !== 12 ? 'nd' : today.getDay() % 10 === 3 && today.getDay() % 100 !== 13 ? 'rd' : 'th')} of ${months[today.getMonth()]}`;
  return title;
}
app.get("/", async(req, res) => {
  let items = await getItems();

  res.render("index.ejs", {
   listTitle: getTitle(),
   listItems: items,
 });
});

app.post("/add", async (req, res) => {
  const newitem = req.body["newItem"];
  console.log(newitem);
  const result = await db.query("INSERT INTO list (items) VALUES ($1)",[newitem]);
  res.redirect("/");
});

app.post("/edit", async(req, res) => {
  const newName = req.body["updatedItemTitle"];
  const id =  req.body["updatedItemId"];
  const result = await db.query("UPDATE list SET items = $1 WHERE id = $2", [newName, id]);
  res.redirect("/");
});

app.post("/delete", async(req, res) => {
  const id =  req.body["deleteItemId"];
  const result = await db.query("DELETE FROM list WHERE id = $1", [id]);
  res.redirect("/");
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
