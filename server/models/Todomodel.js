const mongoose = require("mongoose")

const todoschema = new mongoose.Schema({
    todo:{
        type:String,
    
    },
})

module.exports = mongoose.model("Todo",todoschema)