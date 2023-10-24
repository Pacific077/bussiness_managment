import multer  from "multer";


const singleupload = multer({
    storage:multer.memoryStorage()
}).single('file')

export default  singleupload