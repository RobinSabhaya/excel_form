const axios = require("axios");
const { google } = require("googleapis");
const { v4: uuidv4 } = require("uuid");
const fetch = require("node-fetch-commonjs");
const auth = new google.auth.GoogleAuth({
  keyFile: __dirname + "/key.json",
  scopes: "https://www.googleapis.com/auth/spreadsheets",
});

const client = auth.getClient();
const googleSheetInstance = google.sheets({
  version: "v4",
  auth: client,
});

const spreadsheetId = "1FbKMPbuNAGYvZW7Yhdw4I5zPa4w-AH9h8IIB79YDgss";

const studentcontroller = {
  async getStudent(req, res) {
    return res.status(200).render("student");
  },
  async postStudent(req, res) {
    const uuid = uuidv4();
    const { firstName, lastName, emailId, gender } = req.body;

    await googleSheetInstance.spreadsheets.values.append({
      auth,
      spreadsheetId,
      range: "Sheet1!A:E",
      valueInputOption: "USER_ENTERED",
      resource: {
        values: [[uuid, firstName, lastName, emailId, gender]],
      },
    });

    return res.json({
      message: "student record is created successfully",
    });
  },
  async getData(req, res) {
    const studentData = await googleSheetInstance.spreadsheets.values.get({
      auth,
      range: "Sheet1!A:E",
      spreadsheetId: spreadsheetId,
    });

    return res
      .status(200)
      .render("studentrecord", { studentData: studentData.data.values });
  },
  async singleStudent(req, res) {
    const query =
      "Select A,B,C,D,E WHERE A = '629a2378-b2c9-4088-9b42-b281b7a3a0e7'";
    const qu = encodeURIComponent(query);
    const uri = `https://docs.google.com/a/google.com/spreadsheets/d/${spreadsheetId}/gviz/tq?tq=${qu}`;
    // https://docs.google.com/a/google.com/spreadsheets/d/1FbKMPbuNAGYvZW7Yhdw4I5zPa4w-AH9h8IIB79YDgss/gviz/tq?tq=Select%20A%2CB%2CC%2CD%2CE%20WHERE%20A%20%3D%20b5dca613-500d-44f5-a360-a286909e8dc4
    const response = await fetch(uri);
    const Data = await response.text();
    const studentData = JSON.parse(Data.slice(47, Data.length - 2));
    return res.render("singlestudent", { studentData: studentData.table.rows });
  },
};

module.exports = studentcontroller;
