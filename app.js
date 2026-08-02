const express = require("express");
const path = require("path");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 8001;

// Set EJS as the view engine
app.set("view engine", "ejs");

// Tell Express where the EJS files are
app.set("views", path.join(__dirname, "views"));

// Serve static files (CSS, JS, Images)
app.use(express.static(path.join(__dirname, "public")));

// Parse form data
app.use(express.urlencoded({ extended: true }));

const weatherRoutes = require("./routes/weatherRoutes");
app.use("/", weatherRoutes);

// Start Server
app.listen((PORT),()=>{
    console.log(`server is running on port ${PORT}`);
});