const express = require("express");
const router = express.Router();

router.delete("/", function (req, res) {
  // your code here
  
  res.send({
    message: "hi... this is delete method",
  });
});

module.exports = router;
