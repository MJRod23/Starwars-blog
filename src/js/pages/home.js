import React, {useState, useEffect} from "react";
import { useParams } from "react-router";
import "../../styles/demo.css";
import { get_character, get_characters, get_plants } from "../swapi";




export default function (){
    let [characters, setCharacters] = useState();

  
    useEffect(()=> {
      async function set() {
        let charactersInfo= await get_characters()
        setCharacters(charactersInfo)
        console.log(charactersInfo)
      }
      set()
  
    },[])
  return (
    <div> 
        {characters?.map}
    </div>
  )
  <h1>{info?.properties?.name} </h1>
}






