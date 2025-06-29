import React from 'react'
import "./App.css"
import { useForm } from 'react-hook-form'


function App() {


  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors, isSubmitting }
  } = useForm();

  function delay(t) {
    return new Promise((res, rej) => {
      setTimeout(() => { res("") }, t * 1000)
    })
  }


  const password = watch("password");

  const onSubmit = async (data) => {
    await delay(4);
    console.log(data)
    reset();
  }


  return (
    isSubmitting ? <h1> Loading...</h1> :
      <form className='form' onSubmit={handleSubmit(onSubmit)} >
        <h2>User Form</h2>
        <div className="input_wrapper">
          <label htmlFor="name">Name</label>
          <input autoComplete='off' {...register("name", {
            required: { value: true, message: "name field is required !" },
            minLength: { value: 4, message: "username should be atleast of 4 characters." },
            maxLength: { value: 12, message: "username is too long" }
          })} />
          <small>{errors.name && errors.name.message}</small>
        </div>

        <div className="input_wrapper">
          <label htmlFor="email">Email</label>
          <input autoComplete='off'  {...register("email", {
            required: { value: true, message: "email is required !" },
            minLength: { value: 5, message: "email is too short" },
            pattern: {
              value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
              message: "enter valid email"
            }
          })} />
          <small>{errors.email && errors.email.message}</small>
        </div>
        <div className="input_wrapper">
          <label htmlFor="name">Password</label>
          <input autoComplete='off' type='password' {...register("password" , {
            required : {value : true , message : "password is required !"},
            minLength : {value : 8 , message :"password is short , must contain atleast 8 chars."},
            pattern : {value : /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{8,16}$/ , message:"must contain alphabet,number and special chars"}
          })} />
          <small>{errors.password && errors.password.message}</small>
        </div>

        <div className="input_wrapper">
          <label htmlFor="name">Confirm Password</label>
          <input autoComplete='off' type='password' {...register("confirmPassword" , {
            validate : (val) => { 
              if(val !== password) {
                return "password not matched"
              }
             }            
          })} />
          <small>{errors.confirmPassword && errors.confirmPassword.message}</small>
        </div>

        <div className="btn_container">
          <button disabled={isSubmitting} className='btn' type='submit'  >Submit</button>
          <button style={{background:"red"}} onClick={reset}  className='btn'>reset</button>
        </div>

      </form>

  )
}

export default App