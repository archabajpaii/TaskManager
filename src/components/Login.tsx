import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useUser } from '../context/UserContext';

function Login() {
    const [username,setUsername]=useState('');
    const [password,setPassword]=useState('');
    const [error,setError]=useState('');
    const navigate=useNavigate();
    const {userInfo}=useUser();
    function handlelogin(e:React.FormEvent):void{
        e.preventDefault();

        if(username==userInfo.username && password==userInfo.password){
            setError('');
            navigate('/dashboard');
        }else{
            setError('Invalid username or password');
        }
    }

  return (
    <>
    
        <div className='flex items-center justify-center h-screen bg-slate-400'>
            <div className='p-8 rounded bg-white shadow-md w-96'> 
            <form>
            <h1 className='font-bold text-2xl text-center mb-4'>Login</h1>
            <label htmlFor="">Username</label>
            <input type="text" placeholder='Enter your username' value={username} onChange={(e)=>setUsername(e.target.value)} className='w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500'/>
            <label htmlFor="">Password</label>
            <input type="password" placeholder='Enter your password' value={password} onChange={(e)=> setPassword(e.target.value)} className='w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500'/>

            <button type='submit' onClick={handlelogin} className='px-4 py-2 w-full bg-blue-500 mt-5 hover:bg-blue-600'>Login</button>
            {error && <p className='text-red-500 text-center font-bold text-sm mb-2 mt-2'>{error}</p>}
            <p className='w-full text-center mt-2 font-bold text-sm'>
            Don't have an account?{'  '}
            <a href='/signup' className='w-full text-center text-blue-600 font-bold hover:text-red-600'>Sign Up here!</a>

        </p>
            </form>
            </div>
           
        </div>;

    
    </>
  )
}

export default Login