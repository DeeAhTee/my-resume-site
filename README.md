# Bruce Truong - Site Reliability Engineer Portfolio

A professional, production-ready portfolio website showcasing Site Reliability Engineering expertise and full-stack development skills. Built with modern technologies and best practices, demonstrating the quality and attention to detail that goes into enterprise infrastructure.

🌐 **Live Site**: [brucetruong.com](https://brucetruong.com)
🚀 **SRE Professional** • **60B+ Documents Migrated** • **Production Systems Expert**

## 🎯 Overview

This is a **frontend-only** portfolio website featuring:
- Professional experience and project showcase
- Interactive resume and contact information
- Clean, modern design with dark mode support
- SEO-optimized with structured data
- Performance-optimized (90+ Lighthouse scores)

## 📋 Prerequisites

- **Node.js** (version 18 or higher) - [Download here](https://nodejs.org/)
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
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
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
│   ├── Testimonials.tsx          # Client testimonials display
│   ├── TestimonialCarousel.tsx   # Carousel for multiple testimonials
│   ├── MileageStatsWidget.tsx    # FleetReq live stats widget
│   ├── AnimatedCounter.tsx       # Animated number counter
│   ├── Search.tsx                # Site-wide search functionality
│   ├── Analytics.tsx             # Google Analytics integration
│   └── navigation.tsx            # Main navigation component
├── about/              # About page
├── contact/            # Contact page with form
├── projects/           # Projects showcase
├── resume/             # Resume page with PDF download
├── layout.tsx          # Root layout with navigation
├── page.tsx            # Homepage
├── theme-provider.tsx  # Dark mode theme provider
├── theme-toggle.tsx    # Dark mode toggle button
└── globals.css         # Global styles and Tailwind
public/
├── Bruce_Truong_Resume.pdf       # Static PDF resume file
└── images/             # Static images and photos
```

## 🛠️ Technology Stack

### **Frontend**
- **Next.js 15** - React framework with App Router and Server Components
- **TypeScript** - Full type safety across the application
- **Tailwind CSS** - Utility-first CSS framework
- **React 19** - Latest React with improved performance

### **Analytics & Monitoring**
- **Google Analytics 4** - Privacy-compliant user analytics
- **Vercel Analytics** - Built-in performance monitoring

### **Deployment**
- **Vercel** - Enterprise hosting with automatic deployments
- **GitHub** - Source control with automatic CI/CD

## 🔧 Configuration

### Environment Variables

Create a `.env.local` file in the root directory (optional):

```bash
# Google Analytics (optional)
NEXT_PUBLIC_GA_ID=G-YOUR-GA-ID-HERE
```

### Contact Form Setup

The contact form uses [Formspree](https://formspree.io) for form handling:

1. Create a Formspree account at [formspree.io](https://formspree.io)
2. Create a new form and get your form endpoint
3. Update the endpoint in `app/components/ContactForm.tsx`

### PDF Resume

To update the resume:
1. Create your resume as PDF
2. Export with filename `Bruce_Truong_Resume.pdf`
3. Replace the file in `/public/Bruce_Truong_Resume.pdf`

## 📱 Key Features

### Professional Portfolio
- **Responsive Design** - Works perfectly on all devices
- **Dark Mode** - System-aware theme switching
- **SEO Optimized** - Structured data and meta tags
- **Performance** - Image optimization and code splitting

### Interactive Components
- **Contact Form** - Real-time validation and submission
- **PDF Download** - Direct resume download
- **Project Showcase** - Detailed project information
- **Live Stats** - FleetReq platform statistics widget
- **Photography Gallery** - Lightbox photo viewer
- **Search** - Site-wide search functionality

### SRE Skills Demonstration
- **Clean Architecture** - Frontend-only with clear separation
- **Performance Optimization** - 90+ Lighthouse scores
- **Security** - HTTPS, CSP headers, secure defaults
- **Monitoring** - Analytics and performance tracking
- **CI/CD** - Automated deployment pipeline

## 🚀 Deployment

### Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server locally
npm run lint     # Run ESLint for code quality
npm run analyze  # Analyze bundle size
```

### Deployment Process

The site deploys automatically to Vercel:

1. **Push to GitHub** - Commit changes to main branch
2. **Automatic Build** - Vercel builds automatically
3. **Live in Minutes** - Changes appear on brucetruong.com

## 🔧 Development Notes

### Performance Optimization
- Image optimization with Next.js Image component
- Code splitting for optimal load times
- Static site generation where possible
- Minimal JavaScript bundle size

### Accessibility
- Semantic HTML structure
- ARIA labels for screen readers
- Keyboard navigation support
- Color contrast compliance

### Best Practices
- TypeScript for type safety
- ESLint for code quality
- Component-based architecture
- Responsive design patterns

## 🎯 Site Structure

### Pages
- **Home** (`/`) - Hero section with overview
- **About** (`/about`) - Professional background and story
- **Resume** (`/resume`) - Detailed experience and skills
- **Projects** (`/projects`) - Portfolio of work
- **Contact** (`/contact`) - Contact form and information

### Featured Projects
- **FleetReq** - Fleet management SaaS platform (links to external demo)
- **Portfolio Website** - This site (with "current site" indicator)
- **MongoDB Migration** - 60B+ documents migration project
- **DataDog Observability** - Monitoring platform deployment
- Additional professional work examples

## 📞 Contact

- **🌐 Portfolio**: [brucetruong.com](https://brucetruong.com)
- **✉️ Email**: careers@brucetruong.com
- **💼 LinkedIn**: [linkedin.com/in/brucentruong](https://linkedin.com/in/brucentruong)
- **⚡ GitHub**: [github.com/DeeAhTee](https://github.com/DeeAhTee)

---

**Site Reliability Engineer** • **Next.js 15** • **TypeScript** • **Production-Ready Architecture**
*Built with the same engineering excellence applied to enterprise infrastructure*
