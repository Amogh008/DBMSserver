const express = require("express");
const router = express.Router();
const tourController = require("../controllers/tourController");
const authController = require("./../controllers/authController");

router
  .route("/")
  .get(authController.protect, tourController.getAllTours)
  .post(authController.protect, tourController.createTour);

router
  .route("/:id")
  .get(authController.protect, tourController.getTour)
  .patch(tourController.updateTour)
  .delete(tourController.deleteTour);

module.exports = router;
