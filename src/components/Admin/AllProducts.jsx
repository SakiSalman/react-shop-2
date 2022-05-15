import React from 'react'
import { Link } from 'react-router-dom'

const AllProducts = ({product}) => {


  return (
    <div>
        <div className="row">
            <div className="col-12">
                <div className="card shadow-sm">
                    <div className="card-header">

                        <div className="header-item-wrap d-flex justify-content-between align-items-center">
                            <div className="header-heading">
                                <h4>All Products</h4>
                            </div>
                            <div className="header-btn">
                            <Link to='/dash/addproduct' className="btn btn-sm btn-primary">Add New Product</Link>  
                            </div>
                        </div>
                    </div>
                    <div className="card-body">
                        <table className="table table-dark">
                            <thead>
                                    <tr>
                                        <th>#</th>
                                        <th scope="col">Name</th>
                                        <th>category</th>
                                        <th>S. price</th>
                                        <th>R. Price</th>
                                        <th>photo</th>
                                        <th>Action</th>
                                    </tr>
                            </thead>
                            <tbody>

                                {
                                    product.map( (data, index) =>
                                    
                                    <tr>
                                        <td>{index + 1}</td>
                                        <td>{data.name}</td>
                                        <td >All
                                            </td>
                                        <td >$1,999.00</td>
                                        <td >$2,999.00</td>
                                        <td>
                                            <img style={{width:'50px', height : '50px', objectFit : 'cover'}} src={data.photo} alt="" />
                                        </td>
                                        <td>
                                            <a className='btn btn-sm btn-success' href="#"><i class="fas fa-eye    "></i></a>
                                            <a className='btn btn-sm btn-warning' href="#"><i class="fas fa-edit    "></i></a>
                                            <a className='btn btn-sm btn-danger' href="#"><i class="fa fa-trash" aria-hidden="true"></i></a>
                                        </td>
                                    </tr>
                                    
                                    )
                                }

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AllProducts