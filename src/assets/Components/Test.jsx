import { useState } from "react"
import React  from "react"

const Form=()=>{
const[Fname,setFname]=useState("Vishal");
const[Lname,setLname]=useState("Kumar");
const[Counter,setCounter]=useState(0);
const[FirstNumber,setFirstNumber]=useState(0);
const[SecondNumber,setSecoundNumber]=useState(0);
const[FirstNumberSub,setFirstNumberSub]=useState(0);
const[SecondNumberSub,setSecoundNumberSub]=useState(0);
const[FirstNumberMul,setFirstNumberMul]=useState(0);
const[SecondNumberMul,setSecoundNumberMul]=useState(0);
const[FirstNumberDiv,setFirstNumberDiv]=useState(0);
const[SecondNumberDiv,setSecoundNumberDiv]=useState(1);
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
            <span>Sum =</span> <span>{+FirstNumber+(+SecondNumber)}</span>
         </p>
         <p>
         <span>Input first Number</span><input type="text'" value={FirstNumberSub} onChange={(e)=>setFirstNumberSub(e.target.value)}/>
         <span>Input Second Number</span><input type="text'" value={SecondNumberSub} onChange={(e)=>setSecoundNumberSub(e.target.value)}/>
         </p>
         <p>
            <span>Difference =</span> <span>{FirstNumberSub-SecondNumberSub}</span>
         </p>
         <p>
         <span>Input first Number</span><input type="text'" value={FirstNumberMul} onChange={(e)=>setFirstNumberMul(e.target.value)}/>
         <span>Input Second Number</span><input type="text'" value={SecondNumberMul} onChange={(e)=>setSecoundNumberMul(e.target.value)}/>
         </p>
         <p>
            <span>Product =</span> <span>{FirstNumberMul*SecondNumberMul}</span>
         </p>
         <p>
         <span>Input first Number</span><input type="text'" value={FirstNumberDiv} onChange={(e)=>setFirstNumberDiv(e.target.value)}/>
         <span>Input Second Number</span><input type="text'" value={SecondNumberDiv} onChange={(e)=>setSecoundNumberDiv(e.target.value)}/>
         </p>
         <p>
            <span>Division =</span> <span>{FirstNumberDiv/SecondNumberDiv}</span>
         </p>
        </>
       
        
        
    )
}

export default Form