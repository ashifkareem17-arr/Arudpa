const express   = require('express');
const router    = express.Router();
const { getFaqs, addFaq, updateFaq, deleteFaq } = require('../controllers/faq.controller');
const adminAuth = require('../middleware/adminAuth');

router.get('/',         getFaqs);
router.post('/',        adminAuth, addFaq);
router.put('/:id',      adminAuth, updateFaq);
router.delete('/:id',   adminAuth, deleteFaq);

module.exports = router;
