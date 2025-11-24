import React, { useState } from "react";
import { CircleUserRound, Copy } from "lucide-react";
import 'animate.css'


const App = () =>{
  const [password, setPassword] = useState('')
  const generatePassword = (e) =>{
    e.preventDefault();
   const len = e.taget[0].value
    

  } 

  return(
  <div className="h-screen bg-gradient-to-tr from-slate-900 via-rose-900 to-slate-900 flex justify-center items-center">
     <div className="flex flex-col items-center gap-3 animate__animated animate__bounceIn p-16 w-lg bg-white bg-gradient-to-r from-slate-700 via-rose-700 to-slate-700  border border-white/20 rounded-lg shadow-xl 
     hover:scale-105 transition-all duration-300">
     <CircleUserRound className="text-white w-12 h-12"  />
     <h1 className="text-3xl font-bold text-white">Password Generator</h1>
     <form className="w-full mt-6" onSubmit={generatePassword}>
       <input type="number" placeholder="Enter Password Length" className="focus:outline-white text-white w-full bg-black/10 p-3 rounded-lg border border-white/20"/>
       <button className="mt-4 w-full bg-green-500 text-black font-bold p-3 rounded-lg hover:bg-green-600 text-white transition-colors duration-200">Generate Strong Password</button>
     </form>
     {
      password !== '' &&
     <div className="p-3 rounded-lg bg-black/20 text-white w-full flex items-center justify-between mt-6">
     <p>
      {password}
     </p>
       <Copy className="w-4 h-4 hover:scale-115 duration-300" />
     </div>
  }

     </div>
  </div>
  )

}

export default App