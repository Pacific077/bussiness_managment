import React, { useState } from "react";
import SellerContext from "./SellerContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";


const SellerState = (props) => {
  const [user, setUser] = useState({});
  const [clientsList,setClientsList]=useState([]);
  const navigate = useNavigate();

  //sign up api call
  const Signup = async (data) => {
    console.log("Reached signup");
    const url = "http://localhost:5000/api/v1/sellers/signup";
    const body = {
      email: data.email,
      name: data.name,
      password: data.password,
    };
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
    console.log("response status from signup", response);
    if (response.status === 201) {
      toast.success("signed in!!");
      navigate("/login");
    } else {
      const errorMessages = await response.json();
      console.log(errorMessages);
      errorMessages.forEach((err) => {
        toast.warning(err);
      });
    }
  };

  //login api
  const Login = async (data) => {
    console.log("reached login fetch api", data);
    const url = "http://localhost:5000/api/v1/sellers/login";
    const body = {
      email: data.email,
      password: data.password,
    };
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
      credentials: "include",
    });
    if (response.status === 201) {
      toast.success("logged in successfully");
      navigate("/home");
    } else if (response.status === 401) {
      toast.error("Invalid id or Pass");
    } else {
      const errorMessages = await response.json();
      console.log(errorMessages);
      errorMessages.forEach((err) => {
        toast.warning(err);
      });
    }
  };

  //profile api

  const Profile = async () => {
    const url = "http://localhost:5000/api/v1/sellers/profile";
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    });
    if(response.status === 400){
      toast.error("Denied Access");
      navigate('/');
    }else{
      const data = await response.json();
      setUser(data);

    }

  };

  //get all Clients

  const getAllClinets= async ()=>{
    const url="http://localhost:5000/api/v1/sellers/clients/all"
    const response= await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    });
    const clientsListfromDb= await response.json();
    setClientsList(clientsListfromDb);
    console.log("clinet from db",clientsListfromDb);
  }

  // create client

  const AddClinet = async(props)=>{
    const data ={
      name:props.name,
      PhoneNo:props.phone,
      address:props.address
    }
    console.log("on my way to add clinet",props);

    const url = "http://localhost:5000/api/v1/sellers/clients/createClients"
    const response= await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
      credentials: "include",
    });
    if(response.status === 400){
      const errorMessages = await response.json();
      console.log(errorMessages);
      errorMessages.forEach((err) => {
        toast.error(err);
      });
    }else{
      toast.success("Client Added");
      getAllClinets();
    }


  }
  return (
    <div>
      <SellerContext.Provider value={{ Signup, Login, Profile, user ,getAllClinets,clientsList,AddClinet}}>
        {props.children}
      </SellerContext.Provider>
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

export default SellerState;
