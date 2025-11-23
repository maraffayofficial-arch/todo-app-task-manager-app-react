import React from 'react'
import { TodoItem } from './TodoItem'

export function Todos(props) {
  return (
    <div className='container text-center my-3'>
      <h3 >Todos List</h3>
      {props.todos.length===0? " No todos to display": 
          props.todos.map((todo)=> {return <TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete}/>}
        
        )}
      
    </div>
  )
}

{/* 

// 🔹 𝐁𝐫𝐞𝐚𝐬𝐭 𝐂𝐚𝐧𝐜𝐞𝐫 𝐏𝐫𝐞𝐝𝐢𝐜𝐭𝐢𝐨𝐧

// 🔹 𝐂𝐮𝐬𝐭𝐨𝐦𝐞𝐫 𝐂𝐡𝐮𝐫𝐧 𝐏𝐫𝐞𝐝𝐢𝐜𝐭𝐢𝐨𝐧

// 🔹 𝐃𝐢𝐚𝐛𝐞𝐭𝐞𝐬 𝐏𝐫𝐞𝐝𝐢𝐜𝐭𝐢𝐨𝐧

// 🔹 𝐇𝐚𝐧𝐝𝐰𝐫𝐢𝐭𝐭𝐞𝐧 𝐃𝐢𝐠𝐢𝐭 𝐑𝐞𝐜𝐨𝐠𝐧𝐢𝐭𝐢𝐨𝐧 (𝐂𝐍𝐍)

// 🔹 𝐒𝐭𝐨𝐜𝐤 𝐌𝐚𝐫𝐤𝐞𝐭 𝐓𝐫𝐞𝐧𝐝 𝐏𝐫𝐞𝐝𝐢𝐜𝐭𝐢𝐨𝐧

// 🔹 𝐒𝐞𝐧𝐭𝐢𝐦𝐞𝐧𝐭 𝐀𝐧𝐚𝐥𝐲𝐬𝐢𝐬 (𝐍𝐋𝐏)

// 🔹 𝐌𝐨𝐯𝐢𝐞 𝐑𝐞𝐜𝐨𝐦𝐦𝐞𝐧𝐝𝐚𝐭𝐢𝐨𝐧 𝐒𝐲𝐬𝐭𝐞𝐦

// 🔹 𝐋𝐨𝐚𝐧 𝐄𝐥𝐢𝐠𝐢𝐛𝐢𝐥𝐢𝐭𝐲 𝐏𝐫𝐞𝐝𝐢𝐜𝐭𝐢𝐨𝐧

// 🔹 𝐇𝐨𝐮𝐬𝐞 𝐏𝐫𝐢𝐜𝐞 𝐏𝐫𝐞𝐝𝐢𝐜𝐭𝐢𝐨𝐧 (𝐑𝐞𝐠𝐫𝐞𝐬𝐬𝐢𝐨𝐧)

// 🔹 𝐈𝐦𝐚𝐠𝐞 𝐂𝐥𝐚𝐬𝐬𝐢𝐟𝐢𝐜𝐚𝐭𝐢𝐨𝐧 𝐮𝐬𝐢𝐧𝐠 𝐂𝐍𝐍 */}