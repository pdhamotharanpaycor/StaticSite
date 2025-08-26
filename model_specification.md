## 🌐 Website Specification Document: Software Services Company

### 🔷 General Overview
Build a **static, responsive, rich-interface website** for a new software services company. The site should reflect innovation, professionalism, and modern design aesthetics, with a theme inspired by **AI and Machine Learning**.

All content must be **loaded dynamically from JSON files**, with one JSON file per page. This allows easy updates without modifying the codebase.

---

### 🧩 Pages & Features

#### 1. **Home Page**
- Dynamic hero section with animated background (AI/ML inspired visuals).
- Tagline and brief intro about the company.
- Scroll-triggered animations for content reveal.
- Navigation bar with links to all sections.
- **Content Source**: `home.json`

#### 2. **About Us**
- Sections:
  - **Who We Are** (use modern startup terminology like *"Tech Innovators"*, *"Digital Transformation Catalysts"*)
  - **Our Goal**
  - **Vision & Mission**
- Use cards or timeline layout for storytelling.
- **Content Source**: `about.json`

#### 3. **Services**
- List of services with icons and short descriptions:
  - Software Development from Scratch
  - Legacy App Migration to Cloud
  - App Maintenance
  - Client Implementation & Experience Support
- Use interactive cards or accordion layout.
- **Content Source**: `services.json`

#### 4. **Clients**
- Grid layout of client logos.
- Optional hover effect to show brief testimonials or project highlights.
- **Content Source**: `clients.json`

#### 5. **Contact Page**
- Company address with embedded map (Google Maps or OpenStreetMap).
- Contact form (Name, Email, Message).
- Social media links.
- Phone and email info.
- **Content Source**: `contact.json`

---

### 🖥️ Technical Requirements

- **Frontend Framework**: React (latest version)
- **Styling**: TailwindCSS or CSS Modules for modern, scalable styling
- **HTML**: Semantic HTML5
- **Responsiveness**: Fully responsive for Desktop, Laptop, Tablet, and Mobile
- **Animations**: Use libraries like Framer Motion or AOS (Animate on Scroll)
- **Theme**: AI/ML inspired (neural network visuals, gradient overlays, futuristic fonts)
- **Deployment**: Static hosting (e.g., GitHub Pages, Vercel, Netlify)

---

### 📁 JSON Content Structure

Each page will have a corresponding JSON file structured like this:

#### Example: `about.json`
```json
{
  "whoWeAre": "We are Tech Innovators focused on transforming businesses through software.",
  "goal": "To deliver scalable, secure, and intelligent software solutions.",
  "vision": "Empowering digital transformation through cutting-edge technology.",
  "mission": "To be the trusted partner for software innovation."
}
```

#### Example: `services.json`
```json
{
  "services": [
    {
      "title": "Software Development",
      "description": "Building custom software solutions from scratch."
    },
    {
      "title": "Cloud Migration",
      "description": "Modernizing legacy apps to cloud-native platforms."
    },
    {
      "title": "App Maintenance",
      "description": "Ensuring stability and performance of existing applications."
    },
    {
      "title": "Client Implementation",
      "description": "Supporting seamless onboarding and integration."
    }
  ]
}
```

---

### 🎨 Design Guidelines

- **Color Palette**: Futuristic tones (e.g., deep blue, neon purple, gradient overlays)
- **Fonts**: Modern sans-serif fonts (e.g., Inter, Roboto, or custom AI-themed fonts)
- **Layout**: Clean, modular, scroll-based rendering
- **Icons**: Use FontAwesome or custom SVGs
