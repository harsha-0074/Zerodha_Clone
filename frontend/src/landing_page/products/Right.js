import React from "react";

function Right(
  imageURL,
  productName,
  productDesc,
  tryDemo,
) {
  return (
    <div className="container">
        <div className="row">
            <div className="col-6">
                <h1>{productName}</h1>
                
            </div>
            <div className="col-6">
                <img src = {imageURL}></img>
            </div>
        </div>
    </div>
  );
}

export default Right;