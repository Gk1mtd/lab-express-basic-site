const express = require("express")
const app = express()

app.use(express.static("public"))

//route to home
app.get("/", (request, response, next) => {
    response.sendFile(__dirname + "/views/home.html")
})
// route to about
app.get("/about", (request, response, next) => {
    response.sendFile(__dirname + "/views/about.html")
})
//route to work
app.get("/works", (request, response, next) => {
    response.sendFile(__dirname + "/views/works.html")
})

app.listen(3000, () => "Server is listening now!")