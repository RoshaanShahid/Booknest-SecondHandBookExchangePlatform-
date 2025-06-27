// controllers/itemController.js
const Item = require('../models/Item');
const ErrorResponse = require('../utils/errorResponse'); // Custom error class (for consistency)

// @desc    Get all items
// @route   GET /api/items
// @access  Public
exports.getItems = async (req, res, next) => {
    try {
        const items = await Item.find().populate({
            path: 'user', // Populate the 'user' field
            select: 'name email' // Select specific fields from the User model
        });
        res.status(200).json({ success: true, count: items.length, data: items });
    } catch (err) {
        next(new ErrorResponse(`Error fetching items: ${err.message}`, 500));
    }
};

// @desc    Get single item
// @route   GET /api/items/:id
// @access  Public
exports.getItemById = async (req, res, next) => {
    try {
        const item = await Item.findById(req.params.id).populate({
            path: 'user',
            select: 'name email'
        });
        if (!item) {
            return next(new ErrorResponse(`Item not found with id of ${req.params.id}`, 404));
        }
        res.status(200).json({ success: true, data: item });
    } catch (err) {
        // If the ID format is invalid
        if (err.name === 'CastError') {
            return next(new ErrorResponse(`Invalid item ID: ${req.params.id}`, 400));
        }
        next(err);
    }
};


// @desc    Create a new item
// @route   POST /api/items
// @access  Private (requires authentication)
exports.createItem = async (req, res, next) => {
    try {
        // req.user is populated by authMiddleware
        req.body.user = req.user.id;

        // Set image path if a file was uploaded
        if (req.file) {
            req.body.image = `/public/uploads/${req.file.filename}`; // Store relative path
        } else {
            req.body.image = 'no-photo.jpg'; // Set default if no image uploaded
        }

        const item = new Item(req.body);
        const newItem = await item.save();
        res.status(201).json({ success: true, data: newItem });
    } catch (err) {
        console.error("Error in createItem:", err); // Log the full error for debugging
        // Check for Mongoose validation errors
        if (err.name === 'ValidationError') {
            const messages = Object.values(err.errors).map(val => val.message);
            return next(new ErrorResponse(messages.join(', '), 400));
        }
        next(new ErrorResponse(`Error creating item: ${err.message}`, 400)); // Generic bad request for other errors
    }
};

// @desc    Update an item
// @route   PUT /api/items/:id
// @access  Private (requires authentication and ownership)
exports.updateItem = async (req, res, next) => {
    try {
        let item = await Item.findById(req.params.id);

        if (!item) {
            return next(new ErrorResponse(`Item not found with id of ${req.params.id}`, 404));
        }

        // Make sure user is item owner
        if (item.user.toString() !== req.user.id) {
            return next(new ErrorResponse(`User ${req.user.id} is not authorized to update this item`, 401));
        }

        // Set image path if a new file was uploaded
        if (req.file) {
            req.body.image = `/public/uploads/${req.file.filename}`;
        }

        item = await Item.findByIdAndUpdate(req.params.id, req.body, {
            new: true, // Return the updated document
            runValidators: true // Run Mongoose validation rules on update
        });

        res.status(200).json({ success: true, data: item });
    } catch (err) {
        if (err.name === 'CastError') {
            return next(new ErrorResponse(`Invalid item ID: ${req.params.id}`, 400));
        }
        if (err.name === 'ValidationError') {
            const messages = Object.values(err.errors).map(val => val.message);
            return next(new ErrorResponse(messages.join(', '), 400));
        }
        next(err);
    }
};

// @desc    Delete an item
// @route   DELETE /api/items/:id
// @access  Private (requires authentication and ownership)
exports.deleteItem = async (req, res, next) => {
    try {
        const item = await Item.findById(req.params.id);

        if (!item) {
            return next(new ErrorResponse(`Item not found with id of ${req.params.id}`, 404));
        }

        // Make sure user is item owner
        if (item.user.toString() !== req.user.id) {
            return next(new ErrorResponse(`User ${req.user.id} is not authorized to delete this item`, 401));
        }

        await Item.deleteOne({ _id: req.params.id });

        res.status(200).json({ success: true, data: {} });
    } catch (err) {
        if (err.name === 'CastError') {
            return next(new ErrorResponse(`Invalid item ID: ${req.params.id}`, 400));
        }
        next(err);
    }
};