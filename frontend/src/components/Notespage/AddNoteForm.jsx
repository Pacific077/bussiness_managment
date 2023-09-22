import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faX } from '@fortawesome/free-solid-svg-icons'
import bg1 from "../../contents/images/notes.jpg"

const AddNoteForm = (props) => {
    const {setvis,id} = props;
    const handlecrossicon =()=>{

        setvis(false);
    }
  return (
    <form action="" id = "addNote">
        <div className="addProdFormicon">
        <FontAwesomeIcon onClick={handlecrossicon}  className='addformicon' icon={faX} />
        </div>
        <h1>Edit Note</h1>
        <div className="addnoteformcont">
        <div className="addnoteleft">
        <h3>Title</h3>
        <input type="text" name=""/>
        <h3>Desc</h3>
        <input type="text" name=""/>
        <div className="addnoteBtnCont">
            <button className='addnotebtn'>Add</button>
            <button onClick={handlecrossicon} className='cancelnotetbn'>Cancel</button>
        </div>
        </div>
        <div className="addnoteright">
            <img src={bg1} alt="" />
        </div>
        </div>
    </form>
  )
}

export default AddNoteForm