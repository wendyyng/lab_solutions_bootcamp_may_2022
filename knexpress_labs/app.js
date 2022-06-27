const express = require("express");
const logger = require("morgan");
const methodOverride = require("method-override");

// REQUIRE ROUTE FILES
const welcomeRouter = require("./routes/welcome");
const notesRouter = require("./routes/notes");
const billsRouter = require("./routes/bills");
// CREATE APP
const app = express();

// CHOOSE TEMPLATING ENGINE
app.set("view engine", "ejs");

// SETUP MIDDLEWARE
app.use(logger("dev"));
app.use(express.urlencoded({ extended: false }));

// Method Override
app.use(
  // Without this, we cannot accept DELETE or PATCH or PUT requests from
  // the browser!
  methodOverride((req, res) => {
    if (req.body && req.body._method) {
      const method = req.body._method;
      // This modifies the request object
      // it changes it from a POST request
      // to be whatever the value for _method was
      // within the form that was just submitted
      return method;
    }
  })
);

// USE ROUTERS FROM ROUTE FILES
app.use("/", welcomeRouter);
app.use("/notes", notesRouter);
app.use("/bills", billsRouter);

// START SERVER
const PORT = 4545;
const DOMAIN = "localhost";
app.listen(PORT, DOMAIN, () => {
  console.log(`💁 Server is listening at http://${DOMAIN}:${PORT}`);
});
