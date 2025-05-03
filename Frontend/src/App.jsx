import React from 'react'
import Home from '../src/Home/Home'
import Courses from './Courses/Courses'
import Signup from './components/Signup'
import Login from './components/Login'
import Contact from './components/Contact'
import About from './components/About'
import Linked from './components/About'
import {Route,Routes} from 'react-router-dom'
export default function App() {
  return (
    <>
    {/* <Home/>
    <Course/> */}
    <div className='dark:bg-slate-900 dark:text-white'>
    <Routes >
      <Route path="/" element={<Home/>} />
      <Route path="/Course" element={<Courses/>} />
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/Login' element={<Login/>}/>
      <Route path='/Contact' element={<Contact/>}/>
      <Route path='/About' element={<About/>}/>
    </Routes>
    </div>
    
    </>
  )
}
