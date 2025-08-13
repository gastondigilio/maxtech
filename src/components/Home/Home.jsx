import './Home.css';
import React, { useState, useEffect } from "react";
import Navbar from '../Navbar/Navbar'
import Approach from '../Approach/Approach';
import About from '../About/About';
import Footer from '../Footer/Footer';
import Contact from '../Contact/Contact';
import Product from '../Product/Product';



function Home() {

    return (
        <div className="App">
            <Navbar />
            <Approach />
            <About />
            {/* <Product/> */}
            <Contact />
            <Footer />
            <button
                className="whatsapp-button"
                onClick={() => window.open("https://wa.me/+5491151489606", "_blank")}
            >
                <img src="/images/ui/WhatsApp.png" alt="WhatsApp" />
            </button>
        </div>
    );
}

export default Home;
