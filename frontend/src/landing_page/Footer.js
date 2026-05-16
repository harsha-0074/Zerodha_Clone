import React from 'react'

function Footer() {
    return ( 
        <div className='container'>

            <div className='row'>
                <div className='col'>
                <img src='media/images/logo.svg' style={{width:"50%"}}></img>
                </div>
                <div className='col'>
                    <p>Account</p>
                    <a href="">Open demat account</a>
                    <br/>
                    <a href="">Minor demat account</a>
                    <br/>
                    <a href="">NRI demat account</a>
<br/>               <a href="">HUF demat account</a>
<br/>                    <a href="">Commodity</a>
        <br/>            <a href="">Dematerialisation</a>
<br/>                    <a href="">Fund transfer</a>
    <br/>                <a href="">MTF</a>
              <br/>  </div>
                <div className='col'>
                    <p>Support</p>
                    <a href = "">Support portal</a>
                    <a href = "">How to file a complaint?</a>
                    <a href = "">Status of your complaints</a>
                    <a href = "">Bulletin</a>
                    <a href = "">Circular</a>
                    <a href = "">Z-Connect blog</a>
                    <a href = "">Downloads</a>
                </div>
                <div className='col'>
                    <p>Company</p>
                </div>
                <div className='col'>
                    <p>Quick Links</p>
                </div>
            </div>
        
        </div>
     );
}

export default Footer;