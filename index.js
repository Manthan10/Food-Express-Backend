const express = require("express");
const app = express();
const port = 5000;
const dotenv = require("dotenv");
const cors = require("cors");
dotenv.config({ path: "./.env" });

const mongoDB = require("./db");
mongoDB();

app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.use(express.json());

app.use("/api", require("./Routes/CreateUser"));
app.use("/api", require("./Routes/DisplayData"));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
