const mongoose = require("mongoose")

const locationschema = mongoose.Schema({
    name : "String",
    latitude : "String",
    longitude : "String"
})
const LocationModel = mongoose.model("locationData", locationschema)

module.exports = {LocationModel}