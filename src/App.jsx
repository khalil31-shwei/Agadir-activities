import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './style.css'
import Home from './pages/Home'
import Contact from './pages/contact'

function App() {
  const [count, setCount] = useState(0)
  if(window.location.pathname == '/contact'){
    return(
      <>
      <Contact/>
      </>
    )
  }
  return (
    <>
    <Home/>
    </>
  )
}

export default App
