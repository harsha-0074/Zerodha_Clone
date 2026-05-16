import React from 'react'
import "./awards.css";

function Awards() {
    return ( 
        <div className='container mt-5'>
            <div className='row mt-5'>
                <div className='col-6 '>
                    <h3>Trust With Confidence</h3>
                    <div className='info mt-3'>
                        
                    <h4>Customer-first always</h4>
                    <p style={{ marginTop: "5px", marginBottom: "32px", color: "#666" }}>
                    That's why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh crores of equity investments, making us India’s largest broker; contributing to 15% of daily retail exchange volumes in India.
                    </p>

                    <h4>No spam or gimmicks</h4>
                    <p style={{ marginTop: "5px", marginBottom: "32px", color: "#666" }}>
                    No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like. Our philosophies.
                    </p>

                    <h4>The Zerodha universe</h4>
                    <p style={{ marginTop: "5px", marginBottom: "32px", color: "#666" }}>
                    Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.
                    </p>
                    </div>

                </div>
                <div className='col-6' >
                     <img src='media/images/hero2.png' alt = "HeroImg" style={{  width: '80%' }}></img>
                </div>
            </div>
            <div className="press mt-5">
               <img src="media/images/press-logos.png" alt="press logos" style={{width:"100%"}}/>
            </div>
        </div>
     );
}

export default Awards;