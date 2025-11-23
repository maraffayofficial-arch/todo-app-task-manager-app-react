import React, { useState } from 'react'

export const Addtodo = ({addtodo}) => {
const [title,setTitle]=useState("")
const [desc,setDesc]=useState("")
let submit=(e)=>{
e.preventDefault()
if (!title|| !desc) {
    alert("Please provide title and description to create a todo")
}

else{addtodo(title,desc)
setTitle('')
setDesc('')}
}

  return (
    <div className='container my-3'>
      <form onSubmit={submit}>
  <div className="mb-3">
    <h3>Add Todo</h3>
    <label htmlFor="title" className="form-label">Title Todo</label>
    <input type="text" value={title} onChange={(e)=>setTitle(e.target.value)}  className="form-control" id="title" aria-describedby="emailHelp"/>
  </div>

  <div className="mb-3">
    <label htmlFor="desc" className="form-label">Todo Description</label>
    <input type="text" value={desc} onChange={(e)=>setDesc(e.target.value)}className="form-control" id="desc"/>
  </div>
  
  <button type="submit" className="btn btn-primary">Add todo</button>
</form>
    </div>
  )
}


