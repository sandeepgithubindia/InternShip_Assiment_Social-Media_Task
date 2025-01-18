const Admin = require('../models/Admin'); // Adjust path to your Admin model

// Login endpoint
exports.login = async (req, res) => {
  const { username, password } = req.body;

  try {
    // Find the admin by username
    const admin = await Admin.findOne({ username });
    if (!admin) {
      console.log('No admin found with username:', username);
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    // Compare the input password with the stored password (plain text)
    if (admin.password !== password) {
      console.log('Password does not match');
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    // Return success if the credentials match
    res.status(200).json({ message: 'Login successful' });

  } catch (error) {
    console.error('Error logging in:', error);
    res.status(500).json({ message: 'Server error' });
  }
};
