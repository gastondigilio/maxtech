import './Home.css';
import React from "react";
import Navbar from '../Navbar/Navbar'
import Approach from '../Approach/Approach';
import AboutUs from '../AboutUs/AboutUs.jsx';
import About from '../About/About';
import Footer from '../Footer/Footer';
import Contact from '../Contact/Contact';



function Home() {

    return (
        <div className="App">
            <Navbar />
            <Approach />
            <h1>PRUEBA SIMPLE</h1>
            <p>Texto de prueba básico</p>
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
