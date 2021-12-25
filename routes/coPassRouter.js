const express = require("express");
const router = express.Router();
const coPassController = require("../controllers/coPassController");
const authController = require("./../controllers/authController");

router.route("/:id").post(authController.protect, coPassController.createTrip);
//   .patch(coPassController.updateTour)
//   .delete(coPassController.deleteTour);
// router
//   .route("/bookedTrips/:id")
//   .get(authController.protect, coPassController.getTour)
//   .patch(coPassController.updateTour)
//   .delete(coPassController.deleteTour);

// router
//   .route("/completedTrips/:id")
//   .get(authController.protect, coPassController.getTour)
//   .patch(coPassController.updateTour)
//   .delete(coPassController.deleteTour);

module.exports = router;
