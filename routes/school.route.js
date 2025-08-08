import { Router } from "express";
import listSchools from "../controller/listSchools.controller.js";
import addSchool from "../controller/addSchool.controller.js";
import checkTypes from "../middlewares/checkTypes.middleware.js";

const schoolRoutes=Router()

//routes for incoming requests
schoolRoutes.get('/listSchools',listSchools)
// schoolRoutes.get('/listSchools',(req,res)=>{
//     res.send("List schools")
// })
schoolRoutes.post('/addSchools',checkTypes,addSchool)
schoolRoutes.get('/',(req,res)=>{
    res.send("Api wroking")
})

export default schoolRoutes;