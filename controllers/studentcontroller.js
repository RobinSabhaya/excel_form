const XLSX = require("xlsx");
const studentcontroller = {
  async getStudent(req, res) {
    return res.status(200).render("student");
  },
  async postStudent(req, res) {
    const data = [req.body];
    const workSheet = XLSX.utils.json_to_sheet(data);
    const workBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workBook, workSheet, "Sheet 1");
    XLSX.writeFile(workBook, "sample.xlsx");
    return res.json({
      message: "Student record created successfully",
    });
  },
};

module.exports = studentcontroller;
