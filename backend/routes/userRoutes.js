// routes/userRoutes.js
const express = require('express');
const router = express.Router();
const {
    registerUser,
    loginUser,
    getMe,
    logout
} = require('../controllers/userController');
const { protect } = require('../middleware/authMiddleware'); // Import protect from object

router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/me', protect, getMe);
router.get('/logout', protect, logout); // Added logout route

module.exports = router;