const mongoose = require("mongoose")

const connectDb = async ()=>{
    try {
        const {connection} = await mongoose.connect(process.env.MONGO_URI)
        console.log("database connected"+connection.host);
    } catch (error) {
       console.log(error,"=========iiiiiiii"); 
    }
}

module.exports = connectDb;