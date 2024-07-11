const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");

const register = async (req, res) => {
  const { name, employeeid, email, password, mobile, designation } = req.body;

  try {
    const userExists = await userModel.findUserByEmail(email);
    const employeeExists = await userModel.findUserByEmployeeId(employeeid);

    if (userExists || employeeExists) {
      return res
        .status(400)
        .send({ message: "User or Employee ID already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    await userModel.createUser({
      name,
      employeeid,
      email,
      password: hashedPassword,
      mobile,
      designation,
    });

    res.status(201).send({ message: "User registered successfully" });
  } catch (err) {
    console.error("Error registering user:", err);
    res.status(500).send({ message: "Internal server error" });
  }
};

const login = async (req, res) => {
  const { employeeid, password } = req.body;

  try {
    const user = await userModel.findUserByEmployeeId(employeeid);

    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res
        .status(400)
        .send({ message: "Invalid Employee ID or password" });
    }

    const token = jwt.sign(
      { id: user.id, employeeid: user.employeeid, email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: "20h" }
    );

    res.status(200).send({ token, message: "You have logged in successfully" });
  } catch (err) {
    console.error("Error logging in user:", err);
    res.status(500).send({ message: "Internal server error" });
  }
};

module.exports = {
  register,
  login,
};
