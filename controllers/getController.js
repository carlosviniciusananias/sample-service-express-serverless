const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
  // your code here
  
  res.send({
    message: "hi... this is get method",
  });
});

module.exports = router;
