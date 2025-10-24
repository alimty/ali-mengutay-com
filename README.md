# Ali Mengütay Personal Website

A modern, responsive personal website built with Next.js 14, TypeScript, and Tailwind CSS.

## 🚀 Live Site

- **Production**: [https://www.ali.mengutay.com](https://www.ali.mengutay.com)
- **Staging**: [ali-mengutay-staging.vercel.app](https://ali-mengutay-q8clohdsz-alimtys-projects.vercel.app)

## 📜 Scripts

```bash
npm run dev      # Development server
npm run build    # Production build
npm start        # Production server
npm run lint     # ESLint check
npm run stop     # Kill port 3000
npm run restart  # Restart dev server
```

## 📁 Project Structure

```
app/
├── about/              # About page
├── api/send-email/     # Contact form API
├── blog/               # Blog page
├── components/         # Reusable components
├── contact/            # Contact page
├── lib/mail.ts         # Email utility
├── projects/           # Projects page
├── resume/             # Resume page
├── shop/               # Shop page
├── layout.tsx          # Root layout
└── page.tsx            # Home page

public/images/          # Static images
```

### Prerequisites
- Node.js v22.13.0 or higher
- npm v10.0.0 or higher
- nvm (recommended)

### Quick Start

```bash
# 1. Switch to Node 22
nvm use
# 2. Install dependencies
npm install
# 3. Create environment file
cp .env.local
# Then edit .env.local with your Gmail credentials
# 4. Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

### Environment Setup

Create `.env.local` file:

```bash
GMAIL_USER=your-email@gmail.com
GMAIL_APP_PASSWORD=your-app-password
```

**Get Gmail App Password:**
1. Go to [Google Account Security](https://myaccount.google.com/security)
2. Enable 2-Step Verification
3. Go to [App Passwords](https://myaccount.google.com/apppasswords) 
4. Generate password for "Mail"
5. Copy 16-character code to `.env.local`

**Note**: Contact form won't work without these credentials.



## 📄 Pages

- **Home** (`/`) - Landing page with navigation cards
- **About** (`/about`) - Personal bio and family
- **Resume** (`/resume`) - Experience and skills
- **Projects** (`/projects`) - Portfolio showcase
- **Blog** (`/blog`) - Articles
- **Shop** (`/shop`) - Digital products
- **Contact** (`/contact`) - Contact form

```bash
rm -rf node_modules package-lock.json
npm install
```

### Wrong Node version
```bash
nvm use 22.13.0
```

## 🔄 Development Workflow

```bash
# Deploy to production
git checkout main
git merge staging
git push origin main
```

## 👨‍💻 Author

**Ali Mengütay**
- Software Engineer at [Pix4D](https://www.pix4d.com)
- Former Mechanical Engineer
- Website: [https://www.ali.mengutay.com](https://www.ali.mengutay.com)
