// models/Item.js
const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
    user: { // Reference to the user who created this item
        type: mongoose.Schema.ObjectId,
        ref: 'User', // Refers to the 'User' model
        required: true
    },
    title: {
        type: String,
        required: [true, 'Please add a title for the item'],
        trim: true,
        maxlength: [100, 'Title cannot be more than 100 characters']
    },
    author: {
        type: String,
        trim: true,
        maxlength: [100, 'Author name cannot be more than 100 characters']
    },
    description: {
        type: String,
        maxlength: [500, 'Description cannot be more than 500 characters']
    },
    price: {
        type: Number,
        required: [true, 'Please add a price'],
        min: [0, 'Price cannot be negative']
    },
    condition: {
        type: String,
        required: [true, 'Please specify the item condition'],
        enum: [
            'New',
            'Used - Like New',
            'Used - Good',
            'Used - Fair'
        ],
        default: 'Used - Good'
    },
    category: {
        type: String,
        enum: ['Fiction', 'Non-Fiction', 'Textbook', 'Biography', 'Fantasy', 'Sci-Fi', 'History', 'Other'],
        default: 'Other'
    },
    image: { // Field to store the path/URL of the uploaded image
        type: String,
        default: 'no-photo.jpg' // Default image if none is uploaded
    },
}, {
    timestamps: true // Automatically adds createdAt and updatedAt fields
});

module.exports = mongoose.model('Item', itemSchema);