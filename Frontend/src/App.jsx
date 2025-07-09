import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from "../src/pages/Home"
import Login from './pages/Login'
import Singup from './pages/Singup'
import Navbar from "./Component/common/Navbar"
import {AuthProvider} from "../src/ContextApi/Auth"
import ContactUs from './pages/ContactUs'
import { Toaster } from 'react-hot-toast';
import About from './pages/About'
import PrivateRoute from './pages/PrivateRoute'
import Dashboard from './pages/Dashboard'
import Profile from './pages/Profile'
import MyCourse from './pages/MyCourse'
import EnrolledCourses from './pages/EnrolledCourses'
import Setting from './pages/Setting'
import Cart from './pages/Cart'
import Catalog from './pages/Catalog'
import Course from './pages/Course'
import EmailLink from './pages/EmailLink'
import Password from "./pages/Password"

function App() {

  return (
    <>
     <div>
     {/* //navbar fix everywhere */}
    <Toaster position="top-right" />
     <AuthProvider>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/singup" element={<Singup/>} />
        <Route path="/contact" element={<ContactUs/>} />
        <Route path="/courses/:id" element={<Course/>} />
        <Route path="/resetpassword" element={<EmailLink/>} />
        <Route path="/reset_password/:token" element={<Password/>} />
         <Route path='/catalog/:category' element={<Catalog/>}/> 
         <Route path="/about" element={<About/>} />
         <Route path='/dashboard' element={<PrivateRoute><Dashboard/></PrivateRoute>}>
          <Route index element={<Profile />} />
         <Route path='/dashboard/profile' element={<Profile/>}/> 
         <Route path='/dashboard/mycourse' element={<MyCourse/>}/>     
         <Route path='/dashboard/enrolledcourses' element={<EnrolledCourses/>}/>
         <Route path='/dashboard/setting' element={<Setting/>}/>
          <Route path='/dashboard/cart' element={<Cart/>}/>
        </Route>
      </Routes>
     </AuthProvider>
     </div>
   
    </>
  )
}

export default App
