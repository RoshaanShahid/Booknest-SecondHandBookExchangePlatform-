// middleware/authMiddleware.js
const jwt = require('jsonwebtoken');
const User = require('../models/UserModel');
const ErrorResponse = require('../utils/errorResponse'); // Custom error class

const protect = async (req, res, next) => {
    let token;

    // Check if token is in Authorization header
    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
        token = req.headers.authorization.split(' ')[1];
    }
    // Alternatively, check if token is in cookies (for cookie-based authentication)
    else if (req.cookies.token) {
        token = req.cookies.token;
    }

    // Make sure token exists
    if (!token) {
        return next(new ErrorResponse('Not authorized to access this route', 401));
    }

    try {
        // Verify token
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        // Check if user still exists
        const user = await User.findById(decoded.id);

        if (!user) {
            return next(new ErrorResponse('User belonging to this token no longer exists', 401));
        }

        // Grant access to protected route by attaching user to request
        req.user = user;
        next();
    } catch (err) {
        console.error('Authentication error:', err.message); // Log full error for debugging
        return next(new ErrorResponse('Not authorized, token failed', 401));
    }
};

module.exports = { protect }; // Export the protect middleware