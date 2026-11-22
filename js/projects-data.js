/**
 * Demo Websites Data Configuration
 * 
 * HOW TO ADD OR UPDATE YOUR WEBSITES:
 * -----------------------------------
 * When you are ready to add your demo websites and links, simply update the entries below
 * or add new ones following the same structure!
 * 
 * Each project can have:
 * - id: Unique number/identifier
 * - title: The name of the demo website (e.g. "Commune Atelier")
 * - category: Category for filtering ("Furniture", "Restaurant", "Bakery", "ERP")
 * - description: Short summary shown on the card
 * - longDescription: Detailed summary shown in the live preview modal
 * - tags: Array of tag badges shown on the card
 * - image: Path to the preview image (in assets/images/) or external URL
 * - liveUrl: The link to your live demo website
 * - features: Array of key features built into this demo
 * - client: Target industry or fictional/real client name
 * - techStack: Technologies used for the build
 */

const demoProjects = [
  {
    id: "sarohans-couture",
    title: "Sarohans",
    category: "E-Commerce",
    description: "A luxury royal heritage ethnic wear e-commerce experience featuring handcrafted artisanal fashion, curated menswear, and bridal couture.",
    longDescription: "A high-end luxury fashion and ethnic couture digital flagship store. Features rich interactive lookbooks, curated collections for women (Saro) and men (Hans), royal bridal couture showcase, seamless cart checkout flow, and heritage craftsmanship storytelling.",
    tags: ["E-Commerce", "Luxury Fashion", "Ethnic Wear"],
    image: "assets/images/card-sarohans.png",
    liveUrl: "https://sarohans-cr8o.onrender.com",
    previewAvailable: true,
    features: [
      "Bespoke Royal Heritage Fashion Collections (Saro Women & Hans Men)",
      "Artisanal Craftsmanship & Royal Bridal Couture Lookbooks",
      "Interactive Product Catalogue with Luxury Zoom & Size Selectors",
      "Seamless Shopping Cart, Secure Checkout & Order Management",
      "Editorial Typography & Immersive Visual Grandeur"
    ],
    client: "Sarohans Royal Heritage & Haute Couture",
    techStack: ["Modern E-Commerce", "Responsive Design", "Interactive UI", "High-Performance CDN"]
  },
  {
    id: "commune-atelier",
    title: "Commune Atelier",
    category: "Furniture",
    description: "A luxury digital showroom for bespoke furniture, architectural woodworking, and curated living spaces.",
    longDescription: "An artisanal digital showroom designed for monumental furniture pieces, master woodworking, and bespoke living spaces inspired by architectural purism. Features an interactive collection catalog, an AI stylist studio preview, custom material selections, and high-resolution craftsmanship showcases.",
    tags: ["Furniture", "Bespoke Living", "Showroom"],
    image: "assets/images/card-commune-atelier.png",
    liveUrl: "https://commune-atelier.onrender.com",
    previewAvailable: true,
    features: [
      "Curated Living & Architectural Furniture Collections",
      "Interactive AI Stylist & Bespoke Studio Consultation",
      "High-Resolution Material & Finish Showcases",
      "Responsive Editorial Typography & Luxury Visuals",
      "Inquiry & Custom Commission Booking Pipeline"
    ],
    client: "Commune Atelier Furniture & Living",
    techStack: ["Modern Web Tech", "Editorial UI", "Responsive Design", "Fast CDN Hosting"]
  },
  {
    id: "ember-and-ivory",
    title: "Ember & Ivory",
    category: "Restaurant",
    description: "A contemporary luxury restaurant and cocktail lounge website with digital menu, ambience gallery, and table bookings.",
    longDescription: "A sophisticated dining platform combining modern Indian, Asian, and global influences with an elegant social atmosphere. Features an interactive seasonal menu with tasting courses and reserve cocktails, table reservation requests, photo gallery showcasing interior ambiance, and event catering inquiries.",
    tags: ["Restaurant", "Fine Dining", "Reservations"],
    image: "assets/images/card-ember-ivory.png",
    liveUrl: "https://ember-and-ivory.onrender.com",
    previewAvailable: true,
    features: [
      "Digital Seasonal Menu with Tasting Courses & Cocktails",
      "Online Table Booking & Reservation Request Flow",
      "Ambient Photography & Private Lounge Showcase",
      "Location Directions, Operating Hours & Contact Details",
      "Optimized for High-Speed Mobile Ordering & Viewing"
    ],
    client: "Ember & Ivory Haute Cuisine & Lounge",
    techStack: ["HTML5 / CSS3", "Modern JavaScript", "Mobile-First UX", "Responsive UI"]
  },
  {
    id: "cake-connection",
    title: "Cake Connection",
    category: "Bakery",
    description: "An artisanal live bakery e-commerce platform offering 100% pure eggless cakes, custom orders, and 2-hour express delivery.",
    longDescription: "A complete online ordering and live bakery experience built for cake shops and confectioneries in Vadodara. Customers can browse freshly baked artisanal cakes by flavor, customize designer photo cakes, choose same-day express or midnight delivery slots, and order with instant WhatsApp and checkout integration.",
    tags: ["Bakery", "E-Commerce", "Online Ordering"],
    image: "assets/images/card-cake-connection.png",
    liveUrl: "https://cake-connection.onrender.com",
    previewAvailable: true,
    features: [
      "Live Cake Catalog with Flavor & Size Selectors",
      "Custom Designer & Photo Cake Request Flow",
      "2-Hour Express Delivery & Midnight Surprise Options",
      "Seamless Shopping Cart & Order Checkout",
      "Instant WhatsApp Order Inquiry Integration"
    ],
    client: "Cake Connection Live Bakery (Vadodara)",
    techStack: ["E-Commerce UI", "Responsive Mobile-First", "JavaScript", "Live Ordering"]
  },
  {
    id: "flavourfall-erp",
    title: "ERP for Restaurants",
    category: "ERP",
    description: "A comprehensive restaurant management ERP featuring live order pipelines, kitchen display (KDS), inventory control, and real-time revenue analytics.",
    longDescription: "A modern, all-in-one management ERP platform engineered for restaurants, multi-cuisine dining outlets, and café chains. Provides restaurant operators with real-time live order dispatching, Kitchen Display System (KDS) integration, menu management, low-stock inventory alerts, staff roles, and live sales dashboards.",
    tags: ["Restaurant ERP", "Dashboard", "Management System"],
    image: "assets/images/card-flavourfall.png",
    liveUrl: "https://flavourfall.onrender.com/",
    previewAvailable: true,
    features: [
      "Live Order Pipeline with Status Tracking (Preparing / Ready / Delivered)",
      "Kitchen Display System (KDS) for Chefs & Line Cooks",
      "Real-Time Sales, Revenue Trends & Top Products Analytics",
      "Inventory & Low-Stock Alert System",
      "Multi-Outlet & Role-Based Access Control (Admin, Staff)"
    ],
    client: "FlavourFall Restaurant & Dining Chain",
    techStack: ["Full-Stack Web App", "Real-Time Dashboard", "Inventory & POS", "Analytics"]
  }
];

