# Next.js E‑Commerce (Scaffold)

This scaffold contains backend API routes, Mongoose models, lib helpers, admin pages (Tailwind), frontend pages (products, product detail, cart, checkout), and a seed script.

## Quick start (local)
1. Download and extract the project ZIP.
2. Create a `.env.local` file with at least the following:

MONGODB_URI=your_mongo_uri
JWT_SECRET=your_jwt_secret
RAZORPAY_KEY_ID=rzp_test_xxx
RAZORPAY_KEY_SECRET=rzp_test_secret
NEXT_PUBLIC_RAZORPAY_KEY_ID=rzp_test_xxx
NEXT_PUBLIC_SITE_URL=http://localhost:3000

Optionally for images:
CLOUDINARY_CLOUD_NAME=...
CLOUDINARY_API_KEY=...
CLOUDINARY_API_SECRET=...

3. Install dependencies:
   npm install
   npm install -D tailwindcss postcss autoprefixer
   npx tailwindcss init -p

4. Seed sample data: `npm run seed`
5. Start dev server: `npm run dev`
6. Visit http://localhost:3000 and http://localhost:3000/admin/login

## Docker (self-host)
Build:
  docker build -t next-ecommerce .
Run:
  docker run -e MONGODB_URI="your_mongo_uri" -e JWT_SECRET="secret" -p 3000:3000 next-ecommerce

## Push to GitHub (manual steps)
1. git init
2. git add .
3. git commit -m "Initial scaffold"
4. Create a repo on GitHub and add remote:
   git remote add origin git@github.com:YOUR_USERNAME/YOUR_REPO.git
5. git push -u origin main

Note: I cannot push to your GitHub for you. If you want, I can provide a shell script `push-to-github.sh` that runs the above commands; you'll need to run it locally with correct remote URL and SSH access.
