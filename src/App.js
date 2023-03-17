import React, { useEffect, useState } from "react";

import LeftComp from "./components/LeftCompo";
import Rightcont from "./components/RightCont";

// https://api.github.com/users/Abhisingh58

function App() {
  const [val, updtval] = useState("");
  const [ar, upra] = useState([{}]);
  const [arrep,uparep]=useState([{}])
  useEffect(()=>{
    const getad = async () => {
      await fetch(`https://api.github.com/users/Abhisingh58`).then((resp) => resp.json()).then((data) => {
        const items = data
        upra(items);
      }
      )
      await fetch(`https://api.github.com/users/Abhisingh58/repos`).then((res) => res.json()).then((dat) => {
        const ite = dat
        uparep(ite)
      }
      )
    }
    getad();
    
  },[])

  const getd = async () => { 
    await fetch(`https://api.github.com/users/${val}`).then((resp) => resp.json()).then((data) => {
      const items = data
      upra(items);
    }
    )
    await fetch(`https://api.github.com/users/${val}/repos`).then((res) => res.json()).then((dat) => {
      const ite = dat
      uparep(ite)
    }
    )
  }

  const chngval = (ev) => {
    updtval(ev.target.value)
  }
  const clickchng = () => {
    getd();
  }
  return <>
    <nav style={{ display: "flex", justifyContent: "space-between", color: "white", backgroundColor: "#222121", borderBottom: "1px solid white" }}>
      <div style={{ marginR: "1em", display: "flex", fontSize: "1.3em", alignItems: "center", backgroundColor: "#222121" }}><strong style={{ backgroundColor: "#222121" }}>Github_Search</strong></div>
      <div style={{ margin: "1em", fontFamily: "fantasy", backgroundColor: "#222121" }}><input type="text" onChange={chngval} value={val} placeholder="Enter Username Here" style={{ color: "white", padding: "0.5em", margin: "0.2em", backgroundColor: "#222121", border: "none" }} /><button onClick={clickchng} style={{ border: "1px solid white", color: "white", padding: "0.5em", margin: "0.2em", backgroundColor: "#222121" }}>search</button></div>
    </nav>
    {
      ar.name ? <><div style={{height: "100%", display: "flex", color: "white",borderRight:"1px solid white" }}><LeftComp 
      data={ar}/>
       
        <div style={{ width: "70%", height: "100%", border: "0px solid red",display:"flex",justifyContent:"center",flexDirection:"column"}}><Rightcont 
        data={ar} 
        dt={arrep}/> </div></div></> : <div style={{color:"white"}}>Search From the above search box for the result</div>
    }
    
  </>
}

export default App;
