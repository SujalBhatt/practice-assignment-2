const mongoose = require("mongoose")

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MongoURI)
        console.log("MongoDB is connected")
    } catch(error) {
        console.log("Error connecting to database", error.message)
    }
}

module.exports = connectDB