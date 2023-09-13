const express = require("express");
const route = require("./routes");
const app = express();

app.use(express.static(__dirname + "/public/image"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(route);
app.set("view engine", "ejs");

app.listen(8000, () => {
  console.log(`Express app is running on http://localhost:8000/`);
});
