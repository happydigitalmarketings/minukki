// pages/api/products/[slug].js
const connectDB = require('../../../lib/db').default;
const Product = require('../../../models/Product').default;
const { getUserFromReq } = require('../_utils');

const handler = async (req, res) => {
  await connectDB();
  const { slug } = req.query;

  if (req.method === 'GET') {
    const product = await Product.findOne({ slug });
    if (!product) return res.status(404).end();
    res.json(product);
    return;
  }

  const user = await getUserFromReq(req);
  if (!user || user.role !== 'admin') return res.status(401).json({ message: 'Unauthorized' });

  if (req.method === 'PUT') {
    const updated = await Product.findOneAndUpdate({ slug }, req.body, { new: true });
    res.json(updated);
    return;
  }

  if (req.method === 'DELETE') {
    await Product.findOneAndDelete({ slug });
    res.json({ success: true });
    return;
  }

  res.status(405).end();
};

module.exports = handler;
module.exports.default = handler;