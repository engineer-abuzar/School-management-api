import { Router } from "express";
import listSchools from "../controller/listSchools.controller.js";
import addSchool from "../controller/addSchool.controller.js";
import checkTypes from "../middlewares/checkTypes.middleware.js";

const schoolRoutes=Router()

//routes for incoming requests
schoolRoutes.get('/listSchools',listSchools)
schoolRoutes.post('/addSchools',checkTypes,addSchool)

export default schoolRoutes;