const express = require('express');
const multer = require('multer');
const { createUser, getAllUsers } = require('../controllers/userController');

const router = express.Router();

const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, 'uploads/'),
  filename: (req, file, cb) => cb(null, Date.now() + '-' + file.originalname),
});

const upload = multer({ storage });

router.post('/', upload.array('images', 10), createUser);
router.get('/', getAllUsers);

module.exports = router;
