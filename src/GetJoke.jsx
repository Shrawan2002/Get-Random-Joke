import { useEffect, useState } from "react";
export default function GetJoke(){

    let url = "https://official-joke-api.appspot.com/random_joke";
    let [joke,setJoke] = useState({});  //initialition ke liye ham usestate me asyncronous function pass nahi kar sakte hai ky ki vo ek promise 
    //return karta hai isliye yaha par ham useEffect ka use karenge  initialition ke liye

    let getJoke = async ()=>{
        let promise = await fetch(url);
        let response = await promise.json();
        console.log(response);
        setJoke({setup:response.setup,punchline:response.punchline});

    }
    //first rendring ke time par kuch change lana ho to ham useEffect ka use karte hai
    useEffect(()=>{ async function getFirstJoke(){
        let promise = await fetch(url);
        let response = await promise.json();
        setJoke({setup:response.setup,punchline:response.punchline});
    }
    getFirstJoke();

    } ,[]) //  sirif first rander par hi excute hoga 

    return(
        <div>
            <h2>{joke.setup}</h2>
            <h2>{joke.punchline}</h2>
            <button onClick={getJoke}>get Joke</button>
        </div>
    )
}