import express from "express";
import {
  CreateNotes,
  deleteNotes,
  getallNotes,
  updateNotes,
} from "../controllers/notesController.js";
import isloggedin from "../auth/isloggedin.js";
import notesValidator from "../validators/notesValidator.js";
const notesRouter = express.Router();

notesRouter.route("/createNotes").post(isloggedin, notesValidator, CreateNotes);
notesRouter
  .route("/UpdateNotes/:id")
  .put(isloggedin, notesValidator, updateNotes);
notesRouter.route("/deleteNotes/:id").delete(isloggedin, deleteNotes);
notesRouter.route("/getallnotes").get(isloggedin, getallNotes);

export default notesRouter;
