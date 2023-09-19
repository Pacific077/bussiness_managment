import React from 'react'

const NotesCard = (props) => {
  return (
    <div className='notesDispCard'>
        <h2>Title</h2>
            <p>{props.title}</p>
            <h2>Description</h2>
            <p>{props.description}</p>
    </div>
  )
}

export default NotesCard