import React from 'react'
import Navbar from './Navbar'
import Hero from './Hero'
import Features from './Features'
import Call_to_action from './Call_to_action'
import Membership from './Membership'
import Footer from './Footer'

const Home = () => {
    return (
        <>
            <Hero />
            <div id="features"><Features /></div>
            {/* <Call_to_action /> */}
        </>
    )
}

export default Home
