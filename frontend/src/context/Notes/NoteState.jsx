import React ,{useState} from "react";
import NoteContext from "./NotesContext";
import { ToastContainer, toast } from "react-toastify";

const NoteState = (props) => {
  const [notes, setNotes] = useState([]);

  //get all notes


  const GetallNotes = async () => {
    const url = "http://localhost:5000/api/v1/notes/getallnotes";
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    });
    const notesfromdb = await response.json();
    console.log(notesfromdb);
    setNotes(notesfromdb);
  };

  const AddNotes =async (prp)=>{
    console.log(prp);
    const data = {
      Title:prp.title,
      Description:prp.desc
    }
    const url ="http://localhost:5000/api/v1/notes/createNotes";
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      credentials: "include",
      body: JSON.stringify(data),
    });
    if(response.status===201){
      toast.success("Notes added succesfully");
    }else{
      const errorMessages = await response.json();
      console.log(errorMessages);
      errorMessages.forEach((err) => {
        toast.warning(err);
      });
    }


  }
  return (
    <div>
      <NoteContext.Provider value={{ notes, GetallNotes,AddNotes }}>
        {props.children}
      </NoteContext.Provider>
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  );
};

export default NoteState;
