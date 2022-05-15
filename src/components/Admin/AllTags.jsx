import React from 'react'
import { Link } from 'react-router-dom'

const AllTags = () => {
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
                            <Link to='/dash/addtag' className="btn btn-sm btn-primary">Add New Tag</Link>  
                            </div>
                        </div>
                    </div>
                    <div className="card-body">
                        <table className="table table-striped">
                            <thead>
                                    <tr>
                                        <th>#</th>
                                        <th scope="col">Name</th>
                                        <th>Action</th>
                                    </tr>
                            </thead>
                            <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>Watches</td>
                                        <td>
                                            <a className='btn btn-sm btn-warning' href="#"><i class="fas fa-edit    "></i></a>
                                            <a className='btn btn-sm btn-danger' href="#"><i class="fa fa-trash" aria-hidden="true"></i></a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>1</td>
                                        <td>Watches</td>
                                        <td>
                                            <a className='btn btn-sm btn-warning' href="#"><i class="fas fa-edit    "></i></a>
                                            <a className='btn btn-sm btn-danger' href="#"><i class="fa fa-trash" aria-hidden="true"></i></a>
                                        </td>
                                    </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AllTags