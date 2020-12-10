const UserService = require('../service/user.service');
exports.GetAll = async (req, res) => {
    try {
      const result = await UserService.GetAllUserService();
      return res.status(200).json({
        success: true,
        message: 'A list of all user',
        data: result,
  
      });
    } catch (err) {
      res.status(500).json({
        success: false,
        message: 'Server error. Please try again.',
        error: err.message,
      });
    }
  };