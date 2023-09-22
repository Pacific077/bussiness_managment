import React, { useContext } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faTrash} from '@fortawesome/free-solid-svg-icons'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import NoteContext from '../../context/Notes/NotesContext'
const NotesCard = (props) => {
  const Notescont = useContext(NoteContext);
  const {DeleteNotes}=Notescont;
  const handlenotesdelete = ()=>{
    DeleteNotes(props.ey);
  }
  const {setvis,seteditId} = props;
  const handleeditclick =()=>{
    setvis(true);
    seteditId(props.ey);
  }
  return (
    <div className='notesDispCard'>
      <div className="notetitlecont">

      <FontAwesomeIcon className='notespageicon' onClick={handleeditclick} icon={faPenToSquare} size="xl" color='black'/>
      <FontAwesomeIcon className='notespageicon' onClick={handlenotesdelete} icon={faTrash} size="xl" color='black'/>
      </div>
        <h2>Title</h2>
            <p>{props.title}</p>
            <h2>Description</h2>
            <p>{props.description}</p>
    </div>
  )
}

export default NotesCard