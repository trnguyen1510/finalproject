const path = require("path");
const router = require("express").Router();
const routes = require("./api/userAPI");

// API Routes
router.use("/api/userAPI", routes);

// If no API routes are hit, send the React app
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;