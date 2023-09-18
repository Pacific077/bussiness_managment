import mongoose,{Schema} from "mongoose";


const NotesSchema = new Schema({
    Title:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    Description:{
        type:String,
        required:true
    }
})

const notesModel = mongoose.model("Notes",NotesSchema);

export default notesModel;