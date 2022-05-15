import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import './Dashboard.css';

const Dashboard = () => {
  return (
    <div>
      <section className='dashboard py-2'>
            <div className="container">
                <div className="row">
                    <div className="col-md-3">
                        <ul className='product-detail-bar'>
                            <li><Link to='/dash/allproduct' >All Products</Link></li>
                            <li><Link to='/dash/allcategory'>All Categories</Link></li>
                            <li><Link to='/dash/alltag'>All Tags</Link></li>
                        </ul>
                    </div>
                    <div className="col-md-9">
                        <Outlet/>
                    </div>
                </div>
            </div>
      </section>
    </div>
  )
}

export default Dashboard
