import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './components/Login'
import SignUp from './components/SignUp'
import Dashboard from './components/Dashboard'
import Settings from './pages/Settings'
import Profile from './pages/Profile'
import { UserProvider } from './context/UserContext'
import Reports from './pages/Reports'

function App() {
  return (
    <>
    <UserProvider>
   <BrowserRouter>
    <Routes>
      <Route path='/login' element={<Login/>}/>
      <Route path='/signup' element={<SignUp/>}/>
      <Route path='/dashboard' element={<Dashboard/>}/>
      <Route path='/profile' element={<Profile/>}/>
      <Route path='/reports' element={<Reports/>}/>
      <Route path='/settings' element={<Settings/>}/>
      <Route path='*' element={<Login/>}/>
      
    </Routes>
   </BrowserRouter>
   </UserProvider>
   </>
   
  )
}

export default App