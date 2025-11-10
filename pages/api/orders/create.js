// pages/api/orders/create.js
import connectDB from '../../../lib/db';
import Order from '../../../models/Order';
import Product from '../../../models/Product';

export default async function handler(req, res) {
  try {
    await connectDB();

    if (req.method !== 'POST') {
      return res.status(405).json({ message: 'Method not allowed' });
    }

    const { items, shippingAddress, total, paymentMethod } = req.body;

    // Validate required fields
    if (!items?.length) {
      return res.status(400).json({ message: 'Items are required' });
    }
    if (!shippingAddress) {
      return res.status(400).json({ message: 'Shipping address is required' });
    }
    if (!total) {
      return res.status(400).json({ message: 'Total is required' });
    }
    if (!paymentMethod) {
      return res.status(400).json({ message: 'Payment method is required' });
    }

    // Ensure Order model is properly imported
    if (!Order || !Order.create) {
      throw new Error('Order model not properly initialized');
    }

    // Create the order
    const order = await Order.create({
      items,
      shippingAddress,
      total,
      paymentMethod,
      status: 'pending'
    });

    // Return the order ID
    res.status(201).json({ orderId: order._id });
  } catch (error) {
    console.error('Order creation error:', error);
    res.status(500).json({ message: 'Error creating order' });
  }
}
