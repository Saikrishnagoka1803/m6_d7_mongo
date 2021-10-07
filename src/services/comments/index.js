import express from "express";
import commentModel from "./schema.js";
import createHttpError from "http-errors";

const router = express.Router()

router.post("/", async(req, res, next) => {
    try {
        const newcomment = new commentModel(req.body)
        const {_id} = await newcomment.save()
        res.status(201).send({ _id })
    } catch (error) {
        next(error)
    }
})

router.get("/", async(req, res, next) => {
    try {
        const comments = await commentModel.find()
        res.send(comments)
    } catch (error) {
        next(error)
    }
})

blogpostRouter.get("/:commentid", async(req, res, next) => {
    try {
        const eachcomment = await commentModel.findById(req.params.commentid)
        if(eachcomment) res.send(eachcomment)
        else next(createHttpError(404, `blog with id ${req.params.commentid} is not found`))
    } catch (error) {
        next(error)
    }
})



