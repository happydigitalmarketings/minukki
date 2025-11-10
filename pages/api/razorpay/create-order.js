// pages/api/razorpay/create-order.js
const Razorpay = require('razorpay');
const connectDB = require('../../../lib/db').default;
const razor = new Razorpay({ key_id: process.env.RAZORPAY_KEY_ID, key_secret: process.env.RAZORPAY_KEY_SECRET });
module.exports = async (req, res) => {
  await connectDB();
  if (req.method !== 'POST') return res.status(405).end();
  const { amount, currency = 'INR', receipt } = req.body;
  try {
    const order = await razor.orders.create({ amount: Math.round(amount * 100), currency, receipt: receipt || `rcpt_${Date.now()}` });
    res.json(order);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports.default = module.exports;
