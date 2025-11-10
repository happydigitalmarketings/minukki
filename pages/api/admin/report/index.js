// pages/api/admin/report/index.js
const connectDB = require('../../../../lib/db').default;
const Order = require('../../../../models/Order').default;
const { getUserFromReq } = require('../../../api/_utils');
module.exports = async (req, res) => {
  await connectDB();
  const user = await getUserFromReq(req);
  if (!user || user.role !== 'admin') return res.status(401).json({ message: 'Unauthorized' });
  const { from, to } = req.query;
  const fromDate = from ? new Date(from) : new Date(0);
  const toDate = to ? new Date(to) : new Date();
  const orders = await Order.find({ createdAt: { $gte: fromDate, $lte: toDate } });
  const totalSales = orders.reduce((s, o) => s + (o.total || 0), 0);
  res.json({ totalOrders: orders.length, totalSales, orders });
};

module.exports.default = module.exports;
