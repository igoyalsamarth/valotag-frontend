export const endpoint = process.env.NODE_ENV === 'production' ? `https://${process.env.VERCEL_URL}/api` :'http://localhost:3000/api';
