// pages/api/_utils.js
import cookie from 'cookie';
import { verifyToken } from '../../lib/auth';

export async function getUserFromReq(req) {
  const cookies = req.headers.cookie ? cookie.parse(req.headers.cookie || '') : {};
  const token = cookies.token;
  if (!token) return null;
  const user = await verifyToken(token);
  return user;
}
