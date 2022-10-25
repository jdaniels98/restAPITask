const { Router } = require("express")
const { createUser, readUser, updateUser, deleteUser } = require("./userControllers")

const userRouter = Router()

userRouter.get("/readUser", readUser)
userRouter.post("/createUser", createUser)
userRouter.put("/updateUser", updateUser)
userRouter.delete("/deleteUser/:username", deleteUser)

module.exports = userRouter