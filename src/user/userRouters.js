const { Router } = require("express")
const { createUser, readUsers } = require("./userControllers")

const userRouter = Router()

userRouter.get("/readUser", readUsers)
userRouter.post("/createUser", createUser)

module.exports = userRouter