import connectDB from '../../../lib/db';
import BlogPost from '../../../models/BlogPost';
import { getUserFromReq } from '../_utils';

export default async function handler(req, res) {
  await connectDB();
  const { slug } = req.query;

  switch (req.method) {
    case 'GET':
      try {
        const post = await BlogPost.findOne({ slug }).populate('author', 'name');
        if (!post) {
          return res.status(404).json({ message: 'Post not found' });
        }
        res.json(post);
      } catch (error) {
        res.status(500).json({ message: 'Error fetching blog post' });
      }
      break;

    case 'PUT':
      try {
        const user = await getUserFromReq(req);
        if (!user || user.role !== 'admin') {
          return res.status(401).json({ message: 'Unauthorized' });
        }

        const post = await BlogPost.findOne({ slug });
        if (!post) {
          return res.status(404).json({ message: 'Post not found' });
        }

        Object.assign(post, req.body);
        await post.save();
        res.json(post);
      } catch (error) {
        res.status(500).json({ message: 'Error updating blog post' });
      }
      break;

    case 'DELETE':
      try {
        const user = await getUserFromReq(req);
        if (!user || user.role !== 'admin') {
          return res.status(401).json({ message: 'Unauthorized' });
        }

        const post = await BlogPost.findOneAndDelete({ slug });
        if (!post) {
          return res.status(404).json({ message: 'Post not found' });
        }
        res.json({ message: 'Post deleted successfully' });
      } catch (error) {
        res.status(500).json({ message: 'Error deleting blog post' });
      }
      break;

    default:
      res.status(405).end();
  }
}