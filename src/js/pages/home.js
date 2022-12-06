import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import "../../styles/demo.css";
import { get_character, get_characters, get_planets} from "../swapi";
import { Link } from "react-router-dom";

export default function () {
  let [characters, setCharacters] = useState();

  useEffect(() => {
    async function set() {
      let charactersInfo = await get_characters();
      setCharacters(charactersInfo);
      console.log(charactersInfo);
    }
    set();
  }, []);
  return (
    <div>
      {characters?.map((character) => {
        console.log(character);
        return (
          <div>
            <h1>{character.name}</h1>
            <Link to={"/character/" + character.uid}>Learn More</Link>
          </div>
        );
      })}
    </div>
  );
}
