// app.js

const express = require("express");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const routes = require("./routes");
const initDB = require("./config/init.db");

const cors = require("cors");

dotenv.config();


const app = express();





// Middleware


app.use(bodyParser.json());
app.use(cors());

// Routes
app.use("/api", routes);


app.use("/",(req, res)=>{
  res.json({
    status:"api working",
    code:200
  }
})

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`); 
    initDB(); // Initialize the database

});



