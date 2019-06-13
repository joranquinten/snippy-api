require("dotenv").config();
//https://codeburst.io/writing-a-crud-app-with-node-js-and-mongodb-e0827cbbdafb
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const helmet = require("helmet");

const listEndpoints = require("express-list-endpoints");

const snippet = require("./routes/snippet.route.js");
const snippets = require("./routes/snippets.route.js");

// initialize our express app
const app = express();

// Set up mongoose connection
const mongoose = require("mongoose");

const { DB_USER, DB_PASSWORD, DB_URL, MONGODB_URI } = process.env;

const dev_db_url = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_URL}`;
const mongoDB = MONGODB_URI || dev_db_url;
mongoose.connect(mongoDB, {
  useNewUrlParser: true,
  useFindAndModify: false
});
mongoose.Promise = global.Promise;
const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));

app.use(helmet());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/snippets/snippet", snippet);
app.use("/snippets", snippets);
listEndpoints(app)
  .sort((a, b) => a.path.localeCompare(b.path))
  .map(endpoint => {
    console.log(
      `Path: ${endpoint.path}, supported methods: ${endpoint.methods}`
    );
  });

const isDevelop = process.env.NODE_ENV === "development";
const port = isDevelop ? 5050 : 8080;

app.listen(port, () => {
  if (isDevelop) {
    console.log(`Server is up and running on http://127.0.0.1:${port}`);
  }
});
