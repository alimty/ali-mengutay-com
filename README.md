# Ali Mengütay Personal Website

A modern, responsive personal website built with Next.js and Tailwind CSS.

## Live Demo

- Staging: [ali-mengutay-staging.vercel.app](https://ali-mengutay-q8clohdsz-alimtys-projects.vercel.app)
- Production: [Coming soon]

## Tech Stack

- Next.js 14
- TypeScript
- Tailwind CSS
- Vercel (Deployment)

## Features

- Responsive design with bento grid layout
- Dark mode optimized
- Dynamic image loading with Next.js Image
- Custom icon components
- Modular component architecture

## Pages

- 🏠 Home
- 👤 About
- 📝 Resume
- 💼 Projects
- 📚 Blog
- 🛍️ Shop
- 📧 Contact

## Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## Deployment

The site is deployed on Vercel with automatic deployments:

- Push to `main` branch deploys to production
- Push to other branches creates preview deployments

### Deployment Steps

```bash
# 1. Switch to main branch
git checkout main

# 2. Merge staging changes
git merge staging

# 3. Push to production
git push origin main

# 4. Deploy on Vercel
vercel --prod
```

### Quick Deploy

```bash
# Deploy to staging
vercel

# Deploy to production
vercel --prod
```

## Project Structure

```
├── app/
│   ├── components/
│   │   ├── Card.tsx
│   │   ├── PageLayout.tsx
│   │   └── icons/
│   ├── about/
│   ├── blog/
│   ├── contact/
│   ├── projects/
│   ├── resume/
│   ├── shop/
│   └── page.tsx
├── public/
│   └── images/
└── package.json
```

## Author

Ali Mengütay
- Software Developer
- Former Mechanical Engineer
