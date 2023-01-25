import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { get_characters, get_character } from "../swapi";

export default function () {
  let [info, setInfo] = useState();

  let {charid} = useParams();

  useEffect(()=> {
    async function settingInfo() {
      let characterInfo = await get_character(charid)
      setInfo(characterInfo)
      //console.log(characterInfo)
    }
    settingInfo()

  },[])
return <h1>{info?.properties?.name} </h1>

}


//Optional chaining is using "?." instead of "." to try to access something like "properties" above that sometimes wont exist