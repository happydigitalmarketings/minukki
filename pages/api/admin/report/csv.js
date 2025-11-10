// pages/api/admin/report/csv.js
const connectDB = require('../../../../lib/db').default;
const Order = require('../../../../models/Order').default;
const { getUserFromReq } = require('../../../api/_utils');
const { Parser } = require('json2csv');
module.exports = async (req, res) => {
  await connectDB();
  const user = await getUserFromReq(req);
  if (!user || user.role !== 'admin') return res.status(401).json({ message: 'Unauthorized' });
  const { from, to } = req.query;
  const fromDate = from ? new Date(from) : new Date(0);
  const toDate = to ? new Date(to) : new Date();
  const orders = await Order.find({ createdAt: { $gte: fromDate, $lte: toDate } }).populate('items.product');
  const rows = orders.map(o => ({
    id: o._id.toString(),
    createdAt: o.createdAt.toISOString(),
    total: o.total,
    status: o.status,
    items: o.items.map(i => `${i.product?.title || i.product} (x${i.qty})`).join('; ')
  }));
  const parser = new Parser();
  const csv = parser.parse(rows);
  res.setHeader('Content-disposition', `attachment; filename=orders_${from || 'start'}_${to || 'end'}.csv`);
  res.setHeader('Content-Type', 'text/csv');
  res.send(csv);
};

module.exports.default = module.exports;
