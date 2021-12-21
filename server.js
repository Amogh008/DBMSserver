const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });
const mongoose = require("mongoose");
const DB = process.env.DATABASE;

mongoose
  .connect(DB, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then((con) => {
    console.log(con.connection);
    console.log("Database connected successfully");
  })
  .catch((err) => {
    throw err;
  });

const app = require("./app");
const port = process.env.PORT || 3000;
console.log(process.env.NODE_ENV);
app.listen(port, () => {
  console.log(`server is up and running on port ${port}`);
});
