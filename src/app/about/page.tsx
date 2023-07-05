"use client";
import Handle from "./handle"; // backend here
import React from "react";


export default function About(){
    const [ name, setName] = React.useState("")
    const [ password, setPassword] = React.useState("")
    const SubmitHandle = async(e: React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        Handle({name,password})
    }
    return(
        <>
        <form className="flex flex-col mx-auto px-auto my-auto px-auto w-32" onSubmit={SubmitHandle}>
            <input className="block border-5-black" type="text" name="name" onChange={(e) => setName(e.target.value)}/>
            <input type="password" name="password" onChange={(e) => setPassword(e.target.value)}/>
            <button type="submit"> Submit </button>
            <pre>
                your name: {name}
                your password:  {password}
            </pre>
        </form>

        </>
    )
}
