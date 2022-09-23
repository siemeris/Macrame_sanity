import React from 'react'
import { AiOutlineInstagram, AiOutlineTwitter } from 'react-icons/ai';

const Footer = () => {
    return (
        <div className="footer-container">
            <p className="icons">
                <AiOutlineInstagram />
                <AiOutlineTwitter />
            </p>
            <p className="nav">2022 Estiesta Macramé. All rights reserverd</p>
        </div>
    )
}

export default Footer