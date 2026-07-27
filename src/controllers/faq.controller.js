const Faq = require('../models/Faq.model');

const seedFaqs = async () => {
  const count = await Faq.countDocuments();
  if (count === 0) {
    await Faq.insertMany([
      { question: 'What does Arudpa offer?',       answer: 'We design and sell unique, high-quality dresses and sarees for everyday wear and special occasions.', order: 1 },
      { question: 'Do you do custom stitching?',   answer: 'Yes! We can customize the fit, blouse designs, and dress styles to match your exact measurements.',  order: 2 },
      { question: 'What fabrics do you use?',      answer: 'We use breathable cottons and linens for daily comfort, and premium silks and georgettes for party wear.', order: 3 },
      { question: 'How should I wash my clothes?', answer: 'We recommend dry cleaning for heavy silks/party wear, and a gentle hand wash for simple cottons.',    order: 4 },
      { question: 'How can I buy from Arudpa?',    answer: 'You can browse our collection online or visit us directly to place a custom order.',                   order: 5 },
    ]);
    console.log('✅ FAQs seeded!');
  }
};

seedFaqs();

const getFaqs = async (req, res) => {
  try {
    const faqs = await Faq.find({ active: true }).sort({ order: 1 }).select('-__v');
    res.json({ success: true, data: faqs });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

const addFaq = async (req, res) => {
  try {
    const { question, answer, order } = req.body;
    if (!question || !answer) {
      return res.status(400).json({ success: false, error: 'Question and answer are required.' });
    }
    const faq = await Faq.create({ question, answer, order: order || 0 });
    res.status(201).json({ success: true, data: faq });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

const updateFaq = async (req, res) => {
  try {
    const faq = await Faq.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!faq) return res.status(404).json({ success: false, error: 'FAQ not found.' });
    res.json({ success: true, data: faq });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

const deleteFaq = async (req, res) => {
  try {
    const faq = await Faq.findByIdAndDelete(req.params.id);
    if (!faq) return res.status(404).json({ success: false, error: 'FAQ not found.' });
    res.json({ success: true, message: 'FAQ deleted.' });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

module.exports = { getFaqs, addFaq, updateFaq, deleteFaq };
