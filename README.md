# Evion Landing Page

A modern, responsive landing page for Evion - RGB to NDVI AI conversion platform. Built with Next.js, TypeScript, Tailwind CSS, and Framer Motion.

## Features

- **Modern Design**: Dark theme with lime green accents
- **Responsive**: Works on all device sizes
- **Animations**: Smooth animations with Framer Motion
- **Performance**: Built with Next.js for optimal performance
- **TypeScript**: Type-safe development experience

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository or download the files
2. Install dependencies:

```bash
npm install
```

### Development

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

### Building for Production

```bash
npm run build
npm start
```

## Project Structure

```
├── app/                    # Next.js app directory
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── Components/            # React components
│   ├── features/          # Feature sections
│   ├── hero/              # Hero section
│   └── sections/          # Other sections
├── components/            # UI components
│   └── ui/                # Reusable UI components
├── styles/                # Global styles
└── layout.tsx             # Main layout wrapper
```

## Components

### Hero Section
- Main landing area with call-to-action
- RGB to NDVI conversion preview
- Animated elements

### Features
- Problem/Solution comparison
- Step-by-step process
- Benefits grid with hover effects

### Vision Section
- Company mission and values
- Metric highlights
- Future goals

### CTA Section
- Final call-to-action
- Contact information

## Technologies Used

- **Next.js 14** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **Lucide React** - Icons

## Customization

### Colors
The main brand colors are defined in Tailwind classes:
- Primary: `lime-400` (bright green)
- Background: `#0A0A0A` (near black)
- Text: Various slate colors

### Fonts
- **Playfair Display** - Editorial/heading font
- **Inter** - Body text
- **Roboto Mono** - Monospace elements

### Content
Edit the component files in the `Components/` directory to modify text, images, and layout.

## Deployment

This project can be deployed to:
- Vercel (recommended for Next.js)
- Netlify
- Any static hosting provider

For Vercel deployment:
```bash
npm install -g vercel
vercel
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is for demonstration purposes. Please ensure you have the rights to use any images or content before deploying to production.
