// ─────────────────────────────────────────
// ARUDPA — Main Server
// ─────────────────────────────────────────

const express  = require('express');
const cors     = require('cors');
const mongoose = require('mongoose');

const app  = express();
const PORT = 5000;

// ── MongoDB  Connection ──
const MONGO_URI = 'mongodb://localhost:27017/arudpa_db'; 

console.log('📦 MongoDB URI:', MONGO_URI);

// ── Connect MongoDB ──
mongoose.connect(MONGO_URI, {
  serverSelectionTimeoutMS: 30000,
  socketTimeoutMS:          45000,
  family:                   4,
})
  .then(() => console.log('✅ MongoDB  Connected successfully!'))
  .catch((err) => console.error('❌ MongoDB Error:', err.message));

// ── Middleware ──
app.use(cors({
  origin: [
    'http://localhost:4200',
    'https://www.arudpa.com',
    'https://arudpa.com',
  ],
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization', 'x-admin-key'],
  credentials: true,
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/uploads', express.static('uploads'));

// ── Routes ──
const contactRoutes = require('./src/routes/contact.routes');
const galleryRoutes = require('./src/routes/gallery.routes');
const faqRoutes     = require('./src/routes/faq.routes');

app.use('/api/contact', contactRoutes);
app.use('/api/gallery', galleryRoutes);
app.use('/api/faqs',    faqRoutes);

// ── Health check ──
app.get('/', (req, res) => {
  res.json({ success: true, message: 'ARUDPA Backend is running 🍑' });
});

// ── 404 ──
app.use((req, res) => {
  res.status(404).json({ success: false, error: 'Route not found.' });
});

// ── Start ──
app.listen(PORT, () => {
  console.log(`\n🍑 ARUDPA Backend running on http://localhost:${PORT}\n`);
});