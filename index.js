const dotenv = require("dotenv")
const express = require("express")
const connectDB = require("./db")
dotenv.config()

const app = express()
const PORT = process.env.PORT || 3000

app.get("/", (req, res) => {
    res.send("Hello World")
    console.log(process.env.password)
})

app.listen(PORT, async () => {
    try {
        await connectDB()
        console.log("Server is running on port", PORT)
    } catch(error) {
        console.log("Error connecting to database", error.message)
    }
})

