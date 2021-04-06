import React from "react";
import Product from "./Product";
import "./home.css";

function Home() {
  return (
    <div className="home">
      <div className="home_container">
        <img
          className="home_image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt="amazon_banner"
        />
      </div>
      <div className="home_row">
        <Product
          id="09876"
          title="The Lean Startup: How Constant Innovation Creates Radically Successful Business Paperback"
          price={11.99}
          image={
            "https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
          }
          rating={4}
        />
        <Product
          id="13923"
          title="Kenwood Kmix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl"
          price={169.0}
          rating={3}
          image="https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450_.jpg"
        />
      </div>
      <div className="home_row">
        <Product
          id="13921"
          title="Fitbit Limited Edition Sportswear with blak Strap"
          price={139.9}
          rating={3}
          image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
        />
        <Product
          id="1392111"
          title="Amazon Echo (3rd Generation) | Smart Speaker with Alexa, Charcoal Fabric"
          price={98.9}
          rating={5}
          image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
        />
        <Product
          id="1392122"
          title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
          price={598.99}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
        />
      </div>
      <div className="home_row">
        <Product
          id="1392133"
          title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor"
          price={439.9}
          rating={3}
          image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
        />
      </div>
    </div>
  );
}

export default Home;
