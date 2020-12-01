const bodyParser = require("body-parser");
const express = require("express");
const app = express();
const server = require("https").createServer(app);
const io = require("socket.io")(server);

const db = require("./src/Config/db");
const cors = require("cors");
require("dotenv").config();

// Routes
const authRoute = require("./src/Users/Routes/authRoutes");
const userRoute = require("./src/Users/Routes/userRoutes");
const bookingRoute = require("./src/Users/Routes/bookingRoutes");
const cityRoute = require("./src/Users/Routes/cityRoutes");
const countryRoute = require("./src/Users/Routes/countryRoutes");
const airlinesRoute = require("./src/Users/Routes/airlinesRoutes");
const flightRoute = require("./src/Users/Routes/flightRoutes");

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

// Router
app.use("/api/v1/auth", authRoute);
app.use("/api/v1/users",userRoute);
app.use("/api/v1/users/booking", bookingRoute);
app.use("/api/v1/users/city", cityRoute);
app.use("/api/v1/users/country", countryRoute);
app.use("/api/v1/users/airlines", airlinesRoute);
app.use("/api/v1/users/flight", flightRoute);

// Index
app.get("/api/v1", (req, res) => {
  res.send("Hello Ankasa Ticketing !");
});

// Middleware Photos
app.use(express.static("Images"));

// Listen Port
const PORT = process.env.PORT || 8000;
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
