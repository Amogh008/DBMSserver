const User = require("./../model/userModel");

exports.getAllUsers = (req, res) => {
  res.status(500).json({
    status: "error",
    message: "this route is not yet defined",
  });
};

exports.getUser = async (req, res) => {
  try {
    console.log(req.params.id);
    // console.log(req.connection.remoteAddress);

    const person = await User.findById(req.params.id);
    res.status(200).json({
      status: "success",
      data: {
        person,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "failed",
      message: "Bad request",
    });
  }
};
exports.createUser = (req, res) => {
  res.status(500).json({
    status: "error",
    message: "this route is not yet defined",
  });
};

exports.updateUser = (req, res) => {
  res.status(500).json({
    status: "error",
    message: "this route is not yet defined",
  });
};

exports.deleteUser = (req, res) => {
  res.status(500).json({
    status: "error",
    message: "this route is not yet defined",
  });
};
