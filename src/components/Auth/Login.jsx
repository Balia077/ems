import React, { useState } from 'react'

const Login = ({handleLogin}) => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const submiHandler = (e)=>{
        e.preventDefault()
        handleLogin(email,password)
        setEmail('')
        setPassword('')
    }

  return (
    <div className='flex h-screen w-screen items-center justify-center'>
      <div className='border-2 rounded-2xl border-emerald-600 p-20'>
        <form onSubmit={(e)=>{
            submiHandler(e)
        }}
         className='flex flex-col items-center justify-center'>
            <input
            value={email}
            onChange={(e)=>{
                setEmail(e.target.value)
            }}
            required className='outline-none border-2 border-emerald-500 text-xl rounded-full py-2 px-5 placeholder:text-grey-500 ' type="email" placeholder='Enter Your Email'
            />
            <input
            value={password}
            onChange={(e)=>{
                setPassword(e.target.value)
            }}
            required className='outline-none border-2 mt-4 border-emerald-500 text-xl rounded-full py-2 px-5 placeholder:text-grey-500 ' type="password" placeholder='Enter Password' 
            />
            <button className='mt-7 text-white outline-none border-none bg-emerald-600 text-xl rounded-full font-bold py-2 px-25'>Log in</button>
        </form>
      </div>
    </div>
  )
}

export default Login
