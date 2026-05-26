import React from "react";

function Left({
  imageURL,
  productName,
  productDesc,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <div className="conatiner p-3">
      <div className="row">
        <div className="col-6 p-5 text-end">
          <img src={imageURL} ></img>
        </div>
        <div className="col-6 p-5 mt-5">
          <h1>{productName}</h1>
          <p>{productDesc}</p>
          <div>
             <a href={tryDemo}>TryDemo</a>
          <a href={learnMore} style = {{marginLeft:"50px"}}>learnMore</a>
          </div>
         <div>
            <a href={googlePlay}>
            <img src="media/images/google-play-badge.svg"></img>
          </a>
          <a href={appStore}>
            <img src="media/images/appstorebadge.svg " style = {{marginLeft:"50px"}}></img>
          </a>
         </div>
          
        </div>
      </div>
    </div>
  );
}

export default Left;
