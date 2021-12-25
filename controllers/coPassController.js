const CoPass = require("./../model/coPassStatus");

exports.createTrip = async (req, res) => {
  try {
    console.log(req.body);
    await CoPass.create(req.body);

    res.status(201).json({
      status: "success",
    });
  } catch {
    res.status(400).json({
      status: "failed to create",
    });
  }
};
exports.getAllCreatedTrips = (req, res) => {
  try {
  } catch {}
};

exports.getAllBookedTrips = (req, res) => {};

exports.checkBookedTrips = (req, res) => {};

exports.getAllCompletedTrips = (req, res) => {};
