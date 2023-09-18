import notesModel from "../models/notesModel.js"
import jwt from "jsonwebtoken";
import sellerModel from "../models/sellerModel.js";
import { validationResult } from "express-validator";


const CreateNotes = async (req,res,next) =>{
    const errors =validationResult(req);
    if(errors.isEmpty()){

        const {token} = req.cookies;
        const decoded  = jwt.verify(token,'secretkey');
        const {id} = decoded;
        const seller = await sellerModel.findById(id);
        console.log(seller);
        const {email} = seller
        
        const Notes = await notesModel.create({
            Title:req.body.Title,
            Description:req.body.Description,
            email: email
        })
        res.status(201).json({
            "message":"note created successfully"
        });
    }else{
        let arr = [];
        console.log("found errors");
        errors.array().forEach((error) => {
          arr.push(error.msg);
        });
        console.log(arr);
        res.status(400).send(arr);
    }
 }

const updateNotes =async (req,res,next) =>{
    const errors = validationResult(req);
    if(errors.isEmpty()){

        const id= req.params.id;
        const {Title,Description} = req.body;
        const Note = await notesModel.findById(id);
        if(!Note){
            res.status(400).json({
                "message":"No such note exists"
            })
        }else{
            const changes = {
                Title:Title,
                Description:Description
            }
            await notesModel.findByIdAndUpdate(id,changes);
            res.status(200).json({
                "message":"updated successfully"
            })
        }
    }else{
        let arr = [];
        console.log("found errors");
        errors.array().forEach((error) => {
          arr.push(error.msg);
        });
        console.log(arr);
        res.status(400).send(arr);
    }

}
const deleteNotes =async (req,res,next)=>{
    const id =req.params.id;
    const Notes =await notesModel.findById(id);
    if(!Notes){
        res.status(400).json({
            "message":"No such notes exist"
        })
    }else{
        await notesModel.findByIdAndDelete(id);
        res.status(200).json({
            "message":"Note delete successfully"
        })
    }
}
const getallNotes = async (req,res,next)=>{
    const {token} =req.cookies;
    const decoded =jwt.verify(token,"secretkey")
    const {id}  = decoded;
    const seller = await sellerModel.findById(id);
    console.log("seller",seller);
    console.log("seller id",id);
    if(!seller){
        res.status(400).json({
            "message":"No such seller exists"
        })
    }else{
        const {email} = seller;
        const Notes =await notesModel.find({email:email});
        console.log("all notes",Notes);
        res.status(200).send(Notes)
      
    }

}

export {CreateNotes,updateNotes,deleteNotes,getallNotes};