# Advanced Cleaning Services — Landing Page

Modern React landing page inspired by professional cleaning service layouts. Built with **React**, **Vite**, **Tailwind CSS v4**, **Framer Motion**, and **Lucide React**.

## Sections

- Hero with wave divider & CTA
- Services grid (2×2, featured card)
- About / Why Choose Us
- Care section with image
- Testimonials (Google-style)
- Featured projects gallery
- FAQ
- Footer with contact form & social links

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173)

## Images

All site images live in **`public/`** and are mapped in **`src/config/images.js`**.

| File | Used for |
|------|----------|
| `hero-team.png` | Hero section |
| `office-maintenance.png` | About section |
| `deep-carpet-cleaning.png` | Care section |
| `commercial-cleaning.png` | Commercial service & gallery |
| `residential-cleaning.png` | Residential service & gallery |
| `move-out-deep-clean.png` | End of tenancy & gallery |
| `office-maintenance.png` | Gallery (featured tall tile) |

To change an image: replace the file in `public/` (keep the same filename) or update the path in `src/config/images.js`.

## Customize

- Company copy: `src/components/`
- Colors: `src/index.css` (green base theme with lime accents)
- Contact details: `src/components/Footer.jsx`
