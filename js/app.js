// Upgraded Product Data matching reference images
const PRODUCTS = [
  { id: 1, name: "Heirloom Tomatoes", category: "vegetables", price: 4.50, originalPrice: 6.00, img: "assets/prod_tomatoes.png", rating: "4.9/5", reviewsCount: 12, color: "red", brand: "farm-fresh", discount: true, weight: "500g", badge1: "Sale", badge2: "Organic", description: "Juicy, colorful heirloom tomatoes grown organically. Perfect for salads and cooking." },
  { id: 2, name: "Baby Spinach", category: "vegetables", price: 3.00, originalPrice: 3.00, img: "assets/prod_kale.png", rating: "4.8/5", reviewsCount: 8, color: "green", brand: "organic", discount: false, weight: "200g", badge1: "Organic", badge2: "", description: "Pre-washed tender baby spinach leaves, packed fresh." },
  { id: 3, name: "Organic Avocados", category: "fruits", price: 12.35, originalPrice: 15.50, img: "assets/prod_avocado.png", rating: "4.8/5", reviewsCount: 15, color: "green", brand: "farm-fresh", discount: true, weight: "4pc", badge1: "Organic", badge2: "Popular", description: "Creamy organic Hass avocados, rich and full of healthy fats." },
  { id: 4, name: "Rainbow Carrots", category: "vegetables", price: 2.80, originalPrice: 2.80, img: "assets/prod_carrots.png", rating: "4.7/5", reviewsCount: 6, color: "yellow", brand: "organic", discount: false, weight: "1kg", badge1: "Organic", badge2: "", description: "Sweet and colorful heirloom carrot varieties, fresh from the soil." },
  { id: 5, name: "Broccoli", category: "vegetables", price: 2.20, originalPrice: 2.20, img: "assets/prod_broccoli.png", rating: "4.6/5", reviewsCount: 9, color: "green", brand: "farm-fresh", discount: false, weight: "500g", badge1: "Organic", badge2: "", description: "Crisp and fresh green broccoli heads." },
  { id: 6, name: "Honeycrisp Apples", category: "fruits", price: 4.80, originalPrice: 4.80, img: "assets/prod_apples.png", rating: "4.9/5", reviewsCount: 20, color: "red", brand: "farm-fresh", discount: false, weight: "1kg", badge1: "Popular", badge2: "", description: "Crisp, sweet, and slightly tart Honeycrisp apples." },
  { id: 7, name: "Strawberries", category: "fruits", price: 3.50, originalPrice: 4.20, img: "assets/prod_strawberries.png", rating: "4.8/5", reviewsCount: 14, color: "red", brand: "farm-fresh", discount: true, weight: "400g", badge1: "Sale", badge2: "", description: "Sweet and juicy fresh red strawberries." },
  { id: 8, name: "Cavendish Bananas", category: "fruits", price: 0.40, originalPrice: 0.60, img: "assets/prod_banana.png", rating: "4.8/5", reviewsCount: 25, color: "yellow", brand: "organic", discount: true, weight: "4pc", badge1: "Popular", badge2: "", description: "Sweet, perfectly ripe yellow Cavendish bananas." },
  { id: 9, name: "Alphonso Mangoes", category: "fruits", price: 8.99, originalPrice: 8.99, img: "assets/prod_mango.png", rating: "4.9/5", reviewsCount: 30, color: "yellow", brand: "farm-fresh", discount: false, weight: "1kg", badge1: "Popular", badge2: "", description: "Premium, aromatic, and rich sweet Alphonso mangoes." },
  { id: 10, name: "Blueberries", category: "fruits", price: 4.00, originalPrice: 4.00, img: "assets/prod_blueberries.png", rating: "4.8/5", reviewsCount: 18, color: "blue", brand: "organic", discount: false, weight: "125g", badge1: "Organic", badge2: "", description: "Fresh and plump organic blueberries, sweet and full of antioxidants." },
  { id: 11, name: "Sourdough Loaf", category: "bakery", price: 3.20, originalPrice: 4.00, img: "assets/prod_bread.png", rating: "4.8/5", reviewsCount: 22, color: "yellow", brand: "organic", discount: true, weight: "400g", badge1: "Popular", badge2: "", description: "Freshly baked whole wheat artisanal sourdough bread with a perfect crust." },
  { id: 12, name: "Multigrain Loaf", category: "bakery", price: 2.90, originalPrice: 2.90, img: "assets/prod_bread.png", rating: "4.7/5", reviewsCount: 11, color: "yellow", brand: "organic", discount: false, weight: "450g", badge1: "Organic", badge2: "", description: "Freshly baked multigrain bread loaded with healthy seeds." },
  { id: 13, name: "Organic Whole Milk", category: "dairy", price: 3.80, originalPrice: 3.80, img: "assets/cat_dairy.png", rating: "4.8/5", reviewsCount: 40, color: "white", brand: "organic", discount: false, weight: "1L", badge1: "Organic", badge2: "", description: "Pure, pasteurized organic whole milk from pasture-raised cows." },
  { id: 14, name: "Greek Yogurt", category: "dairy", price: 2.50, originalPrice: 2.50, img: "assets/prod_yogurt.png", rating: "4.7/5", reviewsCount: 15, color: "white", brand: "farm-fresh", discount: false, weight: "500g", badge1: "Popular", badge2: "", description: "Creamy, thick, and protein-rich unsweetened Greek yogurt." },
  { id: 15, name: "Aged Cheddar", category: "dairy", price: 5.50, originalPrice: 5.50, img: "assets/prod_cheddar.png", rating: "4.9/5", reviewsCount: 16, color: "yellow", brand: "farm-fresh", discount: false, weight: "250g", badge1: "Popular", badge2: "", description: "Sharp, rich aged cheddar cheese block." },
  { id: 16, name: "Capsicum", category: "vegetables", price: 24.00, originalPrice: 28.00, img: "assets/prod_pepper.png", rating: "4.8/5", reviewsCount: 5, color: "green", brand: "farm-fresh", discount: true, weight: "1000gm", badge1: "Best Sale", badge2: "FROZEN", description: "Fresh organic green peppers picked directly from local farms. Perfect for salads, stir-fries, and more!" },
  { id: 17, name: "Seoul Yopokki Spicy 4 flavors of Korean Topokki", category: "snacks", price: 0.40, originalPrice: 0.60, img: "assets/prod_topokki.png", rating: "4.8/5", reviewsCount: 5, color: "red", brand: "organic", discount: true, weight: "1pack", badge1: "Best Sale", badge2: "", description: "Delicious Korean rice cakes in 4 spicy flavors. A perfect snack for any time!" },
  { id: 18, name: "Banana Malaysia", category: "fruits", price: 0.40, originalPrice: 0.60, img: "assets/prod_banana.png", rating: "4.8/5", reviewsCount: 5, color: "yellow", brand: "organic", discount: true, weight: "4pc", badge1: "Best Sale", badge2: "ORGANIC", description: "Sweet and fresh Cavendish bananas. Rich in potassium and perfect for breakfast!" },
  { id: 19, name: "Italian Avocado", category: "fruits", price: 12.35, originalPrice: 15.50, img: "assets/prod_avocado.png", rating: "4.8/5", reviewsCount: 5, color: "green", brand: "farm-fresh", discount: true, weight: "1000gm", badge1: "", badge2: "20% OFF", description: "Creamy organic Hass avocados imported from Italy. Perfect for guacamole!" },
  { id: 20, name: "Mahin Brand, Extra Long Grain Basmati Rice,", category: "dairy", price: 13.25, originalPrice: 19.50, img: "assets/prod_rice.png", rating: "4.8/5", reviewsCount: 5, color: "yellow", brand: "organic", discount: true, weight: "4pack", badge1: "15% OFF", badge2: "", description: "Premium extra long grain Basmati rice. Aromatic and perfect for any dish!" },
  { id: 21, name: "Black Seed Honey", category: "dairy", price: 30.25, originalPrice: 38.50, img: "assets/prod_honey.png", rating: "4.8/5", reviewsCount: 5, color: "yellow", brand: "organic", discount: true, weight: "500g", badge1: "15% OFF", badge2: "", description: "Pure black seed honey with numerous health benefits. 100% natural and organic!" },
  { id: 22, name: "Arabian Beef Meat Kirkland Signature Roast", category: "meat", price: 24.00, originalPrice: 30.00, img: "assets/prod_beef.png", rating: "4.8/5", reviewsCount: 5, color: "red", brand: "farm-fresh", discount: true, weight: "1.5kg", badge1: "Best Sale", badge2: "FROZEN", description: "Premium quality beef roast. Perfect for Sunday dinners and special occasions!" },
  { id: 23, name: "Seoul Yopokki Spicy 4 flavors of Korean Topokki", category: "snacks", price: 0.40, originalPrice: 0.60, img: "assets/prod_topokki.png", rating: "4.8/5", reviewsCount: 5, color: "red", brand: "organic", discount: true, weight: "1pack", badge1: "Best Sale", badge2: "", description: "Delicious Korean rice cakes in 4 spicy flavors. A perfect snack for any time!" },
  { id: 24, name: "Fresh Whole Chicken Breast ", category: "chicken", price: 8.99, originalPrice: 10.99, img: "assets/prod_chicken_breast.png", imgFilter: "hue-rotate(-10deg) saturate(0.9) brightness(1.15)", rating: "4.8/5", reviewsCount: 5, color: "red", brand: "farm-fresh", discount: true, weight: "1kg", badge1: "Best Sale", badge2: "ORGANIC", description: "Antibiotic-free fresh chicken breast. Lean, tender, and perfect for grilling!" },
  { id: 25, name: "Lindt Excellence Dark Chocolate ", category: "chocolate", price: 3.50, originalPrice: 4.50, img: "assets/prod_chocolate.png", rating: "4.8/5", reviewsCount: 5, color: "red", brand: "organic", discount: true, weight: "100g", badge1: "15% OFF", badge2: "", description: "Premium dark chocolate with 70% cocoa. Rich, smooth, and utterly delicious!" },
  { id: 26, name: "Chocolate Chip Cookies Box", category: "chocolate", price: 2.20, originalPrice: 2.80, img: "assets/prod_cookies.png", rating: "4.8/5", reviewsCount: 5, color: "yellow", brand: "organic", discount: true, weight: "200g", badge1: "Best Sale", badge2: "", description: "Freshly baked chocolate chip cookies. The perfect treat for any time of day!" },
  { id: 27, name: "Frozen Chicken Nuggets Party Pack", category: "frozen", price: 6.40, originalPrice: 7.99, img: "assets/prod_nuggets.png", rating: "4.8/5", reviewsCount: 5, color: "red", brand: "farm-fresh", discount: true, weight: "750gm", badge1: "Best Sale", badge2: "FROZEN", description: "Crispy frozen chicken nuggets. Perfect for parties and quick meals!" },
  { id: 28, name: "French Fries Frozen", category: "frozen", price: 4.00, originalPrice: 5.20, img: "assets/prod_fries.png", imgFilter: "hue-rotate(15deg) saturate(1.2) brightness(1.1)", rating: "4.8/5", reviewsCount: 5, color: "green", brand: "farm-fresh", discount: true, weight: "1000gm", badge1: "", badge2: "FROZEN", description: "Crispy golden French fries. A classic side dish loved by all!" },
  { id: 29, name: "Tortilla Chips", category: "snacks", price: 1.80, originalPrice: 2.40, img: "assets/prod_chips.png", rating: "4.8/5", reviewsCount: 5, color: "yellow", brand: "organic", discount: true, weight: "150g", badge1: "Best Sale", badge2: "", description: "Hot and spicy organic tortilla chips. Perfect with salsa or guacamole " },
  { id: 30, name: "Organic Tomatoes", category: "vegetables", price: 4.50, originalPrice: 6.00, img: "assets/prod_tomatoes.png", rating: "4.9/5", reviewsCount: 12, color: "red", brand: "farm-fresh", discount: true, weight: "500g", badge1: "Best Sale", badge2: "ORGANIC", description: "Juicy, colorful heirloom heritage tomatoes grown organically. Perfect for salads and caprese!" },
  { id: 31, name: "Free-Range Brown Eggs", category: "dairy", price: 3.80, originalPrice: 4.99, img: "assets/prod_eggs.png", rating: "4.8/5", reviewsCount: 18, color: "yellow", brand: "farm-fresh", discount: true, weight: "12pcs", badge1: "New Arrival", badge2: "ORGANIC", description: "Farm fresh, free-range brown eggs rich in nutrients from happy, healthy chickens." },
  { id: 32, name: "Green Kale", category: "vegetables", price: 2.50, originalPrice: 3.20, img: "assets/prod_kale.png", rating: "4.7/5", reviewsCount: 8, color: "green", brand: "organic", discount: true, weight: "250g", badge1: "New Arrival", badge2: "ORGANIC", description: "Fresh, crisp organic curly green kale. Ideal for smoothies, salads, or baking into crispy chips!" },
  { id: 33, name: "Salmon Fillet", category: "frozen", price: 18.99, originalPrice: 24.50, img: "assets/prod_salmon.png", rating: "4.9/5", reviewsCount: 22, color: "red", brand: "farm-fresh", discount: true, weight: "500g", badge1: "15% OFF", badge2: "FROZEN", description: "Rich, delicious, and sustainably wild-caught fresh sockeye salmon fillet. High in Omega-3." },
  { id: 34, name: "Sourdough Bread Loaf", category: "bakery", price: 3.20, originalPrice: 4.00, img: "assets/prod_bread.png", rating: "4.8/5", reviewsCount: 15, color: "yellow", brand: "organic", discount: true, weight: "400g", badge1: "Best Sale", badge2: "", description: "Freshly baked whole wheat artisanal sourdough bread with a perfect crunchy crust and soft interior." }
];

