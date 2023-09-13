import React from 'react'
import './Login.css'
import wave from '../Pictures/wave.jpg'
import google from '../Pictures/google.svg'
import { useState } from 'react';
import axios from 'axios';
// import { useDispatch } from 'react-redux'
// import { logSlice } from '../Redux/log';

// useEffect(() => {
//   fetch('http://localhost:3000/users/p1', {
//     method: 'post',
//     body: JSON.stringify({
//       username: user,
//       password: pass
//     }),
//     headers: {
//       'Content-type': 'application/json; charset=UTF-8',
//     },
//   })
//   .then((response) => response.json())
//      .then((data) => {
//         console.log(data);
//         // Handle data
//      })
//      .catch((err) => {
//         console.log(err.message);
//      });
// }, []);

function Login() {
  //const log_details = useSelector((state) => state.log.details);
  //const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [Pstate, setPstate] = useState(false);
  let handleSubmit = async (e) => {
    e.preventDefault();
    axios.post('http://localhost:5050/login', { email, pass })
      .then((result) => {
        if(result.data.status === 200){
          //console.log(result.data);
          localStorage.setItem('token', result.data.data.Fname);
          //dispatch({type:'login_details', details: true, name_of_user: result.data.email});
          window.location.href = '/';
        }
        else{
          setPstate(true);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }
  //console.log(name);
  return (
    <>
    <form onSubmit={handleSubmit}>
    <div className='login_page'>
      <div className="part1">
        <div className="sub_p1">
          <h1 className='e1'>Digital</h1>
          <h1 className='e1'>Platform for</h1>
          <h1 className='e2'>Entreprenures</h1>
          <h1 className='e2'>E-CELL</h1>
          <h1 className="e2">CMRCET</h1>
        </div>
      </div>
      <div className="part2">
        <div className="greet">
          <h1 className='e2'>Hey, Hello</h1>
          <img src={wave} alt="" className='wave'/>
        </div>
        <div className="para">
          <p className='l2'>Enter Your Information</p>
        </div>
        <div className="cred">
          <input type="text" name="email" value={email} onChange={(e)=>setEmail(e.target.value)} id="ggh" className='em1' placeholder='Enter Your Email'/>
        </div>
        <div className="pass">
          <input type="password" name="password" value={pass} onChange={(e)=>setPass(e.target.value)} id="hhg" className='em1' placeholder='Enter Your Password'/> 
          {(Pstate ? <p className='l1'>Incorrect Password or email</p> : <></>)}
          <p className='l11'>Forgot Password ?</p>
        </div>
        <button className='btn_of_login' type='submit'>Log In</button>
        <p className="special">Or</p>
        <div className="goog">
          <img src={google} alt="" className='wave'/>
          <p>Sign in With google</p>
        </div>
      </div>
    </div>
    </form>
    </>
  )
}

export default Login