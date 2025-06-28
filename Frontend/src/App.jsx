import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from "../src/pages/Home"
import Login from './pages/Login'
import Singup from './pages/Singup'
import Navbar from "./Component/common/Navbar"
import {AuthProvider} from "../src/ContextApi/Auth"
import ContactUs from './pages/ContactUs'

function App() {

  return (
    <>
     <div>
     {/* //navbar fix everywhere */}
     <AuthProvider>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/singup" element={<Singup/>} />
        <Route path="/contact" element={<ContactUs/>} />
      </Routes>
     </AuthProvider>
     </div>
   
    </>
  )
}

export default App
