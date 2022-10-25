const { Router } = require("express")
const { createUser, readUser, updateUser, deleteUser, loginUser } = require("./userControllers")
const { hashPass } = require("../middleware")

const userRouter = Router()

userRouter.get("/readUser", readUser)
userRouter.post("/createUser", hashPass, createUser)
userRouter.post("/loginUser", loginUser)
userRouter.put("/updateUser", updateUser)
userRouter.delete("/deleteUser/:username", deleteUser)

module.exports = userRouter