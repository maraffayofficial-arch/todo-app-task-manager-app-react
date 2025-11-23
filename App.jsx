import React, { useState, useEffect } from 'react'
import './App.css'
import Header from './Componenets/Header'
import { Todos } from './Componenets/Todos'
import { Footer } from './Componenets/Footer'
import { Addtodo } from './Componenets/Addtodo'
import {BrowserRouter as Router, Routes,Route } from 'react-router-dom'
import About from './Componenets/About'

function App() {
  let inIt
  if (localStorage.getItem('todos') === null) {
    inIt = []
  }
  else {
    inIt = JSON.parse(localStorage.getItem('todos'))
  }
  const onDelete = (todo) => {
    console.log('I am On delete', todo)
    setTodos(todos.filter((e) => {
      return e !== todo
    }))
    localStorage.setItem("todos", JSON.stringify(todos))
  }
  const addtodo = (title, desc) => {
    if (todos.length === 0) {

      console.log('I am adding this todo', title, desc)
      let myTodo = {
        title: title,
        desc: desc,
        sno: 1
      }

      setTodos([...todos, myTodo])
      console.log('Adding todo', myTodo)
    }
    // let sno = todos[todos.length - 1].sno + 1
    console.log('I am adding this todo', title, desc)
    let myTodo = {
      title: title,
      desc: desc,
      sno: todos.length === 0 ? 1 : todos[todos.length - 1].sno + 1
    }

    setTodos([...todos, myTodo])
    console.log('Adding todo', myTodo)
  }

  const [todos, setTodos] = useState(inIt)

  useEffect(() => {

    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])
  return (

    <>
      <Router>

      <Header title='Mirof' searchBar={true} />
      <Routes>

             <Route path='/' element={
                                <>
            <Addtodo addtodo={addtodo} />
            <Todos todos={todos} onDelete={onDelete} />
          </>
        } />
        
        <Route  path='/about' element={<About/>}/>
                
    
          </Routes>
      <Footer />
      
      </Router>
    </>
  )
}

export default App
