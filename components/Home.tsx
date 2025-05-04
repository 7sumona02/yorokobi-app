import React from 'react'
import Nav from './Nav'
import Feedback from './Feedback'
import Mood from './Mood'
import EnQuiz from './EnQuiz'
import Footer from './Footer'

const Home = () => {
  return (
    <div className='w-screen'>
        <Nav />
        <Feedback />
        <Mood />
        <EnQuiz />
        <Footer />
    </div>
  )
}

export default Home