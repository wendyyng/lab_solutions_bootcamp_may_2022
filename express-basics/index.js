const express = require("express");
const logger = require("morgan");

const app = express();
app.set("view engine", "ejs");
app.use(logger("dev"));

app.get("/car_status", (request, response) => {
  const year = request.query.year;
  let age;
  switch (true) {
    case year > 2022:
      age = "From the future";
      break;
    case year > 2016:
      age = "New";
      break;
    case year > 2006:
      age = "Old";
      break;
    case year <= 2006:
      age = "Very Old";
      break;
  }
  response.render("car_status", { age });
});

const PORT = 4000;
const DOMAIN = "localhost";
app.listen(PORT, DOMAIN, () => {
  console.log(`The server is listening at http://${DOMAIN}:${PORT}`);
});
