import React from "react";

function sub(a,b){
    return a-b;
}
function mul(a,b){
    return a*b;
}
function add(a,b){
    return a+b;
}
function div(a,b){
    return a/b;
}
function mod(a,b){
    return a%b;
}
function display(a,b,c,d,e){
    return <ul><li>{a}</li><li>{b}</li><li>{c}</li><li>{d}</li><li>{e}</li></ul>
}
export {sub,mul,add,div,mod,display};