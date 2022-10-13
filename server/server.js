const express = require("express")
const app = express()
const cors = require("cors")
const path = require("path")

require("dotenv").config({ path: "./config.env" })
const PORT = process.env.PORT || 3000

//get driver connection
const dbo = require("./db/conn")

const methodOverride = require("method-override")

// MIDDLEWARE
app.use(methodOverride("_method"))
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// serve static front end in production mode
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "public", "build")))
}

const userController = require("./controllers/user_controller")
app.use("/user", userController)

const exerciseController = require("./controllers/exercise_controller")
app.use("/exercise", exerciseController)

app.get("/", (req, res) => {
  res.json({ message: "hello" })
})

app.listen(PORT, () => {
  dbo.connectToServer(function (err) {
    if (err) console.error(err)
  })
  console.log(`Server is running on port: ${PORT}`)
})
