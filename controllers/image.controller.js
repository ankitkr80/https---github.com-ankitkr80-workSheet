// controllers/imageController.js
const Image = require("../models/image.model");

exports.uploadImage = (req, res) => {
  const newImage = {
    name: req.file.filename,
    path: req.file.path,
    employeeid: req.body.employeeid,
  };

  Image.create(newImage, (err, data) => {
    if (err) {
      res.status(500).send({
        message:
          err.message || "Some error occurred while uploading the image.",
      });
    } else {
      res.send(data);
    }
  });
};
