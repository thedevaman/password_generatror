import React, { useState } from "react";
import { CircleUserRound, Copy, Download } from "lucide-react";
import 'animate.css'
import { ToastContainer, toast } from "react-toastify";


const App = () =>{

  const pattern = "gE#9@aP7$Q!zF1^kX8)rH4%L(cT&sV*J0N_DwZ}q+?B3{5]U2[6M<,>Y/RO~I|t-"
  const [password, setPassword] = useState('')
  const generatePassword = (e) =>{
    e.preventDefault();
   var p =''
   const len = e.target[0].value
   const pattern_len = pattern.length-1
   for(let i=0; i < len; i++)
   {
   const randomIndex = Math.floor(Math.random() * pattern_len)
   p = p+pattern[randomIndex]
   }
   setPassword(p)

  } 

  const copyPassword = ()=>{
    navigator.clipboard.writeText(password)
    toast.success("Password Copied")
  }
  const downloadPassword = ()=>{
    const blob = new Blob([password], { type:'text/plain' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement("a");
    a.href = url
    a.download = "password.txt"
    a.click();
    URL.revokeObjectURL(url)
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
     <p className="truncate">
      {password}
     </p>
     <div className="flex items-center justify-between gap-2">
       <Copy onClick={copyPassword} className="w-4 h-4 hover:scale-115 duration-300" />
       <Download onClick={downloadPassword} className="w-4 h-4 hover:scale-115 duration-300" />
       </div>
     </div>
  }

     </div>
     <ToastContainer/>
  </div>
  )

}

export default App