// Global function for promo banner buttons
let setCategoryGlobal = null;
let showToastGlobal = null;

function filterByCategory(category) {
  console.log('filterByCategory called with:', category);
  if (setCategoryGlobal) {
    setCategoryGlobal(category);
    setTimeout(() => {
      const catalogSec = document.getElementById('catalog-section');
      if (catalogSec) {
        catalogSec.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  }
  if (showToastGlobal) {
    showToastGlobal(`Filtering by ${category} products`, 'info');
  }
}

document.addEventListener("DOMContentLoaded", () => {
  // Theme Toggle Button Element
  const themeToggle = document.getElementById("theme-toggle");

  // Theme state
  let currentTheme = localStorage.getItem("theme") || "dark";
  document.documentElement.setAttribute("data-theme", currentTheme);
  updateThemeIcon();

  // Cart state
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  let cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  // Wishlist state
  let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];

  // Filter state variables
  let activeCategory = "all";
  let searchQuery = "";
  let activePriceSort = "default";
  let activeRatingSort = "default";
  let activeColorFilter = "all";
  let activeOfferFilter = "all";
  let activeBrandFilter = "all";

  // Auto Slider code for Hero Banner
  let currentSlide = 0;
  const slides = document.querySelectorAll(".hero-slide");
  const dots = document.querySelectorAll(".slider-dots .dot");
  const prevBtn = document.querySelector(".slider-arrow.prev");
  const nextBtn = document.querySelector(".slider-arrow.next");

  function showSlide(index) {
    if (slides.length === 0) return;
    slides.forEach(slide => slide.classList.remove("active"));
    dots.forEach(dot => dot.classList.remove("active"));

    currentSlide = (index + slides.length) % slides.length;
    if (slides[currentSlide]) slides[currentSlide].classList.add("active");
    if (dots[currentSlide]) dots[currentSlide].classList.add("active");
  }

  // Auto transition every 4 seconds
  let sliderInterval = null;
  function startSliderInterval() {
    if (sliderInterval) clearInterval(sliderInterval);
    if (slides.length > 0) {
      sliderInterval = setInterval(() => {
        showSlide(currentSlide + 1);
      }, 4000);
    }
  }

  startSliderInterval();

  dots.forEach(dot => {
    dot.addEventListener("click", () => {
      const slideIndex = parseInt(dot.getAttribute("data-slide"));
      showSlide(slideIndex);
      startSliderInterval();
    });
  });

  if (prevBtn) {
    prevBtn.addEventListener("click", () => {
      showSlide(currentSlide - 1);
      startSliderInterval();
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener("click", () => {
      showSlide(currentSlide + 1);
      startSliderInterval();
    });
  }

  // Category Cards Slider scroll logic
  const catSlider = document.getElementById("categories-slider");
  const slideRightBtn = document.getElementById("slide-cat-right-card");

  if (slideRightBtn && catSlider) {
    slideRightBtn.addEventListener("click", () => {
      const maxScroll = catSlider.scrollWidth - catSlider.clientWidth;
      if (catSlider.scrollLeft >= maxScroll - 5) {
        catSlider.scrollLeft = 0; // Loop back
      } else {
        catSlider.scrollLeft += 220; // Scroll right
      }
    });
  }

  const filterCatSelect = null; // No category select dropdown in index.html

  // Category Synchronization Function
  function setCategory(categoryVal) {
    activeCategory = categoryVal;

    // Sync category cards active state
    const categoryCards = document.querySelectorAll(".category-slide-card, .figma-cat-pill");
    categoryCards.forEach(card => {
      if (card.getAttribute("data-category") === categoryVal) {
        card.classList.add("active");
      } else {
        card.classList.remove("active");
      }
    });

    renderProducts();
  }

  // Bind Category Cards click to filters
  const categoryCards = document.querySelectorAll(".category-slide-card, .figma-cat-pill");
  categoryCards.forEach(card => {
    card.addEventListener("click", () => {
      const cat = card.getAttribute("data-category");
      setCategory(cat);
      // Smooth scroll to catalog
      const catalogSec = document.getElementById("catalog-section");
      if (catalogSec) {
        catalogSec.scrollIntoView({ behavior: "smooth" });
      }
    });
  });

  // Render Best Sellers Section
  renderBestSellers();

  // FAQs Accordion Logic
  const accordionItems = document.querySelectorAll(".accordion-item");
  accordionItems.forEach(item => {
    const header = item.querySelector(".accordion-header");
    header.addEventListener("click", () => {
      const isActive = item.classList.contains("active");

      // Close all first
      accordionItems.forEach(i => {
        i.classList.remove("active");
        i.querySelector(".accordion-arrow").textContent = "▸";
      });

      if (!isActive) {
        item.classList.add("active");
        item.querySelector(".accordion-arrow").textContent = "▾";
      }
    });
  });

  // Dark/Light Theme Toggle Click Handler
  if (themeToggle) {
    themeToggle.addEventListener("click", () => {
      currentTheme = currentTheme === "light" ? "dark" : "light";
      document.documentElement.setAttribute("data-theme", currentTheme);
      localStorage.setItem("theme", currentTheme);
      updateThemeIcon();
    });
  }

  function updateThemeIcon() {
    if (!themeToggle) return;
    const svg = themeToggle.querySelector("svg");
    if (!svg) return;
    if (currentTheme === "dark") {
      // Show radiant Sun SVG when theme is dark (click to switch to light theme)
      svg.innerHTML = `<circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="12" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>`;
      svg.style.transform = "rotate(90deg)";
    } else {
      // Show crescent Moon SVG when theme is light (click to switch to dark theme)
      svg.innerHTML = `<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>`;
      svg.style.transform = "rotate(0deg)";
    }
  }

  // Toast Notification System
  function showToast(message, type = 'success') {
    const container = document.querySelector('.toast-container') || createToastContainer();
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;

    const icons = {
      success: '✅',
      error: '❌',
      info: 'ℹ️'
    };

    toast.innerHTML = `
      <span class="toast-icon">${icons[type]}</span>
      <span class="toast-message">${message}</span>
    `;

    container.appendChild(toast);

    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateX(100%)';
      setTimeout(() => toast.remove(), 300);
    }, 3000);
  }

  function createToastContainer() {
    const container = document.createElement('div');
    container.className = 'toast-container';
    document.body.appendChild(container);
    return container;
  }

  // Location Dropdown Handling
  const locationBtn = document.getElementById('location-btn');
  const locationPopover = document.getElementById('location-dropdown-popover');
  if (locationBtn && locationPopover) {
    locationBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      locationPopover.classList.toggle('active');
      if (cartPopover) cartPopover.classList.remove('active');
    });

    const locationItems = locationPopover.querySelectorAll('.dropdown-item');
    locationItems.forEach(item => {
      item.addEventListener('click', (e) => {
        const value = item.getAttribute('data-value');
        const text = item.textContent;
        const textSpan = document.getElementById('selected-location-text');
        if (textSpan) textSpan.textContent = text;

        locationItems.forEach(i => i.classList.remove('active'));
        item.classList.add('active');

        locationPopover.classList.remove('active');
        showToast(`Location changed to ${text}!`, 'info');
      });
    });
  }

  // Cart Popover & Sidebar Handling
  const cartOverlay = document.getElementById('cart-overlay');
  const cartSidebar = document.getElementById('cart-sidebar');
  const closeCartBtn = document.getElementById('close-cart');
  const cartBtn = document.getElementById('cart-btn');
  const cartPopover = document.getElementById('cart-dropdown-popover');
  const popoverCheckoutBtn = document.getElementById('cart-popover-checkout-btn');

  function openCart() {
    cartOverlay.classList.add('active');
    cartSidebar.classList.add('active');
    document.body.style.overflow = 'hidden';
    if (cartPopover) cartPopover.classList.remove('active');
    renderCart();
  }

  function closeCart() {
    cartOverlay.classList.remove('active');
    cartSidebar.classList.remove('active');
    document.body.style.overflow = '';
  }

  if (cartBtn && cartPopover) {
    cartBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      cartPopover.classList.toggle('active');
      if (locationPopover) locationPopover.classList.remove('active');
      renderCart();
    });
  }

  if (popoverCheckoutBtn) {
    popoverCheckoutBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      openCart();
    });
  }

  if (closeCartBtn) {
    closeCartBtn.addEventListener('click', closeCart);
  }
  if (cartOverlay) {
    cartOverlay.addEventListener('click', closeCart);
  }

  // Close popovers on click outside
  document.addEventListener('click', (e) => {
    if (locationPopover && !locationPopover.contains(e.target) && locationBtn && !locationBtn.contains(e.target)) {
      locationPopover.classList.remove('active');
    }
    if (cartPopover && !cartPopover.contains(e.target) && cartBtn && !cartBtn.contains(e.target)) {
      cartPopover.classList.remove('active');
    }
  });

  function addToCart(productId, quantity = 1) {
    const product = PRODUCTS.find(p => p.id === productId);
    if (!product) return;

    const existingItem = cart.find(item => item.id === productId);
    if (existingItem) {
      existingItem.quantity += quantity;
    } else {
      cart.push({ ...product, quantity });
    }

    saveCart();
    updateCartCount();
    showToast(`${product.name} added to cart!`, 'success');
    renderCart();
  }

  function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    saveCart();
    updateCartCount();
    renderCart();
  }

  function updateCartItemQuantity(productId, delta) {
    const item = cart.find(item => item.id === productId);
    if (!item) return;

    item.quantity += delta;
    if (item.quantity <= 0) {
      removeFromCart(productId);
    } else {
      saveCart();
      updateCartCount();
      renderCart();
    }
  }

  function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
  }

  function updateCartCount() {
    cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);
    const badge = document.getElementById('cart-badge');
    const mobileBadge = document.querySelector('.cart-badge-mobile');
    if (badge) badge.textContent = cartCount;
    if (mobileBadge) mobileBadge.textContent = cartCount;
  }

  function renderCart() {
    const cartItemsContainer = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');

    const popoverItemsContainer = document.getElementById('cart-popover-items');
    const popoverTotalVal = document.getElementById('cart-popover-total-val');

    let total = 0;

    // 1. Render Sidebar Cart
    if (cartItemsContainer) {
      if (cart.length === 0) {
        cartItemsContainer.innerHTML = `
          <div class="empty-cart">
            <div class="empty-cart-icon">🛒</div>
            <p>Your cart is empty</p>
          </div>
        `;
        if (cartTotal) cartTotal.textContent = '₹0.00';
      } else {
        cartItemsContainer.innerHTML = cart.map(item => {
          return `
            <div class="cart-item">
              <div class="cart-item-img">
                <img src="${item.img}" alt="${item.name}">
              </div>
              <div class="cart-item-details">
                <h4 class="cart-item-name">${item.name}</h4>
                <div class="cart-item-price">₹${item.price.toFixed(2)}</div>
                <div class="cart-item-quantity">
                  <button class="quantity-btn" data-id="${item.id}" data-action="decrease">-</button>
                  <span class="quantity-value">${item.quantity}</span>
                  <button class="quantity-btn" data-id="${item.id}" data-action="increase">+</button>
                </div>
              </div>
              <button class="remove-item-btn" data-id="${item.id}">✕</button>
            </div>
          `;
        }).join('');
      }
    }

    // 2. Render Popover Cart
    if (popoverItemsContainer) {
      if (cart.length === 0) {
        popoverItemsContainer.innerHTML = `
          <div class="cart-popover-empty">Your basket is empty</div>
        `;
      } else {
        popoverItemsContainer.innerHTML = cart.map(item => {
          return `
            <div class="cart-popover-item">
              <div class="cart-popover-img">
                <img src="${item.img}" alt="${item.name}">
              </div>
              <div class="cart-popover-details">
                <h4 class="cart-popover-name">${item.name}</h4>
                <div class="cart-popover-meta">
                  <span class="cart-popover-price">₹${item.price.toFixed(2)}</span>
                  <div class="cart-popover-quantity">
                    <button class="cart-popover-qty-btn" data-id="${item.id}" data-action="decrease">-</button>
                    <span class="cart-popover-qty-val">${item.quantity}</span>
                    <button class="cart-popover-qty-btn" data-id="${item.id}" data-action="increase">+</button>
                  </div>
                </div>
              </div>
            </div>
          `;
        }).join('');
      }
    }

    // Calculate totals
    cart.forEach(item => {
      total += item.price * item.quantity;
    });

    if (cartTotal) cartTotal.textContent = `₹${total.toFixed(2)}`;
    if (popoverTotalVal) popoverTotalVal.textContent = `₹${total.toFixed(2)}`;

    // Add event listeners to sidebar cart item buttons
    if (cartItemsContainer) {
      cartItemsContainer.querySelectorAll('.quantity-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
          const id = parseInt(e.target.dataset.id);
          const action = e.target.dataset.action;
          updateCartItemQuantity(id, action === 'increase' ? 1 : -1);
        });
      });

      cartItemsContainer.querySelectorAll('.remove-item-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
          const id = parseInt(e.target.dataset.id);
          removeFromCart(id);
        });
      });
    }

    // Add event listeners to popover cart item buttons
    if (popoverItemsContainer) {
      popoverItemsContainer.querySelectorAll('.cart-popover-qty-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
          e.stopPropagation();
          const id = parseInt(e.target.dataset.id);
          const action = e.target.dataset.action;
          updateCartItemQuantity(id, action === 'increase' ? 1 : -1);
        });
      });
    }
  }

  // Wishlist Functions
  function updateWishlistBadge() {
    const badge = document.getElementById('wishlist-nav-badge');
    if (badge) {
      const count = wishlist.length;
      badge.textContent = count;
      badge.style.display = count > 0 ? 'flex' : 'none';
    }
  }

  function toggleWishlist(productId) {
    const index = wishlist.indexOf(productId);
    if (index > -1) {
      wishlist.splice(index, 1);
      showToast('Removed from wishlist', 'info');
    } else {
      wishlist.push(productId);
      const product = PRODUCTS.find(p => p.id === productId);
      showToast(`${product?.name} added to wishlist!`, 'success');
    }
    localStorage.setItem('wishlist', JSON.stringify(wishlist));
    updateWishlistBadge();
    renderProducts();
    renderBestSellers();
  }

  // Quick View Modal
  let quickViewProduct = null;
  let quickViewQuantity = 1;

  function openQuickView(productId) {
    quickViewProduct = PRODUCTS.find(p => p.id === productId);
    quickViewQuantity = 1;

    let overlay = document.querySelector('.quick-view-overlay');
    if (!overlay) {
      overlay = document.createElement('div');
      overlay.className = 'quick-view-overlay';
      document.body.appendChild(overlay);
    }

    overlay.innerHTML = `
      <div class="quick-view-modal">
        <button class="quick-view-close">&times;</button>
        <div class="quick-view-img">
          <img src="${quickViewProduct.img}" alt="${quickViewProduct.name}" style="${quickViewProduct.imgFilter ? 'filter: ' + quickViewProduct.imgFilter + ';' : ''}">
        </div>
        <div class="quick-view-content">
          <div class="quick-view-category">${quickViewProduct.category}</div>
          <h2 class="quick-view-title">${quickViewProduct.name}</h2>
          <div class="quick-view-rating">
            <span class="stars">★★★★★</span>
            <span>${quickViewProduct.rating} (${quickViewProduct.reviewsCount} reviews)</span>
          </div>
          <div class="quick-view-price">
            <span class="quick-view-current-price">₹${quickViewProduct.price.toFixed(2)}</span>
            ${quickViewProduct.originalPrice ? `<span class="quick-view-original-price">₹${quickViewProduct.originalPrice.toFixed(2)}</span>` : ''}
          </div>
          <p class="quick-view-description">${quickViewProduct.description}</p>
          <div class="quick-view-actions">
            <div class="quick-view-quantity">
              <button class="quick-view-quantity-btn" id="qv-decrease">-</button>
              <span class="quick-view-quantity-value" id="qv-quantity">${quickViewQuantity}</span>
              <button class="quick-view-quantity-btn" id="qv-increase">+</button>
            </div>
            <button class="quick-view-add-btn" id="qv-add-cart">Add to Cart</button>
          </div>
        </div>
      </div>
    `;

    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';

    // Add event listeners
    overlay.querySelector('.quick-view-close').addEventListener('click', closeQuickView);
    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) closeQuickView();
    });

    document.getElementById('qv-decrease').addEventListener('click', () => {
      if (quickViewQuantity > 1) {
        quickViewQuantity--;
        document.getElementById('qv-quantity').textContent = quickViewQuantity;
      }
    });

    document.getElementById('qv-increase').addEventListener('click', () => {
      quickViewQuantity++;
      document.getElementById('qv-quantity').textContent = quickViewQuantity;
    });

    document.getElementById('qv-add-cart').addEventListener('click', () => {
      addToCart(quickViewProduct.id, quickViewQuantity);
      closeQuickView();
      openCart();
    });
  }

  function closeQuickView() {
    const overlay = document.querySelector('.quick-view-overlay');
    if (overlay) {
      overlay.classList.remove('active');
      document.body.style.overflow = '';
    }
  }

  // Render product catalog
  const productsContainer = document.getElementById("products-container");

  // Render Best Sellers Section
  function renderBestSellers() {
    const bestSellersContainer = document.getElementById("best-sellers-container");
    if (!bestSellersContainer) return;

    // Get top 4 products with highest reviews count as best sellers
    const bestSellers = [...PRODUCTS]
      .sort((a, b) => b.reviewsCount - a.reviewsCount)
      .slice(0, 4);

    bestSellersContainer.innerHTML = bestSellers.map(p => {
      const isWishlisted = wishlist.includes(p.id);
      const discountPct = p.originalPrice
        ? Math.round(((p.originalPrice - p.price) / p.originalPrice) * 100)
        : 0;

      const ratingNum = parseFloat(p.rating);
      const fullStars = Math.floor(ratingNum);
      const hasHalf = ratingNum % 1 >= 0.5;
      const starSVG = (filled) => `<svg viewBox="0 0 24 24" class="${filled ? 'star-filled' : 'star-empty'}"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>`;
      let starsHtml = '';
      for (let i = 1; i <= 5; i++) {
        starsHtml += starSVG(i <= fullStars || (i === fullStars + 1 && hasHalf));
      }

      const getBadgeColor = (badgeText) => {
        if (!badgeText) return "#f97316";
        if (badgeText === "Best Sale") return "#7f1d1d";
        if (badgeText === "FROZEN") return "#f59e0b";
        if (badgeText === "ORGANIC" || badgeText === "Organic") return "#10b981";
        if (badgeText.includes("% OFF") || badgeText.includes("OFF")) return "#f97316";
        if (badgeText === "Popular") return "#8b5cf6";
        if (badgeText === "New Arrival") return "#0ea5e9";
        return "#f97316";
      };

      return `
        <div class="product-card">
          <div class="product-img-container" style="background-color: var(--bg-surface); padding: 15px; display: flex; align-items: center; justify-content: center; height: 185px; position: relative; overflow: hidden;">
            <img src="${p.img}" alt="${p.name}" style="max-height: 100%; max-width: 100%; object-fit: contain; transition: transform 0.35s ease;">
            ${p.badge1 ? `<span class="product-badge" style="background-color: ${getBadgeColor(p.badge1)}; top: 12px; left: 12px; padding: 3px 8px; font-size: 10px; font-weight: 700; border-radius: 4px; text-transform: uppercase;">${p.badge1}</span>` : ''}
            ${discountPct > 0 ? `<span class="product-badge" style="background-color: #f97316; top: 12px; right: 12px; left: auto; padding: 3px 8px; font-size: 10px; font-weight: 700; border-radius: 4px;">${discountPct}% OFF</span>` : (p.badge2 ? `<span class="product-badge" style="background-color: ${getBadgeColor(p.badge2)}; top: 12px; right: 12px; left: auto; padding: 3px 8px; font-size: 10px; font-weight: 700; border-radius: 4px; text-transform: uppercase;">${p.badge2}</span>` : '')}
            <button class="wishlist-btn ${isWishlisted ? 'active' : ''}" data-id="${p.id}" aria-label="${isWishlisted ? 'Remove from wishlist' : 'Add to wishlist'}" style="position: absolute; bottom: 12px; right: 12px; top: auto;">
              <svg viewBox="0 0 24 24"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
            </button>
          </div>
          <button class="quick-view-btn" data-id="${p.id}">Quick View</button>
          <div class="product-details" style="padding: 14px 18px 18px;">
            <h3 class="product-title" style="font-size: 16px; font-weight: 600; color: var(--text-main); white-space: normal; line-height: 1.38; height: 46px; overflow: hidden; margin-bottom: 8px; font-family: 'Inter', sans-serif;">${p.name}</h3>
            <div class="product-rating-row">
              <div class="product-stars">${starsHtml}</div>
              <span class="product-rating-count">${ratingNum} (${p.reviewsCount})</span>
            </div>
            <div style="color: var(--text-light); font-size: 12px; font-weight: 500; margin-bottom: 12px;">${p.weight}</div>
            <div class="product-meta" style="display: flex; justify-content: space-between; align-items: center; margin-top: 8px; gap: 10px;">
              <div class="price-box" style="display: flex; align-items: baseline; gap: 6px; flex-shrink: 0;">
                <span class="current-price" style="font-size: 20px; font-weight: 800; color: #064E3B;">₹${p.price.toFixed(2)}</span>
                ${p.originalPrice && p.originalPrice !== p.price ? `<span class="original-price" style="font-size: 12px; color: var(--text-light); text-decoration: line-through;">₹${p.originalPrice.toFixed(2)}</span>` : ''}
              </div>
              <button class="add-to-cart-btn" data-id="${p.id}">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      `;
    }).join('');

    // Add event listeners for best sellers
    bestSellersContainer.querySelectorAll('.add-to-cart-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const id = parseInt(e.target.closest('.add-to-cart-btn').dataset.id);
        addToCart(id);
      });
    });

    bestSellersContainer.querySelectorAll('.wishlist-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const id = parseInt(e.target.closest('.wishlist-btn').dataset.id);
        toggleWishlist(id);
      });
    });

    bestSellersContainer.querySelectorAll('.quick-view-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const id = parseInt(e.target.closest('.quick-view-btn').dataset.id);
        openQuickView(id);
      });
    });
  }

  function renderProducts() {
    if (!productsContainer) {
      console.error("Green Basket JS: products-container element not found!");
      return;
    }
    productsContainer.innerHTML = "";

    console.log("Green Basket JS: Filtering products. Category:", activeCategory, "| Color:", activeColorFilter, "| Search:", searchQuery);

    // 1. Filter products list
    let filtered = PRODUCTS.filter(p => {
      const matchesCat = activeCategory === "all" || p.category === activeCategory;
      const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesColor = activeColorFilter === "all" || p.color === activeColorFilter;
      const matchesBrand = activeBrandFilter === "all" || p.brand === activeBrandFilter;
      const matchesOffer = activeOfferFilter === "all" || (activeOfferFilter === "discount" && p.discount);
      return matchesCat && matchesSearch && matchesColor && matchesBrand && matchesOffer;
    });

    const itemCountSpan = document.getElementById("filtered-items-count");
    if (itemCountSpan) {
      itemCountSpan.textContent = `${filtered.length} items`;
    }

    console.log("Green Basket JS: Filtered products count:", filtered.length, filtered);

    // 2. Sort products list
    if (activePriceSort === "low-to-high") {
      filtered.sort((a, b) => a.price - b.price);
    } else if (activePriceSort === "high-to-low") {
      filtered.sort((a, b) => b.price - a.price);
    }

    if (activeRatingSort === "top-rated") {
      filtered.sort((a, b) => b.rating.localeCompare(a.rating));
    }

    if (filtered.length === 0) {
      productsContainer.innerHTML = `
        <div style="grid-column: 1/-1; text-align: center; padding: 40px; color: var(--text-muted);">
          <h3>No products match your search/filter</h3>
          <p>Try checking your spelling or selecting another category</p>
        </div>
      `;
      return;
    }

    filtered.forEach(p => {
      const card = document.createElement("div");
      card.className = "product-card";

      const isWishlisted = wishlist.includes(p.id);

      // Compute discount percentage
      const discountPct = p.originalPrice
        ? Math.round(((p.originalPrice - p.price) / p.originalPrice) * 100)
        : 0;

      // Build star rating (based on numeric part before "/5")
      const ratingNum = parseFloat(p.rating);
      const fullStars = Math.floor(ratingNum);
      const hasHalf = ratingNum % 1 >= 0.5;
      const starSVG = (filled) => `<svg viewBox="0 0 24 24" class="${filled ? 'star-filled' : 'star-empty'}"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>`;
      let starsHtml = '';
      for (let i = 1; i <= 5; i++) {
        starsHtml += starSVG(i <= fullStars || (i === fullStars + 1 && hasHalf));
      }

      // Badges render logic
      let badgeHtml = "";
      const getBadgeStyle = (badgeText) => {
        if (!badgeText) return "";
        let bgColor = "#f97316";
        if (badgeText === "Best Sale") bgColor = "#7f1d1d";
        else if (badgeText === "FROZEN") bgColor = "#f59e0b";
        else if (badgeText === "ORGANIC") bgColor = "#10b981";
        else if (badgeText.includes("% OFF") || badgeText.includes("OFF")) bgColor = "#f97316";
        return bgColor;
      };

      if (p.badge1) {
        badgeHtml += `<span class="product-badge" style="background-color: ${getBadgeStyle(p.badge1)}; left: 15px; border-radius: 4px; padding: 4px 8px; font-size: 10px; font-weight: 700; text-transform: uppercase;">${p.badge1}</span>`;
      }

      // Discount badge (top-right, replaces badge2 which had text like "20% OFF")
      let discountBadgeHtml = '';
      if (discountPct > 0) {
        discountBadgeHtml = `<span class="discount-badge">${discountPct}% OFF</span>`;
      }

      card.innerHTML = `
        ${badgeHtml}
        ${discountBadgeHtml}
        <button class="wishlist-btn ${isWishlisted ? 'active' : ''}" data-id="${p.id}" aria-label="${isWishlisted ? 'Remove from wishlist' : 'Add to wishlist'}" style="top: ${discountPct > 0 ? '46px' : '12px'}; right: 12px;">
          <svg viewBox="0 0 24 24"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
        </button>
        <div class="product-img-container" style="background-color: var(--bg-surface); padding: 15px; display: flex; align-items: center; justify-content: center; height: 185px; position: relative; overflow: hidden;">
          <img src="${p.img}" alt="${p.name}" style="max-height: 100%; max-width: 100%; object-fit: contain; transition: transform 0.35s ease; ${p.imgFilter ? 'filter: ' + p.imgFilter + ';' : ''}">
        </div>
        <button class="quick-view-btn" data-id="${p.id}">Quick View</button>
        <div class="product-details" style="padding: 14px 18px 18px;">
          <h3 class="product-title" style="font-size: 16px; font-weight: 600; color: var(--text-main); white-space: normal; line-height: 1.38; height: 46px; overflow: hidden; margin-bottom: 8px; font-family: 'Inter', sans-serif; cursor: pointer;" title="Click to search: ${p.name}">${p.name}</h3>
          
          <div class="product-rating-row">
            <div class="product-stars">${starsHtml}</div>
            <span class="product-rating-count">${ratingNum} (${p.reviewsCount})</span>
          </div>

          <div style="color: var(--text-light); font-size: 12px; font-weight: 500; margin-bottom: 12px;">${p.weight}</div>

          <div class="product-meta" style="display: flex; justify-content: space-between; align-items: center; margin-top: 8px; gap: 10px;">
            <div class="price-box" style="display: flex; align-items: baseline; gap: 6px; flex-shrink: 0;">
              <span class="current-price" style="font-size: 20px; font-weight: 800; color: #064E3B;">₹${p.price.toFixed(2)}</span>
              ${p.originalPrice ? `<span class="original-price" style="font-size: 12px; color: var(--text-light); text-decoration: line-through;">₹${p.originalPrice.toFixed(2)}</span>` : ''}
            </div>
            
            <button class="add-to-cart-btn" data-id="${p.id}">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
              Add to Cart
            </button>
          </div>
        </div>
      `;

      // Click product title to search
      card.querySelector(".product-title").addEventListener("click", () => {
        if (searchInput) {
          searchInput.value = p.name;
          searchQuery = p.name;
          renderProducts();
          searchInput.scrollIntoView({ behavior: "smooth", block: "center" });
          searchInput.focus();
        }
      });

      // Add to cart button
      card.querySelector(".add-to-cart-btn").addEventListener("click", (e) => {
        const id = parseInt(e.currentTarget.dataset.id);
        addToCart(id);
      });

      // Wishlist button
      card.querySelector(".wishlist-btn").addEventListener("click", (e) => {
        e.stopPropagation();
        const id = parseInt(e.currentTarget.dataset.id);
        toggleWishlist(id);
      });

      // Quick view button
      card.querySelector(".quick-view-btn").addEventListener("click", (e) => {
        e.stopPropagation();
        const id = parseInt(e.currentTarget.dataset.id);
        openQuickView(id);
      });
      const btn = card.querySelector(".quick-view-btn");

      btn.addEventListener("pointerdown", (e) => {
        e.preventDefault();
        e.stopPropagation();
        openQuickView(parseInt(btn.dataset.id));
      });

      productsContainer.appendChild(card);
    });
  }

  // Setup search text input filter
  const searchInput = document.getElementById("search-input");
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      searchQuery = e.target.value;
      renderProducts();
    });
  }

  // Sticky navbar scroll shadow
  const headerEl = document.querySelector('.new-header-layout');
  if (headerEl) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 10) {
        headerEl.classList.add('scrolled');
      } else {
        headerEl.classList.remove('scrolled');
      }
    }, { passive: true });
  }

  // Wishlist & Account nav button handlers
  const navWishlistBtn = document.getElementById('nav-wishlist-btn');
  if (navWishlistBtn) {
    navWishlistBtn.addEventListener('click', () => {
      showToast('Your wishlist has ' + wishlist.length + ' item(s)', 'info');
    });
  }

  const navAccountBtn = document.getElementById('nav-account-btn');
  if (navAccountBtn) {
    navAccountBtn.addEventListener('click', () => {
      showToast('Account features coming soon!', 'info');
    });
  }

  // Initialize wishlist badge
  updateWishlistBadge();

  // Bind Brand Cards click to filter search bar
  const brandCards = document.querySelectorAll(".brand-logo-card");
  brandCards.forEach(card => {
    card.addEventListener("click", () => {
      const brandName = card.getAttribute("title");
      if (brandName && searchInput) {
        searchInput.value = brandName;
        searchQuery = brandName;
        renderProducts();

        // Scroll to catalog section
        const catalogSec = document.getElementById("catalog-section");
        if (catalogSec) {
          catalogSec.scrollIntoView({ behavior: "smooth" });
        }
      }
    });
  });

  // Brand Category Filter Tabs
  const brandTabs = document.querySelectorAll(".brands-tab-btn");
  brandTabs.forEach(tab => {
    tab.addEventListener("click", () => {
      brandTabs.forEach(t => t.classList.remove("active"));
      tab.classList.add("active");

      const filterValue = tab.getAttribute("data-filter");
      brandCards.forEach(card => {
        const cardCategory = card.getAttribute("data-category");
        if (filterValue === "all" || cardCategory === filterValue) {
          card.classList.remove("hidden");
        } else {
          card.classList.add("hidden");
        }
      });
    });
  });

  // Add Mobile Bottom Navigation
  function addMobileNav() {
    if (document.querySelector('.mobile-bottom-nav')) return;

    const mobileNav = document.createElement('nav');
    mobileNav.className = 'mobile-bottom-nav';
    mobileNav.innerHTML = `
      <button class="mobile-nav-item active">
        <span class="mobile-nav-icon">🏠</span>
        <span>Home</span>
      </button>
      <button class="mobile-nav-item">
        <span class="mobile-nav-icon">📦</span>
        <span>Products</span>
      </button>
      <button class="mobile-nav-item" id="mobile-cart-btn">
        <span class="mobile-nav-icon">🛒</span>
        <span>Cart</span>
        <span class="cart-badge-mobile">${cartCount}</span>
      </button>
      <button class="mobile-nav-item">
        <span class="mobile-nav-icon">❤️</span>
        <span>Wishlist</span>
      </button>
      <button class="mobile-nav-item">
        <span class="mobile-nav-icon">👤</span>
        <span>Profile</span>
      </button>
    `;
    document.body.appendChild(mobileNav);

    document.getElementById('mobile-cart-btn').addEventListener('click', openCart);
  }
  addMobileNav();

  // Setup change handlers for select dropdown filters

  const sortPriceSelect = document.getElementById("sort-price-select");
  if (sortPriceSelect) {
    sortPriceSelect.addEventListener("change", (e) => {
      activePriceSort = e.target.value;
      renderProducts();
    });
  }

  const sortRatingSelect = document.getElementById("sort-rating-select");
  if (sortRatingSelect) {
    sortRatingSelect.addEventListener("change", (e) => {
      activeRatingSort = e.target.value;
      renderProducts();
    });
  }

  const filterColorSelect = document.getElementById("filter-color-select");
  if (filterColorSelect) {
    filterColorSelect.addEventListener("change", (e) => {
      activeColorFilter = e.target.value;
      renderProducts();
    });
  }

  const filterOfferSelect = document.getElementById("filter-offer-select");
  if (filterOfferSelect) {
    filterOfferSelect.addEventListener("change", (e) => {
      activeOfferFilter = e.target.value;
      renderProducts();
    });
  }

  const filterBrandSelect = document.getElementById("filter-brand-select");
  if (filterBrandSelect) {
    filterBrandSelect.addEventListener("change", (e) => {
      activeBrandFilter = e.target.value;
      renderProducts();
    });
  }

  // --- MULTIPLE DASHBOARD VIEW CONTROLLER ---
  const views = {
    "store-view": document.getElementById("store-view"),
    "fresh-arrivals-view": document.getElementById("fresh-arrivals-view"),
    "deals-offers-view": document.getElementById("deals-offers-view"),
    "meal-prep-view": document.getElementById("meal-prep-view"),
    "order-status-view": document.getElementById("order-status-view")
  };

  const navLinks = {
    "nav-products": "store-view",
    "nav-whats-new": "fresh-arrivals-view",
    "nav-deals": "deals-offers-view",
    "nav-meal-prep": "meal-prep-view",
    "nav-delivery": "order-status-view",
    "nav-support": "store-view"
  };

  function switchView(targetViewId) {
    // Hide all views
    Object.values(views).forEach(view => {
      if (view) {
        view.classList.remove("active");
        view.style.display = "none";
      }
    });

    // Show target view
    const targetView = views[targetViewId];
    if (targetView) {
      targetView.classList.add("active");
      targetView.style.display = "block";
    }

    // Update active class on nav links
    Object.entries(navLinks).forEach(([linkId, viewId]) => {
      const link = document.getElementById(linkId);
      if (link) {
        if (viewId === targetViewId) {
          link.classList.add("active");
        } else {
          link.classList.remove("active");
        }
      }
    });

    // Custom initialization when entering specific dashboards
    if (targetViewId === "fresh-arrivals-view") {
      renderFreshArrivals();
    } else if (targetViewId === "deals-offers-view") {
      renderDealsOffers();
    } else if (targetViewId === "meal-prep-view") {
      renderMealPrepGuides();
    } else if (targetViewId === "order-status-view") {
      // Use global patched tracker if registered, otherwise fallback
      if (typeof window._patchedRenderTracker === 'function') {
        window._patchedRenderTracker();
        if (trackerSimInterval) clearInterval(trackerSimInterval);
        trackerSimInterval = setInterval(() => {
          if (currentTrackerStep < 3) {
            currentTrackerStep++;
            window._patchedRenderTracker();
            const statusMsgs = [
              'Your order has been approved and preparation has started!',
              'Our rider has picked up your fresh organic groceries and is on the way!',
              'Rider is arriving at your doorstep. Order Delivered! 🎉'
            ];
            showToast(statusMsgs[currentTrackerStep - 1], 'info');
          } else {
            clearInterval(trackerSimInterval);
          }
        }, 10000);
      } else {
        startLiveOrderSimulation();
      }
    } else if (targetViewId === "store-view" && linkId === "nav-support") {
      // Scroll to FAQ section when clicking Help & Support
      const faqSection = document.querySelector('.faq-section-container');
      if (faqSection) {
        setTimeout(() => {
          faqSection.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }

    // Scroll to top
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  // Bind nav click events
  Object.entries(navLinks).forEach(([linkId, viewId]) => {
    const link = document.getElementById(linkId);
    if (link) {
      link.addEventListener("click", (e) => {
        e.preventDefault();
        if (linkId === "nav-support") {
          // Special handling for support - scroll to FAQ
          switchView("store-view");
          setTimeout(() => {
            const faqSection = document.querySelector('.faq-section-container');
            if (faqSection) {
              faqSection.scrollIntoView({ behavior: "smooth" });
            }
          }, 100);
        } else {
          switchView(viewId);
        }
      });
    }
  });

  // Bind storefront "View All Deals" link
  const viewAllDealsLink = document.querySelector(".view-all-deals-link");
  if (viewAllDealsLink) {
    viewAllDealsLink.addEventListener("click", (e) => {
      e.preventDefault();
      switchView("deals-offers-view");
    });
  }

  // Bind brand logo button to switch back to storefront view
  const brandLogoBtn = document.getElementById("brand-logo-btn");
  if (brandLogoBtn) {
    brandLogoBtn.addEventListener("click", () => {
      switchView("store-view");
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  // Assign global functions for inline onclick handlers
  setCategoryGlobal = setCategory;
  showToastGlobal = showToast;

  // Email Support Button
  const emailSupportBtns = document.querySelectorAll('.email-support-btn');
  emailSupportBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const isEmail = btn.textContent.includes('📧');
      if (isEmail) {
        // Open email client
        window.location.href = 'mailto:support@greenbasket.com?subject=Support Request';
        showToast('Opening email client...', 'info');
      } else {
        // Phone support - already has href
        showToast('Calling support line...', 'info');
      }
    });
  });

  // Subscription Button
  const subscriptionBtn = document.querySelector('.cashback-content .btn-primary');
  if (subscriptionBtn) {
    subscriptionBtn.addEventListener('click', () => {
      showToast('Subscription feature coming soon! Stay tuned for exclusive deals.', 'info');
    });
  }

  // Start Your Healthy Journey Button → Meal Prep Guides
  const healthyJourneyBtn = document.getElementById('start-healthy-journey-btn');
  if (healthyJourneyBtn) {
    healthyJourneyBtn.addEventListener('click', () => {
      switchView('meal-prep-view');
      showToast('Explore our curated meal prep guides for a healthier you!', 'info');
    });
  }

  // App Download Buttons
  const appBtns = document.querySelectorAll('.app-btn');
  appBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const isGooglePlay = btn.classList.contains('google-play');
      const isAppStore = btn.classList.contains('app-store');

      if (isGooglePlay) {
        showToast('Redirecting to Google Play Store...', 'info');
        // window.open('https://play.google.com/store', '_blank');
      } else if (isAppStore) {
        showToast('Redirecting to App Store...', 'info');
        // window.open('https://apps.apple.com', '_blank');
      }
    });
  });

  // Bind all back-to-store buttons
  document.addEventListener("click", (e) => {
    if (e.target && e.target.closest(".back-to-store-btn")) {
      switchView("store-view");
    }
  });

  // --- FRESH ARRIVALS VIEW RENDER ---
  let activeFreshCategory = "all";

  // Bind Fresh Arrivals sub-category pills click events
  document.addEventListener("click", (e) => {
    const pill = e.target.closest(".fresh-pill");
    if (pill) {
      const container = document.getElementById("fresh-pills-container");
      if (container) {
        container.querySelectorAll(".fresh-pill").forEach(p => p.classList.remove("active"));
        pill.classList.add("active");
        activeFreshCategory = pill.getAttribute("data-category");
        renderFreshArrivals();
      }
    }
  });

  function renderFreshArrivals() {
    const grid = document.getElementById("fresh-arrivals-grid");
    if (!grid) return;
    grid.innerHTML = "";

    // Filter fresh arrivals (badge is New Arrival, or newly added products ID >= 15)
    let freshProducts = PRODUCTS.filter(p =>
      (p.badge1 && p.badge1.includes("New Arrival")) ||
      (p.badge2 && p.badge2.includes("New Arrival")) ||
      p.id >= 15
    );

    // Apply sub-category filtering if not "all"
    if (activeFreshCategory !== "all") {
      freshProducts = freshProducts.filter(p => p.category === activeFreshCategory);
    }

    renderProductGridInContainer(freshProducts, grid);
  }

  // --- WEEKLY HIGHLIGHTS & SPECIAL OFFERS RENDER ---
  function renderDealsOffers() {
    const grid = document.getElementById("deals-offers-grid");
    if (!grid) return;
    grid.innerHTML = "";

    // Filter products on discount or with special badge
    const discountedProducts = PRODUCTS.filter(p => p.discount || p.price < p.originalPrice);

    renderProductGridInContainer(discountedProducts, grid);
  }

  // Generic renderer to output product cards in a specific container
  function renderProductGridInContainer(productList, container) {
    if (productList.length === 0) {
      container.innerHTML = `<div style="grid-column: 1/-1; text-align: center; padding: 40px; color: var(--text-muted);">No products found.</div>`;
      return;
    }

    productList.forEach(p => {
      const card = document.createElement("div");
      card.className = "product-card";
      const isWishlisted = wishlist.includes(p.id);

      let badgeHtml = "";
      const getBadgeStyle = (badgeText) => {
        if (!badgeText) return "";
        let bgColor = "#f97316";
        if (badgeText === "Best Sale") bgColor = "#7f1d1d";
        else if (badgeText === "FROZEN") bgColor = "#f59e0b";
        else if (badgeText === "ORGANIC") bgColor = "#10b981";
        else if (badgeText.includes("% OFF") || badgeText.includes("OFF")) bgColor = "#f97316";
        return bgColor;
      };

      if (p.badge1) {
        badgeHtml += `<span class="product-badge" style="background-color: ${getBadgeStyle(p.badge1)}; left: 15px; border-radius: 4px; padding: 4px 8px; font-size: 10px; font-weight: 700; text-transform: uppercase;">${p.badge1}</span>`;
      }
      if (p.badge2) {
        const rightPos = p.badge1 ? "left: auto; right: 15px;" : "left: 15px;";
        badgeHtml += `<span class="product-badge" style="background-color: ${getBadgeStyle(p.badge2)}; ${rightPos} border-radius: 4px; padding: 4px 8px; font-size: 10px; font-weight: 700; text-transform: uppercase;">${p.badge2}</span>`;
      }

      card.innerHTML = `
        ${badgeHtml}
        <button class="wishlist-btn ${isWishlisted ? 'active' : ''}" data-id="${p.id}">
          ${isWishlisted ? '❤️' : '🤍'}
        </button>
        <div class="product-img-container" style="background-color: var(--bg-surface); padding: 15px; display: flex; align-items: center; justify-content: center; height: 180px;">
          <img src="${p.img}" alt="${p.name}" style="max-height: 100%; max-width: 100%; object-fit: contain;">
        </div>
        <button class="quick-view-btn" data-id="${p.id}">Quick View</button>
        <div class="product-details" style="padding: 15px 20px 20px;">
          <h3 class="product-title" style="font-size: 15px; font-weight: 600; color: var(--text-main); white-space: normal; line-height: 1.35; height: 42px; overflow: hidden; margin-bottom: 8px; font-family: 'Inter', sans-serif;">
            ${p.name}
          </h3>
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px; font-size: 13px;">
            <div style="color: var(--text-light); font-weight: 500;">${p.weight}</div>
            <div style="color: #f59e0b; font-weight: 600; display: flex; align-items: center; gap: 4px;">
              <span style="font-size: 14px;">★</span>
              <span style="color: var(--text-muted); font-size: 12px; font-weight: 500;">(${p.rating})</span>
            </div>
          </div>
          <div class="product-meta" style="display: flex; justify-content: space-between; align-items: center; margin-top: 10px;">
            <div class="price-box" style="display: flex; align-items: baseline; gap: 6px;">
              <span class="current-price" style="font-size: 20px; font-weight: 800; color: #064E3B;">₹${p.price.toFixed(2)}</span>
              ${p.originalPrice ? `<span class="original-price" style="font-size: 13px; color: var(--text-light); text-decoration: line-through;">₹${p.originalPrice.toFixed(2)}</span>` : ''}
            </div>
            <button class="add-to-cart-btn" data-id="${p.id}" style="width: 36px; height: 36px; border-radius: 50%; background-color: #064E3B; color: white; display: flex; align-items: center; justify-content: center; cursor: pointer; transition: all 0.2s ease;">
              <span style="font-size: 20px; font-weight: bold; line-height: 1; transform: translateY(-1px);">+</span>
            </button>
          </div>
        </div>
      `;

      // Event handlers
      card.querySelector(".add-to-cart-btn").addEventListener("click", () => addToCart(p.id));
      card.querySelector(".wishlist-btn").addEventListener("click", () => toggleWishlist(p.id));
      card.querySelector(".quick-view-btn").addEventListener("click", () => openQuickView(p.id));

      container.appendChild(card);
    });
  }

  // --- WEEKLY COUNTDOWN TIMER ---
  function updateCountdown() {
    const hoursVal = document.getElementById("timer-hours");
    const minutesVal = document.getElementById("timer-minutes");
    const secondsVal = document.getElementById("timer-seconds");
    if (!hoursVal || !minutesVal || !secondsVal) return;

    let h = parseInt(hoursVal.textContent);
    let m = parseInt(minutesVal.textContent);
    let s = parseInt(secondsVal.textContent);

    s--;
    if (s < 0) {
      s = 59;
      m--;
      if (m < 0) {
        m = 59;
        h--;
        if (h < 0) {
          h = 23;
        }
      }
    }

    hoursVal.textContent = String(h).padStart(2, '0');
    minutesVal.textContent = String(m).padStart(2, '0');
    secondsVal.textContent = String(s).padStart(2, '0');
  }
  setInterval(updateCountdown, 1000);

  // --- MEAL PREP GUIDES DATA & RENDER ---
  const MEAL_PREPS = [
    {
      id: 101,
      title: "Healthy Avocado Toast with Free-Range Eggs",
      badge: "Breakfast",
      time: "15 Mins",
      calories: "350 kcal",
      img: "assets/prod_avocado.png",
      ingredients: [
        { id: 4, name: "Organic Hass Avocados", qty: "2 pcs", price: 24.70 },
        { id: 16, name: "Premium Free-Range Brown Eggs", qty: "2 pcs", price: 3.80 },
        { id: 19, name: "Artisanal Sourdough Bread", qty: "2 slices", price: 3.20 }
      ],
      steps: [
        "Toast two thick slices of artisanal sourdough bread.",
        "Mash the organic avocados with a pinch of salt and pepper.",
        "Poach or fry the free-range eggs to your preference.",
        "Spread the mashed avocado over the sourdough bread and top with the hot eggs."
      ]
    },
    {
      id: 102,
      title: "Superfood Kale & Tomato Salmon Bowl",
      badge: "Lunch / Dinner",
      time: "25 Mins",
      calories: "520 kcal",
      img: "assets/prod_salmon.png",
      ingredients: [
        { id: 18, name: "Wild-Caught Sockeye Salmon Fillet", qty: "1 fillet (500g)", price: 18.99 },
        { id: 17, name: "Organic Fresh Curly Green Kale", qty: "1 bunch (250g)", price: 2.50 },
        { id: 15, name: "Organic Vine-Ripened Heritage Tomatoes", qty: "150g", price: 4.50 }
      ],
      steps: [
        "Season the wild-caught salmon fillet with salt, pepper, and lemon juice, then grill or bake.",
        "Wash and chop the curly kale, massaging it with olive oil to tenderize.",
        "Halve the juicy heritage tomatoes.",
        "Assemble the kale base, top with warm grilled salmon and tomatoes, then drizzle with honey-mustard dressing."
      ]
    }
  ];

  function renderMealPrepGuides() {
    const container = document.getElementById("meal-prep-container");
    if (!container) return;
    container.innerHTML = "";

    MEAL_PREPS.forEach(guide => {
      const card = document.createElement("div");
      card.className = "meal-prep-card";

      const ingredientsHtml = guide.ingredients.map(ing => `
        <li class="ingredient-item">
          <span class="ingredient-name">${ing.name}</span>
          <span class="ingredient-qty">${ing.qty}</span>
        </li>
      `).join('');

      const stepsHtml = guide.steps.map(step => `<li>${step}</li>`).join('');

      card.innerHTML = `
        <img src="${guide.img}" alt="${guide.title}" class="meal-prep-img">
        <div class="meal-prep-content">
          <span class="meal-prep-badge">${guide.badge}</span>
          <h3 class="meal-prep-title">${guide.title}</h3>
          <div class="meal-prep-meta">
            <span>⏱️ ${guide.time}</span>
            <span>🔥 ${guide.calories}</span>
          </div>
          
          <div class="meal-prep-ingredients">
            <h4>Ingredients Included:</h4>
            <ul class="ingredient-list">
              ${ingredientsHtml}
            </ul>
          </div>

          <div class="meal-prep-steps">
            <h4>Instructions:</h4>
            <ol>
              ${stepsHtml}
            </ol>
          </div>

          <div class="meal-prep-actions">
            <button class="meal-prep-btn" data-id="${guide.id}">
              <span>🛒</span> Add All Ingredients to Basket
            </button>
          </div>
        </div>
      `;

      card.querySelector(".meal-prep-btn").addEventListener("click", () => {
        // Add all ingredients for this guide to cart
        guide.ingredients.forEach(ing => {
          addToCart(ing.id, 1);
        });
        showToast(`All ingredients for "${guide.title}" added to basket!`, "success");
        openCart();
      });

      container.appendChild(card);
    });
  }

  // --- LIVE ORDER STATUS TRACKER SYSTEM ---
  let trackerSimInterval = null;
  let currentTrackerStep = 0; // Steps: 0 (Received), 1 (Preparing), 2 (On the Way), 3 (Delivered)

  const trackerSteps = [
    { label: "Order Received", timeOffset: "Just now", desc: "Your order is being reviewed by our dark store team." },
    { label: "Preparing", timeOffset: "2 mins ago", desc: "Our expert pickers are selecting the freshest organic products." },
    { label: "On the Way", timeOffset: "Estimated 10 mins", desc: "Your Green Basket rider is heading to your delivery address." },
    { label: "Delivered", timeOffset: "Estimated 15 mins", desc: "Order delivered! Thank you for choosing Green Basket." }
  ];

  function startLiveOrderSimulation() {
    renderLiveOrderTracker();

    if (trackerSimInterval) clearInterval(trackerSimInterval);

    // Auto-advance step every 10 seconds to simulate a live delivery tracking process
    trackerSimInterval = setInterval(() => {
      if (currentTrackerStep < 3) {
        currentTrackerStep++;
        renderLiveOrderTracker();

        let statusMsgs = [
          "Your order has been approved and preparation has started!",
          "Our rider has picked up your fresh organic groceries and is on the way!",
          "Rider is arriving at your doorstep. Order Delivered!"
        ];
        showToast(statusMsgs[currentTrackerStep - 1], "info");
      } else {
        clearInterval(trackerSimInterval);
      }
    }, 10000);
  }

  function renderLiveOrderTracker() {
    const container = document.getElementById("order-tracker-container");
    if (!container) return;

    const progressPercent = currentTrackerStep === 0 ? 12.5 : currentTrackerStep === 1 ? 37.5 : currentTrackerStep === 2 ? 62.5 : 100;

    let stepsHtml = trackerSteps.map((step, idx) => {
      let stateClass = "";
      let circleContent = idx + 1;
      if (idx < currentTrackerStep) {
        stateClass = "completed";
        circleContent = "✓";
      } else if (idx === currentTrackerStep) {
        stateClass = "active";
      }

      return `
        <div class="order-step-node ${stateClass}">
          <div class="order-step-circle">${circleContent}</div>
          <div class="order-step-label">${step.label}</div>
          <div class="order-step-time">${idx <= currentTrackerStep ? step.timeOffset : '--'}</div>
        </div>
      `;
    }).join('');

    container.innerHTML = `
      <div class="order-header-info">
        <div>
          <div class="order-id-tag">Order ID: #GB-82910</div>
          <div style="font-size: 13px; color: var(--text-muted); margin-top: 4px;">Payment: Online UPI (Paid)</div>
        </div>
        <div style="text-align: right;">
          <div class="order-eta-tag">Estimated Delivery: 20 Mins</div>
          <div style="font-size: 13px; color: var(--text-muted); margin-top: 4px;">Status: <strong style="color: var(--primary);">${trackerSteps[currentTrackerStep].label}</strong></div>
        </div>
      </div>

      <div class="order-progress-wrapper">
        <div class="order-progress-bar-bg"></div>
        <div class="order-progress-bar-fill" style="width: ${progressPercent}%;"></div>
        <div class="order-steps-container">
          ${stepsHtml}
        </div>
      </div>

      <div class="tracker-details-section">
        <div>
          <h3 style="font-size: 16px; font-weight: 700; margin-bottom: 12px; color: var(--text-main);">Current Status Update</h3>
          <p style="font-size: 14px; color: var(--text-light); line-height: 1.5; background: var(--bg-surface); padding: 15px; border-radius: 8px; margin: 0 0 20px;">
            ${trackerSteps[currentTrackerStep].desc}
          </p>
          
          <div class="driver-info-card" style="margin-top: 20px;">
            <div class="driver-avatar">🚴</div>
            <div>
              <div class="driver-name">Rohan Sharma</div>
              <div class="driver-phone">📞 +91 98765 43210 (Green Basket Rider)</div>
            </div>
          </div>
        </div>
        
        <div class="order-summary-box">
          <h4 style="margin: 0 0 12px;">Order Details</h4>
          <ul class="order-summary-list">
            <li class="order-summary-item"><span>Organic Curly Green Kale x1</span> <span>₹2.50</span></li>
            <li class="order-summary-item"><span>Heritage Vine-Ripened Tomatoes x1</span> <span>₹4.50</span></li>
            <li class="order-summary-item"><span>Premium Free-Range Brown Eggs x1</span> <span>₹3.80</span></li>
            <li class="order-summary-total"><span>Total</span> <span>₹10.80</span></li>
          </ul>
        </div>
      </div>
    `;
  }

  // ─────────────────────────────────────────────
  // MODAL SYSTEM — Generic open/close helpers
  // ─────────────────────────────────────────────
  function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (!modal) return;
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (!modal) return;
    modal.classList.remove('active');
    // Only restore scroll if no other modals are open
    const anyOpen = document.querySelector('.modal-overlay.active');
    if (!anyOpen) document.body.style.overflow = '';
  }

  // Bind all modal close buttons and overlay click
  document.querySelectorAll('.modal-overlay').forEach(overlay => {
    // Close on clicking the X button inside
    const closeBtn = overlay.querySelector('.modal-close-btn');
    if (closeBtn) {
      closeBtn.addEventListener('click', () => {
        overlay.classList.remove('active');
        const anyOpen = document.querySelector('.modal-overlay.active');
        if (!anyOpen) document.body.style.overflow = '';
      });
    }
    // Close on clicking the dim backdrop (not the card itself)
    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) {
        overlay.classList.remove('active');
        const anyOpen = document.querySelector('.modal-overlay.active');
        if (!anyOpen) document.body.style.overflow = '';
      }
    });
  });

  // ─────────────────────────────────────────────
  // 1. CHECKOUT MODAL — Triggered from sidebar cart
  // ─────────────────────────────────────────────
  // Bind "Proceed to Checkout" button in sidebar
  const sidebarCheckoutBtn = document.querySelector('.cart-footer .checkout-btn');
  if (sidebarCheckoutBtn) {
    sidebarCheckoutBtn.addEventListener('click', () => {
      if (cart.length === 0) {
        showToast('Your cart is empty! Add items before checking out.', 'error');
        return;
      }
      // Close cart sidebar and open checkout modal
      closeCart();
      // Populate checkout summary before opening
      const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
      const isVip = localStorage.getItem('gb_vip') === 'true';
      const deliveryFee = subtotal >= 499 || isVip ? 0 : 40;
      const grandTotal = subtotal + deliveryFee;

      const subtotalEl = document.getElementById('checkout-subtotal');
      const deliveryEl = document.getElementById('checkout-delivery-charge');
      const grandTotalEl = document.getElementById('checkout-grand-total');
      if (subtotalEl) subtotalEl.textContent = `₹${subtotal.toFixed(2)}`;
      if (deliveryEl) deliveryEl.textContent = deliveryFee === 0 ? '🎉 FREE' : `₹${deliveryFee.toFixed(2)}`;
      if (grandTotalEl) grandTotalEl.textContent = `₹${grandTotal.toFixed(2)}`;

      setTimeout(() => openModal('checkout-modal'), 300);
    });
  }

  // Payment option selector inside checkout modal
  document.querySelectorAll('.payment-option').forEach(option => {
    option.addEventListener('click', () => {
      document.querySelectorAll('.payment-option').forEach(o => o.classList.remove('active'));
      option.classList.add('active');
    });
  });

  // Checkout form submission → place order
  const checkoutForm = document.getElementById('checkout-form');
  if (checkoutForm) {
    checkoutForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('checkout-name').value.trim();
      const phone = document.getElementById('checkout-phone').value.trim();
      const address = document.getElementById('checkout-address').value.trim();
      const paymentMethod = document.querySelector('.payment-option.active')?.textContent?.trim() || 'UPI / GPay';

      if (!name || !phone || !address) {
        showToast('Please fill in all required delivery details.', 'error');
        return;
      }

      // Save order snapshot before clearing cart
      const orderedItems = [...cart];
      const orderSubtotal = orderedItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
      const isVip = localStorage.getItem('gb_vip') === 'true';
      const deliveryFee = orderSubtotal >= 499 || isVip ? 0 : 40;
      const orderTotal = orderSubtotal + deliveryFee;

      // Generate order ID
      const orderId = 'GB-' + Math.floor(10000 + Math.random() * 90000);

      // Store order details for the live tracker
      window._pendingOrderData = {
        id: orderId,
        name,
        phone,
        address,
        paymentMethod,
        items: orderedItems,
        subtotal: orderSubtotal,
        deliveryFee,
        total: orderTotal
      };

      // Close modal & clear cart
      closeModal('checkout-modal');
      cart = [];
      saveCart();
      updateCartCount();
      renderCart();

      // Reset the tracker step
      currentTrackerStep = 0;

      // Switch to live order tracker view
      setTimeout(() => {
        switchView('order-status-view');
        showToast(`Order ${orderId} placed! Tracking your delivery live. 🚀`, 'success');
      }, 200);

      // Reset checkout form
      checkoutForm.reset();
      document.querySelectorAll('.payment-option').forEach((o, i) => {
        o.classList.toggle('active', i === 0);
      });
    });
  }

  // ─────────────────────────────────────────────
  // 2. SUBSCRIPTION MODAL — Get 20% Cashback
  // ─────────────────────────────────────────────
  // Bind the cashback subscription button
  const subscriptionBtns = document.querySelectorAll('.cashback-content .btn-primary, .cashback-banner-card .btn-primary');
  subscriptionBtns.forEach(btn => {
    btn.addEventListener('click', () => openModal('subscription-modal'));
  });

  // Plan card selection (Monthly / Annual)
  document.querySelectorAll('.plan-card').forEach(card => {
    card.addEventListener('click', () => {
      document.querySelectorAll('.plan-card').forEach(c => c.classList.remove('active'));
      card.classList.add('active');
    });
  });

  // Subscribe button
  const subscribeSubmitBtn = document.getElementById('subscribe-submit-btn');
  if (subscribeSubmitBtn) {
    subscribeSubmitBtn.addEventListener('click', () => {
      const activePlan = document.querySelector('.plan-card.active');
      const planType = activePlan ? activePlan.getAttribute('data-plan') : 'monthly';
      const planLabel = planType === 'annual' ? 'Annual VIP (₹999/year)' : 'Monthly VIP (₹199/month)';

      localStorage.setItem('gb_vip', 'true');
      localStorage.setItem('gb_vip_plan', planType);

      closeModal('subscription-modal');
      showToast(`🌟 Welcome to Green Basket VIP! You're on the ${planLabel} plan. Enjoy 20% cashback!`, 'success');

      // Add VIP badge to brand name
      const brandName = document.querySelector('.brand-name');
      if (brandName && !brandName.querySelector('.vip-badge')) {
        brandName.insertAdjacentHTML('afterend', '<span class="vip-badge">VIP</span>');
      }
    });
  }

  // Check VIP status on load and show badge
  if (localStorage.getItem('gb_vip') === 'true') {
    const brandName = document.querySelector('.brand-name');
    if (brandName && !brandName.querySelector('.vip-badge')) {
      brandName.insertAdjacentHTML('afterend', '<span class="vip-badge">VIP</span>');
    }
  }

  // ─────────────────────────────────────────────
  // 3. SUPPORT MODAL — Help & Support nav + Email
  // ─────────────────────────────────────────────
  // Bind Help & Support nav link
  const navSupportLink = document.getElementById('nav-support');
  if (navSupportLink) {
    // Override the switchView binding since this has no view
    navSupportLink.removeEventListener('click', () => { }); // can't remove anonymous, override instead
    navSupportLink.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopImmediatePropagation();
      openModal('support-modal');
    }, true); // capture phase to run first
  }

  // Bind Email support button
  document.querySelectorAll('.email-support-btn').forEach(btn => {
    if (btn.tagName === 'A' && btn.getAttribute('href') === '#') {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        openModal('support-modal');
      });
    }
  });

  // Support form submission
  const supportForm = document.getElementById('support-form');
  if (supportForm) {
    supportForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const email = document.getElementById('support-email').value.trim();
      const category = document.getElementById('support-category').value;
      const message = document.getElementById('support-message').value.trim();

      if (!email || !message) {
        showToast('Please fill in all required fields.', 'error');
        return;
      }

      const ticketId = 'TKT-' + Math.floor(100000 + Math.random() * 900000);
      closeModal('support-modal');
      supportForm.reset();
      showToast(`✅ Ticket ${ticketId} submitted! Our team will reply to ${email} within 2 hours.`, 'success');
    });
  }

  // ─────────────────────────────────────────────
  // 4. APP DOWNLOAD MODAL — Google Play & App Store
  // ─────────────────────────────────────────────
  document.querySelectorAll('.app-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      openModal('app-download-modal');
    });
  });
  // Also bind the footer install links
  document.querySelectorAll('.footer-links a').forEach(link => {
    const text = link.textContent.trim();
    if (text === 'Google Play' || text === 'App Store') {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        openModal('app-download-modal');
      });
    }
  });

  // ─────────────────────────────────────────────
  // 5. CTA BUTTON WIRING — Shopping
  // ─────────────────────────────────────────────
  // Footer utility nav links (My Cart → open cart, Wishlist → show wishlist, etc.)
  document.querySelectorAll('.footer-links a').forEach(link => {
    const text = link.textContent.trim();
    if (text === 'My Cart') {
      link.addEventListener('click', (e) => { e.preventDefault(); openCart(); });
    } else if (text === 'Checkout') {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        if (cart.length === 0) {
          showToast('Your cart is empty! Add items first.', 'error');
        } else {
          openCart();
        }
      });
    } else if (text === 'Orders') {
      link.addEventListener('click', (e) => { e.preventDefault(); switchView('order-status-view'); });
    } else if (['Fruits', 'Vegetables', 'Dairy', 'Beverages', 'Snacks', 'Fruit & Veg', 'Dairy & Eggs', 'Bakery & Bread'].includes(text)) {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const catMap = {
          'Fruits': 'fruits', 'Vegetables': 'vegetables', 'Dairy': 'dairy',
          'Beverages': 'beverages', 'Snacks': 'snacks', 'Fruit & Veg': 'vegetables',
          'Dairy & Eggs': 'dairy', 'Bakery & Bread': 'bakery'
        };
        const cat = catMap[text];
        if (cat) { switchView('store-view'); setTimeout(() => setCategory(cat), 300); }
      });
    }
  });

  // Mobile bottom nav — Home, Products, Wishlist, Profile
  document.addEventListener('click', (e) => {
    const mobileItem = e.target.closest('.mobile-nav-item');
    if (!mobileItem) return;
    const label = mobileItem.querySelector('span:last-child')?.textContent?.trim();
    document.querySelectorAll('.mobile-nav-item').forEach(i => i.classList.remove('active'));
    mobileItem.classList.add('active');
    if (label === 'Home') switchView('store-view');
    else if (label === 'Products') {
      switchView('store-view');
      setTimeout(() => document.getElementById('catalog-section')?.scrollIntoView({ behavior: 'smooth' }), 300);
    } else if (label === 'Wishlist') {
      showToast(`You have ${wishlist.length} item(s) in your wishlist! ❤️`, 'info');
    } else if (label === 'Profile') {
      const isVip = localStorage.getItem('gb_vip') === 'true';
      const msg = isVip
        ? `🌟 You're a VIP member! Enjoying 20% cashback on all orders.`
        : `👤 You're a Guest. Subscribe for VIP benefits!`;
      showToast(msg, 'info');
      if (!isVip) openModal('subscription-modal');
    }
  });

  // ─────────────────────────────────────────────
  // DYNAMIC LIVE ORDER TRACKER (override with real data)
  // ─────────────────────────────────────────────
  // Override renderLiveOrderTracker to use dynamic order data when available
  const _originalRenderLiveOrderTracker = renderLiveOrderTracker;
  window._pendingOrderData = window._pendingOrderData || null;

  // Patch renderLiveOrderTracker to inject real order details
  // Register as global so switchView (defined earlier) can access it
  const patchedRenderTracker = () => {
    window._patchedRenderTracker = patchedRenderTracker;
    const container = document.getElementById('order-tracker-container');
    if (!container) return;

    const order = window._pendingOrderData;
    const progressPercent = currentTrackerStep === 0 ? 12.5 : currentTrackerStep === 1 ? 37.5 : currentTrackerStep === 2 ? 62.5 : 100;

    let stepsHtml = trackerSteps.map((step, idx) => {
      let stateClass = '';
      let circleContent = idx + 1;
      if (idx < currentTrackerStep) { stateClass = 'completed'; circleContent = '✓'; }
      else if (idx === currentTrackerStep) { stateClass = 'active'; }
      return `
        <div class="order-step-node ${stateClass}">
          <div class="order-step-circle">${circleContent}</div>
          <div class="order-step-label">${step.label}</div>
          <div class="order-step-time">${idx <= currentTrackerStep ? step.timeOffset : '--'}</div>
        </div>
      `;
    }).join('');

    // Build order items list from real cart data if available
    let orderItemsHtml = '';
    let orderTotalDisplay = '₹10.80';
    let orderIdDisplay = '#GB-82910';
    let paymentDisplay = 'Online UPI (Paid)';
    let addressDisplay = '123, Green Lane';

    if (order) {
      orderIdDisplay = `#${order.id}`;
      paymentDisplay = `${order.paymentMethod} (Paid)`;
      addressDisplay = order.address;
      orderTotalDisplay = `₹${order.total.toFixed(2)}`;
      orderItemsHtml = order.items.map(item =>
        `<li class="order-summary-item"><span>${item.name} x${item.quantity}</span> <span>₹${(item.price * item.quantity).toFixed(2)}</span></li>`
      ).join('');
      if (order.deliveryFee === 0) {
        orderItemsHtml += `<li class="order-summary-item"><span>🎉 Free Delivery</span> <span>₹0.00</span></li>`;
      } else {
        orderItemsHtml += `<li class="order-summary-item"><span>Delivery</span> <span>₹${order.deliveryFee.toFixed(2)}</span></li>`;
      }
    } else {
      orderItemsHtml = `
        <li class="order-summary-item"><span>Organic Curly Green Kale x1</span> <span>₹2.50</span></li>
        <li class="order-summary-item"><span>Heritage Vine-Ripened Tomatoes x1</span> <span>₹4.50</span></li>
        <li class="order-summary-item"><span>Premium Free-Range Brown Eggs x1</span> <span>₹3.80</span></li>
      `;
    }

    container.innerHTML = `
      <div class="order-header-info">
        <div>
          <div class="order-id-tag">Order ID: ${orderIdDisplay}</div>
          <div style="font-size: 13px; color: var(--text-muted); margin-top: 4px;">Payment: ${paymentDisplay}</div>
          ${order ? `<div style="font-size: 12px; color: var(--text-light); margin-top: 2px;">📍 ${addressDisplay}</div>` : ''}
        </div>
        <div style="text-align: right;">
          <div class="order-eta-tag">Estimated Delivery: 20 Mins</div>
          <div style="font-size: 13px; color: var(--text-muted); margin-top: 4px;">Status: <strong style="color: var(--primary);">${trackerSteps[currentTrackerStep].label}</strong></div>
        </div>
      </div>

      <div class="order-progress-wrapper">
        <div class="order-progress-bar-bg"></div>
        <div class="order-progress-bar-fill" style="width: ${progressPercent}%;"></div>
        <div class="order-steps-container">
          ${stepsHtml}
        </div>
      </div>

      <div class="tracker-details-section">
        <div>
          <h3 style="font-size: 16px; font-weight: 700; margin-bottom: 12px; color: var(--text-main);">Current Status Update</h3>
          <p style="font-size: 14px; color: var(--text-light); line-height: 1.5; background: var(--bg-surface); padding: 15px; border-radius: 8px; margin: 0 0 20px;">
            ${trackerSteps[currentTrackerStep].desc}
          </p>
          <div class="driver-info-card" style="margin-top: 20px;">
            <div class="driver-avatar">🚴</div>
            <div>
              <div class="driver-name">Rohan Sharma</div>
              <div class="driver-phone">📞 +91 98765 43210 (Green Basket Rider)</div>
            </div>
          </div>
        </div>
        <div class="order-summary-box">
          <h4 style="margin: 0 0 12px;">Order Details</h4>
          <ul class="order-summary-list">
            ${orderItemsHtml}
            <li class="order-summary-total"><span>Total</span> <span>${orderTotalDisplay}</span></li>
          </ul>
        </div>
      </div>
    `;
  };

  // Register as global so switchView (defined earlier) can call it
  window._patchedRenderTracker = patchedRenderTracker;

  // ─────────────────────────────────────────────
  // Initial load
  // ─────────────────────────────────────────────
  updateCartCount();
  console.log("Green Basket JS: Initializing catalog...");
  try {
    renderProducts();
    console.log("Green Basket JS: Catalog initialized successfully.");
  } catch (err) {
    console.error("Green Basket JS: Catalog initialization failed!", err);
  }
});

