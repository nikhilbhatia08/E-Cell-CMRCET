import React from 'react'
import './Tcard.css'

function Tcard(props) {
  const mail = `mailto:${props.mail}`
  console.log(mail);
  return (
    <>
        <div className="t_card">
            <img src="https://media.istockphoto.com/id/1435220822/photo/african-american-software-developer.jpg?s=1024x1024&w=is&k=20&c=htyLzgrvGN1McCRuSkQIrG1BuBmNLJUR-nBBKxb86ko=" alt="" className='img_of_president'/>
          <div className="name_of_pres">
            <h1>{props.name}</h1>
          </div>
          <div className="icons">
            <a href={props.insta}>
              <img className='inst' src={require('../Pictures/insta1.png')} alt="" />
            </a>
            <a href={props.linkedin}>
              <img src={require('../Pictures/linkedin1.png')} alt="" className="meta" />
            </a>
            <a href={mail}>
              <img src={require('../Pictures/mail1.png')} alt="" className="mail" />
            </a>
            
            {/* <button className="goto"><img src="" alt="" /></button> */}
          </div>
        </div>
    </>
  )
}

export default Tcard