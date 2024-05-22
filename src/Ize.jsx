import { myrequest } from "./myrequest";
import { useState, useEffect } from "react";
import Card from "./Card";

export function Ize() {
    const [data, setData] = useState([])
    let
 i = 0;
    let promise = myrequest("https://nodejs.sulla.hu/data", "GET")
  
    useEffect(() => {
      async function getData() {
        const newData = await promise;
        setData(newData);
      };
  
      getData();
    }, []);
    
    return data.map(data2 => <Card key= {i++} data = {data2} />)
}


    
