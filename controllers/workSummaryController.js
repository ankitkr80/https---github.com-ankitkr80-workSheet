// controllers/workSummaryController.js

const WorkSummary = require("../models/workSummaryModel");

const submitWorkSummary = (req, res) => {
  const {  employeeid, startDate, endDate, startTime, endTime, summary } =
    req.body;

  // Calculate total hours
  const totalHours = calculateTotalHours(startTime, endTime);

  WorkSummary.submitWorkSummary(
     employeeid,
    startDate,
    endDate,
    startTime,
    endTime,
    summary,
    totalHours,
    (err) => {
      if (err) {
        res.status(500).send({ message: "Error submitting work summary" });
      } else {
        res
          .status(200)
          .send({ message: "Work summary submitted successfully" });
      }
    }
  );
};

// Helper function to calculate total hours
const calculateTotalHours = (startTime, endTime) => {
  const start = new Date(`1970-01-01T${startTime}`);
  const end = new Date(`1970-01-01T${endTime}`);
  const hours = (end - start) / 1000 / 60 / 60;
  return hours.toFixed(2);
};

module.exports = {
  submitWorkSummary,
};
