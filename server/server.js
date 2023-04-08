// THE MAIN ENTRY POINT FOR THE SERVER

const express = require("express"); //is used to tell the interpreter that this package will be used in this file
const app = express();

// use JSON parser
app.use(express.json());

// GET at path = /
app.get("/", (req, res) => {
  res.status(200).json({
    name: "Udita Chatterjee",
    age: 22,
    nickname: "Ghonchu",
  });
});

app.post("/", (req, res) => {
  const payload = req.body;
  res
    .status(200)
    .json({ message: "Successfully recieved data!", yourData: payload });
});

app.put("/", (req, res) => {
  const payload = req.body;
  res
    .status(200)
    .json({ message: "Successfully recieved data!", yourData: payload });
});

app.delete("/", (req, res) => {
  const query = req.query;
  res
    .status(200)
    .json({ message: "Successfully deleted " + query["name"] + "!" });
});

// PORT number for the server
const PORT = 5000;

// STARTS THE SERVER ON YOUR COMPUTER
app.listen(PORT, () => {
  console.log("Server start hoye geche at " + PORT);
});
