import { useEffect, useState } from 'react'
import Navbar from './Elements/Navbar'
import { Route, Routes } from 'react-router-dom'
import PublicationsPages from './Pages/PublicationPages'
import Footer from './Elements/Footer'


function App() {
  const [width, setWidth] = useState(window.innerWidth);
  const handleWindowSizeChange = () => {
    setWidth(window.innerWidth);
  }

  useEffect(() => {
    window.addEventListener('resize', handleWindowSizeChange);
    return () => {
      window.removeEventListener('resize', handleWindowSizeChange);
    }
  },[])

  const Mobile = width <= 768
  const MobileOrTablet = width <= 1024
  const MobileHigh = width <= 1080


  return (
    <>
      <Navbar Mobile={Mobile} MobileOrTablet={MobileOrTablet} MobileHigh={MobileHigh}/>
      <Routes>
        {/* <Route path='/' element={<Home/>}></Route> */}
        <Route path='/' element={<PublicationsPages Mobile={Mobile} MobileOrTablet={MobileOrTablet} MobileHigh={MobileHigh}/>}></Route>
      </Routes>
      <Footer Mobile={Mobile} MobileOrTablet={MobileOrTablet} MobileHigh={MobileHigh}/>
    </>
  )
}

export default App
