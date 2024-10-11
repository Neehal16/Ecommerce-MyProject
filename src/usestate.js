import {useState} from "react";


function App(){
   const[state, setState]= useState("hi")
   const[data, setData]= useState(0)
  const updateData=()=>{
   setState("Hello")
  }
  const inc=()=>{
   setData(data+1)
  }
  const dec=()=>{
   setData(data-1)
  }
  const reset=()=>{
   setData(0)
  }
   return(
      <div>
         <h1>Update</h1>
      {state}
      <button onClick={updateData}>Update</button>
      <hr/>
      <h1>Count:{data}</h1>
      <button onClick={inc}>Inc</button>
      <button onClick={dec}>Dec</button>
      <button onClick={reset}>Reset</button>
      </div>
   )
}
export default App;