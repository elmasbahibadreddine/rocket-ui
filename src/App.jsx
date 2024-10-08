import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import NotFound from './pages/NotFound'
import InternalError from './pages/InternalError'
import Header from './components/Header'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Logout from './pages/Logout';

const App = () => {
  const [username,setUsername] = useState('')
  const [fullname,setFullname] = useState('')
  const [profilePicture,setProfilePicture] = useState('')
  const [showNav,setSHowNav] = useState(false)
  const [showNavBtn,setSHowBtn] = useState(true)
  const [showAccountBtn,setShowAccountBtn] = useState(true)

  const handleLogout = () =>{
    setFullname('')
    setUsername('')
    setProfilePicture('')
  }
  
  return (
    <div className='w-screen min-h-screen text-slate-900 bg-slate-50 font-josefin flex flex-col justify-between items-center'>
      <Header showAccountBtn={showAccountBtn} fullname={fullname} showNavBtn={showNavBtn} showNavBar={()=> setSHowNav(true)} />
      {showNav ? <Navbar hideNavbar={()=> setSHowNav(false)}/> : ''}
      <Routes>
        <Route path="/" element={<Home showAccountBtn={()=>setShowAccountBtn(true)} showNavBtn = {()=>{setSHowBtn(true)}} hideNavbar={()=> setSHowNav(false)} fullname={fullname} setFullname={setFullname}/>} />
        <Route path="/login" element={<Login hideAccountBtn={()=>setShowAccountBtn(false)} hideNavBtn = {()=>{setSHowBtn(false)}} hideNavbar={()=> setSHowNav(false)}/>} />
        <Route path="/register" element={<Register hideAccountBtn={()=>setShowAccountBtn(false)} hideNavBtn = {()=>{setSHowBtn(false)}} hideNavbar={()=> setSHowNav(false)}/>} />
        <Route path="/logout" element={<Logout hideAccountBtn={()=>setShowAccountBtn(false)} hideNavBtn = {()=>{setSHowBtn(false)}} hideNavbar={()=> setSHowNav(false)} handleLogout={handleLogout}/>} />
        <Route path="/error" element={<InternalError hideAccountBtn={()=>setShowAccountBtn(false)} hideNavBtn = {()=>{setSHowBtn(false)}} hideNavbar={()=> setSHowNav(false)}/>} />
        <Route path="*" element={<NotFound hideAccountBtn={()=>setShowAccountBtn(false)} hideNavBtn = {()=>{setSHowBtn(false)}} hideNavbar={()=> setSHowNav(false)}/>} />
      </Routes>
      <Footer/>
    </div>
  )
}

export default App