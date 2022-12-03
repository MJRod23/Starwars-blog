import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { get_characters, get_character } from "../swapi";

export default function () {
  let [Info, setInfo] = useState();

  let { id } = useParams();
  useEffect( () => {
    async function settingInfo(){

    let character = await get_character(id)
    console.log(character)
    }
    settingInfo()
  }, []);

  useState();
  console.log(id);

  return <h1> Character </h1>;
}
