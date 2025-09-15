# Bruce Truong - Resume Website

A modern, responsive resume website built with Next.js, showcasing my experience as a Site Reliability Engineer. Features dark/light mode, PDF resume download, Formspree contact integration, and privacy-focused design.

🌐 **Live Site**: [brucetruong.com](https://brucetruong.com)

## ✨ Features

- **Responsive Design** - Optimized for mobile, tablet, and desktop
- **Dark/Light Mode** - System-aware theme switching with manual toggle
- **PDF Resume Download** - Static PDF resume download functionality
- **Contact Form** - Formspree integration with client-side validation
- **Privacy-Focused** - No phone numbers on public pages, strategic information disclosure
- **SEO Optimized** - Structured data, meta tags, and sitemap
- **Performance Focused** - Loading states, image optimization, and caching
- **Photography Gallery** - Lightbox gallery with Instagram integration

## 📋 Prerequisites

- **Node.js** (version 18 or higher) - [Download here](https://nodejs.org/)
  - This includes npm automatically
- **Git** - For cloning the repository

## 🚀 Quick Start

1. **Clone the repository**
   ```bash
   git clone https://github.com/DeeAhTee/my-resume-site.git
   cd my-resume-site
   ```

2. **Install dependencies**
   ```bash
   npm install
   # This installs Next.js, Tailwind CSS, TypeScript, and all other dependencies
   ```

3. **Set up environment variables**
   ```bash
   # Create .env.local file (see Configuration section for details)
   touch .env.local
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open in browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
app/
├── components/          # Reusable UI components
│   ├── BackgroundAnimation.tsx    # Animated background
│   ├── ContactForm.tsx           # Formspree contact form
│   ├── HeroSection.tsx           # Home page hero
│   ├── PDFDownload.tsx           # PDF resume download
│   ├── PhotographyGallery.tsx    # Photo gallery with lightbox
│   └── LoadingStates.tsx         # Loading components
├── about/              # About page with personal stories
├── contact/            # Contact page with Formspree form
├── projects/           # Projects showcase
├── resume/             # Resume page with PDF download
└── globals.css         # Global styles and Tailwind
public/
├── Bruce_Truong_Resume.pdf       # Static PDF resume file
├── images/             # Static images and photos
└── icons/              # Favicon and app icons
```

## 🛠️ Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS with custom components
- **TypeScript**: Full type safety
- **Forms**: Formspree integration for contact form
- **File Serving**: Static PDF serving
- **Deployment**: Vercel (auto-deploy from GitHub)
- **Version Control**: Git with GitHub

## 🔧 Configuration

### Contact Form Setup (Formspree)

The contact form uses [Formspree](https://formspree.io) for form handling:

1. **Create Formspree Account**
   - Go to [https://formspree.io](https://formspree.io)
   - Create a new form for your contact page
   - Get your form endpoint (format: `https://formspree.io/f/YOUR_FORM_ID`)

2. **Update Form Endpoint**
   - Edit `app/components/ContactForm.tsx`
   - Replace the fetch URL with your Formspree endpoint

3. **Form Features**
   - ✅ Client-side validation
   - ✅ Spam protection
   - ✅ Email notifications
   - ✅ Success/error handling

### PDF Resume Setup

To customize the PDF resume:
1. Create your professional resume using Word, Google Docs, or your preferred tool
2. Export as PDF with the filename `Bruce_Truong_Resume.pdf`
3. Replace the existing file in `/public/Bruce_Truong_Resume.pdf`
4. The download button will automatically serve your new PDF

## 📱 Features Overview

### PDF Resume Download
- Static PDF file serving
- Professional resume format
- Direct download functionality
- Easy to update - simply replace `/public/Bruce_Truong_Resume.pdf`

### Contact Form (Formspree Integration)
- Real form submissions (no mailto fallbacks)
- Client-side validation with TypeScript
- Loading states and success/error feedback
- Spam protection and email notifications
- Mobile-friendly design

### Photography Gallery
- Lightbox photo viewer with navigation
- Instagram integration and links
- Responsive grid layout
- Touch/swipe support for mobile

### Privacy-Focused Design
- No phone numbers on public pages
- Strategic information disclosure
- Clean, professional presentation
- Reduced spam/robocall exposure

### Performance & UX
- Image optimization with Next.js
- Loading skeletons and states
- Dark/light mode with system detection
- Responsive design for all devices

## 🚀 Deployment

The site deploys automatically to Vercel when pushing to the main branch via GitHub integration.

### Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server locally
npm run lint     # Run ESLint for code quality
```

### Deployment Process

1. **Push to GitHub** - Commit and push changes to main branch
2. **Automatic Build** - Vercel detects changes and builds automatically
3. **Live in Minutes** - Changes appear on brucetruong.com within 2-3 minutes

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

This is a personal resume website, but feel free to fork it for your own use or submit improvements via pull requests.

## 📞 Contact

- **Website**: [brucetruong.com](https://brucetruong.com)
- **Email**: careers@brucetruong.com
- **LinkedIn**: [linkedin.com/in/brucetruong](https://linkedin.com/in/brucetruong)
- **GitHub**: [github.com/DeeAhTee](https://github.com/DeeAhTee)

---

Built with ❤️ using Next.js 15, TypeScript, and Tailwind CSS • Deployed on Vercel
