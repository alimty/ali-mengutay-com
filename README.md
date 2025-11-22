# Ali Mengütay Personal Website

A personal website and medium to connect with others. A personal project showcasing work, thoughts, and contact information.

## 🚀 Live Site

- **Production**: [https://www.ali.mengutay.com](https://www.ali.mengutay.com)
- **Staging**: [ali-mengutay-staging-preview](https://ali-mengutay-com-git-staging-alimtys-projects.vercel.app/)

## 📜 Scripts

```bash
npm run dev        # Start development server
npm run build      # Build for production
npm start          # Start production server
npm run lint       # Run ESLint
npm run stop       # Kill port 3000
npm run restart    # Restart dev server
```

## 📁 Project Structure

```
app/
├── about/              # About page
├── api/contact/        # Contact form API
├── blog/               # Blog page
├── components/         # Reusable components
├── contact/            # Contact page
├── lib/
│   ├── telegram.ts    # Telegram messaging
│   └── rateLimit.ts   # Rate limiting
├── projects/           # Projects page
│   ├── note/           # Note taking app
│   │   ├── components/ # Markdown editor
│   │   ├── hooks/      # Local storage hook
│   │   ├── layout.tsx  # Note app layout
│   │   ├── page.tsx    # Note app page
│   │   └── styles.css  # Note app styles
│   └── page.tsx        # Projects listing
├── resume/             # Resume page
├── shop/               # Shop page
├── styles/             # Global styles
│   ├── base.css        # Base/reset styles
│   ├── components.css  # Component styles
│   ├── utilities.css   # Utility classes
│   └── variables.css   # CSS variables
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
# Then edit .env.local with your Telegram credentials
# 4. Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

### Environment Setup

Create `.env.local` file:

```bash
TELEGRAM_BOT_TOKEN=your-bot-token
TELEGRAM_CHAT_ID=your-chat-id
```

**Get Telegram Bot Token and Chat ID:** Search for `@BotFather` on Telegram, create a bot, and get your chat ID from the API.

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
