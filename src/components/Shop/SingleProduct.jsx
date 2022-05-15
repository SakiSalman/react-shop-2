import React from 'react'
import Breacumb from '../../partials/Breacumb'
import ProductGrid from './ProductGrid'

const SingleProduct = () => {
  return (
    <div>
        
        <Breacumb/>


        {/* Prduct Details */}
        
		<section class="flat-product-detail">
			<div class="container">
				<div class="row">
					<div class="col-md-6">
						<div class="flexslider">
							<img style={{width: '100%', height : '100%', objectFit: 'cover'}} src="https://creativelayers.net/themes/techno-html/images/product/other/04.jpg" alt="" />
						</div>
					</div>
					<div class="col-md-6">
						<div class="product-detail">
							<div class="header-detail">
								<h4 class="name">Warch 42 mm Smart Watches</h4>
								<div class="category">
									Smart Watches
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
											<span>3 Reviews</span>
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
									<div class="regular">
										$2,999.00
									</div>
									<div class="sale">
										$1,589.00
									</div>
								</div>
								<div class="info-text">
									Vivamus in tempor eros. Phasellus rhoncus in nunc sit amet mattis. Integer in ipsum vestibulum, molestie arcu ac, efficitur tellus. Phasellus id vulputate erat.
								</div>
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
										<input type="number" name="number" value="" min="1" max="100" placeholder="Quanlity"/>
										<span class="btn-up"></span>
									</div>
								</div>
								<div class="box-cart style2">
									<div class="btn-add-cart">
										<a href="#" title=""><img src="https://creativelayers.net/themes/techno-html/images/icons/add-cart.png" alt=""/>Add to Cart</a>
									</div>
									<div class="compare-wishlist">
										<a href="compare.html" class="compare" title=""><img src="https://creativelayers.net/themes/techno-html/images/icons/compare.png" alt=""/>Compare</a>
										<a href="compare.html" class="wishlist" title=""><img src="https://creativelayers.net/themes/techno-html/images/icons/wishlist.png" alt=""/>Wishlist</a>
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
			</div>
		</section>

		<section class="flat-product-content">
			<ul class="product-detail-bar">
				<li class="active">Description</li>
				<li>Tecnical Specs</li>
				<li>Reviews</li>
			</ul>
			<div class="container">
				<div class="row">
					<div class="col-md-6">
						<div class="description-text">
							<div class="box-text">
								<h4>Nuqqam Et Massa</h4>
								<p>Sed sodales sed orci molestie tristique. Nunc dictum, erat id molestie vestibulum, ex leo vestibulum justo, luctus tempor erat sem quis diam. Lorem ipsum dolor sit amet.</p>
							</div>
							
						</div>
					</div>
					
				</div>
			</div>
		</section>

		<section class="flat-imagebox style4">
			<div class="container">
				<div class="row">
					<div class="col-md-12">
						<div class="flat-row-title">
							<h3>Recent Products</h3>
						</div>
					</div>
				</div>
				<div class="row">
					<div class="col-md-4">
						<ProductGrid/>
					</div>
				</div>
			</div>
		</section>
        {/* Prduct Details */}
    </div>
  )
}

export default SingleProduct