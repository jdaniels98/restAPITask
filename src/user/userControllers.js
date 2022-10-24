const User = require("./userModel")

exports.createUser = async (req, res) => {
    console.log(req)
    try {
        const newUser = await User.create(req.body)
        res.status(201).send({user: newUser})
    } catch (error) {
        console.log(error).send({error: error.message})
        res.status(500)
    }
}