# Ansh Kedia — Developer Portfolio

A pixel-perfect replication of your design reference, crafted specifically to **showcase your demo websites and software systems to potential clients** and convert visitors into paid projects.

---

## 🌟 Live Preview & Quick Start

### Option 1: Direct File Open
You can open `index.html` directly in any web browser (Google Chrome, Microsoft Edge, Brave, Safari, Firefox) by double-clicking it.

### Option 2: Run with Local Server
If you prefer running a local server:
```bash
# Using Python
python -m http.server 3000

# Or using Node (npx)
npx serve .
```
Then visit `http://localhost:3000` in your browser.

---

## 📁 Project Structure

```
Portfolio for demos/
├── index.html                  # Main website markup with semantic HTML5
├── css/
│   └── styles.css              # Custom styling, luxury typography & animations
├── js/
│   ├── projects-data.js        # 👈 UPDATE YOUR DEMO WEBSITES & LINKS HERE!
│   └── main.js                 # Dynamic rendering, live modals, filters & forms
├── assets/
│   └── images/
│       ├── hero-desk.png       # High-definition hero workspace mockup
│       ├── card-mountain-brew.png
│       ├── card-voyage-trails.png
│       ├── card-medassist.png
│       ├── avatar-ritika.png
│       ├── avatar-aman.png
│       ├── avatar-neha.png
│       └── cta-mountain-backdrop.jpg
└── README.md                   # Documentation and customization guide
```

---

## 🚀 How to Add & Update Your Demo Websites

You noted: *"I WILL GIVE WEBSITES NAME AND LINKS LATER"*.  
We built the entire project to make updating and adding new demo websites as simple as editing one file:

Open **[`js/projects-data.js`](js/projects-data.js)** in any text editor.

You will find the `demoProjects` array:

```javascript
const demoProjects = [
  {
    id: "sarohans-couture",
    title: "Sarohans",
    category: "E-Commerce",
    description: "A luxury royal heritage ethnic wear e-commerce experience featuring handcrafted artisanal fashion, curated menswear, and bridal couture.",
    liveUrl: "https://sarohans-cr8o.onrender.com"
  },
  {
    id: "commune-atelier",
    title: "Commune Atelier",
    category: "Furniture",
    description: "A luxury digital showroom for bespoke furniture, architectural woodworking, and curated living spaces.",
    liveUrl: "https://commune-atelier.onrender.com"
  },
  {
    id: "ember-and-ivory",
    title: "Ember & Ivory",
    category: "Restaurant",
    description: "A contemporary luxury restaurant and cocktail lounge website with digital menu, ambience gallery, and table bookings.",
    liveUrl: "https://ember-and-ivory.onrender.com"
  },
  {
    id: "cake-connection",
    title: "Cake Connection",
    category: "Bakery",
    description: "An artisanal live bakery e-commerce platform offering 100% pure eggless cakes, custom orders, and 2-hour express delivery.",
    liveUrl: "https://cake-connection.onrender.com"
  },
  {
    id: "flavourfall-erp",
    title: "ERP for Restaurants",
    category: "ERP",
    description: "A comprehensive restaurant management ERP featuring live order pipelines, kitchen display (KDS), inventory control, and real-time revenue analytics.",
    liveUrl: "https://flavourfall.onrender.com/"
  }
  // Add as many new websites as you want!
];
```

### What happens when you add a link?
1. The **Project Card** will dynamically link to your live demo.
2. When a potential client clicks on the card, the **Live Preview Modal** opens with details, screenshot, and a prominent **"Launch Live Demo ↗"** button that opens your demo in a new tab.
3. If `liveUrl` is `#`, it gracefully shows a "Demo Link Ready Upon Request" badge so it always looks polished and professional.

---

## 🎯 Key Features Included

- **Exact Design Replication**:
  - **Hero Section**: Editorial serif typography (`Playfair Display`), clean subtitle, CTA buttons (`Explore Projects →`, `Get in Touch`), and verified stats row (`10+ Demo Websites`, `5+ Website Templates`, `100% Responsive & Modern`).
  - **Selected Work**: 3-column card grid with hover lifts, tags, preview modals, and category filters.
  - **My Services**: 4-column layout with vertical hairline dividers (**Website development**, **Mobile App development**, **ERP system**, **Marketing assistance**).
  - **What Clients Say**: Authentic client testimonials formatted with clean typography (**Ritika Sharma**, **Aman Desai**, **Dr. Neha Mehta**).
  - **CTA Banner**: Moody dark mountain landscape background with high-contrast copy and `Get a Free Quote →` button.
  - **Footer**: `AK` monogram, `Ansh Kedia` (tagged as **Developer**), clickable contact links (Email: `ansh.kedia.dev@gmail.com`, Phone: `+91 8758838722`, Locations: `Vadodara, Gujarat` & `Pune, Maharashtra`), and profile links (LinkedIn, Instagram, Gmail).
- **Interactive "Get a Quote" Modal**:
  - Potential clients can select service type, estimated budget, and send project details.
  - Includes a direct **WhatsApp Quick Chat** button connecting directly to `+91 8758838722`.
- **Fully Responsive**:
  - Seamlessly adapts across Desktop (1200px+), Tablets, and Mobile screens with an animated mobile drawer.

---

## 🌐 Deploying to the Web

You can deploy this website completely free in under 2 minutes:

### 1. Vercel
1. Push this folder to GitHub.
2. Go to [vercel.com](https://vercel.com) and click **"Add New Project"**.
3. Select your repository and click **"Deploy"**.

### 2. Netlify
1. Go to [app.netlify.com/drop](https://app.netlify.com/drop).
2. Drag and drop the `Portfolio for demos` folder directly onto the page.
3. Your site is live instantly with an SSL certificate.

### 3. GitHub Pages
1. Push the code to a GitHub repository named `portfolio`.
2. Go to **Settings** > **Pages** > Select `main` branch `/ (root)`.
3. Click **Save**.
