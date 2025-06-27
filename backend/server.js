const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const userRoutes = require('./routes/userRoutes');
const itemRoutes = require('./routes/itemRoutes');
// const errorHandler = require('./middleware/errorHandler'); // Disabled for now
const path = require('path'); // For serving static files
const cookieParser = require('cookie-parser'); // For parsing cookies

// Load env vars
dotenv.config({ path: './config/config.env' });

// Connect to database
connectDB();

const app = express();

// Body parser - allows us to get data from req.body
app.use(express.json());

// Cookie parser
app.use(cookieParser());

// Serve static files (e.g., uploaded images)
app.use('/public/uploads', express.static(path.join(__dirname, 'public/uploads')));

// Mount routers
app.use('/api/users', userRoutes);
app.use('/api/items', itemRoutes);

// Global Error Handler (MUST be last middleware)
// app.use(errorHandler); // Disabled for now

const PORT = process.env.PORT || 5000;

const server = app.listen(
    PORT,
    () => {
        console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`);
    }
);

// Handle unhandled promise rejections
process.on('unhandledRejection', (err, promise) => {
    console.error(`Error: ${err.message}`);
    // Close server & exit process
    server.close(() => process.exit(1));
});
