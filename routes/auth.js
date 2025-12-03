import express from "express"
import Joi from "joi";
import User from "../models/user.js"

const router = express()


const ValidateUserSchema=Joi.object({
    username:Joi.string().min(3).max(32).required(),
    password:Joi.string().min(6).max(10).required(),
})
// .pattern(new RegExp("^[a-zA-Z0-9]{3,30}$"))


export const getUsers = async (_req,res) => {
  const users = await User.find();
  res.json(users);
};

router.post("/login", async (req, res) => {
  try {
    
    const { error, value } = ValidateUserSchema.validate(req.body);
    if (error) {
      return res.status(400).json({ message: error.details[0].message });
    }

    
    const newUser = await User.create(value);
    res.status(201).json({ message: "User created successfully", user: newUser });
  } catch (err) {
    console.error(" Error creating user:", err);
    res.status(500).json({ message: "Internal server error" });
  }
});


// router.post("/login", async (req, res) => {
//   res.send("Login route working");
// });


router.get("/users", async (_req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: "Error fetching users" });
  }
});

export default router
