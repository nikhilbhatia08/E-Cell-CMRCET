import React from 'react'
import './Navbar.css'
import {Link} from 'react-router-dom';
import log from '../Pictures/log.jpeg'
//import { useSelector, useDispatch } from 'react-redux'

function Navbar() {
  //const log_details = useSelector((state) => [state.log.details, state.log.name_of_user]);
  return (
    <div className='Nav'>
      <div className="fro">
        <div className="logo">
            <img src={log} alt="img of logo" className='ii'/>
            <p>E-cell CMRCET</p>
        </div>
          <div className="space">
            <Link to='/' style={{ textDecoration: 'none', color:'black'  }}>Home</Link>
          </div>
            <div className="space">
              <Link to='/blogs' style={{ textDecoration: 'none', color:'black' }}>Blogs</Link>
            </div>
            <div className="space">
              <Link to='/contact' style={{ textDecoration: 'none', color:'black'  }}>Contact Us</Link> 
            </div>
            
        </div>
        <div className="back">
          {localStorage.getItem('token') ? <div className="space">Welcome {localStorage.getItem('token')}</div> : <div className="back"><div className="space login">
            <Link to='/login' style={{ textDecoration: 'none', color:'rgb(58, 144, 210)'}}>Login</Link>
          </div>
            <div className="space">
              <Link to='/register' style={{ textDecoration: 'none', color:'black'  }}>Register</Link>
            </div></div>}
          
        </div>
    </div>
  )
}

export default Navbar