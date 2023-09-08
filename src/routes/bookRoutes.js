const express = require('express');
const router = express.Router();
const bookController = require('../controllers/bookController');

router.post('/create', bookController.createBook);
router.get('/getAll', bookController.getAllBooks);
router.get('/getAll/:id', bookController.getBook);
router.put('/update/:id', bookController.updateBook);
router.delete('/delete/:id', bookController.deleteBook);

module.exports = router;