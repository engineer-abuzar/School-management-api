import express from "express"
import schoolRoutes from "./routes/school.route.js"

const app=express()
const port=process.env.port||3000

app.use(express.json())


app.use('/',schoolRoutes)



app.listen(port,()=>console.log("applicatoin listing on port ",port))