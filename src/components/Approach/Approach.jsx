import React from 'react';
import './Approach.css';
import Banner from '../assets/Approach/bannerApproach.png';

const Approach = () => {
    return (
        <>
            <div className="approach-container" style={{ backgroundImage: `url(${Banner})` }}>
                <div className="approach-content">
                    <h2 className='approach-title'>SOLUCIONES TECNOLÓGICAS PARA LA CONSTRUCCIÓN E INDUSTRIAS</h2>
                    <p className='approach-text'>Ofrecemos innovación tecnológica para lograr procesos productivos más eficientes y optimizar sistemas de construcción, aportando a un crecimiento sostenible</p>
                    <a href='#about' className="about-button">NOSOTROS</a>
                </div>
            </div>
        </>
    );
};

export default Approach;
