const express = require("express");
const router = express.Router();
const coPassController = require("../controllers/coPassController");
const authController = require("./../controllers/authController");

router
  .route("/")
  .get(authController.protect, coPassController.getAllTours)
  .post(authController.protect, coPassController.createTour);

router
  .route("/:id")
  .get(authController.protect, coPassController.getTour)
  .patch(coPassController.updateTour)
  .delete(coPassController.deleteTour);

module.exports = router;
