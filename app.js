const express = require("express");
const app = express();
//const socket = require("socket.io")




//server
app.use(express.static("public"));

const server = app.listen(4000, () => {
    console.log("Server listening to requests on port 4000");
})