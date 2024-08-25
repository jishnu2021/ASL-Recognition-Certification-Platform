import React from 'react';
import Navbar from './components/navbar/Navbar';
import Home from './components/home/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ContactUs from './components/contactus/ContactUs';
import About from './components/about/About';
import Course from './components/courses/Course';
import CourseCard from './components/courses/CourseCard';
import CourseContent from './components/coursecontent/CourseContent';
import Register from './components/register/Register';
import Login from './components/register/Login';
import Earning from './components/earning/Earning';
import Testpage from './components/coursecontent/Testpage';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="contactus" element={<ContactUs />} />
        <Route path="about" element={<About />} />
        <Route path="courses" element={<Course />} />
        <Route path="content" element={<CourseContent />}>
          
        </Route>
        <Route path="testpage" element={<Testpage />} />
        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login />} />
        <Route path="earning" element={<Earning />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
