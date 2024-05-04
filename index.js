const express = require("express");
const bodyParser = require("body-parser");
const routes = require("./routes/routes");

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use("/api", routes);

app.set("view engine", "ejs");
app.get("/login", (req, res) => {
  res.render("login");
});
app.get("/", (req, res) => {
  res.render("home");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
