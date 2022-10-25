const User = require("./userModel")

exports.createUser = async (req, res) => {
    try {
        const newUser = await User.create(req.body)
        res.status(201).send({user: newUser})
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