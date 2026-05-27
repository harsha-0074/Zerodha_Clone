import React from "react";

function Right({
  imageURL,
  productName,
  productDesc,
  tryDemo,
}
) {
  return (
    <div className="container">
        <div className="row">
            <div className="col-6 p-5  mt-5">
                <h1>{productName}</h1>
                <p className="mt-3">{productDesc}</p>
                  <div >
                    <a href={tryDemo}>Learn More</a>
                  </div>
                  
            </div>
            <div className="col-6 ">
                <img src = {imageURL}></img>
            </div>
        </div>
    </div>
  );
}

export default Right;