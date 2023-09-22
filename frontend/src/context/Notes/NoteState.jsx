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
 
    setNotes(notesfromdb);
  };
  //add notes
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
  //delete Notes
  const DeleteNotes =async (ey)=>{
    console.log(ey)
    const url =`http://localhost:5000/api/v1/notes/deleteNotes/${ey}`
    const response = await fetch(url, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      },
      credentials: "include"
    });
    if(response.status===200){
      console.log("deleted scuuessfully");
      toast.success("Note Deleted")
      GetallNotes();
    }
  }
  //Edit Notes  

  const EditNotes =async (prp)=>{
    const data = {
      Title:prp.title,
      Description:prp.desc
    }
    console.log("i reached edit notes",data);
    const url = `http://localhost:5000/api/v1/notes/UpdateNotes/${prp.id}`;
    const response = await fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      credentials: "include",
      body: JSON.stringify(data),
    });
    if(response.status===400){
      const errorMessages = await response.json();
      console.log(errorMessages);
      errorMessages.forEach((err) => {
        toast.warning(err);
      });
    }else{
      toast.success("Note Updated !!")
    }
    GetallNotes();
  }

  return (
    <div>
      <NoteContext.Provider value={{ notes, GetallNotes,AddNotes,DeleteNotes,EditNotes }}>
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
