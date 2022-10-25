const { Router } = require("express")
const { createUser, readUser, updateUser } = require("./userControllers")

const userRouter = Router()

userRouter.get("/readUser", readUser)
userRouter.post("/createUser", createUser)
userRouter.put("/updateUser", updateUser)


module.exports = userRouter