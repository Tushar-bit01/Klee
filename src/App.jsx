import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Home from './pages/Home'
import Characters from './pages/Characters'
import Songs from './pages/Songs'

const App = () => {
  return (
    <div className='text-6xl text-white'>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/characters" element={<Characters/>}/>
        <Route path="/songs" element={<Songs/>}/>
      </Routes>
    </div>
  )
}

export default App