import React from 'react'
import "./App.css"
import { useForm } from 'react-hook-form'


function App() {


  const {
    register,
    handleSubmit,
    formState : {errors , }
  } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <>
      <form className='form' onSubmit={handleSubmit(onSubmit)} >
        <h2>User Form</h2>
        <div className="input_wrapper">
          <label htmlFor="name">Name</label>
          <input autoComplete='off' {...register("name")} type="text" name='name' />
        </div>

        <div className="input_wrapper">
          <label htmlFor="email">Email</label>
          <input autoComplete='off' {...register("email")} type="email" name='email' />
        </div>
        <div className="input_wrapper">
          <label htmlFor="name">Password</label>
          <input autoComplete='off' {...register("password")} type="password" name='name' />
        </div>

        <div className="btn_container">
          <button className='btn' type='submit'  >Submit</button>
        </div>

      </form>
    </>
  )
}

export default App