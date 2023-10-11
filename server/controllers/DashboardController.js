

class DashboardController {
  static async index(req, res) {
    try {
      // get semua course yang diambil user
      // get semua course yang diajar teacher
      // get semua user, teacher, dan course untuk admin
    } catch (error) {
      res.status(500).json(error);
    }
  }
}

module.exports = DashboardController;