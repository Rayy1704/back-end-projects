import React from "react";
import Card from "./card";
import emojipedia from "../emojipedia";

function App(){
    return(
        <div>
            <h1><span>EmojiPedia</span></h1>
            <dl className="dictionary">
                {emojipedia.map(emoji=><div className="term"><Card key={emoji.id} emoji={emoji.emoji} meaning={emoji.meaning} name = {emoji.name}/></div>)}
            </dl>
        </div>
    );
}
export default App;