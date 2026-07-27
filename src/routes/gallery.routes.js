const express   = require('express');
const router    = express.Router();
const { getGallery, addGalleryItem, deleteGalleryItem, updateGalleryItem } = require('../controllers/gallery.controller');
const adminAuth = require('../middleware/adminAuth');
const { upload } = require('../config/cloudinary');

router.get('/',         getGallery);
router.post('/',        adminAuth, upload.single('image'), addGalleryItem);
router.put('/:id',      adminAuth, updateGalleryItem);
router.delete('/:id',   adminAuth, deleteGalleryItem);

module.exports = router;
