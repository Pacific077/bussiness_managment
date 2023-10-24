import getDataUri from "../utils/Datauri.js"
import cloudinary from "cloudinary"

const testcloudinary =async (req,res,next)=>{
    console.log(req.body)
    const fileuri = getDataUri(req.file)
    const mycloud= await cloudinary.v2.uploader.upload(fileuri.content);
    console.log(mycloud)
    res.send(req.file)
}

export default testcloudinary