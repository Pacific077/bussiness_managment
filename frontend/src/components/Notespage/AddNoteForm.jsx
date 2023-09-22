import React, { useContext, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faX } from '@fortawesome/free-solid-svg-icons'
import bg1 from "../../contents/images/notes.jpg"
import NoteContext from '../../context/Notes/NotesContext'

const AddNoteForm = (props) => {
    const [title,setTitle] = useState("")
    const [desc,setDesc] = useState("")
    const notecon = useContext(NoteContext);
    const {EditNotes} =notecon;
    const handleSubmit = (e)=>{
        e.preventDefault();
        const data = {
            title:title,
            desc:desc,
            id:id
        }
        EditNotes(data);
        setvis(false);
    }
    const {setvis,id} = props;
    const handlecrossicon =()=>{
        setvis(false);
    }
    const handelTitleChange = (e)=>{
       setTitle(e.target.value)
    }
    const handeldescChange = (e)=>{
        setDesc(e.target.value)
    }
  return (
    <form action="" id = "addNote" onSubmit={handleSubmit}>
        <div className="addProdFormicon">
        <FontAwesomeIcon onClick={handlecrossicon}  className='addformicon' icon={faX} />
        </div>
        <h1>Edit Note</h1>
        <div className="addnoteformcont">
        <div className="addnoteleft">
        <h3>Title</h3>
        <input type="text" value={title} name="" onChange={handelTitleChange} placeholder='Title'/>
        <h3>Desc</h3>
        <input type="text" onChange={handeldescChange} value={desc} name="" placeholder='Description'/>
        <div className="addnoteBtnCont">
            <button type='submit' className='addnotebtn'>Add</button>
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