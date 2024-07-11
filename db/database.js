const mysql = require("mysql2");
require("dotenv").config();

const db = mysql.createConnection({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

db.connect((err) => {
  if (err) {
    console.error("Error connecting to MySQL database:", err);
    return;
  }
  console.log("MySQL database connected.");

  const createUsersTable = `
    CREATE TABLE IF NOT EXISTS users (
      id INT AUTO_INCREMENT PRIMARY KEY,
      name VARCHAR(50),
      employeeid VARCHAR(50) UNIQUE,
      email VARCHAR(100) UNIQUE,
      password VARCHAR(255),
      mobile VARCHAR(15),
      designation ENUM('frontend', 'backend', 'manager', 'intern')
    )
  `;

  const createLeavesTable = `
    CREATE TABLE IF NOT EXISTS leaves (
      id INT AUTO_INCREMENT PRIMARY KEY,
      employeeid VARCHAR(50),
      start_date DATE,
      end_date DATE,
      total_days INT,
      message TEXT
    )
  `;

  const createWorkSummariesTable = `
    CREATE TABLE IF NOT EXISTS work_summaries (
      id INT AUTO_INCREMENT PRIMARY KEY,
      employeeid VARCHAR(50),
      date DATE,
      start_time TIME,
      end_time TIME,
      summary TEXT,
      total_hours FLOAT
    )
  `;

  // Create tables if they don't exist
  db.query(createUsersTable, (err) => {
    if (err) {
      console.error("Error creating users table:", err);
    } else {
      console.log("Users table created or already exists.");
    }
  });

  db.query(createLeavesTable, (err) => {
    if (err) {
      console.error("Error creating leaves table:", err);
    } else {
      console.log("Leaves table created or already exists.");
    }
  });

  db.query(createWorkSummariesTable, (err) => {
    if (err) {
      console.error("Error creating work_summaries table:", err);
    } else {
      console.log("Work summaries table created or already exists.");
    }
  });
});

module.exports = db;
