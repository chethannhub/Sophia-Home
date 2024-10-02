import React from 'react'
import Navbar from './Navbar'
import Hero from './Hero'
import Features from './Features'
import Call_to_action from './Call_to_action'
import Footer from './Footer'

// import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'


const Home = () => {
    

    return (
        <>
            <Navbar/>
            <Hero/>
            <Features/>
            <Call_to_action/>
            <Footer/>
        </>
    )
}

export default Home
