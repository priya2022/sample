import React from 'react'
import './Home.css'


const Home = () => {
  return (
    <div className='mycontainer'>
      <div> <span className="myh"><i class="bi bi-emoji-smile myColor"></i></span> <span  className="myh">Celebration</span></div>
      <div> <span className="myh"><i class="bi bi-hand-thumbs-up myColor"></i></span> <span  className="myh">Challenges</span></div>
      <div> <span className="myh"><i class="bi bi-lightbulb myColor"></i></span> <span  className="myh">Feature Work</span></div>
    </div>
  )
}

export default Home