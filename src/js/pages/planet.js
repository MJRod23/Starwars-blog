import React from "react";

export default function (){
    let [info, setInfo] = useState();
    let {planet} = useParams();
  
    useEffect(()=> {
      async function set() {
        let planetInfo= await get_planet(planet)
        setInfo(planetInfo)
        console.log(planetInfo)
      }
      set()
  
    },[])
  return <h1>{info?.properties?.name} </h1>
}
