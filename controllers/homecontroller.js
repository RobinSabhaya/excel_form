const homecontroller = {
  async getHome(req, res) {
    return res.status(200).render("home");
  },
};

module.exports = homecontroller;
