import express from 'express'
import singleupload from '../utils/SingleUpload.js';
import testcloudinary from '../controllers/testCLoudinary.js';
const testrouter = express.Router();

testrouter.route("/test").post(singleupload,testcloudinary);

export default testrouter;