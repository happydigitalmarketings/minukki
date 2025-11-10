import connectDB from '../../../lib/db';
import BlogPost from '../../../models/BlogPost';
import { getUserFromReq } from '../_utils';

export default async function handler(req, res) {
  await connectDB();

  switch (req.method) {
    case 'GET':
      try {
        const { page = 1, limit = 10, tag } = req.query;
        const query = tag ? { tags: tag } : {};
        const posts = await BlogPost.find(query)
          .populate('author', 'name')
          .sort({ publishedAt: -1 })
          .skip((page - 1) * limit)
          .limit(Number(limit));
        res.json(posts);
      } catch (error) {
        res.status(500).json({ message: 'Error fetching blog posts' });
      }
      break;

    case 'POST':
      try {
        const user = await getUserFromReq(req);
        if (!user || user.role !== 'admin') {
          return res.status(401).json({ message: 'Unauthorized' });
        }

        const postData = {
          ...req.body,
          author: user._id,
        };

        const post = await BlogPost.create(postData);
        res.status(201).json(post);
      } catch (error) {
        res.status(500).json({ message: 'Error creating blog post' });
      }
      break;

    default:
      res.status(405).end();
  }
}