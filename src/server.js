require("./db/connection")
const cors = require("cors")
const express = require("express")
const userRouter = require("./user/userRouters")

const app = express()
const port = process.env.PORT || 5001

app.use(cors())
app.use(express.json())
app.use(userRouter)

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})