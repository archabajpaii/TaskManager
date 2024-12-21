import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function SignUp() {
    const [username,setUsername]=useState('');
    const [password,setPassword]=useState('');
    const [error,setError]=useState('');
    const navigate=useNavigate();

    function handlesignup(e:React.FormEvent){
        e.preventDefault()
        if(!username||!password){
            setError('Both credentials are required');
            return;
        }
        setError('')
        navigate('/login')
    }
  return (
    <>
   <div className='h-screen bg-slate-400 flex items-center justify-center'>
    <div className='bg-white p-8 w-96 rounded shadow-md'>
    
    <form>
        <h1 className='text-2xl font-bold text-center mb-4'>Sign Up</h1>
        <label htmlFor="">Username</label>
        <input type="text" placeholder='username' value={username} onChange={(e)=>setUsername(e.target.value)} className='px-4 py-2 w-full border rounded focus:ring-2 focus:outline-none focus:ring-blue-500'/>
        <label htmlFor="">Password</label>
        <input type="password" placeholder='password' value={password} onChange={(e)=>setPassword(e.target.value)} className='w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500'/>
        <button type="submit" onClick={handlesignup} className='w-full bg-blue-500 mt-5 border rounded p-2 hover:bg-blue-600'>SignUp!</button>
        {error && <p className='text-red-500 font-bold text-center text-sm mb-2 mt-2'>{error}</p>}
        <p className='w-full text-center mt-2 font-bold text-sm'>
            Already have an account?{'  '}
            <a href='/login' className='w-full text-center text-blue-600 font-bold hover:text-red-600'>Login here!</a>

        </p>
        
    </form>
    
    </div>
   </div>
  
   </>

  )
}

export default SignUp