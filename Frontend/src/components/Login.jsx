import React from 'react'
import { Link } from 'react-router-dom'
import Signup from './Signup'
import {useForm} from 'react-hook-form'
function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div>
      {/* You can open the modal using document.getElementById('ID').showModal() method */}
<dialog id="modal" className="modal">
  <div className="modal-box">
    <form method="dialog" onSubmit={handleSubmit(onSubmit)}>
      <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
    
    <h1 className="font-bold my-2 text-xl py-3 px-1">Login</h1>
    <div>
      <span className='px-1'>Email</span><br/>
      <input type="email" placeholder="Enter Your Email" className="w-80 px-3 my-3 rounded border outline-none" {...register('email', { required: true })}/>
      <br/>
      {errors.email && <p className='text-sm text-red-500'>Email is required.</p>}
      <br/>
      <span className='px-1'>Password</span><br/>
      <input type="text" className="w-80 px-3 my-3 rounded border outline-none" placeholder="Enter your password" {...register('password', { required: true })}/>
      <br/>
      {errors.password && <p className='text-sm flex text-red-500'>Password is required.</p>}
    </div>
    <div className='flex justify-between mx-2 my-3'>
      <button className='bg-pink-500 p-2 rounded px-3 text-white'>Login</button>
      <p className='px-2 py-1'>Not Registered? 
        <Link to='/Signup' className='cursor-pointer text-blue-400'>SignUp</Link>
      </p>
    </div>
    </form> 
  </div>
  
</dialog>
    </div>
  )
}

export default Login
