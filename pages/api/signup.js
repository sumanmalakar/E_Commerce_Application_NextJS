// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import User from "../../models/User";
import connectDb from "../../middleware/mongoose";

const handler = async (req, res) => {
  if (req.method == 'POST') {
    console.log(req.body)
    const user = await User.findOne({ email: req.body.email });

    if (req.body.name === '' || req.body.email === '' || req.body.password === '') {
      res.status(200).json({ success: false, error: "Enter the required feilds" })
    } else if (user) {
      res.status(200).json({ userExist: true, msg: "User already exist..!" })
    }
    else {
      let u = new User(req.body);
      await u.save();

      res.status(200).json({ success: true, name: u.name, email: u.email })
    }

  } else {
    res.status(400).json({ error: "This method is not allowed" })
  }

}



export default connectDb(handler)