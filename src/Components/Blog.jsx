import React from 'react'
import './Blog.css'
import arrow from '../Pictures/arr.png'
import m1 from '../Pictures/m1.jpeg'
import Card from './Card';
import Footer from './Footer';

const posts = [{
  id: 1,
  img: "https://media.istockphoto.com/id/1435220822/photo/african-american-software-developer.jpg?s=1024x1024&w=is&k=20&c=htyLzgrvGN1McCRuSkQIrG1BuBmNLJUR-nBBKxb86ko=",
  description: "hello1"
},{
  id: 2,
  img: "https://media.istockphoto.com/id/1435220822/photo/african-american-software-developer.jpg?s=1024x1024&w=is&k=20&c=htyLzgrvGN1McCRuSkQIrG1BuBmNLJUR-nBBKxb86ko=",
  description: "hello1"
},{
  id: 3,
  img: "https://media.istockphoto.com/id/1435220822/photo/african-american-software-developer.jpg?s=1024x1024&w=is&k=20&c=htyLzgrvGN1McCRuSkQIrG1BuBmNLJUR-nBBKxb86ko=",
  description: "hello1"
},
{
  id: 3,
  img: "https://media.istockphoto.com/id/1435220822/photo/african-american-software-developer.jpg?s=1024x1024&w=is&k=20&c=htyLzgrvGN1McCRuSkQIrG1BuBmNLJUR-nBBKxb86ko=",
  description: "hello1"
},
{
  id: 3,
  img: "https://media.istockphoto.com/id/1435220822/photo/african-american-software-developer.jpg?s=1024x1024&w=is&k=20&c=htyLzgrvGN1McCRuSkQIrG1BuBmNLJUR-nBBKxb86ko=",
  description: "hello1"
}];

function Blog() {
  return (
    <div className='Page'>
      <h2 className='b1'>The Blog</h2>
      <div className="set">
        <h1 className='b2'>Writing's From our Team</h1>
        <img src={arrow} alt="" className='pic_of_arr'/>
      </div>
      <h2 className='b3'>The latest industry news, interviews, technologies, and resources</h2>
      <div className="mainCard" >
        <div className="write">
          <p>Olive Rhyne 20Jan2022</p>
          <h1>Excell at giving presentations</h1>
          <p>How do you create presentations that Wow your colleagues and impress your managers</p>
        </div>
      </div>
      <div className="blog-cards">
        {posts.map((post)=>{
          return(<Card id={post.id} img={post.img} description={post.description}/>)
        })}
      </div>
      <div className="foot">
        <Footer/>
      </div>
      
    </div>
  )
}

export default Blog