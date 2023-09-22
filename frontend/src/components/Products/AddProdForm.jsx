import React, { useContext, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faX } from '@fortawesome/free-solid-svg-icons'
import ProductContext from '../../context/Products/ProductsContext'

const AddProdForm = ({setVisible}) => {
  const [title,setTitle] = useState("");
  const [desc,setdesc] = useState("");
  const [cp,setcp] = useState(0);
  const [sp,setsp] = useState(0);
  const [stock,setstock] = useState(0);

  const ProdCont =  useContext(ProductContext);
  const {AddProduct} = ProdCont;
    const handleiconclick =()=>{
        setVisible(false)
    }
    const handleAddProdsubmit = (e)=>{
      e.preventDefault();
      const temp = {
        title:title,
        desc:desc,
        cp:cp,
        sp:sp,
        stock:stock
      }
      AddProduct(temp);
      setVisible(false)
    }
    const handleNameChange = (e)=>{
      setTitle(e.target.value)
      // console.log(title);
    }
    const handleDescChange = (e)=>{
      setdesc(e.target.value)
      // console.log(desc);
    }
    const handleCpChange = (e)=>{
      setcp(e.target.value)
      // console.log(cp);
    }
    const handleSpChange = (e)=>{
      setsp(e.target.value)
    }
    const handleStockChange = (e)=>{
      setstock(e.target.value)
    }
  return (
    <form action="" id='addform' onSubmit={handleAddProdsubmit}>
        <div className="addProdFormicon">
        <FontAwesomeIcon onClick={handleiconclick} className='addformicon' icon={faX} />

        </div>
            <h1>Add Product</h1>
            <div className="addformbottom">

            <div className="addformleft">

            <h3>Product Name</h3>
          <input type="text" placeholder='Name' onChange={handleNameChange} value={title} className='addforminput' />
            <h3>Product Desc</h3>
          <textarea className='addprodtextarea' onChange={handleDescChange} value={desc}  placeholder='Description' name="Desc" id="" cols="27" rows="4"></textarea>
          <h3>Image</h3>
          <input type="file" />
            </div>
            <div className="addformright">
                <h3>Cost Price</h3>
                <input value={cp} type="number" placeholder='Cost Price' onChange={handleCpChange} className='addforminput'/>
                <h3>Selling Price</h3>
                <input value={sp}  type="number"  placeholder='Selling Price' onChange={handleSpChange} className='addforminput' />
                <h3>Stock</h3>
                <input value={stock}  type="number" onChange={handleStockChange}  placeholder='Stock' className='addforminput'/>
            </div>
            </div>
            <div className="addformbtn">

            <button type="submit">Add</button>
            </div>
        </form>
  )
}

export default AddProdForm