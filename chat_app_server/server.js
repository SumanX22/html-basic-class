const express = require("express");
const cors = require("cors");
const { Server } = require("socket.io");

const app = express();

// allow all urls to access the web server
app.use(cors());

const PORT = 5000;
const expressServer = app.listen(PORT, () =>
  console.log("listening on port " + PORT)
);

const io = new Server(expressServer, { cors: { origin: "*" } });

io.on("connection", (socket) => {
  console.log("connection hua!", socket.id);
  socket.on("disconnect", () => console.log("disconnected... " + socket.id));

  socket.on("chat", (chatData) => {
    socket.emit("chat", chatData);
  });
});
