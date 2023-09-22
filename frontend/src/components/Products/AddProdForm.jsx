import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faX } from '@fortawesome/free-solid-svg-icons'

const AddProdForm = ({setVisible}) => {
    const handleiconclick =()=>{
        setVisible(false)
    }
  return (
    <form action="" id='addform'>
        <div className="addProdFormicon">
        <FontAwesomeIcon onClick={handleiconclick} className='addformicon' icon={faX} />

        </div>
            <h1>Add Product</h1>
            <div className="addformbottom">

            <div className="addformleft">

            <h3>Product Name</h3>
          <input type="text" placeholder='Name' className='addforminput' />
            <h3>Product Desc</h3>
          <textarea className='addprodtextarea' name="Desc" id="" cols="27" rows="4"></textarea>
          <h3>Image</h3>
          <input type="file" />
            </div>
            <div className="addformright">
                <h3>Cost Price</h3>
                <input type="number" className='addforminput'/>
                <h3>Selling Price</h3>
                <input type="number" className='addforminput' />
                <h3>Stock</h3>
                <input type="number" className='addforminput'/>
            </div>
            </div>
            <div className="addformbtn">

            <button type="submit">Add</button>
            </div>
        </form>
  )
}

export default AddProdForm