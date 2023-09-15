const isloggedin=(req,res,next)=>{

   const {token}=req.cookies;
   if(!token){
       res.status(400).json({"message":"please login to continue"}); 
   }else{
    req.token=token;
    next();
   }

}
export default isloggedin;