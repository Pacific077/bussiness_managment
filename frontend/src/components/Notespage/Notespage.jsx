import React, { useContext, useEffect, useState } from 'react'
import Mainnav from '../mainnav/Mainnav'
import Nav2 from '../sec nav/Nav2'
import "./NotesPage.css"
import NotesCard from './NotesCard'
import NoteContext from '../../context/Notes/NotesContext'

import AddNoteForm from './AddNoteForm'

const Notespage = () => {
  const [isNotevis,setIsNotevis]  = useState(false);
  const [noteEditid,setNoteeditId]  =useState("")
  const Notes = useContext(NoteContext);
  const {GetallNotes,notes} =Notes;
  useEffect(()=>{
    GetallNotes()
  },[])
  return (
    <div className='maindivhome'>
      <Mainnav/>

      <div className="notespage">
      {isNotevis && (
          <AddNoteForm setvis={setIsNotevis} id={noteEditid}/>
        )}
        <Nav2/>
        {notes.length === 0 && (
        <h5 style={{ marginTop: "5vh" }}>
          No notes available. Please add some notes.
        </h5>
      )}
        <div className="noteslistcont">
        {notes.map((not)=>{
          return <NotesCard seteditId={setNoteeditId} setvis={setIsNotevis} title={not.Title}
          description={not.Description} ey={not._id} key={not._id}/>
        })}
        </div>
      </div>
    </div>
  )
}

export default Notespage;