// Categories list for quick filtering
const projectCategories = [
  { id: "all", label: "All Projects" },
  { id: "E-Commerce", label: "E-Commerce" },
  { id: "Furniture", label: "Furniture & Living" },
  { id: "Restaurant", label: "Restaurant & Café" },
  { id: "Bakery", label: "Bakery" },
  { id: "ERP", label: "Restaurant ERP" }
];

// Profile & Contact Info (Easy to update here or in HTML)
const siteConfig = {
  designerName: "Ansh Kedia",
  role: "Developer",
  email: "ansh.kedia.dev@gmail.com",
  phone: "+91 8758838722",
  phoneDisplay: "+91 8758838722",
  whatsappNumber: "918758838722",
  locations: [
    "Vadodara, Gujarat",
    "Pune, Maharashtra"
  ],
  location: "Vadodara, Gujarat & Pune, Maharashtra",
  socialLinks: {
    linkedin: "https://www.linkedin.com/in/ansh-kedia-249843266/",
    instagram: "https://www.instagram.com/anshkedia_45/",
    email: "https://mail.google.com/mail/?view=cm&fs=1&to=ansh.kedia.dev@gmail.com"
  },
  stats: [
    { value: "5+", label: "Live Demos" },
    { value: "5+", label: "Website Templates" },
    { value: "100%", label: "Responsive & Modern" }
  ]
};
