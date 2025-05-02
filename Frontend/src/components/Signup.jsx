import React from 'react'
import { Link } from 'react-router-dom'
import Login from "./Login"
import {useForm} from 'react-hook-form'
export default function Signup() {
  const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm();
    const onSubmit = (data) => {
      console.log(data);
    };
  return (
    <>
    <div className='flex flex-col items-center justify-center h-screen px-4'>
      <form method="dialog" onSubmit={handleSubmit(onSubmit)}>
      
    <div className='border-2 shadow-md p-5 rounded-md'>
      <div className='flex justify-between '>
      <h1 className="font-bold my-2 text-xl py-3 px-1">SignUp</h1>
      <Link to='/' className="btn btn-sm btn-circle my-4">✕</Link>
      </div>
    

    <div>
    <span className='px-1'>Name</span><br/>
    
    <input type="text" placeholder="Enter Your Full Name" className="w-80 px-3 my-3 rounded border outline-none" {...register('name', { required: true })}/>
    <br/>
    {errors.name && <p className='text-sm text-red-500'>Name is required.</p>}<br/>
    <span className='px-1'>Email</span><br/>
      <input type="email" placeholder="Enter Your Email" className="w-80 px-3 my-3 rounded border outline-none" {...register('email', { required: true })}/>
      <br/>
      {errors.email && <p className='text-sm text-red-500'>Email is required.</p>}<br/>
      <span className='px-1'>Password</span><br/>
      <input type="text" className="w-80 px-3 my-3 rounded border outline-none" placeholder="Enter your password" {...register('password', { required: true })}/>
      <br/>
      {errors.password && <p className='text-sm flex text-red-500'>Password is required.</p>}<br/>
    </div>
    <div className='flex justify-between mx-2 my-3'>
      <button className='bg-pink-500 p-2 rounded px-3 text-white'>SignUp</button>
      <p className='px-2 py-2'>Already Registered? 
                 <Link to='/' className='cursor-pointer text-blue-400'> Back</Link>
               </p>
    </div>
    
    </div>
    </form>
</div>
    </>
  )
}
