const express = require("express");
 require("dotenv").config();
const app = express();
const cors = require("cors");
const productRoute = require("./routes/productRoutes");
const mongoose = require("mongoose");
const AuthRoute= require("./routes/authRoutes")
//<---------------------------------------------------------------->

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

//<---------------------------------------------------------------->
//Add routes here
app.use("/", productRoute);
app.use("/auth", AuthRoute)

//<---------------------------------------------------------------->
const CONNECTION_URL = process.env.MONGO_URL;
const PORT = process.env.PORT||8000;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`)))
  .catch((error) => console.log(`${error} did not connect`));
