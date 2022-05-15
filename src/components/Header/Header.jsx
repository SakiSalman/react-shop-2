import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div>
        
        <section id="header" class="header">

			<div class="header-top">
				<div class="container">
					<div class="row">
						<div class="col-md-4">
							<ul class="flat-support">
								<li>
									<a href="faq.html" title="">Support</a>
								</li>
								<li>
									<a href="store-location.html" title="">Store Locator</a>
								</li>
								<li>
									<a href="order-tracking.html" title="">Track Your Order</a>
								</li>
							</ul>
						</div>
						<div class="col-md-4">
							<ul class="flat-infomation">
								<li class="phone">
									Call Us: <a href="#" title="">(888) 1234 56789</a>
								</li>
							</ul>
						</div>
						<div class="col-md-4">
							<ul class="flat-unstyled">
								<li class="account">
									<a href="#" title="">My Account<i class="fa fa-angle-down" aria-hidden="true"></i></a>
									<ul class="unstyled">
										<li>
											<a href="#" title="">Login</a>
										</li>
										<li>
											<a href="wishlist.html" title="">Wishlist</a>
										</li>
										<li>
											<a href="shop-cart.html" title="">My Cart</a>
										</li>
										<li>
											<a href="my-account.html" title="">My Account</a>
										</li>
										<li>
											<a href="shop-checkout.html" title="">Checkout</a>
										</li>
									</ul>
								</li>
								<li>
									<a href="#" title="">USD<i class="fa fa-angle-down" aria-hidden="true"></i></a>
									<ul class="unstyled">
										<li>
											<a href="#" title="">Euro</a>
										</li>
										<li>
											<a href="#" title="">Dolar</a>
										</li>
									</ul>
								</li>
								<li>
									<a href="#" title="">English<i class="fa fa-angle-down" aria-hidden="true"></i></a>
									<ul class="unstyled">
										<li>
											<a href="#" title="">Turkish</a>
										</li>
										<li>
											<a href="#" title="">English</a>
										</li>
										<li>
											<a href="#" title="">اللغة العربية</a>
										</li>
										<li>
											<a href="#" title="">Español</a>
										</li>
										<li>
											<a href="#" title="">Italiano</a>
										</li>
									</ul>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
            
			<div class="header-middle">
				<div class="container">
					<div class="row">
						<div class="col-md-3">
							<div id="logo" class="logo">
								<Link to='/' title="">
									<img src="https://creativelayers.net/themes/techno-html/images/logos/logo.png" alt=""/>
								</Link>
							</div>
						</div>
						<div class="col-md-6">
							<div class="top-search">
								<form action="#" method="get" class="form-search" accept-charset="utf-8">
									<div class="box-search">
										<input type="text" name="search" placeholder="Search what you looking for ?"/>
										<span class="btn-search">
											<button type="submit" class="waves-effect"><img src="https://creativelayers.net/themes/techno-html/images/icons/search.png" alt=""/></button>
										</span>
                                        {/* Search Suhggesstion */}
										<div class="search-suggestions">
											<div class="box-suggestions">
												<div class="title">
													Search Suggestions
												</div>
												<ul>
													<li>
														<div class="image">
															<img src="images/product/other/s05.jpg" alt=""/>
														</div>
														<div class="info-product">
															<div class="name">
																<a href="#" title="">Razer RZ02-01071500-R3M1</a>
															</div>
															<div class="price">
																<span class="sale">
																	$50.00
																</span>
																<span class="regular">
																	$2,999.00
																</span>
															</div>
														</div>
													</li>
													<li>
														<div class="image">
															<img src="images/product/other/s06.jpg" alt=""/>
														</div>
														<div class="info-product">
															<div class="name">
																<a href="#" title="">Notebook Black Spire V Nitro VN7-591G</a>
															</div>
															<div class="price">
																<span class="sale">
																	$24.00
																</span>
															</div>
														</div>
													</li>
													<li>
														<div class="image">
															<img src="images/product/other/14.jpg" alt=""/>
														</div>
														<div class="info-product">
															<div class="name">
																<a href="#" title="">Apple iPad Mini G2356</a>
															</div>
															<div class="price">
																<span class="sale">
																	$90.00
																</span>
															</div>
														</div>
													</li>
													<li>
														<div class="image">
															<img src="images/product/other/02.jpg" alt=""/>
														</div>
														<div class="info-product">
															<div class="name">
																<a href="#" title="">Razer RZ02-01071500-R3M1</a>
															</div>
															<div class="price">
																<span class="sale">
																	$50.00
																</span>
															</div>
														</div>
													</li>
													<li>
														<div class="image">
															<img src="images/product/other/l01.jpg" alt=""/>
														</div>
														<div class="info-product">
															<div class="name">
																<a href="#" title="">Apple iPad Mini G2356</a>
															</div>
															<div class="price">
																<span class="sale">
																	$24.00
																</span>
																<span class="regular">
																	$2,999.00
																</span>
															</div>
														</div>
													</li>
													<li>
														<div class="image">
															<img src="images/product/other/s08.jpg" alt=""/>
														</div>
														<div class="info-product">
															<div class="name">
																<a href="#" title="">Beats Snarkitecture Headphones</a>
															</div>
															<div class="price">
																<span class="sale">
																	$90.00
																</span>
																<span class="regular">
																	$2,999.00
																</span>
															</div>
														</div>
													</li>
												</ul>
											</div>
											<div class="box-cat">
												<div class="cat-list-search">
													<div class="title">
														Categories
													</div>
													<ul>
														<li>
															<a href="#">Networking & Internet Devices</a>
														</li>
														<li>
															<a href="#">Laptops, Desktops & Monitors</a>
														</li>
														<li>
															<a href="#">Hard Drives & Memory Cards</a>
														</li>
														<li>
															<a href="#">Printers & Ink</a>
														</li>
														<li>
															<a href="#">Networking & Internet Devices</a>
														</li>
														<li>
															<a href="#">Computer Accessories</a>
														</li>
														<li>
															<a href="#">Software</a>
														</li>
													</ul>
												</div>
											</div>
										</div>
									</div>
								</form>
							</div>
						</div>
						<div class="col-md-3">
							<div class="box-cart">
								<div class="inner-box">
									<ul class="menu-compare-wishlist">
										<li class="compare">
											<a href="compare.html" title="">
												<img src="https://creativelayers.net/themes/techno-html/images/icons/compare.png" alt=""/>
											</a>
										</li>
										<li class="wishlist">
											<a href="wishlist.html" title="">
												<img src="https://creativelayers.net/themes/techno-html/images/icons/wishlist.png" alt=""/>
											</a>
										</li>
									</ul>
								</div>
								<div class="inner-box">
									<a href="#" title="">
										<div class="icon-cart">
											<img src="https://creativelayers.net/themes/techno-html/images/icons/cart.png" alt=""/>
											<span>4</span>
										</div>
										<div class="price">
											$0.00
										</div>
									</a>
									<div class="dropdown-box">
										<ul>
											<li>
												<div class="img-product">
													<img src="images/product/other/img-cart-1.jpg" alt=""/>
												</div>
												<div class="info-product">
													<div class="name">
														Samsung - Galaxy S6 4G LTE <br />with 32GB Memory Cell Phone
													</div>
													<div class="price">
														<span>1 x</span>
														<span>$250.00</span>
													</div>
												</div>
												<div class="clearfix"></div>
												<span class="delete">x</span>
											</li>
											<li>
												<div class="img-product">
													<img src="images/product/other/img-cart-2.jpg" alt=""/>
												</div>
												<div class="info-product">
													<div class="name">
														Sennheiser - Over-the-Ear Headphone System - Black
													</div>
													<div class="price">
														<span>1 x</span>
														<span>$250.00</span>
													</div>
												</div>
												<div class="clearfix"></div>
												<span class="delete">x</span>
											</li>
										</ul>
										<div class="total">
											<span>Subtotal:</span>
											<span class="price">$1,999.00</span>
										</div>
										<div class="btn-cart">
											<a href="shop-cart.html" class="view-cart" title="">View Cart</a>
											<a href="shop-checkout.html" class="check-out" title="">Checkout</a>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="header-bottom">
				<div class="container">
					<div class="row">
						<div class="col-md-3 col-2">
							<div id="mega-menu">
								<div class="btn-mega"><span></span>ALL CATEGORIES</div>
							</div>
						</div>
						<div class="col-md-9 col-10">
							<div class="nav-wrap">
								<div id="mainnav" class="mainnav">
									<ul class="menu">
										<li class="column-1">
											<Link to='/' href="index.html" title="">Home</Link>
										</li>
										<li class="column-1">
											<Link  to='/shop' title="">Shop</Link>
										</li>
										<li class="column-1">
											<a  href="#" title="">Features</a>
										</li>
										<li class="has-mega-menu">
											<a  href="#" title="">Electronic</a>
										</li>
										<li class="column-1">
											<a  href="#" title="">Pages</a>
										</li>
										<li class="column-1">
											<a  href="blog.html" title="">Blog</a>
										</li>
										<li class="column-1">
											<a  href="contact.html" title="">Contact</a>
										</li>
									</ul>
								</div>
							</div>
							<div class="today-deal">
								<a href="#" title="">TODAY DEALS</a>
							</div>
							<div class="btn-menu">
	                            <span></span>
	                        </div>
						</div>
					</div>
				</div>
			</div>
		</section>
    </div>
  )
}

export default Header