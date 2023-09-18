import { body } from "express-validator";
const notesValidator = [
  body("Title")
    .notEmpty()
    .withMessage("Title field is required")
    .isLength({ min: 3 })
    .withMessage("Title must be at least 3 characters long"),
  body("Description")
    .notEmpty()
    .withMessage("Description field is required")
    .isLength({ min: 3 })
    .withMessage("Description must be at least 3 characters long")
];

export default notesValidator;
