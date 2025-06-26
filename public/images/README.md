# Images Folder Structure

This folder contains all static images used in the Elevate Academy website.

## 📁 Folder Organization

### `/categories/`
- Images for course category cards
- Business, English, Finance, Content Writing, Development, Art & Design icons
- **Format**: PNG or SVG recommended
- **Size**: 64x64px to 128x128px

### `/hero/`
- Main hero section images
- Student photos, background illustrations
- **Format**: PNG, JPG, or WebP
- **Size**: High resolution (min 800x600px)

### `/icons/`
- Service icons (writing, publication, workshop)
- Feature icons
- UI elements
- **Format**: SVG preferred, PNG as backup
- **Size**: 24x24px to 64x64px

### `/logos/`
- Company logos for "Trusted By" section
- Brand logos
- Partner logos
- **Format**: SVG preferred for scalability
- **Size**: Various, maintain aspect ratio

### `/team/`
- Team member photos
- Coach/advisor images
- Professional headshots
- **Format**: JPG or PNG
- **Size**: Square format recommended (400x400px)

## 🎨 Brand Guidelines

### Colors to Use:
- **Dark Navy**: #142333
- **Medium Blue**: #145da0  
- **Gold**: #d6ad60
- **Light Blue**: #90adc6
- **Cream**: #f4ebd0
- **Light Gray**: #eff3f6

### Image Requirements:
- **Quality**: High resolution for retina displays
- **Format**: Use WebP when possible for better performance
- **Optimization**: Compress images before uploading
- **Accessibility**: Include descriptive alt text in components

## 🔗 Usage in Components

```jsx
// Example usage in Next.js
import Image from 'next/image'

<Image
  src="/images/hero/student.jpg"
  alt="Student with books"
  width={400}
  height={400}
  className="rounded-lg"
/>
```

## 📝 Naming Convention

- Use kebab-case: `student-hero.jpg`
- Be descriptive: `business-category-icon.svg`
- Include purpose: `coach-profile-photo.jpg`
- Avoid spaces and special characters

---

*Last updated: December 2024* 