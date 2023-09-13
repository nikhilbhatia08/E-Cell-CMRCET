import React from 'react'
import './Register.css'
import { useState } from 'react';
import axios from 'axios';

function Register() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [re, setRe] = useState('');
    let handleSubmit = async (e) => {
        e.preventDefault();
        axios.post('http://localhost:5050/register', { name , email, pass, re })
          .then((result) => {
            if(result.data.status === 200){
              window.location.href = '/login';
            }
            else{
              //setPstate(true);
              console.log('fhfdh');
            }
          })
          .catch((err) => {
            console.log(err);
          });
      }
  return (
    <>
    <form onSubmit={handleSubmit}>
    <div className="wrapper">
        <div className="reg">
            <div className="circle">
            </div>
            <div className="circle2">
            </div>
        </div>
        <div className="sett">
            <h1 style={{color: 'white'}}>Create Account</h1>
            <input type="text" value={name} onChange={(e)=>{setName(e.target.value)}} name="fname" id="" placeholder='Enter Your name' className='em2'/> 
            <input type="text" value={email} onChange={(e)=>{setEmail(e.target.value)}} name="email" id="" placeholder='Enter Your email' className='em2'/> 
            <input type="password" value={pass} onChange={(e)=>{setPass(e.target.value)}} name="pass" id="" placeholder='Enter Your Password' className='em2'/> 
            <input type="password" value={re} onChange={(e)=>{setRe(e.target.value)}} name="confirm_pass" id="" placeholder='Re-Enter the password' className='em2'/>
            <button type="submit" className='btn_of_reg'>Register</button>    
        </div>
    </div>
    </form>
    </>
  )
}

export default Register