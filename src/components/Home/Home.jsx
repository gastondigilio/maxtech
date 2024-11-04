import './Home.css';
import React, { useState, useEffect } from "react";
import Navbar from '../Navbar/Navbar'
import Approach from '../Approach/Approach';
import About from '../About/About';
import Footer from '../Footer/Footer';
import Contact from '../Contact/Contact';
// import Entrenamientos from '../Entrenamientos/Entrenamientos';


function Home() {
    const [showScroll, setShowScroll] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', checkScrollTop);
        return function cleanup() {
            window.removeEventListener('scroll', checkScrollTop);
        };
    });

    const checkScrollTop = () => {
        if (!showScroll && window.pageYOffset > 400) {
            setShowScroll(true);
        } else if (showScroll && window.pageYOffset <= 400) {
            setShowScroll(false);
        }
    };

    const scrollTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div className="App">
            <Navbar />
            <Approach />
            {/* <Entrenamientos /> */}
            {/* <div className={`scroll-to-top ${showScroll ? 'show' : ''}`} onClick={scrollTop}>
                <span className="material-icons">
                    arrow_upward
                </span>
            </div> */}
            <About />
            <Contact />
            <Footer />
        </div>
    );
}

export default Home;
