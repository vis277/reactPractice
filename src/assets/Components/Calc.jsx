import { useState } from "react"
import React  from "react"

const Calc=()=>{
const[Fname,setFname]=useState("Vishal");
const[Lname,setLname]=useState("Kumar");
const[Counter,setCounter]=useState(0);
const[FirstNumber,setFirstNumber]=useState(null);
const[SecondNumber,setSecoundNumber]=useState(null);
const[btnSum,setbtnSum]=useState(null);
const[btnSub,setbtnSub]=useState(null);
const[btnMul,setbtnMul]=useState(null);
const[btnDiv,setbtnDiv]=useState(null);



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
            <button onClick={()=>{setbtnSum(+FirstNumber+(+SecondNumber))}}>Sum</button> <span>{btnSum}</span>
         </p>
         <p>
            <button onClick={()=>{setbtnSub(FirstNumber-SecondNumber)}}>Difference</button> <span>{btnSub}</span>
         </p>
         <p>
            <button  onClick={()=>{setbtnMul(FirstNumber*SecondNumber)}}>Product</button> <span>{btnMul}</span>
         </p>
         <p>
            <button onClick={()=>{setbtnDiv(FirstNumber/SecondNumber)}} >Division</button> <span>{btnDiv}</span>
         </p>
        </>
       
        
        
    )
}

export default Calc