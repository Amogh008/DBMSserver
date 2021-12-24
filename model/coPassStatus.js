const mongoose = require("mongoose");
const coPassSchema = new mongoose.Schema({
  tripId: {
    type: String,
    required: [true, "A trip must have a source"],
  },
  creatorId: {
    type: String,
    required: [true, "A trip must have a source"],
  },
  fellows: [String],

  status: {
    type: String,
    default: "Scheduled",
  },
});

const coPass = mongoose.model("CoPass", coPassSchema);

module.exports = coPass;
