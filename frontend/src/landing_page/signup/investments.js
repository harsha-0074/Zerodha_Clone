import React from 'react'

function invest(){
    return (
        <div className='container'>
            <div className='row'>
                <div className='col-6'>
                        <img
              src="media/images/tijori.svg"
              alt="stocks"
              style={{ width: "80px" }}
            />

            <div>
              <h3>Stocks</h3>

              <p className="text-muted fs-5">
                Invest in all exchange-listed securities
              </p>
            </div>
                </div>
                <div className='col-6'></div>
                <div className='col-6'></div>
                
            </div>
        </div>
    );
}

export default invest