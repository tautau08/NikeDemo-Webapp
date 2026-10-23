# 👟 Nike Demo Web App

A modern, responsive Nike shoe showcase web application built with **React**, **Vite**, and **Tailwind CSS**. This project demonstrates a clean e-commerce landing page experience with interactive UI components, dynamic shoe previews, customer reviews, and more.

---

## 🚀 Live Preview

> Run locally using the steps below.

---

## 📸 Features

- **Hero Section** – Dynamic shoe image switcher with stats (Brands, Products, Customers)
- **Popular Products** – Grid showcase of trending Nike shoes
- **Super Quality** – Highlights Nike's craftsmanship and materials
- **Services** – Key value propositions (free shipping, secure payments, etc.)
- **Special Offer** – Promotional section with CTA buttons
- **Customer Reviews** – Testimonial cards with star ratings
- **Newsletter Subscribe** – Email subscription form
- **Footer** – Navigation links, social icons, and legal info

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| [React 18](https://react.dev/) | UI component library |
| [Vite 5](https://vitejs.dev/) | Build tool & dev server |
| [Tailwind CSS 3](https://tailwindcss.com/) | Utility-first CSS styling |
| [PostCSS](https://postcss.org/) | CSS processing |
| [ESLint](https://eslint.org/) | Code quality & linting |

**Custom Fonts:** Palanquin · Montserrat  
**Custom Colors:** Coral Red · Slate Gray · Pale Blue · Primary

---

## 📁 Project Structure

```
NikeDemo-Webapp/
└── nike/
    ├── public/               # Static assets
    ├── src/
    │   ├── assets/           # Images & icons
    │   ├── components/       # Reusable UI components
    │   │   ├── Nav.jsx
    │   │   ├── Button.jsx
    │   │   ├── ShoeCard.jsx
    │   │   ├── PopularProductCard.jsx
    │   │   ├── ReviewCard.jsx
    │   │   └── ServiceCard.jsx
    │   ├── sections/         # Page sections
    │   │   ├── hero.jsx
    │   │   ├── popularproducts.jsx
    │   │   ├── superQuality.jsx
    │   │   ├── services.jsx
    │   │   ├── specialOffer.jsx
    │   │   ├── customerReviews.jsx
    │   │   ├── subscribe.jsx
    │   │   └── footer.jsx
    │   ├── constants/        # Static data & content
    │   ├── App.jsx           # Root component
    │   ├── main.jsx          # Entry point
    │   └── index.css         # Global styles
    ├── tailwind.config.js
    ├── vite.config.js
    └── package.json
```

---

## ⚡ Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) v18+
- npm v9+

### Installation

```bash
# Clone the repository
git clone https://github.com/tautau08/NikeDemo-Webapp.git
cd NikeDemo-Webapp/nike

# Install dependencies
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

### Lint

```bash
npm run lint
```

---

## 📜 Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start Vite dev server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint checks |

---

## 📄 License

This project is for **demo/educational purposes** only. All Nike branding, trademarks, and assets are property of [Nike, Inc.](https://www.nike.com/)

---

> Built with ❤️ using React + Vite + Tailwind CSS
