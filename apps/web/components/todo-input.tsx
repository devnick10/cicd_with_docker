'use client'
import React, { useState } from 'react'

export const TodoInput: React.FC = () => {
  const [title, setTitle] = useState("");

  return (
    <div style={{ width: "100vw", height: "10rem", marginTop: "5rem", display:"flex",justifyContent:"center" ,alignItems:"center",gap:"4"}}>
      <input style={{padding:"10px 12px 10px 12px"}} value={title} onChange={(e) => setTitle(e.target.value)} type="text" />
      <button style={{padding:"10px 12px 10px 12px"}} >submit</button>
    </div>
  )
}
