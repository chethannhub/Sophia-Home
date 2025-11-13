import Home from './Components/Home';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import OurStory from './Components/OurStory';
import Features from './Components/Features';
import Membership from './Components/Membership';
import Signin from './Components/Signin';
import GetStarted from './Components/GetStarted';
import Feedback_form from './Components/Feedback_form';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { HelmetProvider } from "react-helmet-async";


function App() {
  return (
    <HelmetProvider>
      <Router>
        <Navbar />

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/ourstory' element={<OurStory />} />
          <Route path='/membership' element={<Membership />} />
          <Route path='/signin' element={<Signin />} />
          <Route path='/getstarted' element={<GetStarted />} />
          <Route path='/feedback' element={<Feedback_form />} />
        </Routes>

        <Footer />
      </Router>
    </HelmetProvider>
  );
}

export default App;
