const jwt = require('jsonwebtoken');
const User = require('../models/User');

// Middleware to protect routes
const protect = async (req, res, next) => {
    let token;

    // Check if token is present in the Authorization header
    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer ')) {
        try {
            // Extract token from the header
            token = req.headers.authorization.split(' ')[1];

            // Verify the token
            const decoded = jwt.verify(token, process.env.JWT_SECRET);

            // Find the user by ID and attach user info to the request
            req.user = await User.findById(decoded.id).select('-password');

            next(); // Proceed to the next middleware or route handler
        } catch (err) {
            res.status(401).json({ message: 'Not authorized, token failed' });
        }
    }

    if (!token) {
        res.status(401).json({ message: 'Not authorized, no token' });
    }
};

module.exports = { protect };
