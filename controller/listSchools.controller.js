import connection from "../db.js";
import { getDistance } from "geolib";
const listSchools=async (req,res)=>{
    const dataFromDb= (await connection.execute('select * from schoolsdata'))[0]
    let editedData



    const userLatitude=parseFloat(req.query.latitude)
    const userLongitude=parseFloat(req.query.longitude)
if (isNaN(userLatitude) || isNaN(userLongitude)) {
      return res.status(400).json({ error: "Invalid latitude or longitude" });
    }

    //calculating the distance in meters of school from user location
    editedData=dataFromDb.map((Element)=>{

    const {latitude}=Element
    const {longitude}=Element
    const distance=getDistance({latitude:`${latitude}`,longitude:`${longitude}`},{latitude:userLatitude,longitude:userLongitude})

    return {...Element,distance}

    })

   editedData.sort((a,b)=>a.distance-b.distance)

    res.send(editedData)
}


export default listSchools;