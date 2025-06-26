import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from "../src/pages/Home"
import Login from './pages/Login'
import Singup from './pages/Singup'
import Navbar from "./Component/common/Navbar"

function App() {

  return (
    <>
     <div>
     <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/singup" element={<Singup/>} />
      </Routes>
     </div>
   
    </>
  )
}

export default App
