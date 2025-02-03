import express from "express";
import { User } from "../models/userModel.js";

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    if (
      !req.body.name ||
      !req.body.email ||
      !req.body.phone ||
      !req.body.dob ||
      !req.body.password
    ) {
      return res.status(400).send({ message: "Enter all details" });
    }
    const newUser = {
      name: req.body.name,
      email: req.body.email,
      phone: req.body.phone,
      dob: new Date(req.body.dob),
      password: req.body.password,
    };
    const user = await User.create(newUser);
    return res.status(200).send({ message: "User registered successfully!" });
  } catch (error) {
    return res
      .status(500)
      .send({ message: error.meassage });
  }
});

export default router;
