import express from "express";

const app = express();

let data = {};

app.get("/bfhl", (req, res) => {
  console.log("Data is : ", data);
  res.status(200).send("Data fetched succesfully");
})
app.post("/bfhl", (req, res) => {
  data = req.body.data;
  res.status(200).send("Data added Succesfully")
})

app.listen(8000, () => {
  console.log("Server is running on port 8000");
})