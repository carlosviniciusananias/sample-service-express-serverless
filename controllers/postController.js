const express = require("express");
const router = express.Router();

router.post("/", async (req, res) => {
  // your code here

  res.send({
    message: "hi... this is post method",
  });
});

module.exports = router;
