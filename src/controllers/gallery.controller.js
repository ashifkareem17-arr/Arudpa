const Gallery        = require('../models/Gallery.model');
const { cloudinary } = require('../config/cloudinary');

const getGallery = async (req, res) => {
  try {
    const items = await Gallery.find({ active: true }).sort({ order: 1, createdAt: -1 });
    res.json({ success: true, count: items.length, data: items });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

const addGalleryItem = async (req, res) => {
  try {
    const { title, desc, tag, order } = req.body;
    if (!title || !desc || !tag) {
      return res.status(400).json({ success: false, error: 'Title, description and tag are required.' });
    }
    if (!req.file) {
      return res.status(400).json({ success: false, error: 'Image file is required.' });
    }
    const item = await Gallery.create({
      title, desc, tag,
      image:         req.file.path,
      imagePublicId: req.file.filename,
      order:         order ? parseInt(order) : 0,
    });
    res.status(201).json({ success: true, message: 'Gallery item added!', data: item });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

const deleteGalleryItem = async (req, res) => {
  try {
    const item = await Gallery.findById(req.params.id);
    if (!item) return res.status(404).json({ success: false, error: 'Item not found.' });
    if (item.imagePublicId) {
      await cloudinary.uploader.destroy(item.imagePublicId);
    }
    await item.deleteOne();
    res.json({ success: true, message: 'Gallery item deleted.' });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

const updateGalleryItem = async (req, res) => {
  try {
    const item = await Gallery.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!item) return res.status(404).json({ success: false, error: 'Item not found.' });
    res.json({ success: true, data: item });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

module.exports = { getGallery, addGalleryItem, deleteGalleryItem, updateGalleryItem };
