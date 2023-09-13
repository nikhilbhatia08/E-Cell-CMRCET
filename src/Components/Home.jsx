import React from 'react'
import './Home.css'

function Home() {
  return (
    <>
    <div className="home_page">
      <div className="mm"><img src={require('../Pictures/applogo.png')} className='img_of_applogo' alt="" />
      <h1 className='nnn'>THE ENTREPRENEURSHIP CELL CMRCET</h1><br/>
      <h1 className='nnn1'>“ CREATING JOB CREATORS ”</h1>
      <img src={require('../Pictures/arrow.png')} alt="" />
      <h1 className='nnn2'>What We do ? </h1>
    </div>
    <div className="about_us">
      <div className="theme">
      <h1 className='nnn3'>About Us</h1>
      <div className="txt">
      <h2>Welcome to CMRCET Entrepreneurship Club, where entrepreneurial dreams take flight!</h2>
      <p>At CMRCET Entrepreneurship Club, we understand the extraordinary journey of entrepreneurship. It's a path filled with exhilarating highs, daunting challenges, and unbounded potential. That's why we're here—to empower and support aspiring and seasoned entrepreneurs alike.</p>
      <h2>Our Story:</h2>
      <p className='nn4'>Founded by a team of passionate entrepreneurs, CMRCET Entrepreneurship Club was born out of a shared vision: to create a nurturing ecosystem where innovation thrives and dreams become realities. We've been in your shoes, faced the sleepless nights, and celebrated the victories that come with building something from the ground up. Our experiences have shaped us into a team dedicated to your success.</p>
      <h2>What we Believe:</h2>
      <p>Innovation: We believe in the power of ideas, the spark of creativity, and the potential for groundbreaking solutions. Innovation is at the core of everything we do.</p>
      <p>Empowerment: We're on a mission to empower entrepreneurs with the knowledge, resources, and tools they need to turn their visions into profitable ventures.</p>
      <p>Community: We foster a vibrant community of like-minded individuals who inspire, support, and learn from one another. Your journey is our journey, and together, we're stronger.</p>
      <p>Diversity: We celebrate the diversity of thought, backgrounds, and experiences that make each entrepreneur unique. We believe that diverse perspectives lead to richer, more successful businesses.</p>
      </div>
    </div>
    </div>
    </div>
    </>
  )
}

export default Home