const express = require("express");
const morgan = require("morgan");
const app = express();
const cors = require("cors");
const corsOptions = {
  origin: true,
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  preflightContinue: false,
  optionsSuccessStatus: 204,
};
app.use(cors(corsOptions));
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

const tourRouter = require("./routes/tourRouter");
const userRouter = require("./routes/userRouter");
const coPassRouter = require("./routes/coPassRouter");
app.use(express.json());

app.use(express.static(`${__dirname}/public`));

app.use((req, res, next) => {
  req.requestedAt = new Date().toISOString();
  next();
});

//? indiactes optional parameters /:id?/:x?

app.use("/api/v1/tours", tourRouter);
app.use("/api/v1/users", userRouter);
app.use("/api/v1/copass", coPassRouter);

module.exports = app;
