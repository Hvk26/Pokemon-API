// initialising import functions and variables

const express = require('express');
const app = express();
const PORT = 8000;
require('dotenv').config()

// response data array
let pokemon = {

    "pikachu":{
        name:"Pikachu",
        type: "Lightining",
        power: "76xp",
        agility:"90ap"
    },
    "bulbasaur":{
        name:"Bulbasaur",
        type: "Forest",
        power: "67xp",
        agility:"50ap"
    },
    "charizard":{
        name:"Charizard",
        type: "Fire",
        power: "89xp",
        agility:"77ap"
    },
    "blastoise":{
        name:"Blastoise",
        type: "Water",
        power: "85xp",
        agility:"70ap"
    },
    "magmar":{
	    name:"Magmar",
	    type:"fire",
	    power:"87xp",
	    agility:"77ap"
    },
    "lugia":{
	    name:"Lugia",
	    type:"rare",
	    power:"97xp",
	    agility:"99ap"
    },
    "no name":{
        name:"unknown",
        type: "unknown",
        power: "unknown",
        agility:"unknown"
    }
}

// server side request and response

app.get('/',(req,res)=>{
    res.sendFile(__dirname + '/index.html')
});

app.get('/api/:name',(req,res)=>{
    const pokemoname = req.params.name.toLowerCase();

    if(pokemon[pokemoname]){
        res.json(pokemon[pokemoname])
    }
    else{
        res.json(pokemon['no name'])
    }
});

// server side listening

app.listen(process.env.PORT || PORT, ()=>{
    console.log("server is listening")
});
