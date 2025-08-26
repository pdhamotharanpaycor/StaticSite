# TechNova - AI-Powered Software Solutions Website

A modern, responsive website built with React and TailwindCSS for a software services company specializing in AI/ML solutions.

## Features

- **Responsive Design**: Fully responsive across all devices
- **AI/ML Theme**: Modern neural network inspired design with gradients and animations
- **Dynamic Content**: All content loaded from JSON files for easy updates
- **Smooth Animations**: Framer Motion and AOS animations
- **Modern UI**: TailwindCSS with custom AI-themed styling
- **Performance Optimized**: Fast loading and smooth interactions

## Tech Stack

- **Frontend**: React 18
- **Styling**: TailwindCSS with custom AI theme
- **Animations**: Framer Motion, AOS (Animate on Scroll)
- **Routing**: React Router
- **Icons**: FontAwesome
- **Fonts**: Inter (Google Fonts)

## Pages

1. **Home** - Hero section with company introduction and key features
2. **About** - Company story, mission, vision, and values
3. **Services** - Detailed service offerings with interactive elements
4. **Clients** - Client testimonials and success stories
5. **Contact** - Contact form, company information, and map

## Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm start
```

3. Build for production:
```bash
npm run build
```

## Project Structure

```
src/
├── components/
│   ├── Navbar.js
│   └── Footer.js
├── pages/
│   ├── Home.js
│   ├── About.js
│   ├── Services.js
│   ├── Clients.js
│   └── Contact.js
├── data/
│   ├── home.json
│   ├── about.json
│   ├── services.json
│   ├── clients.json
│   └── contact.json
├── styles/
│   └── index.css
├── App.js
└── index.js
```

## Content Management

All page content is stored in JSON files in the `src/data/` directory. To update content:

1. Navigate to the appropriate JSON file
2. Edit the content
3. Save the file
4. The changes will be reflected automatically

## Customization

### Colors
The color scheme can be customized in `tailwind.config.js`:
- Primary colors (blues/purples)
- Accent colors (magentas/purples)  
- Neural colors (cyans/blues)

### Animations
Animations can be customized in `src/styles/index.css` and individual components.

### Content
Update JSON files in `src/data/` to change page content without touching code.

## Deployment

This is a static React application that can be deployed to:
- Vercel
- Netlify
- GitHub Pages
- AWS S3 + CloudFront
- Any static hosting service

## Performance Features

- Code splitting with React.lazy
- Image optimization
- Smooth scrolling
- Optimized animations
- Minimal bundle size

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

MIT License - feel free to use this project as a template for your own websites.
