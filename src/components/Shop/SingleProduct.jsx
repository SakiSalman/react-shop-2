import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Breacumb from "../../partials/Breacumb";
import ProductGrid from "./ProductGrid";

const SingleProduct = ({ catNmae }) => {
  const param = useParams();

  let [productdetails, setProductdetails] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:5050/product/${param.name}`).then((res) => {
      setProductdetails(res.data);
    });
  });

  const [related, setRelated] = useState([])

  useEffect( () => {
    axios.get(`http://localhost:5050/category/${productdetails.categoryId}/product`).then( res => {
      setRelated( res.data)
    })
  })



  return (
    <div>
      <Breacumb tittle={productdetails.name}/>

      {/* Prduct Details */}

      <section class="flat-product-detail">
        <div class="container">
          {
            <div class="row">
              <div class="col-md-6">
                <div class="flexslider">
                  <img
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                    src={productdetails.photo}
                    alt=""
                  />
                </div>
              </div>
              <div class="col-md-6">
                <div class="product-detail">
                  <div class="header-detail">
                    <h4 class="name">{productdetails.name}</h4>
                    <div class="category">
                      {catNmae(productdetails.categoryId)}
                    </div>
                    <div class="reviewed">
                      <div class="review">
                        <div class="queue">
                          <i class="fa fa-star" aria-hidden="true"></i>
                          <i class="fa fa-star" aria-hidden="true"></i>
                          <i class="fa fa-star" aria-hidden="true"></i>
                          <i class="fa fa-star" aria-hidden="true"></i>
                          <i class="fa fa-star" aria-hidden="true"></i>
                        </div>
                        <div class="text">
                          <span>{productdetails.rating} Reviews</span>
                          <span class="add-review">Add Your Review</span>
                        </div>
                      </div>
                      <div class="status-product">
                        Availablity <span>In stock</span>
                      </div>
                    </div>
                  </div>

                  <div class="content-detail">
                    <div class="price">
                      {productdetails.sale_price ? (
                        <>
                          <div class="regular">
                            <del>${productdetails.regular_price}</del>
                          </div>
                          <div class="sale">${productdetails.sale_price}</div>
                        </>
                      ) : (
                        <div class="regular">${productdetails.sale_price}</div>
                      )}
                    </div>
                    <div class="info-text">{productdetails.description}</div>
                    <div class="product-id">
                      SKU: <span class="id">FW511948218</span>
                    </div>
                  </div>

                  <div class="footer-detail">
                    <div class="quanlity-box">
                      <div class="colors">
                        <select name="color">
                          <option value="">Select Color</option>
                          <option value="">Black</option>
                          <option value="">Red</option>
                          <option value="">White</option>
                        </select>
                      </div>
                      <div class="quanlity">
                        <span class="btn-down"></span>
                        <input
                          type="number"
                          name="number"
                          value=""
                          min="1"
                          max="100"
                          placeholder="Quanlity"
                        />
                        <span class="btn-up"></span>
                      </div>
                    </div>
                    <div class="box-cart style2">
                      <div class="btn-add-cart">
                        <a href="#" title="">
                          <img
                            src="https://creativelayers.net/themes/techno-html/images/icons/add-cart.png"
                            alt=""
                          />
                          Add to Cart
                        </a>
                      </div>
                      <div class="compare-wishlist">
                        <a href="compare.html" class="compare" title="">
                          <img
                            src="https://creativelayers.net/themes/techno-html/images/icons/compare.png"
                            alt=""
                          />
                          Compare
                        </a>
                        <a href="compare.html" class="wishlist" title="">
                          <img
                            src="https://creativelayers.net/themes/techno-html/images/icons/wishlist.png"
                            alt=""
                          />
                          Wishlist
                        </a>
                      </div>
                    </div>

                    <div class="social-single">
                      <span>SHARE</span>
                      <ul class="social-list style2">
                        <li>
                          <a href="#" title="">
                            <i class="fa fa-facebook" aria-hidden="true"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#" title="">
                            <i class="fa fa-twitter" aria-hidden="true"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#" title="">
                            <i class="fa fa-instagram" aria-hidden="true"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          }
        </div>
      </section>

      <section class="flat-imagebox style4">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <div class="flat-row-title">
                <h3>Related Products</h3>
              </div>
            </div>
          </div>
          <div class="row">
            {

                  related.map( data => 
                    
                      data.slug !== productdetails.slug ? <div class="col-md-4">
                      <ProductGrid  name={data.name}
											sale_price={data.sale_price}
											regular_price={data.regular_price}
											photo={data.photo} id={data.id}/>
                    </div> : ''
                    
                    )

            }
          </div>
        </div>
      </section>
      {/* Prduct Details */}
    </div>
  );
};

export default SingleProduct;
