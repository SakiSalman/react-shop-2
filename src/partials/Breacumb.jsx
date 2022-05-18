import React from 'react'
import { Link } from 'react-router-dom';

const Breacumb = ({tittle}) => {
  return (
    <div>
        
        <section class="flat-breadcrumb">
			<div class="container">
				<div class="row">
					<div class="col-md-12">
						<ul class="breadcrumbs">
							<li class="trail-item">
								<Link to={'/'} href="#" title="">Home</Link>
								<span><img src="images/icons/arrow-right.png" alt=""/></span>
							</li>
							<li class="trail-end">
								<a href="#" title="">{tittle}</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</section>
    </div>
  )
}

export default Breacumb;