import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { get_characters, get_character } from "../swapi";

export default function () {
  let [info, setInfo] = useState();
  let {id} = useParams();

  useEffect(()=> {
    async function set() {
      let characterInfo = await get_character(id)
      setInfo(characterInfo)
      console.log(characterInfo)
    }
    set()

  },[])
return <h1>{info?.properties?.name} </h1>

}


//Optional chaining is using "?." instead of "." to try to access something like "properties" above that sometimes wont exist