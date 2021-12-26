const User = require("../model/userModel");
const CoPass = require("./../model/coPassStatus");

exports.getCoPassDetails = async (req, res) => {
  try {
    const tripList = await CoPass.findOne({ tripId: req.params.id });
    const coPassId = tripList.fellows;
    const coPassInfo = await User.find({ _id: { $in: coPassId } }).select({
      name: 1,
    });

    res.status(201).json({
      status: "success",
      data: {
        coPass: coPassInfo,
      },
    });
  } catch {
    res.status(400).json({
      status: "failed to create",
    });
  }
};
