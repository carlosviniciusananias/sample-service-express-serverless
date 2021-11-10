const express = require("express");
const app = express();

const cors = require("cors");
const morgan = require("morgan");
const helmet = require("helmet");

const getController = require("./controllers/getController");
const postController = require("./controllers/postController");
const putController = require("./controllers/putController");
const deleteController = require("./controllers/deleteController");

const port = process.env.port || 3000;

app.use(morgan("common"));

app.use(helmet());

app.use(express.json({ extended: false }));

app.use("/", cors(), getController);

app.use("/", cors(), postController);

app.use("/", cors(), putController);

app.use("/", cors(), deleteController);

app.listen(port, () => {
  console.log(`Server start in port ${port}`);
});

module.exports = app;
