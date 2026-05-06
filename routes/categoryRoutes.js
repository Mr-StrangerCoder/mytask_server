const express = require('express');
const router = express.Router();
const protect = require('../middleware/authMiddleware');
const {
  createCategory,
  getCategories,
  deleteCategory
} = require('../controllers/categoryController');

router.use(protect);

router.post('/', createCategory);
router.get('/', getCategories);
router.delete('/:id', deleteCategory);

module.exports = router;