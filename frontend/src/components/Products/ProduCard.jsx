import React, { useContext } from 'react'
import img from "../../contents/images/songimg.jpg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faTrash} from '@fortawesome/free-solid-svg-icons'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import ProductContext from '../../context/Products/ProductsContext'
const ProduCard = (props) => {
  const Prodstate = useContext(ProductContext);
  const {DeletProduct}= Prodstate;
  const hanldeProductDelete = ()=>{
    DeletProduct(props.ey);
  }
  const setProdId = props.setProdId;
  const editnotvis = props.editnotvis;
  const handleProdEditCLick = ()=>{
    setProdId(props.ey)
    editnotvis(true);
    window.scrollTo({
      top: 0,
      behavior: 'smooth' 
    });
  }
  return (
    <div className="prodcard">
            <div className="prodcardimgcont">
              <img className="prodcardimg" src={img} alt="" srcset="" />
            </div>
            <div className="prodcarddesc">
              <p>Name : {props.prodname}</p>
              <p>Price : $838</p>
              <p>Stock :{props.Stock}</p>
              <div className="deleditbtncont">
              <button>Veiw more</button>
              <div className="deleditbtn">
              <FontAwesomeIcon className='notespageicon' onClick={handleProdEditCLick} icon={faPenToSquare} size="xl" color='black'/>
              <FontAwesomeIcon onClick={hanldeProductDelete} className='notespageicon' icon={faTrash} size="xl" color='black'/>
              </div>
              </div>
            </div>
          </div>
  )
}

export default ProduCard