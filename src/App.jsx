import { useState } from 'react'
import Navbar from './Elements/Navbar'
import { Route, Routes } from 'react-router-dom'
import PublicationsPages from './Pages/PublicationPages'


function App() {

  return (
    <>
      <Navbar />
      <Routes>
        {/* <Route path='/' element={<Home/>}></Route> */}
        <Route path='/' element={<PublicationsPages/>}></Route>
      </Routes>
    </>
  )
}

export default App
