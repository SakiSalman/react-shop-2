import React from 'react'
import Breacumb from '../../partials/Breacumb'
import Sidebar from '../../partials/Sidebar'
import ProductGrid from './ProductGrid'

const Shop = ({product, setProduct, cat, tag, tittle}) => {

	
	return (
    <>
        

        {/* Breadvumb */}
        <Breacumb tittle={'Shop'}/>
        {/* Breadvumb end */}
        
        {/* Shop Start */}
		<main id="shop">
			<div class="container">
				<div class="row">
                    {/* Sidebar Start */}
					<div class="col-lg-3 col-md-4">

							<Sidebar cat={cat} tag={tag} product={product} setProduct={setProduct}/>
					
					</div> 
                    {/* Sidebar End */}
					
					<div class="col-lg-9 col-md-8">
						<div class="main-shop">

							<div class="slider owl-carousel-16">
								<div class="slider-item style9">
									<div class="item-text">
										<div class="header-item">
											<p>You can build the banner for other category</p>
											<h2 class="name">Shop Banner</h2>
										</div>
									</div>
									<div class="item-image">
										<img src="images/banner_boxes/07.png" alt=""/>
									</div>
									<div class="clearfix"></div>
								</div>

								
							</div>

							<div class="wrap-imagebox">

								<div class="flat-row-title">
									<h3>Mobile & Tablet</h3>
									<span>
										Showing 1–15 of 20 results
									</span>
									<div class="clearfix"></div>
								</div>

								<div class="sort-product">
									<ul class="icons">
										<li>
											<img src="images/icons/list-1.png" alt=""/>
										</li>
										<li>
											<img src="images/icons/list-2.png" alt=""/>
										</li>
									</ul>
									<div class="sort">
										<div class="popularity">
											<select name="popularity">
												<option value="">Sort by popularity</option>
												<option value="">Sort by popularity</option>
												<option value="">Sort by popularity</option>
												<option value="">Sort by popularity</option>
											</select>
										</div>
										<div class="showed">
											<select name="showed">
												<option value="">Show 15</option>
												<option value="">Show 15</option>
												<option value="">Show 15</option>
												<option value="">Show 15</option>
											</select>
										</div>
									</div>
									<div class="clearfix"></div>
								</div>

								<div class="tab-product">
									<div class="row sort-box">
									
									{product[0] && product.map(data => 
                
										<div className="col-lg-4 col-sm-6">
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


							<div class="blog-pagination">
								<span>
									Showing 1–15 of 20 results
								</span>
								<ul class="flat-pagination style1">
									<li class="prev">
										<a href="#" >
											<img src="images/icons/left-1.png" alt=""/>Prev Page
										</a>
									</li>
									<li>
										<a href="#" class="waves-effect" >01</a>
									</li>
									<li>
										<a href="#" class="waves-effect" >02</a>
									</li>
									<li class="active">
										<a href="#" class="waves-effect" >03</a>
									</li>
									<li>
										<a href="#" class="waves-effect" >04</a>
									</li>
									<li class="next">
										<a href="#" >
											Next Page<img src="images/icons/right-1.png" alt=""/>
										</a>
									</li>
								</ul>
								<div class="clearfix"></div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</main>
        {/* Shop End */}
    </>
  )
}

export default Shop