const User = require("../model/user");

const sumbitOpinion = async (req, res) => {
  const { name, age, district, party, address } = req.body;
  try {
    const newData = new User({
      name,
      age,
      district,
      party,
      address,
    });
    await newData.save();
    res.status(201).json({ message: "Form submitted successfully" });
  } catch (e) {
    console.log(e);
    res.status(500).json({ message: "Internal Server Error!" });
  }
};

module.exports = {
  sumbitOpinion,
};
