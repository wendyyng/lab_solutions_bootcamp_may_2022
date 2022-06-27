const express = require("express");
const logger = require("morgan");
const fs = require("fs");

const app = express();
app.use(logger("dev"));
app.set("view engine", "ejs");

app.get("/", function (request, response) {
  response.render("index");
});

app.get("/car_status", function (request, response) {
  const year = parseInt(request.query.year);
  let age;
  switch (true) {
    case year > 2022:
      age = "from the future";
      break;
    case year >= 2016:
      age = "New";
      break;
    case year >= 2006:
      age = "Old";
      break;
    case year < 2006:
      age = "Very Old";
      break;
  }
  response.render("car_status", { age: age });
});

app.get("/random_person", function (request, response) {
  const names = request.query.names || "";
  const namesArray = names.split(",");
  const name = namesArray[Math.floor(Math.random() * namesArray.length)];
  response.render("random_person", { names: names, name: name });
});

app.get("/fizz_buzz", function (request, response) {
  const number1 = request.query.number1;
  const number2 = request.query.number2;

  const fizzBuzzArr = [];
  if (number1 && number2) {
    for (let i = 1; i <= 100; i++) {
      if (i % number1 === 0 && i % number2 === 0) {
        fizzBuzzArr.push("FizzBuzz");
      } else if (i % number1 === 0) {
        fizzBuzzArr.push("Fizz");
      } else if (i % number2 === 0) {
        fizzBuzzArr.push("Buzz");
      } else {
        fizzBuzzArr.push(i);
      }
    }
  }
  response.render("fizz_buzz", { fizzBuzzArr, number1, number2 }); // === { fizzBuzzArr: fizzBuzzArr }
});

app.get("/directory_lister", (request, response) => {
  fs.readdir(".", (err, files) => {
    if (err) {
      response.send("An Error Occurred");
    }
    response.render("directory_lister", {
      files: files,
    });
  });
});

const PORT = 4545;
const DOMAIN = "localhost";
app.listen(PORT, DOMAIN, function () {
  console.log(`The server is running at http://${DOMAIN}:${PORT}`);
});
