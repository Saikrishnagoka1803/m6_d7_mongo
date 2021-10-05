import express from "express";
import mongoose from "mongoose";
import listEndpoints from "express-list-endpoints";
import cors from "cors";
import blogsRouter from "./services/blogposts/index.js"

const server = express()
const port = process.env.PORT || 3001

server.use(express.json())
server.use(cors())

server.use("/blogposts", blogsRouter)

mongoose.connect(process.env.MONGO_CONNECTION)

mongoose.connection.on("connected", () => {
    console.log("successful!! to Mongo")
    server.listen(port, () => {
        console.log(`server running on port ${port}`)
    })
})

mongoose.connection.on("error", err => {
    console.log(err)
  })
