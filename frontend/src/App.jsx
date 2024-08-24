import React from 'react'
import Navbar from './components/navbar/Navbar'
import Home from './components/home/Home'
import { BrowserRouter, Route,Routes } from 'react-router-dom'
import ContactUs from './components/contactus/ContactUs'
import About from './components/about/About'
import Course from './components/courses/Course'
import CourseCard from './components/courses/CourseCard'
import CourseContent from './components/coursecontent/CourseContent'
import Register from './components/register/Register'
import Login from './components/register/Login'


function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='contactus' element={<ContactUs/>}/>
    <Route path='about' element={<About/>}/>
    <Route path='courses' element={<Course/>}></Route>
    <Route path='content' element={<CourseContent/>}/>
    <Route path='register' element={<Register/>}/>
    <Route path='login' element={<Login/>}/>
    </Routes>
    </BrowserRouter>
      
      
    </>
  )
}

export default App
