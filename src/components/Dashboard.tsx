import React from 'react'
import {  useNavigate } from 'react-router-dom'

function Dashboard() {
    const navigate=useNavigate();
    function handleLogout(){
        navigate('/login');
    }
  return (
    <>
    <div className='flex items-center justify-center h-screen bg-gray-300'>
        <div className='w-96 bg-white shadow-md rounded  p-8'>
            <h1 className='w-full text-center font-bold text-2xl'>Welcome to Dashboard!</h1>
            <p className='text-center w-full text-sm font-bold mt-2 mb-2 text-blue-500 hover:text-red-700'>Explore the features available in your account.</p>

            <div className='grid grid-cols-3 gap-3 mt-4'>
                <button onClick={()=>navigate('/profile')} className='font-bold bg-blue-400 border rounded'>Profile</button>
                <button onClick={()=>navigate('/settings')} className='font-bold bg-blue-400 border rounded'>Settings</button>
                <button onClick={()=>navigate('/reports')} className='font-bold bg-blue-400 border rounded'>Reports</button>

            </div>
            <div className='flex justify-center mt-2'>
            <button onClick={handleLogout} className='bg-pink-500 font-bold p-2 mt-2 border rounded'>Logout</button>
            </div>
        </div>
    </div>
    </>
  )
}

export default Dashboard