const express = require("express");
const { postAdmin, getAdmin } = require("../controllers/admincontroller");
const { getHome } = require("../controllers/homecontroller");
const {
  postStudent,
  getStudent,
  getData,
  singleStudent,
} = require("../controllers/studentcontroller");
const route = express.Router();

//Admin routes
route.get("/admin", getAdmin);
route.post("/admin", postAdmin);

// Home routes
route.get("/", getHome);
route.get("/studentrecord", getData);
//Student routes
route.get("/student", getStudent);
route.get("/singlestudent", singleStudent);
route.post("/student", postStudent);
module.exports = route;
