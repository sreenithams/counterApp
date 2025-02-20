
import {useState} from "react"
function App() {
const[count,setCount]=useState(0)



const decrement=()=>{
  setCount(count>0?count-1:count)
}
const reset=()=>{
  setCount(0)
}
  return (
<div className="border-2 flex  flex-col items-center h-screen justify-center gap-10">

  <div className=""> 
    <h1 className="flex text-3xl mt-10 px-20">{count}</h1>
  </div>

  <div className="" >
     <button className="bg-pink-400 outline-4 px-6 py-1 ml-10 rounded-md "onClick={()=>setCount(count<10?count+1:count)}>+</button>

     <button className="bg-blue-200 outline-4 px-8 py-1 ml-10 rounded-md "onClick={decrement}>-</button>

     <button className="bg-pink-400 outline-4 px-6 py-1 ml-10 rounded-md"onClick={reset}>reset</button>
  </div>
    
</div>
 
  )
}
export default App