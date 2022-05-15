import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Form } from 'react-bootstrap'

const AddCategory = ({generateSlug}) => {

    // form input value
    const [cats, setCats] = useState({
        id : '',
        name : '',
        slug : ''

    })

    const handlerCatSubmit = (e) => {
        const slugs = generateSlug(cats.name)
        e.preventDefault()
        axios.post(`http://localhost:5050/category`, {
            name : cats.name,
            slug : slugs
    
        }).then( res => {
            setCats(
            {
                id : '',
                name : '',
                slug : ''
            }
            )
        })
    }

  return (
    <div>
            <h3>Add New Products</h3>
            <hr />
            <Form onSubmit={handlerCatSubmit}>
                <div class="form-box">
                    <label for="item">Product Name</label>
                    <input type="text" id="item" name="item" placeholder="Type Here" value={cats.name} onChange={ (e) => setCats({...cats, name: e.target.value})} />
				</div>
                <div class="form-box mt-2">
					<button type="submit" className='contact btn bg-primary'>Send</button>
				</div>
            </Form>
    </div>
  )
}

export default AddCategory