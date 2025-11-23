import React from 'react'

export const Footer = () => {
  let footerStryle ={
    position: "fixed",
        bottom: 0,
        left: 0,
        width: "100vw",
        marginTop:"3px"
  }
  return (
   <footer className="bg-black text-light py-3 text-center" style={footerStryle}>
  <p>Copyright © Todolist.com</p>
</footer>

  )
}
