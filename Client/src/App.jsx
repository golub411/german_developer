import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './components/NavBar'
import Present from './components/present'
import Services from './components/Services.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <NavBar/>
      <Present/>
      <Services/>
    </div>
  )
}

export default App
