const mongoose = require("mongoose")

const connectDb = async ()=>{
    try {
        const {connection} = await mongoose.connect("mongodb+srv://shanjibin10:2ZowYqKgxl46mVhO@cluster0.euayt4z.mongodb.net/taktodo?retryWrites=true&w=majority")
        console.log("database connected"+connection.host);
    } catch (error) {
       console.log(error,"=========iiiiiiii"); 
    }
}

module.exports = connectDb;
