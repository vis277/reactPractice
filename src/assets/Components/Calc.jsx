import { useState } from "react"
import React  from "react"

const Calc=()=>{
const[Fname,setFname]=useState("Vishal");
const[Lname,setLname]=useState("Kumar");
const[Counter,setCounter]=useState(0);
const[FirstNumber,setFirstNumber]=useState(null);
const[SecondNumber,setSecoundNumber]=useState(null);



    return(
        <>
         <input type="text" name="name" id=""  value={Fname} onChange={(e)=>setFname(e.target.value)}/>
         <input type="text" name="name" id=""  value={Lname} onChange={(e)=>setLname(e.target.value)}/>
         <p>{Fname} {Lname}</p> 
         <p>{Counter}</p>

         <button onClick={()=>{setCounter(Counter+1)}}>Counter</button>
        <p>
         <span>Input first Number</span><input type="text'" value={FirstNumber} onChange={(e)=>setFirstNumber(e.target.value)}/>
         <span>Input Second Number</span><input type="text'" value={SecondNumber} onChange={(e)=>setSecoundNumber(e.target.value)}/>
         </p>
         <p>
            <button>Sum</button> <span>{+FirstNumber+(+SecondNumber)}</span>
         </p>
         <p>
            <button >Difference</button> <span>{FirstNumber-(SecondNumber)}</span>
         </p>
         <p>
            <button >Product</button> <span>{FirstNumber*(SecondNumber)}</span>
         </p>
         <p>
            <button >Division</button> <span>{FirstNumber/(SecondNumber)}</span>
         </p>
        </>
       
        
        
    )
}

export default Calc