import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Form } from 'react-bootstrap'

const AddTags = () => {

    // form input value
    const [tags, setTags] = useState({
        id : '',
        name : '',
    })

    const handlertagsubmit = (e) => {
        e.preventDefault()
        axios.post(`http://localhost:5050/tag`, {
            name : tags.name,    
        }).then( res => {
            setTags(
            {
                id : '',
                name : ''
            }
            )
        })
    }

  return (
    <div>
            <h3>Add New Products</h3>
            <hr />
            <Form onSubmit={handlertagsubmit}>
                <div class="form-box">
                    <label for="item">Product Name</label>
                    <input type="text" id="item" name="item" placeholder="Type Here" value={tags.name} onChange={ (e) => setTags({...tags, name: e.target.value})} />
				</div>
                <div class="form-box mt-2">
					<button type="submit" className='contact btn bg-primary'>Send</button>
				</div>
            </Form>
    </div>
  )
}

export default AddTags