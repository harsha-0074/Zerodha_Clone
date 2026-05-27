import React from "react";

import Hero from "./Hero";
import Left from "./left";
import Right from "./Right";
import Navbar from "../Navbar";
import Footer from "../Footer";
import Universe from "./Universe";

function ProductsPage() {
  return (
    <>
      <Hero />
      <Left
        imageURL="media/images/products-kite.png"
        productName="Kite"
        productDesc="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."
        tryDemo=""
        learnMore=""
        googlePlay=""
        appStore=""
      />
      <Right 
      imageURL="media/images/products-console.png" productName="Console" productDesc="The central dashboard for your Zerodha account. Gain insights into your trades
      and investments with in-depth reports and visualisations." tryDemo="Learn More" />
      <Left
        imageURL="media/images/products-coin.png"
        productName="coin"
        productDesc="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. 
        Enjoy the investment experience on your Android and iOS devices."
        tryDemo=""
        learnMore=""
        googlePlay=""
        appStore=""
      />
      <Right 
      imageURL="media/images/products-console.png" productName="Kite Connect API" productDesc="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, 
      build your investment app and showcase it to our clientbase." tryDemo="Kite Connect " />
      <Left
        imageURL="media/images/varsity-products.svg"
        productName="Varsity mobile"
        productDesc="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is 
        broken down into bite-size cards to help you learn on the go"
        tryDemo=""
        learnMore=""
        googlePlay=""
        appStore=""
      />
      <p className="text-center mt-5 mb-5 fs-5">
        Want to know more about our technology stack? 
        Check out the <a href = " "style = {{textDecoration: "none"}}>Zerodha.tech</a> blog.
      </p>
      <Universe />
    </>
  );
}

export default ProductsPage;
