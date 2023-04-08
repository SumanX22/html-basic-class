// THE MAIN ENTRY POINT FOR THE SERVER

const express = require("express"); //is used to tell the interpreter that this package will be used in this file
const app = express();

// use JSON parser
app.use(express.json());

let database = [0, 1, 2, 3];

// creating new data => stack.push() , creating new data at new index
// editing data => change at index
// deleting removing data from an index
// get => getting the whole array

// GET at path = /
app.get("/", (req, res) => {
  res.status(200).json({
    message: "Successfully loaded data",
    data: database,
  });
});

app.post("/", (req, res) => {
  const payload = req.body;

  const newData = payload["data"];

  database.push(newData);

  res
    .status(200)
    .json({ message: "Successfully added new data!", data: database });
});

// PUT at path = /
// changing data somewhere
app.put("/", (req, res) => {
  const payload = req.body; // the new value
  const query = req.query; // where to change the data

  const idx = query["idx"];

  database[idx] = payload["data"];

  res
    .status(200)
    .json({ message: "Successfully changed data!", data: database });
});

app.delete("/", (req, res) => {
  const query = req.query; // where to delete the data

  const idx = query["idx"];

  database = database.filter((_, _idx) => _idx != idx);

  res.status(200).json({
    message: "Successfully deleted " + query["idx"] + "!",
    data: database,
  });
});

// PORT number for the server
const PORT = 5000;

// STARTS THE SERVER ON YOUR COMPUTER
app.listen(PORT, () => {
  console.log("Server start hoye geche at " + PORT);
});
