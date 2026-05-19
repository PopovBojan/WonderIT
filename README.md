# WonderIT Website

Modern company website built with Next.js, focused on performance, scalability, SEO, and clean user experience.

---

## ✨ Overview

This project is a custom-built company website for **WonderIT**, developed using modern web technologies.

The website includes:

* Responsive marketing pages
* Service showcase
* Team/company information
* Contact forms
* Blog integration powered by WordPress
* SEO optimization
* Fast page loading
* Mobile-first design
* Modern UI/UX animations

The frontend is built with **Next.js** while **WordPress** is used as a headless CMS for blogs and content management.

---

## 🛠 Tech Stack

### Frontend

* Next.js
* React
* TypeScript
* Tailwind CSS

### CMS / Backend

* WordPress
* WPGraphQL
* Advanced Custom Fields (ACF)

### Deployment

* Vercel
* Cloudways (WordPress hosting)

---

## 🚀 Features

### ⚡ Performance Focused

* Static generation
* Image optimization
* Code splitting
* Lazy loading
* Optimized fonts
* Fast Lighthouse scores

### 📱 Fully Responsive

Designed for:

* Desktop
* Tablet
* Mobile

### 🔍 SEO Ready

* Dynamic metadata
* Open Graph support
* Sitemap generation
* Robots.txt
* Structured data
* Optimized semantic HTML

### 📝 Headless WordPress Blog

WordPress is used only for:

* Blog posts
* Categories
* Contact form handling

All frontend rendering happens in Next.js.

### 🎨 Modern UI

* Smooth animations
* Interactive sections
* Clean layouts

---

## 📂 Project Structure

```bash
src/
├── app/
│   ├── about/
│   ├── work/
│   ├── blog/
│   └── contact/

├── lib/
│   └── wordpress/

```

---

## ⚙️ Getting Started

### 1. Clone Repository

```bash
git clone https://github.com/yourusername/wonderit-website.git
```

### 2. Navigate Into Project

```bash
cd wonderit-website
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Configure Environment Variables

Create a `.env.local` file:

```env
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
NEXT_PUBLIC_WORDPRESS_API_URL=https://yourwordpresssite.com/graphql
```

### 5. Run Development Server

```bash
npm run dev
```

Open:

```bash
http://localhost:3000
```

---

## 🔌 WordPress Setup

Required plugins:

* WPGraphQL
* Advanced Custom Fields
* WPGraphQL for ACF
* SEO Plugin (optional)

GraphQL endpoint:

```bash
https://yourwordpresssite.com/graphql
```

---

## 📦 Available Scripts

```bash
npm run dev
```

Start development server.

```bash
npm run build
```

Create production build.

```bash
npm run start
```

Run production server.

```bash
npm run lint
```

Run ESLint.

---

## 🌍 Deployment

### Frontend

Deploy the Next.js app using:

* Vercel
* Netlify
* Docker
* VPS

Recommended:

```bash
Vercel
```

### WordPress CMS

Host WordPress separately using:

* Cloudways
* DigitalOcean
* Vultr
* AWS

---

## 📈 Performance Goals

Target Lighthouse scores:

| Category       | Goal |
| -------------- | ---- |
| Performance    | 95+  |
| Accessibility  | 95+  |
| Best Practices | 100  |
| SEO            | 100  |

---

## 🔒 Security

* Environment variables protected
* API keys hidden server-side
* Rate limiting support
* Spam protection ready
* Secure form handling

---

## 🧩 Future Improvements

Planned additions:

* Multi-language support
* AI-powered features
* Client dashboard
* CMS live preview
* Analytics dashboard
* Advanced animations
* Blog search
* Newsletter integration

---

## 👨‍💻 Development Philosophy

This project focuses on:

* Clean architecture
* Reusable components
* Maintainable code
* Scalable structure
* Excellent performance
* Great user experience

---

## 📬 Contact

### WonderIT

Custom software development company focused on:

* Web applications
* Mobile applications
* SaaS platforms
* Automation systems
* AI-enhanced solutions

---

## 📄 License

This project is private and proprietary.

All rights reserved © WonderIT.
