// config/init.db.js
const db = require("../db/database");

const initDB = () => {
  const createTableQuery = `
    CREATE TABLE IF NOT EXISTS images (
      id INT AUTO_INCREMENT PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      path VARCHAR(255) NOT NULL,
      employeeid VARCHAR(50) NOT NULL
    )
  `;

  db.query(createTableQuery, (err, result) => {
    if (err) {
      console.error("Error creating images table:", err);
      return;
    }
    console.log("Images table created or already exists.");
  });
};

module.exports = initDB;
