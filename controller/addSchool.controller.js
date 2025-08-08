import { validationResult } from "express-validator";
import connection from "../db.js";

const addSchool = (req, res) => {
    const { name, address, latitude, longitude } = req.body
    const values=[name,address,latitude,longitude]
    const {errors}  = validationResult(req)
    let validationErrors = {}
    console.log(latitude,longitude)
    errors.forEach((element) => {
    const {path,msg}=element
    validationErrors[`${path}`]=msg

    })
    if (errors.length != 0){
        return res.send(validationErrors)
    }
    const result= connection.execute(`insert into schoolsdata(name,address,latitude,longitude) values(?,?,?,?)`,values)
    res.send("Data inserted success")
}
export default addSchool;