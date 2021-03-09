import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

import UserModal from "../models/user.js";

const secret = 'test';

export const signin = async (req, res) => {
  const { email, password } = req.body;

  try {
    const oldUser = await UserModal.findOne({ email });

    if (!oldUser) return res.status(200).json({ DoesNotExist : "User doesn't exist" });

   

    if (password !== oldUser.password) return res.status(400).json({ InvalidPassWord : "Invalid credentials" });

    res.status(200).json({ result: oldUser }); // [0,1,2]
  } catch (err) {
    res.status(500).json({ message: "Something went wrong" });
  }
};

export const signup = async (req, res) => {
  const { email, password, firstName, lastName  , company , phone} = req.body;

  try {
    const oldUser = await UserModal.findOne({ email });

    if (oldUser) return res.status(202).json({ EmailExist : "User already exists" });

   

    const result = await UserModal.create({company,phone, email, password, name: `${firstName} ${lastName}` });



    res.status(201).json({ result  }); /*   {length , word ,  data :{ result  , message }   }*/ 
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
    
    console.log(error);
  }
};


export const search = async (req, res) => {
  const { email } = req.body;

  try {
    const oldUser = await UserModal.find({ email });

    res.status(201).json({ oldUser });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
    
    console.log(error);
  }
};