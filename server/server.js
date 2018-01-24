const path = require("path");
const http = require("http");
const express = require("express");
const socketIO = require("socket.io");

var app = express();
const port = process.env.PORT || 3000;
var server = http.createServer(app);

var io = socketIO(server);

app.use(express.static(path.join(__dirname, "../public")));

io.on("connection", (socket) => {
    console.log("New user connected");
   
    socket.emit("newMessage", {
        from: "Mike",
        text: "Hey. Buddy!",
        createdAt: new Date().toUTCString()
    });

    socket.on("createMessage", (newEmail) => {
        console.log("createMessage", newEmail);
    });

    socket.on("disconnect", () => {
        console.log("User disconnected from server");
    });
});


server.listen(port, () => {
    console.log(`Server is up on port ${port}`);
});
