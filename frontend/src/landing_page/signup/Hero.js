import React from "react";

function Home() {
  return (
    <div className="container p-3">
      
      <div className="text-center mb-5">
        <h3 className="mt-5">
          Open a free demat and trading account online
        </h3>

        <p className="fs-5 text-muted mt-4">
          Start investing brokerage free and join a community of
          1.6+ crore investors and traders
        </p>
      </div>

      <div className="row align-items-center">

        <div className="col-6 p-5 d-flex justify-content-center">
          <img
            src="media/images/account_open.svg"
            alt="account open"
            style={{ width: "90%" }}
          />
        </div>

        <div className="col-6 p-5">
          <h2>SignUp Now</h2>

          <p className="fs-5 text-muted mt-4">
            Or track your existing application
          </p>
        </div>
        < h3 className="text-center mb-5  text-muted mt-4">Investment options with Zerodha demat account</h3>

      </div>
    </div>
  );
}

export default Home;