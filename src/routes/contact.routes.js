const express   = require('express');
const router    = express.Router();
const { submitContact, getContacts, updateStatus } = require('../controllers/contact.controller');
const adminAuth = require('../middleware/adminAuth');

router.post('/',               submitContact);
router.get('/',   adminAuth,   getContacts);
router.put('/:id/status', adminAuth, updateStatus);

module.exports = router;
