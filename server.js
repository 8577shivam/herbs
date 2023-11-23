// npx nodemon server
const express = require("express");
const app = express();
const ejs = require("ejs");
const expressLayout = require("express-ejs-layouts");
const path = require("path");
const PORT = process.env.PORT || 3000;
// !you can change port no.if current port is busy

app.get("/", (req, res) => {
  // res.send("Hello from server");
  res.render("home");
});
// *setting up layout engine
app.use(expressLayout);
app.set("views", path.join(__dirname, "/resources/views"));
// &we are setting here folder structure and thatswhy we are simply rendering home which is inside the views folder

app.set("view engine", "ejs");
app.listen(PORT, () => {
  console.log(`Server is  running on port no ${PORT}`);
});
