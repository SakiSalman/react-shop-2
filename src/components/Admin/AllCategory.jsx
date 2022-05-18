import axios from 'axios'
import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

const AllCategory = ({cat, setCat}) => {


    // Delate Category
    const delatecat = (id) =>{

    axios.delete(`http://localhost:5050/category/${id}`).then( res => {
        setCat(res.data)

    })
}
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
                            <Link to='/dash/addcategory' className="btn btn-sm btn-primary">Add New Product</Link>  
                            </div>
                        </div>
                    </div>
                    <div className="card-body">
                        <table className="table table-striped">
                            <thead>
                                    <tr>
                                        <th>#</th>
                                        <th scope="col">Name</th>
                                        <th>Slug</th>
                                        <th>Action</th>
                                    </tr>
                            </thead>
                            <tbody>

                                {
                                    cat.map((data, index)=> 
                                        <tr>
                                        <td>{index + 1}</td>
                                        <td>{data.name}</td>
                                        <td >{data.slug}</td>
                                        <td>
                                            <button className='btn btn-sm btn-danger' onClick={(e) => delatecat(data.id)}><i class="fa fa-trash" aria-hidden="true"></i></button>
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

export default AllCategory