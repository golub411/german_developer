import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './components/NavBar'
import Present from './components/present'
import Services from './components/Services.jsx'
import Works from './components/Works.jsx'
import About from './components/About.jsx'
import Сooperation from './components/Сooperation.jsx'
import Contacts from './components/Contacts.jsx'
import mage1 from './photos/1.png'
import mage2 from './photos/2.png'
import mage3 from './photos/3.png'

function App() {
  return (
    <div>
      <NavBar/>
      <Present/>
      <Services/>
      <Works name='RUKKOLA-SHOP' photos={[mage1, mage2, mage3]}/>  
      <About/>
      <Сooperation/>
      <Contacts/>
    </div>
  )
}

export default App
