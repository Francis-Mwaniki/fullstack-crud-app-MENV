const router = require("express").Router();
const User = require("../model/user");
//routes
router.get("/course", async (req, res) => {
  try {
    let data = await User.find();
    res.status(200).send(data);
  } catch (error) {
    console.log(`Error...${error}`);
  }
});
router.get("/getSingleCourse/:id", (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      message: "Data to update can not be empty!",
    });
  }
  const id = req.params.id;
  User.findById(id)
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: `Cannot find song with id=${id}`,
        });
      } else res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error finding song with id=" + id,
      });
    });
});
router.post("/addCourse", async (req, res) => {
  try {
    const courses = new User({
      course: req.body.course,
      description: req.body.description,
    });
    let newCourse = await courses.save();
    res.status(200).send({ message: "Course added" });
  } catch (error) {
    console.log(`Error..${error}`);
  }
});
router.put("/updateCourse/:id", (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      message: "Data to update can not be empty!",
    });
  }
  const id = req.params.id;
  User.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: `Cannot update song with id=${id}`,
        });
      } else res.send({ message: "course was updated!" });
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating song with id=" + id,
      });
    });
});
router.delete("/deleteCourse/:id", (req, res) => {
  const id = req.params.id;

  User.findByIdAndRemove(id)
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete Course with id=${id}`,
        });
      } else {
        res.send({
          message: "course was deleted!",
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete course with id=" + id,
      });
    });
});
//export router
module.exports = router;
