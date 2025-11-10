import Head from 'next/head';
import { verifyToken } from '../../../lib/auth';
import BlogForm from '../../../components/BlogForm';
import AdminLayout from '../../../components/AdminLayout';

export default function NewBlogPost({ user }) {
  return (
    <AdminLayout user={user}>
      <Head>
        <title>New Blog Post | Minukki Admin</title>
      </Head>
      <BlogForm user={user} />
    </AdminLayout>
  );
}

export async function getServerSideProps({ req }) {
  try {
    const user = await verifyToken(req);
    if (!user || !user.isAdmin) {
      return {
        redirect: {
          destination: '/admin/login',
          permanent: false,
        },
      };
    }
    return { props: { user } };
  } catch (err) {
    return {
      redirect: {
        destination: '/admin/login',
        permanent: false,
      },
    };
  }
}