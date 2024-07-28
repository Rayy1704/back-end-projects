import express from "express";
import axios from "axios";

const app= express();
const port= 3000;

const api_url = "https://api.urbandictionary.com/v0/random";

app.use(express.static("public",{extended : true}));

app.get("/", async(req,res)=>{
    try{
    var response;
    while(true){
        response= await axios.get("https://api.urbandictionary.com/v0/random");
        if(response.data.list[0].word.length<=30 && response.data.list[0].definition.length<=300){
            break;
        }
    }
    const data={
        word:response.data.list[0].word,
        meaning:response.data.list[0].definition,
    };
    res.render("index.ejs",data);
    }catch (error) {
        res.status(404).send(error.message);
    }

});
app.listen(port,async ()=>{console.log(`Listening on port ${port}.`);});