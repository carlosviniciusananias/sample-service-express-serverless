const express = require("express");
const router = express.Router();

router.put("/", async (req, res) => {
  // your code here
  
  res.send({
    message: "hi... this is put method",
  });
});

module.exports = router;
