import React from 'react'

const ProductGrid = ({ name, sale_price, regular_price, photo }) => {
	
	return (
		<>
			<div class="product-box">
				<div class="imagebox">
					<div className="p-image">
						<img style={{width: '100%', height: '200px', objectFit : 'cover'}} src={photo} alt="" />

					</div>
					<div class="box-content">
						<div class="cat-name">
							<a href="#" title="">All</a>
						</div>
						<div class="product-name">
							<a href="#" title="">{name}<br />G2356</a>
						</div>
						<div class="price">
							<span class="sale">${sale_price}</span>
							<span class="regular"><del>${regular_price}</del></span>
						</div>
					</div>
					<div class="box-bottom">
						<div class="btn-add-cart">
							<a href="#" title="">
								<img src="https://creativelayers.net/themes/techno-html/images/icons/add-cart.png" alt="" />Add to Cart
							</a>
						</div>
						<div class="compare-wishlist">
							<a href="#" class="compare" title="">
								<img src="https://creativelayers.net/themes/techno-html/images/icons/compare.png" alt="" />Compare
							</a>
							<a href="#" class="wishlist" title="">
								<img src="https://creativelayers.net/themes/techno-html/images/icons/wishlist.png" alt="" />Wishlist
							</a>
						</div>
					</div>
				</div>
			</div>
		</>
	)
};

export default ProductGrid;