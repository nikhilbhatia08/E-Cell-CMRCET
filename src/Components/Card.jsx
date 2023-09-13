import React from 'react'
import {Link} from 'react-router-dom'
import './Card.css'

function Card(props) {
  return (
    <div className='card_rectangular'>
        <img src={props.img} alt="" className='img_of_card'/>
        <h2>{props.title}</h2>
        <p>{props.description}</p>
        <Link to={`/blogs/${props.id}`}>
            <button className='btn_of_card'>
                Read More
            </button>
        </Link>
    </div>
  )
}

export default Card