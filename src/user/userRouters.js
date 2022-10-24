const { Router } = require("express")
const { createUser, readUser } = require("./userControllers")

const userRouter = Router()

userRouter.get("/readUser", readUser)
userRouter.post("/createUser", createUser)

module.exports = userRouter