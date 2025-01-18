const User = require('../models/User');

const createUser = async (req, res) => {
  try {
    const { name, socialMediaHandle } = req.body;
    const imagePaths = req.files.map((file) => file.path);

    const user = new User({ name, socialMediaHandle, images: imagePaths });
    await user.save();
    res.status(201).json({ message: 'User created successfully', user });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { createUser, getAllUsers };
