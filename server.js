const express = require("express")
const dotEnv = require("dotenv")
const mongoose = require("mongoose")
const bodyParser=require("body-parser")
const employeeRoutes = require("./routes/employeeRoutes")
const app = express()
const PORT = process.env.PORT || 5000 //process.env.PORT -> It is global port number

dotEnv.config()
app.use(bodyParser.json())
mongoose.connect(process.env.MONGO_URI)
.then(()=>{
    console.log("Mongodb Connected Successfully...")
})
.catch((error)=>{
    console.log(`${error}`)
})

app.use('/employees',employeeRoutes)

app.listen(PORT,()=>{
    console.log(`Server started and running at ${PORT}`)
})

