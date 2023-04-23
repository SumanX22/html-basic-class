const express = require("express");
const { Server } = require("socket.io");

const app = express();

const PORT = 5000;
const server = app.listen(PORT, () => console.log("listening on port " + PORT));

const io = new Server(server);

io.on("connection", (socket) => {
  console.log("connection hua!", socket);
  socket.on("disconnect", () => console.log("disconnected"));
});

io.on("incoming-chat", (data) => {
  console.log(data);
  io.emit("outgoing-chat", data);
});
