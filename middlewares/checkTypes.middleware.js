import { body } from "express-validator";
const checkTypes=[body("name").notEmpty().withMessage("Name cannot be empty").isString().withMessage("Name can only be string"),
     body("address").notEmpty().withMessage("Address cannot be empty").isString().withMessage("Address can only be string"),
     body('latitude').notEmpty().withMessage("latitude cannot be empty").isFloat().withMessage("Latitude can only float"),
     body('longitude').notEmpty().withMessage("longitude cannot be empty").isFloat().withMessage("longitude can only float")]

export default checkTypes;