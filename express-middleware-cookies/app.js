const express = require("express");
const logger = require("morgan");
const cookieParser = require("cookie-parser");
const tasksRouter = require("./routes/tasks");

const app = express();
app.use(logger("dev"));
app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: false }));
const COOKIE_MAX_AGE = 1000 * 60 * 60 * 24 * 7;

app.use(cookieParser());
// Custom middleware
app.use((request, response, next) => {
  const todoList = request.cookies.todoList;
  response.locals.todoList = [];
  if (todoList) {
    // This initializes a variable called `todoList` which will be available to
    // all of the views. The variable `todoList` is assigned the value of the
    // `cookies.todoList` array
    response.locals.todoList = todoList;
  }

  // The middleware is finished. Go on to next middleware and/or route
  next();
});
app.use((req, res, next) => {
  console.log("cookie:", req.cookies);
  const username = req.cookies.username;
  res.locals.username = "";
  // properties set on res.locals become accessible in any view
  if (username) {
    res.locals.username = username;
    console.log(`signed in as ${username}`);
  }
  // next is a function, when invoked it will tell express to move on to the next middleware
  next();
});
app.use("/tasks", tasksRouter);
app.get("/", function (request, response) {
  const language = request.cookies.language;
  const name = request.cookies.name;
  const greetings = {
    english: "Hello",
    french: "Bonjour",
    spanish: "Hola",
  };
  let greeting;
  if (name && language) {
    greeting = `${greetings[language]}, ${name}`;
  }
  response.render("home", { greeting });
});
app.post("/sign_in", (req, res) => {
  // req.body holds all the info from the post request
  const COOKIE_EXPIRE = 1000 * 60 * 60 * 24 * 7;
  const username = req.body.username;
  res.cookie("username", username, { maxAge: COOKIE_EXPIRE });
  res.redirect("/tasks");
});
app.post("/sign_out", (req, res) => {
  res.clearCookie("username");
  res.redirect("/tasks");
});

app.get("/preferred_language", function (request, response) {
  const selected = request.cookies.language;
  const name = request.cookies.name;
  const preferred_languages = {
    english: "English",
    french: "French",
    spanish: "Spanish",
  };
  response.render("preferred_language", {
    preferred_languages,
    name,
    selected,
  });
});

app.post("/preferred_language", function (request, response) {
  const name = request.body.name;
  const language = request.body.language;
  response.cookie("name", name, {
    maxAge: COOKIE_MAX_AGE,
  });
  response.cookie("language", language, {
    maxAge: COOKIE_MAX_AGE,
  });
  response.redirect("/");
});

const PORT = 4545;
const DOMAIN = "localhost";
app.listen(PORT, DOMAIN, function () {
  console.log(`The server is running at http://${DOMAIN}:${PORT}`);
});
