import { useState } from 'react'
import './App.css'
import Header from './Header'
import Sidebar from './Sidebar'
import Home from './Home'

function App() {
  return (
    <div className='grid-container'>
      <Home/>
      <Header/>
      <Sidebar/>
    </div>
  )
}

export default App
