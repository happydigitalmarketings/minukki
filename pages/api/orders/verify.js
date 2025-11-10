// pages/api/orders/verify.js
const connectDB = require('../../../lib/db').default;
const Order = require('../../../models/Order').default;
const crypto = require('crypto');
module.exports = async (req, res) => {
  await connectDB();
  if (req.method !== 'POST') return res.status(405).end();
  const { order_id, payment_id, signature, orderDBId } = req.body;
  const shasum = crypto.createHmac('sha256', process.env.RAZORPAY_KEY_SECRET);
  shasum.update(`${order_id}|${payment_id}`);
  const digest = shasum.digest('hex');
  if (digest === signature) {
    await Order.findByIdAndUpdate(orderDBId, { razorpayOrderId: order_id, razorpayPaymentId: payment_id, razorpaySignature: signature, status: 'paid' });
    res.json({ success: true });
  } else {
    res.status(400).json({ success: false });
  }
};

module.exports.default = module.exports;
