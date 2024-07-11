const leaveModel = require("../models/leaveModel");

const applyLeave = async (req, res) => {
  const {  employeeid, startDate, endDate, totalDays, message } = req.body;

  try {
    await leaveModel.applyLeave({
       employeeid,
      startDate,
      endDate,
      totalDays,
      message,
    });
    res.status(200).send({ message: "Leave applied successfully" });
  } catch (err) {
    console.error("Error applying leave:", err);
    res.status(500).send({ message: "Error applying leave" });
  }
};


module.exports = {
  applyLeave,
};
