import { Router } from "express";
import listSchools from "../controller/listSchools.controller.js";
import addSchool from "../controller/addSchool.controller.js";
import checkTypes from "../middlewares/checkTypes.middleware.js";
import connection from "../db.js";

const schoolRoutes=Router()

//routes for incoming requests
schoolRoutes.get('/listSchools',listSchools)
schoolRoutes.get('/truncate',(req,res)=>{
    connection.execute(`truncate table schoolsdata`)
})

schoolRoutes.post('/addSchools',checkTypes,addSchool)
schoolRoutes.get('/',(req,res)=>{
    res.send("Api wroking")
})

export default schoolRoutes;