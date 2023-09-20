import React, { useState } from "react";
import "./Notes.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
const Notes = () => {
  const [title, setTitle] = useState("");
  const [desc, setdesc] = useState("");
  const handleTitle = (e)=>{
    setTitle(e.target.value);
  }
  const handledesc = (e)=>{
    setdesc(e.target.value);
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
        <button type="submit">
          <FontAwesomeIcon icon={faArrowRight} size="xl" />
        </button>
      </form>
    </div>
  );
};

export default Notes;
