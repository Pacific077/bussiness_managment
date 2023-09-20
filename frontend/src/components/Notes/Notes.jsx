import React, { useContext, useState } from "react";
import "./Notes.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import NoteContext from "../../context/Notes/NotesContext";
const Notes = () => {
  const [title, setTitle] = useState("");
  const [desc, setdesc] = useState("");
  const notecont = useContext(NoteContext);
  const {AddNotes} = notecont;
  const handleTitle = (e)=>{
    setTitle(e.target.value);
  }
  const handledesc = (e)=>{
    setdesc(e.target.value);
  }
  const noteAddButton = (e)=>{
    e.preventDefault();
    console.log("i got clicked");
    const data = {
      title:title,
      desc:desc
    }
    AddNotes(data);
  }
  return (
    <div className="notescard">
      Create Notes
      <form action="" className="notesform" method="post">
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={handleTitle}
        />
        <input
          type="text"
          placeholder="Description"
          value={desc}
          onChange={handledesc}
        />
        <button type="submit" onClick={noteAddButton}>
          <FontAwesomeIcon icon={faArrowRight} size="xl" />
        </button>
      </form>
    </div>
  );
};

export default Notes;
