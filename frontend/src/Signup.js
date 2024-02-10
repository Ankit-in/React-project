import React, {useState} from "react";
import { Link, useNavigate } from "react-router-dom";
import Validation from "./SignupValidation";
import axios from 'axios'


function Signup() {
    const [values, setValues]= useState({
        name: '',
        contact: '',
        age: '',
        email: '',
        password: ''
    })
    const navigate = useNavigate();
    const [errors, setErrors] = useState({})
    const handleInput = (event) =>{
        setValues(prev => ({...prev, [event.target.name]: [event.target.value]}))
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        setErrors(Validation(values));
        if(errors.name ==="" && errors.contact ==="" && errors.age ==="" && errors.email === "" && errors.password === ""){
           axios.post('http://localhost:3000/signup', values)
           .then(res => {
                navigate('/login')
           })
           .catch(err => console.log(err));
        }
    }

    return (
       <div className='d-flex justify-content-center align-items-center bg-primary vh-100'>
            <div className='bg-white p-3 rounded w-25'>
                <h2>Sign-Up</h2>
                <form action="" onSubmit={handleSubmit}>
                    <div className='mb-3'>
                        <label htmlFor='name'><strong>Name</strong></label>
                        <input type="text" placeholder='Enter Name' name='name'
                        onChange={handleInput} className='form-control rounded-0'></input>
                        {errors.name && <span className='text-danger'> {errors.name}</span>}
                    </div>
                    <div className='mb-3'>
                        <label htmlFor='contact'><strong>Contact</strong></label>
                        <input type="text" placeholder='Enter Moblie/phone' name='contact'
                        onChange={handleInput} className='form-control rounded-0'></input>
                        {errors.contact && <span className='text-danger'> {errors.contact}</span>}
                    </div>
                    <div className='mb-3'>
                        <label htmlFor='age'><strong>Age</strong></label>
                        <input type="text" placeholder='Enter Age' name='age'
                        onChange={handleInput} className='form-control rounded-0'></input>
                        {errors.age && <span className='text-danger'> {errors.age}</span>}
                    </div>
                    <div className='mb-3'>
                        <label htmlFor='email'><strong>Email</strong></label>
                        <input type="email" placeholder='Enter Email' name='email'
                        onChange={handleInput} className='form-control rounded-0'></input>
                        {errors.email && <span className='text-danger'> {errors.email}</span>}
                    </div>
                    <div className='mb-3'>
                        <label htmlFor='password'><strong>Password</strong></label>
                        <input type='password' placeholder='Enter Password' name='password'
                        onChange={handleInput} className='form-control rounded-0'></input>
                        {errors.password && <span className='text-danger'> {errors.password}</span>}
                    </div>
                    <button type='submit' className='btn btn-success w-100 rounded-0'><strong>Sign up</strong></button>
                    <p>You are agree to our terms and conditions</p>
                    <Link to="/Login" className='btn btn-default border w-100 bg-light rounded-0 text-decoration-none'><strong>Already have an Account</strong></Link>
                </form>
            </div>
        </div>
    )
}
export default Signup