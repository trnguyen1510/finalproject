const express = require("express");

// const path = require("path");
// const router = require("express").Router();
const PORT = process.env.PORT || 3001;
const app = express();
const mongoose = require("mongoose");
const routes = require("./routes");

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
mongoose.connect(
  process.env.MONGODB_URI ||  "mongodb://localhost/expensetracker"
)

// Define API routes here
// const models = require("./models/");

// Send every other request to the React app
// Define any API routes before this runs
app.get("/", (req, res) => {
  res.send("HELLLLLLLLLLLOOOOOOOOOOOOOOO");
});

// router.use(function(req, res) {
//   if (err) throw err;
//   res.sendFile(path.join(__dirname, "../client/public/index.html"));
// });

app.use(routes);

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
