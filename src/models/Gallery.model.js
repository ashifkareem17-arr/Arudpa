const mongoose = require('mongoose');

const gallerySchema = new mongoose.Schema({
  title:         { type: String, required: true, trim: true },
  desc:          { type: String, required: true, trim: true },
  tag:           { type: String, required: true, trim: true },
  image:         { type: String, required: true },
  imagePublicId: { type: String },
  order:         { type: Number, default: 0 },
  active:        { type: Boolean, default: true },
}, { timestamps: true });

module.exports = mongoose.model('Gallery', gallerySchema);
