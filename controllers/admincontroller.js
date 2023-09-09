const adminController = {
  async getAdmin(req, res) {
    return res.status(200).render("admin");
  },
  async postAdmin(req, res) {
    const { email, password } = req.body;
    return res.status(201).json({
      status: 200,
      message: "admin created successfully",
    });
  },
};

module.exports = adminController;
