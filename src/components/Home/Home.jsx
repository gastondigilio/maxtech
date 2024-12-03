import './Home.css';
import React, { useState, useEffect } from "react";
import Navbar from '../Navbar/Navbar'
import Approach from '../Approach/Approach';
import About from '../About/About';
import Footer from '../Footer/Footer';
import Contact from '../Contact/Contact';
import Product from '../Product/Product';
import WhatsappVerde from '../assets/Navbar/whatsappVerde.png'


function Home() {

    return (
        <div className="App">
            <Navbar />
            <Approach />
            <About />
            {/*<Product/>*/}
            <Contact />
            <Footer />
            <button
                className="whatsapp-button"
                onClick={() => window.open("https://wa.me/+5491164734500", "_blank")}
            >
                <img src={WhatsappVerde} alt="WhatsApp" />
            </button>
        </div>
    );
}

export default Home;
