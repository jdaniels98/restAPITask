const { Router } = require("express")
const { createUser, readUser, updateUser, deleteUser, loginUser } = require("./userControllers")
const { hashPass, tokenCheck, comparePass } = require("../middleware")

const userRouter = Router()

userRouter.get("/readUser", readUser)
userRouter.post("/createUser", hashPass, createUser)
userRouter.post("/loginUser", tokenCheck, loginUser)
userRouter.put("/updateUser", updateUser)
userRouter.delete("/deleteUser/:username", deleteUser)

module.exports = userRouter