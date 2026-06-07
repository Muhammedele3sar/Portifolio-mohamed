# 🚀 Mohamed Nor - Developer Portfolio

An incredible React portfolio with stunning animations and modern design!

## ✨ Features

- **Particle Background**: Custom animated particle system
- **Typewriter Effects**: Dynamic text animations
- **3D Card Hover Effects**: Interactive project cards
- **Responsive Design**: Perfect on all devices
- **Modern Tech Stack**: React 18 + TypeScript + Vite

## 🎯 How to Customize

### 1. Add Your Profile Picture
Replace the profile image in `src/components/About.tsx`:
```tsx
<img 
  src="YOUR_IMAGE_URL_HERE" 
  alt="Your Name" 
  className="profile-photo"
/>
```

### 2. Update Project Images
In `src/components/Projects.tsx`, replace the image URLs:
```tsx
image: 'YOUR_PROJECT_IMAGE_URL',
```

### 3. Personal Information
Update your details in:
- `src/components/Hero.tsx` - Name and titles
- `src/components/About.tsx` - Bio and experience
- `src/components/Contact.tsx` - Contact information

## 🚀 Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## 📁 Project Structure

```
src/
├── components/
│   ├── Hero.tsx          # Landing section with typewriter
│   ├── About.tsx         # About section with profile
│   ├── Skills.tsx        # Interactive skills showcase
│   ├── Projects.tsx      # Project gallery with images
│   ├── Contact.tsx       # Contact form and info
│   ├── Navigation.tsx    # Smooth scroll navigation
│   └── ParticleBackground.tsx # Animated background
├── App.tsx
└── main.tsx
```

## 🎨 Color Scheme

- Primary: `#0a0a0a` (Dark background)
- Accent: `#00ff88` (Neon green)
- Secondary: `#0066ff` (Blue)

## 📱 Responsive Breakpoints

- Desktop: 1200px+
- Tablet: 768px - 1199px
- Mobile: < 768px

## 🔧 Technologies Used

- React 18
- TypeScript
- Vite
- CSS3 with Custom Properties
- Framer Motion (for animations)

## 📄 License

MIT License - Feel free to use this portfolio template!
