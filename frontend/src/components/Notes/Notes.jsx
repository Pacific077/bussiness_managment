import React from 'react'
import "./Notes.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
const Notes = () => {
  return (
    <div className='notescard'>
        Create  Notes
        <form action="" className='notesform' method="post">
          <input type="text" placeholder='Title' />
          <input type="text" placeholder='Description' /> 
          <button type="submit"><FontAwesomeIcon icon={faArrowRight} size='xl' /></button>
        </form>
    </div>
  )
}

export default Notes