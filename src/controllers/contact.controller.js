const Contact = require('../models/Contact.model');

const submitContact = async (req, res) => {
  try {
    const { name, phone, email, message } = req.body;
    if (!name || !phone || !email || !message) {
      return res.status(400).json({ success: false, error: 'All fields are required.' });
    }
    if (!/^\S+@\S+\.\S+$/.test(email)) {
      return res.status(400).json({ success: false, error: 'Invalid email address.' });
    }
    const phone_clean = phone.replace(/\D/g, '');
    if (phone_clean.length < 10 || phone_clean.length > 13) {
      return res.status(400).json({ success: false, error: 'Invalid phone number.' });
    }
    const contact = await Contact.create({ name, phone, email, message });
    res.status(201).json({ success: true, message: 'Thank you! We will get back to you soon.', id: contact._id });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

const getContacts = async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 });
    res.json({ success: true, count: contacts.length, data: contacts });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

const updateStatus = async (req, res) => {
  try {
    const { status } = req.body;
    if (!['new', 'read', 'replied'].includes(status)) {
      return res.status(400).json({ success: false, error: 'Invalid status.' });
    }
    const contact = await Contact.findByIdAndUpdate(req.params.id, { status }, { new: true });
    if (!contact) return res.status(404).json({ success: false, error: 'Contact not found.' });
    res.json({ success: true, data: contact });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

module.exports = { submitContact, getContacts, updateStatus };
