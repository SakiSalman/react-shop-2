import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'


const AllTags = ({tag }) => {

    const handlerTags = (id) => {

            axios.delete('http://localhost:5050/category/'+ {id})
            
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
                                {
                                    tag.map( (data, index) => 
                                    
                                    <tr>
                                    <td>{index + 1}</td>
                                    <td>{data.name}</td>
                                    <td>
                                        <button onClick={(e) => handlerTags(data.id) } className='btn btn-sm btn-danger'><i class="fa fa-trash" aria-hidden="true"></i></button>
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

export default AllTags