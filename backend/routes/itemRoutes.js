// ✅ 3. routes/itemRoutes.js
const express = require('express');
const router = express.Router();
const {
  getItems,
  getItemById,
  createItem,
  updateItem,
  deleteItem
} = require('../controllers/itemController');
const { protect } = require('../middleware/authMiddleware');
const upload = require('../config/multer');

router.get('/', getItems);
router.get('/:id', getItemById);

router.use(protect);
router.post('/', upload, createItem);
router.put('/:id', upload, updateItem);
router.delete('/:id', deleteItem);

module.exports = router;