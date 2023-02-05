const express = require("express")
const { connection } = require("./connection")
const { LocationModel } = require("./model")
const cors = require("cors")

require("dotenv").config()
const app = express()
app.use(express.json())
app.use(cors())

app.get("/", async (req, res) => {
    try {
        let locationData = await LocationModel.find()
        res.send(locationData)
    } catch (error) {
        console.log("something went wrong in get data")
    }
})

app.post("/location", async (req, res) => {
    try {
        let addLocation = new LocationModel(req.body)
        await addLocation.save()
        if(req.body.name){
            res.send({msg:"done", name:req.body.name})
        }
    } catch (error) {
        console.log("something went wrong in get data")
    }
})

app.listen(process.env.port, async (req, res) => {
    try {
        await connection
        console.log("connected to Data Base")
    } catch (error) {
        console.log("something went wrong in port")
    }
    console.log(`server is running on port ${process.env.port}`)
})