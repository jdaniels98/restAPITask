const User = require("./userModel")
const jwt = require("jsonwebtoken")
const bcrypt = require ("bcrypt")

exports.createUser = async (req, res) => {
    try {
        const newUser = await User.create(req.body)
        const token = await jwt.sign({_id: newUser._id}, process.env.SECRET)
        res.status(201).send({username: newUser.username, token})
    } catch (error) {
        console.log(error).send({error: error.message})
        res.status(500)
    }
}

exports.readUser = async (req, res) => {
    try {
        const users = await User.find({})
        res.status(200).send({user: users})
    } catch (error) {
        console.log(error)
        res.status(500).send({error: error.message})
    }
}

exports.updateUser = async (req, res) => {
    try {
        await User.updateOne(
            {username: req.body.username},
            {[req.body.key]: req.body.value}
        )
        res.status(200).send({message: "USER UPDATE SUCCESSFUL"})
    } catch (error) {
        console.log(error)
        res.status(500).send({error: error.message})
    }
}

exports.deleteUser = async (req, res) => {
    try {
        await User.deleteOne({username: req.params.username})
        res.status(200).send({message: "USER DELETED SUCCESSFULLY"})
    } catch (error) {
        console.log(error)
        res.status(500).send({error: error.message})
    }
}

exports.loginUser = async (req, res) => {
    try {
        if (req.user) {
            res.status(200).send({username: req.user.username})
        } else {
            const user = User.findByCredentials(
                req.body.username,
                req.body.password
            )
            const token = await jwt.sign({_id: user._id}, process.env.SECRET)
            res.status(200).send({username: user.username, token, text: "successfully logged in"})
        }
    } catch (error) {
        console.log(error)
        res.status(500).send({error: error.message})
    }
}

exports.comparePass = async (req, res, next) => {
    try {
        req.user = await User.findOne({username: req.body.username})
        if (req.user &&
            await bcrypt.compare(request.body.password, request.user.password)) {
                next()
            } else {
                throw new Error ("INCORRECT USER_ID OR PASSWORD")
            }
    } catch (error) {
        console.log(error)
        res.status(500).send({error: error.message})
    }
}