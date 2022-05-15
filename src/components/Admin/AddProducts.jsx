import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Form } from 'react-bootstrap'

const AddProducts = ({cat, tag}) => {

    // form input value
    const [input, setInput] = useState({
        id : '',
        name : '',
        regular_price : '',
        sale : '',
        rating : '',
        description : '',
        categoryId : '',
        tagId : '',
        photo : ''

    })

    const handlerSubmit = (e) => {
        e.preventDefault()
        axios.post(`http://localhost:5050/product`, {
            name : input.name,
            regular_price : input.regular_price,
            sale_price : input.sale_price,
            rating : input.rating,
            description : input.description,
            categoryId : '',
            tagId : '',
            photo : input.photo
        }).then( res => {
            setInput(
            {
            id : '',
            name : '',
            regular_price : '',
            sale_price : '',
            rating : '',
            description : '',
            categoryId : '',
            tagId : '',
            photo : ''
            }
            )
        })
    }

  return (
    <div>
            <h3>Add New Products</h3>
            <hr />
            <Form onSubmit={handlerSubmit}>
                <div class="form-box">
                    <label for="item">Product Name</label>
                    <input type="text" id="item" name="item" placeholder="Type Here" value={input.name} onChange={ (e) => setInput({...input, name: e.target.value})} />
				</div>
                <div class="form-box">
                    <label for="item">Product Regular Price</label>
                    <input type="text" id="item" name="item" placeholder="Type Here" value={input.regular_price} onChange={ (e) => setInput({...input, regular_price: e.target.value})} />
				</div>
                <div class="form-box">
                    <label for="item">Product Sale Price</label>
                    <input type="text" id="item" name="item" placeholder="Type Here" value={input.sale_price} onChange={ (e) => setInput({...input, sale_price: e.target.value})} />
				</div>
                <div class="form-box">
                    <label for="item">Product Rating</label>
                    <input type="text" id="item" name="item" placeholder="Type Here" value={input.rating} onChange={ (e) => setInput({...input, rating: e.target.value})} />
				</div>
                <div class="form-box">
                    <label for="item">Product Photo</label>
                    <input type="text" id="item" name="item" placeholder="Type Here" value={input.photo} onChange={ (e) => setInput({...input, photo: e.target.value})} />
				</div>
                <div class="form-box">
					<label for="description">Description</label>
					<textarea id="description" value={input.description} onChange={ (e) => setInput({...input, description: e.target.value})}></textarea>
				</div>
                <div class="form-box">
					<label for="description">Category</label>
					<select style={{border : '1px solid #ccc'}} value={input.categoryId} onChange={ (e) => setInput({...input, categoryId: e.target.value})}>
                        <option value="">-selcet category-</option>
                        {
                            cat.map( data => 
                                <option value={data.id}>{data.name}</option>

                                )
                        }
                    </select>
				</div>
                <div class="form-box">
					<label for="description">Tag</label>
					<select style={{border : '1px solid #ccc'}} value={input.tagId} onChange={ (e) => setInput({...input, tagId: e.target.value})}>
                        <option value="">-selcet category-</option>
                        {
                            tag.map( data => 
                                <option value={data.id}>{data.name}</option>

                            )
                        }
                    </select>
				</div>
                <div class="form-box mt-2">
					<button type="submit" className='contact btn bg-primary'>Send</button>
				</div>
            </Form>
    </div>
  )
}

export default AddProducts