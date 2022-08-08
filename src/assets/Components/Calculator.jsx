import { useState } from "react"
import React  from "react"

const Calculator=()=>{
const[Fname,setFname]=useState("Vishal");
const[Lname,setLname]=useState("Kumar");
const[Counter,setCounter]=useState(0);
const[FirstNumber,setFirstNumber]=useState(null);
const[SecondNumber,setSecoundNumber]=useState(null);

const[btn,setbtn]=useState(0);

const renderResult=(e)=>{
  
if(e.target.innerText==="Sum"){
return setbtn(+FirstNumber+(+SecondNumber));
}

if(e.target.innerText==="Difference"){
    
    return setbtn(FirstNumber-(SecondNumber));
    }

if(e.target.innerText==="Product"){
     return setbtn(FirstNumber*SecondNumber);
    }

if(e.target.innerText==="Division"){
     return setbtn(FirstNumber/SecondNumber);
    }

}



    return(
        <>
         <input type="text"  name="name" id=""  value={Fname} onChange={(e)=>setFname(e.target.value)}/>
         <input type="text"  name="name" id=""  value={Lname} onChange={(e)=>setLname(e.target.value)}/>
         <p>{Fname} {Lname}</p> 
         <p>{Counter}</p>

         <button onClick={()=>{setCounter(Counter+1)}}>Counter</button>
        <p>
         <span>Input first Number</span><input type="text'" value={FirstNumber} onChange={(e)=>setFirstNumber(e.target.value)}/>
         <span>Input Second Number</span><input type="text'" value={SecondNumber} onChange={(e)=>setSecoundNumber(e.target.value)}/>
         </p>
         <p>
            <button onClick={renderResult}>Sum</button> <span>{btn}</span>
         </p>
         <p>
            <button onClick={renderResult}>Difference</button> <span>{btn}</span>
         </p>
         <p>
            <button  onClick={renderResult}>Product</button> <span>{btn}</span>
         </p>
         <p>
            <button onClick={renderResult} >Division</button> <span>{btn}</span>
         </p>
        </>
       
        
        
    )
}

export default Calculator