import React, { useState } from 'react'

const AboutCardFunction = (props) => {
  const [first, setfirst] = useState("First");
  const [second, setsecond] = useState("Second");
  
  return (
    <div className="text-xl m-2 border-2 border-black w-fit p-4 rounded-sm bg-slate-200">
        <h1>{props.name}</h1>
        <h2>{props.location}</h2>
        <h2>{props.contact}</h2>
        <p>{first}</p>
        <p>{second}</p>
    </div>
  )
}

export default AboutCardFunction