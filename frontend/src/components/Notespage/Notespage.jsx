import React, { useContext, useEffect } from 'react'
import Mainnav from '../mainnav/Mainnav'
import Nav2 from '../sec nav/Nav2'
import "./NotesPage.css"
import NotesCard from './NotesCard'
import NoteContext from '../../context/Notes/NotesContext'
import EditNote from './EditNote'

const Notespage = () => {
  const Notes = useContext(NoteContext);
  const {GetallNotes,notes} =Notes;
  useEffect(()=>{
    GetallNotes()
  },[])
  return (
    <div className='maindivhome'>
      <Mainnav/>

      <div className="notespage">
        <Nav2/>
        {notes.length === 0 && (
        <h5 style={{ marginTop: "5vh" }}>
          No notes available. Please add some notes.
        </h5>
      )}
        <div className="noteslistcont">
        {notes.map((not)=>{
          return <NotesCard title={not.Title}
          description={not.Description} ey={not._id} key={not._id}/>
        })}
        </div>
      </div>
    </div>
  )
}

export default Notespage;
