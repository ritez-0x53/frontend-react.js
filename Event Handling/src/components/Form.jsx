import React, { useEffect, useState } from 'react'
import "./Form.css"


function Form() {

    const [form , setForm] = useState({name:"" , email:""});

    function handleChange(e) {
        setForm((val)=> { return {...val , [e.target.name] : e.target.value} });
    }

    useEffect(()=> {
        console.log(form);
    } , [form])
    
    return (
        <form className='form_container' >
            <div className="input_wrapper">
                <label htmlFor="name">Name</label>
                <input onChange={handleChange} value={form.name} autoComplete='off' name='name' id='name' type="text" />
            </div>

            <div className="input_wrapper">
                <label htmlFor="email">Email</label>
                <input onChange={handleChange} value={form.email} autoComplete='off' name='email' id='email' type="email" />
            </div>

            <div className="btn_container">
                <button>Submit</button>
            </div>
        </form>
    )
}

export default Form