import React from 'react'
import './Contact.css'
import Tcard from './Tcard'
import axios from 'axios'
import { useState, useEffect } from 'react'

function Contact() {
  const [data, setData] = useState([]);
  useEffect(()=>{
    axios.get('http://localhost:5050/contact')
    .then((data)=>{
      setData(data.data);
      //console.log(data.data);
    })
    .catch((err)=>{
      console.log(err);
    })
  }, [])
  return (
    <>
    <div className='conta'>
      {/* <div>Let's Talk About Us</div> */}
      {data.map((item)=>{
        return <Tcard name = {item.name} insta = {item.insta} linkedin = {item.linkedin} mail = {item.mail}/>
      })}
    </div>
    </>
  )
}

export default Contact