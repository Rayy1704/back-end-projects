import React from "react";
import Card from "./card";
import emojipedia from "../emojipedia";
function createCard(emoji){
    return(
        <div className="term"><Card key={emoji.id} emoji={emoji.emoji} meaning={emoji.meaning} name = {emoji.name}/></div>
    )
}

function App(){
    return(
        <div>
            <h1><span>EmojiPedia</span></h1>
            <dl className="dictionary">
                {emojipedia.map((emoji)=>(createCard(emoji)))}
            </dl>
        </div>
    );
}
export default App;