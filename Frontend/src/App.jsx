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
import AddCourse from "./pages/Dashboard/AddCourse"
import Step1 from './pages/Dashboard/Steps/Step1'
import Step2 from './pages/Dashboard/Steps/Step2'
import Step3 from './pages/Dashboard/Steps/Step3'


function App() {

  return (
    <>
     <div>
     {/* //navbar fix everywhere */}
    <Toaster position="top-right" />
     <AuthProvider>
      <Navbar/>
      <Routes>
     <Route path="/" element={<Home />} />
     <Route path="/login" element={<Login />} />
     <Route path="/singup" element={<Singup />} />
     <Route path="/contact" element={<ContactUs />} />
     <Route path="/courses/:id" element={<Course />} />
     <Route path="/resetpassword" element={<EmailLink />} />
     <Route path="/reset_password/:token" element={<Password />} />
     <Route path="/catalog/:category" element={<Catalog />} />
     <Route path="/about" element={<About />} />

  {/* Dashboard routes */}
       <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>}>
       <Route index element={<Profile />} />
       <Route path="profile" element={<Profile />} />
       <Route path="mycourse" element={<MyCourse />} />
       <Route path="addcourse" element={<AddCourse />}>
       <Route index element={<Step1 />} />
       <Route path="step2" element={<Step2 />} />
       <Route path="step2/step3" element={<Step3 />} />
      </Route>
       <Route path="enrolledcourses" element={<EnrolledCourses />} />
       <Route path="setting" element={<Setting />} />
       <Route path="cart" element={<Cart />} />
  </Route>
</Routes>

     </AuthProvider>
     </div>
   
    </>
  )
}

export default App
