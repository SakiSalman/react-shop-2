import React from "react";
import ProductGrid from "../Shop/ProductGrid";
import "./Home.css";

const Home = ({ product }) => {
  return (
    <div>
      {/* HOme Bannar */}
      <section className="flat-row flat-slider">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="home-bannar"></div>
            </div>
          </div>
        </div>
      </section>
      {/* Home Bannar */}

      {/* Home Promotioal images */}

      <section className="flat-row flat-banner-box">
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <div className="banner-box one-half">
                <div className="inner-box">
                  <a href="#" title="">
                    <img
                      src="https://creativelayers.net/themes/techno-html/images/banner_boxes/home-01.jpg"
                      alt=""
                    />
                  </a>
                </div>
                <div className="inner-box">
                  <a href="#" title="">
                    <img
                      src="	https://creativelayers.net/themes/techno-html/images/banner_boxes/home-05.jpg"
                      alt=""
                    />
                  </a>
                </div>
                <div className="clearfix"></div>
              </div>
              <div className="banner-box">
                <div className="inner-box">
                  <a href="#" title="">
                    <img
                      src="https://creativelayers.net/themes/techno-html/images/banner_boxes/home-04.jpg"
                      alt=""
                    />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="banner-box">
                <div className="inner-box">
                  <a href="#" title="">
                    <img
                      src="	https://creativelayers.net/themes/techno-html/images/banner_boxes/home-03.jpg"
                      alt=""
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Home Promotional Images */}

      {/* Home Product Tab */}
      <section className="flat-imagebox">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="product-tab">
                <ul className="tab-list">
                  <li className="active">New Arrivals</li>
                  <li>Featured</li>
                  <li>Top Selling</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="box-product">
            <div className="row">
            {product[0] && product.map(data => 
                
                <div className="col-lg-3 col-sm-6">
                  <ProductGrid
                    name={data.name}
                    sale_price={data.sale_price}
                    regular_price={data.regular_price}
                    photo={data.photo} id={data.id} />
                </div>
                
                )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
