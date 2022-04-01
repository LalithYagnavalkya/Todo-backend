const express = require("express");
const cors = require("cors");
const app = express();

const connectDB = require("./database/database");
const api = require("./routes/index.js");

app.use(express.json());
app.use(
  cors({
    origin: "https://stormy-ravine-46879.herokuapp.com",
    credentials: true,
  })
);

app.get("/", (req, res) => {
  res.send("wtf is wrong");
});

app.use("/api", api);

connectDB();
app.listen(process.env.PORT || 5000, () => {
  console.log("this is running");
});
