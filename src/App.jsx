import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { NavBar } from './NavBar';
import { Form } from './Form';
import { Ize } from './Ize'

function App() {
  let i = 0
  let component
  const as = {name: "lajos", hostname: "", location: "", price: "", minNight: ""}
  switch (window.location.pathname) {
    case "/":
      component = <Ize sa = {as} />
      break;
    
    case "/UjSzallas":
      component = <Form />
      break;
  }

  return(
    <>
      <NavBar/>
      <div className='Container'>
      { component }
      </div>
    </>
  )
}

export default App
