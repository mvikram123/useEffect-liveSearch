import React,{useState,useEffect} from "react";



const App=()=>{
  let[gold,setGold]=useState(0)
  let[silver,setSilver]=useState(0)
  let[bronze,setBronze]=useState(0)
  useEffect(()=>{
    document.title=`Gold ${gold}`;
    console.log("useState is rendered");
  },[gold])


  return(


    <div>
      <h1>Gold: {gold}|Silver: {silver}|Bronze: {bronze}</h1>
      <button onClick={()=>setGold(gold+1)}>Gold</button>
      <button onClick={()=>setSilver(silver+1)}>Silver</button>
      <button onClick={()=>setBronze(bronze+1)}>Bronze</button>
      

    </div>
  )
}
export default App;