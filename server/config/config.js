const mongoose = require("mongoose")

const connectDb = async ()=>{
    try {
        const {connection} = await mongoose.connect("mongodb://127.0.0.1:27017/taktodo")
        console.log("database connected"+connection.host);
    } catch (error) {
       console.log(error,"=========iiiiiiii"); 
    }
}

module.exports = connectDb;