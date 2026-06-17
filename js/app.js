// Default Product Database is loaded from js/products_data.js

// Album links mapping
const PHOTO_ALBUMS = {
  'bolsas-carteras': 'https://photos.app.goo.gl/AdWXRuyVsDtofdf98',
  'mochilas': 'https://photos.app.goo.gl/cvWhkoSWzJNGAPFZ9',
  'peluches': 'https://photos.app.goo.gl/iY5eHKvz9iuS8vn2A',
  'accesorios-mas': 'https://photos.app.goo.gl/hLSqQwHKLHsUMKwd9'
};

// Retrieve active products list (loads custom upload if stored in localStorage)
function getActiveProducts() {
  const custom = localStorage.getItem('zalia_custom_products');
  if (custom) {
    try {
      const items = JSON.parse(custom);
      if (items.length > 0) return items;
    } catch(e) {
      console.error("Error reading custom catalog", e);
    }
  }
  return DEFAULT_PRODUCTS;
}

// App State
let cart = [];
let activeCategory = 'bolsas-carteras';
let searchQuery = '';
let displayLimit = 40;
let searchDebounceTimer = null;

// DOM Elements
const productGrid = document.getElementById('product-grid');
const tabsContainer = document.getElementById('tabs-container');
const searchInput = document.getElementById('search-input');
const albumBtn = document.getElementById('album-link-btn');
const albumCategoryName = document.getElementById('album-category-name');
const cartDrawer = document.getElementById('cart-drawer');
const cartBackdrop = document.getElementById('cart-backdrop');
const cartItemsContainer = document.getElementById('cart-items');
const cartCountBadge = document.getElementById('cart-count');
const cartHeaderCount = document.getElementById('cart-header-count');
const subtotalEl = document.getElementById('cart-subtotal');
const savingsEl = document.getElementById('cart-savings');
const totalEl = document.getElementById('cart-total');
const clientNameInput = document.getElementById('client-name');
const clientCityInput = document.getElementById('client-city');
const clientTypeSelect = document.getElementById('client-type');
const themeToggleBtn = document.getElementById('theme-toggle');
const openCartBtn = document.getElementById('open-cart-btn');
const closeCartBtn = document.getElementById('close-cart-btn');
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const navMenu = document.getElementById('nav-menu');
const quoteForm = document.getElementById('quote-form');

// Initialize Hero Slideshow
function initHeroSlider() {
  const slides = document.querySelectorAll('.slide');
  const dots = document.querySelectorAll('.dot');
  const prevBtn = document.getElementById('hero-prev');
  const nextBtn = document.getElementById('hero-next');
  const heroSection = document.getElementById('home');
  
  if (slides.length === 0) return;
  
  let currentSlide = 0;
  let slideInterval;
  const intervalTime = 6000; // 6 seconds auto cycle
  
  function showSlide(index) {
    if (index >= slides.length) index = 0;
    if (index < 0) index = slides.length - 1;
    
    slides.forEach(slide => slide.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));
    
    slides[index].classList.add('active');
    if (dots[index]) dots[index].classList.add('active');
    
    currentSlide = index;
  }
  
  function nextSlide() {
    showSlide(currentSlide + 1);
  }
  
  function prevSlide() {
    showSlide(currentSlide - 1);
  }
  
  function startAutoSlide() {
    slideInterval = setInterval(nextSlide, intervalTime);
  }
  
  function resetAutoSlide() {
    clearInterval(slideInterval);
    startAutoSlide();
  }
  
  if (prevBtn) {
    prevBtn.addEventListener('click', (e) => {
      e.preventDefault();
      prevSlide();
      resetAutoSlide();
    });
  }
  
  if (nextBtn) {
    nextBtn.addEventListener('click', (e) => {
      e.preventDefault();
      nextSlide();
      resetAutoSlide();
    });
  }
  
  dots.forEach((dot, idx) => {
    dot.addEventListener('click', (e) => {
      e.preventDefault();
      showSlide(idx);
      resetAutoSlide();
    });
  });
  
  // Touch Swipe Support for Mobile UX
  if (heroSection) {
    let startX = 0;
    let endX = 0;
    
    heroSection.addEventListener('touchstart', (e) => {
      startX = e.touches[0].clientX;
    }, { passive: true });
    
    heroSection.addEventListener('touchend', (e) => {
      endX = e.changedTouches[0].clientX;
      handleSwipe();
    }, { passive: true });
    
    function handleSwipe() {
      const threshold = 50;
      if (startX - endX > threshold) {
        nextSlide();
        resetAutoSlide();
      } else if (endX - startX > threshold) {
        prevSlide();
        resetAutoSlide();
      }
    }
  }

  // Mini-cards category redirect with smooth scroll
  const miniCards = document.querySelectorAll('.mini-card');
  const catKeys = ['bolsas-carteras', 'mochilas', 'peluches'];
  miniCards.forEach((card, idx) => {
    card.addEventListener('click', (e) => {
      e.preventDefault();
      const targetCat = catKeys[idx];
      if (targetCat) {
        activeCategory = targetCat;
        
        document.querySelectorAll('.tab-btn').forEach(btn => {
          if (btn.getAttribute('data-category') === targetCat) {
            btn.classList.add('active');
          } else {
            btn.classList.remove('active');
          }
        });
        
        const categoriesMap = {
          'bolsas-carteras': 'Bolsas y Carteras',
          'mochilas': 'Mochilas',
          'peluches': 'Peluches',
          'accesorios-mas': 'Accesorios y Más'
        };
        
        const albumBtn = document.getElementById('album-link-btn');
        const albumCategoryName = document.getElementById('album-category-name');
        if (albumBtn && albumCategoryName) {
          albumBtn.setAttribute('href', PHOTO_ALBUMS[targetCat]);
          albumCategoryName.textContent = categoriesMap[targetCat];
        }
        
        renderCatalog();
        
        const catalogSec = document.getElementById('catalogo');
        if (catalogSec) {
          catalogSec.scrollIntoView({ behavior: 'smooth' });
        }
      }
    });
  });
  
  startAutoSlide();
}

// Initialize Website
function init() {
  renderTabs();
  renderCatalog();
  setupEventListeners();
  loadCartFromStorage();
  checkDarkModePref();
  initHeroSlider();
}

// Check Dark Mode Preference
function checkDarkModePref() {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark' || (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.body.classList.add('dark-mode-active');
    updateThemeIcon(true);
  } else {
    document.body.classList.remove('dark-mode-active');
    updateThemeIcon(false);
  }
}

// Toggle Dark Mode Icon
function updateThemeIcon(isDark) {
  if (themeToggleBtn) {
    themeToggleBtn.innerHTML = isDark ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
  }
}

// Render Tabs Control
function renderTabs() {
  const categoriesMap = {
    'bolsas-carteras': 'Bolsas y Carteras',
    'mochilas': 'Mochilas',
    'peluches': 'Peluches',
    'accesorios-mas': 'Accesorios y Más'
  };

  if (!tabsContainer) return;

  // Count products per category
  const allProducts = getActiveProducts();
  const countByCategory = {};
  allProducts.forEach(p => {
    countByCategory[p.category] = (countByCategory[p.category] || 0) + 1;
  });

  tabsContainer.innerHTML = '';
  Object.keys(categoriesMap).forEach(key => {
    const count = countByCategory[key] || 0;
    const button = document.createElement('button');
    button.className = `tab-btn ${key === activeCategory ? 'active' : ''}`;
    button.setAttribute('data-category', key);
    button.innerHTML = `${categoriesMap[key]} <span style="font-size:0.75rem; opacity:0.75; font-weight:500;">(${count})</span>`;
    button.addEventListener('click', () => {
      activeCategory = key;
      displayLimit = 40; // Reset display limit on tab change
      searchQuery = '';
      if (searchInput) searchInput.value = '';
      document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');
      
      // Update Google Photos redirection text and link
      if (albumBtn && albumCategoryName) {
        albumBtn.setAttribute('href', PHOTO_ALBUMS[key]);
        albumCategoryName.textContent = categoriesMap[key];
      }

      renderCatalog();
    });
    tabsContainer.appendChild(button);
  });

  // Set initial album info
  if (albumBtn && albumCategoryName) {
    albumBtn.setAttribute('href', PHOTO_ALBUMS[activeCategory]);
    albumCategoryName.textContent = categoriesMap[activeCategory];
  }
}

// Render Catalog Grid (Simplified - No Piece/Box Redundant buttons)
function renderCatalog() {
  if (!productGrid) return;
  productGrid.innerHTML = '';
  productGrid.scrollLeft = 0; // Reset scroll position on category switch

  const activeProducts = getActiveProducts();
  const filteredProducts = activeProducts.filter(prod => {
    const matchesCategory = prod.category === activeCategory;
    const query = searchQuery.toLowerCase().trim();
    const matchesSearch = !query ? true : (
      prod.name.toLowerCase().includes(query) ||
      (prod.desc && prod.desc.toLowerCase().includes(query)) ||
      prod.id.toLowerCase().includes(query) ||
      (prod.barcode && prod.barcode.toLowerCase().includes(query))
    );
    return matchesCategory && matchesSearch;
  });

  if (filteredProducts.length === 0) {
    productGrid.innerHTML = `
      <div style="grid-column: 1/-1; text-align: center; padding: 40px; color: var(--text-muted);">
        <i class="fas fa-box-open" style="font-size: 3rem; margin-bottom: 16px;"></i>
        <p>No se encontraron productos en esta categoría.</p>
      </div>
    `;
    return;
  }

  // Slice based on pagination limit
  const displayedProducts = filteredProducts.slice(0, displayLimit);

  displayedProducts.forEach(product => {
    // Check if item is already in cart to display existing quantity
    const cartItem = cart.find(item => item.id === product.id);
    const initialQty = cartItem ? cartItem.qty : 1;

    // Stock Badge & logic
    const stockVal = typeof product.stock !== 'undefined' ? Number(product.stock) : 999;
    let stockBadge = '';
    let isOutOfStock = false;
    let maxQtyAttr = '';
    
    if (stockVal <= 0) {
      stockBadge = `<span class="badge-tag" style="background: #ef4444; color: white; right: auto; left: 12px; font-weight:700;"><i class="fas fa-exclamation-triangle"></i> Agotado</span>`;
      isOutOfStock = true;
    } else if (stockVal < 10) {
      stockBadge = `<span class="badge-tag" style="background: #f59e0b; color: white; right: auto; left: 12px; font-weight:700;"><i class="fas fa-hourglass-half"></i> Últimas ${stockVal} pzs</span>`;
      maxQtyAttr = `max="${stockVal}"`;
    } else {
      stockBadge = `<span class="badge-tag" style="background: #10b981; color: white; right: auto; left: 12px; font-weight:700;"><i class="fas fa-check-circle"></i> ${stockVal} disp.</span>`;
      maxQtyAttr = `max="${stockVal}"`;
    }

    const card = document.createElement('div');
    card.className = 'product-card';
    
    const qtyControlHtml = isOutOfStock ? `
      <div class="quantity-control disabled" style="width: 110px; opacity: 0.5; pointer-events: none;">
        <button class="qty-btn minus">-</button>
        <input type="number" class="qty-val" value="0" disabled style="width: 46px;">
        <button class="qty-btn plus">+</button>
      </div>
    ` : `
      <div class="quantity-control" style="width: 110px;">
        <button class="qty-btn minus" data-id="${product.id}">-</button>
        <input type="number" class="qty-val" id="qty-input-${product.id}" value="${initialQty}" ${maxQtyAttr} style="width: 46px; -moz-appearance: textfield;">
        <button class="qty-btn plus" data-id="${product.id}">+</button>
      </div>
    `;

    const actionBtnHtml = isOutOfStock ? `
      <button class="btn-add-card" disabled style="font-size: 0.95rem; background: #64748b; cursor: not-allowed; box-shadow: none;">
        <i class="fas fa-times-circle"></i> Sin existencias
      </button>
    ` : `
      <button class="btn-add-card add-to-cart-btn" data-id="${product.id}" style="font-size: 0.95rem;">
        <i class="fas fa-shopping-cart"></i> Agregar Piezas
      </button>
    `;

    card.innerHTML = `
      <div class="product-img-wrapper">
        <img class="product-img" src="${product.image}" alt="${product.name}" loading="lazy">
        <span class="badge-tag">${product.tag || 'Contenedor'}</span>
        <span class="badge-tag tag-import">Importación</span>
        ${stockBadge}
      </div>
      <div class="product-info">
        <h3>${product.name}</h3>
        <p style="font-size: 0.85rem; color: var(--text-muted); margin-bottom: 12px; height: 40px; overflow: hidden; text-overflow: ellipsis; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical;">
          ${product.desc || ''}
        </p>
        
        <span class="pcs-box-badge">
          <i class="fas fa-boxes"></i> Caja cerrada con: <strong>${product.pcsPerBox} pzs</strong>
        </span>

        <div class="product-prices">
          <div class="price-box retail">
            <span class="price-label">1-2 Pzs</span>
            <span class="price-value">$${product.retailPrice}</span>
          </div>
          <div class="price-box wholesale">
            <span class="price-label">Mayoreo (3+)</span>
            <span class="price-value">$${product.wholesalePrice}</span>
          </div>
          <div class="price-box box-tier">
            <span class="price-label">Caja (pza)</span>
            <span class="price-value">$${product.boxPrice}</span>
          </div>
        </div>

        <div class="product-actions">
          ${qtyControlHtml}
          ${actionBtnHtml}
        </div>
      </div>
    `;
    productGrid.appendChild(card);
  });

  // Load More Button
  if (filteredProducts.length > displayLimit) {
    const loadMoreContainer = document.createElement('div');
    loadMoreContainer.style.gridColumn = '1 / -1';
    loadMoreContainer.style.textAlign = 'center';
    loadMoreContainer.style.padding = '20px 0 40px';
    
    const remaining = filteredProducts.length - displayLimit;
    const loadMoreBtn = document.createElement('button');
    loadMoreBtn.className = 'btn-primary';
    loadMoreBtn.style.padding = '12px 30px';
    loadMoreBtn.style.fontSize = '1rem';
    loadMoreBtn.innerHTML = `<i class="fas fa-plus-circle"></i> Cargar más (${remaining} productos restantes)`;
    
    loadMoreBtn.addEventListener('click', () => {
      displayLimit += 40;
      renderCatalog();
    });
    
    loadMoreContainer.appendChild(loadMoreBtn);
    productGrid.appendChild(loadMoreContainer);
  }

  setupCardControls();
}

// Bind + / - and Add to Cart Buttons (Scoped inside productGrid to avoid cart input collisions)
function setupCardControls() {
  if (!productGrid) return;

  // Plus Buttons
  productGrid.querySelectorAll('.qty-btn.plus').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const id = btn.getAttribute('data-id');
      const input = document.getElementById(`qty-input-${id}`);
      const activeProducts = getActiveProducts();
      const product = activeProducts.find(p => String(p.id).trim() === String(id).trim());
      const stockLimit = product && typeof product.stock !== 'undefined' ? Number(product.stock) : 999;
      if (input) {
        let val = parseInt(input.value) || 0;
        if (val < stockLimit) {
          input.value = val + 1;
        } else {
          alert(`Límite alcanzado: solo hay ${stockLimit} piezas disponibles de este producto.`);
        }
      }
    });
  });

  // Minus Buttons
  productGrid.querySelectorAll('.qty-btn.minus').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const id = btn.getAttribute('data-id');
      const input = document.getElementById(`qty-input-${id}`);
      if (input) {
        let val = parseInt(input.value) || 0;
        if (val > 1) {
          input.value = val - 1;
        }
      }
    });
  });

  // Direct quantity input change
  productGrid.querySelectorAll('.qty-val').forEach(input => {
    input.addEventListener('change', () => {
      const id = input.id.replace('qty-input-', '');
      const activeProducts = getActiveProducts();
      const product = activeProducts.find(p => String(p.id).trim() === String(id).trim());
      const stockLimit = product && typeof product.stock !== 'undefined' ? Number(product.stock) : 999;
      let val = parseInt(input.value) || 1;
      if (val < 1) val = 1;
      if (val > stockLimit) {
        alert(`Cantidad limitada a las existencias disponibles: ${stockLimit} pzs.`);
        val = stockLimit;
      }
      input.value = val;
    });
  });

  // Add To Cart Buttons
  productGrid.querySelectorAll('.add-to-cart-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const id = btn.getAttribute('data-id');
      const input = document.getElementById(`qty-input-${id}`);
      const qty = input ? (parseInt(input.value) || 1) : 1;

      addToCart(id, qty);
      
      // Visual Feedback
      const originalHtml = btn.innerHTML;
      btn.innerHTML = '<i class="fas fa-check"></i> ¡Agregado!';
      btn.style.background = 'linear-gradient(135deg, #10b981, #059669)';
      setTimeout(() => {
        btn.innerHTML = originalHtml;
        btn.style.background = '';
      }, 1500);
    });
  });
}

// Add Item To Cart (With robust loose ID matching and types sanitation)
function addToCart(productId, qty) {
  const activeProducts = getActiveProducts();
  const product = activeProducts.find(p => String(p.id).trim() === String(productId).trim());
  if (!product) return;

  const cartIndex = cart.findIndex(item => String(item.id).trim() === String(productId).trim());

  if (cartIndex > -1) {
    cart[cartIndex].qty = parseInt(qty) || 1; 
  } else {
    cart.push({
      id: String(product.id).trim(),
      name: product.name,
      wholesalePrice: Number(product.wholesalePrice) || 0,
      retailPrice: Number(product.retailPrice) || 0,
      boxPrice: Number(product.boxPrice) || 0,
      pcsPerBox: Number(product.pcsPerBox) || 12,
      image: product.image,
      qty: Math.max(1, parseInt(qty) || 1)
    });
  }

  saveCartToStorage();
  renderCart();
  toggleCart(true); // Slide out cart
}

// Update Cart Quantity Directly in Drawer (With robust loose ID matching and types sanitation)
function updateCartQty(productId, newQty) {
  const cartIndex = cart.findIndex(item => String(item.id).trim() === String(productId).trim());
  if (cartIndex > -1) {
    const qtyInt = parseInt(newQty) || 0;
    if (qtyInt <= 0) {
      removeFromCart(productId);
    } else {
      cart[cartIndex].qty = qtyInt;
      saveCartToStorage();
      renderCart();
    }
  }
}

// Remove Item From Cart (With robust loose ID matching)
function removeFromCart(productId) {
  cart = cart.filter(item => String(item.id).trim() !== String(productId).trim());
  saveCartToStorage();
  renderCart();
  renderCatalog(); // Sync catalog inputs
}

// Render Cart Drawer Contents (Calculates 3 tiers automatically with absolute type safety)
function renderCart() {
  if (!cartItemsContainer) return;
  cartItemsContainer.innerHTML = '';
  
  // Total pieces in cart (used for MIXED WHOLESALE rule)
  const totalPiecesInCart = cart.reduce((sum, item) => sum + (parseInt(item.qty) || 0), 0);
  const isWholesaleMixed = totalPiecesInCart >= 3;

  cartCountBadge.textContent = totalPiecesInCart;
  cartHeaderCount.textContent = totalPiecesInCart;

  if (cart.length === 0) {
    cartItemsContainer.innerHTML = `
      <div class="cart-empty-msg">
        <i class="fas fa-shopping-basket" style="font-size: 3rem; color: var(--text-muted); margin-bottom: 16px; display:block;"></i>
        Tus productos cotizados aparecerán aquí. ¡Agrega algunos del catálogo!
      </div>
    `;
    subtotalEl.textContent = '$0 MXN';
    savingsEl.textContent = '$0 MXN';
    totalEl.textContent = '$0 MXN';
    return;
  }

  let finalSubtotal = 0; // Total actually charged
  let regularRetailTotal = 0; // Cost if everything was bought individually at normal retail price

  cart.forEach(item => {
    let pricePerPiece = 0;
    let tierLabel = '';
    let promptTip = '';
    const qty = parseInt(item.qty) || 1;
    const pcsPerBox = parseInt(item.pcsPerBox) || 12;

    // Automatic Pricing Tier Selection
    if (qty >= pcsPerBox) {
      // Box price applied (Quantity of this item equals or exceeds one full box capacity)
      pricePerPiece = Number(item.boxPrice) || 0;
      tierLabel = 'Precio Caja';
      
      const boxesCount = Math.floor(qty / pcsPerBox);
      const remainder = qty % pcsPerBox;
      if (remainder > 0) {
        promptTip = `<small style="color:var(--secondary); display:block; margin-top:2px;">📦 Llevas ${boxesCount} caja(s) y ${remainder} pzs sueltas con precio caja</small>`;
      } else {
        promptTip = `<small style="color:var(--success); display:block; margin-top:2px;">📦 Llevas exactamente ${boxesCount} caja(s) cerrada(s)</small>`;
      }
    } else if (isWholesaleMixed) {
      // Wholesale price applied (Total pieces of all products in cart is 3 or more)
      pricePerPiece = Number(item.wholesalePrice) || 0;
      tierLabel = 'Precio Mayoreo';
      
      // Tip to unlock Box Price
      const diff = pcsPerBox - qty;
      promptTip = `<small style="color:var(--text-muted); display:block; margin-top:2px;">💡 Agrega ${diff} pzs más para precio caja ($${item.boxPrice})</small>`;
    } else {
      // Retail price applied
      pricePerPiece = Number(item.retailPrice) || 0;
      tierLabel = 'Precio Normal (Menudeo)';
      
      // Tip to unlock Wholesale
      const diffWholesale = 3 - totalPiecesInCart;
      promptTip = `<small style="color:var(--text-muted); display:block; margin-top:2px;">💡 Agrega ${diffWholesale} pza(s) más para precio mayoreo mixto ($${item.wholesalePrice})</small>`;
    }

    const itemCost = pricePerPiece * qty;
    finalSubtotal += itemCost;
    regularRetailTotal += (Number(item.retailPrice) || 0) * qty;

    const row = document.createElement('div');
    row.className = 'cart-item';
    row.innerHTML = `
      <img class="cart-item-img" src="${item.image}" alt="${item.name}">
      <div class="cart-item-details">
        <div class="cart-item-title">${item.name}</div>
        <div class="cart-item-pricing" style="font-size:0.85rem; line-height: 1.4;">
          Desglose: <strong>${qty} pzs</strong> x <span class="highlight">$${pricePerPiece} MXN</span>
          <br>
          <span style="color:var(--primary); font-weight:600;">Tasa: ${tierLabel}</span>
          ${promptTip}
          Subtotal: <strong class="cart-subtotal-item">$${itemCost} MXN</strong>
        </div>
      </div>
      <div class="cart-item-qty">
        <div class="quantity-control">
          <button class="qty-btn cart-qty-minus" data-id="${item.id}">-</button>
          <input type="number" class="qty-val cart-qty-input" data-id="${item.id}" value="${qty}" min="1" style="-moz-appearance: textfield;">
          <button class="qty-btn cart-qty-plus" data-id="${item.id}">+</button>
        </div>
        <button class="btn-remove-item" data-id="${item.id}" title="Eliminar del cotizador">
          <i class="fas fa-trash-alt"></i>
        </button>
      </div>
    `;
    cartItemsContainer.appendChild(row);
  });

  const totalSavings = regularRetailTotal - finalSubtotal;

  subtotalEl.textContent = `$${regularRetailTotal} MXN`;
  savingsEl.textContent = `$${totalSavings} MXN`;
  totalEl.textContent = `$${finalSubtotal} MXN`;

  setupCartEvents();
}

// Bind Events inside Cart Drawer (Using loose ID matching for event handlers)
function setupCartEvents() {
  const activeProducts = getActiveProducts();

  // Cart Plus - with stock enforcement
  document.querySelectorAll('.cart-qty-plus').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = btn.getAttribute('data-id');
      const item = cart.find(i => String(i.id).trim() === String(id).trim());
      if (item) {
        const product = activeProducts.find(p => String(p.id).trim() === String(id).trim());
        const stockLimit = product && typeof product.stock !== 'undefined' ? Number(product.stock) : 999;
        if (item.qty < stockLimit) {
          updateCartQty(id, item.qty + 1);
        } else {
          // Flash the button red briefly
          btn.style.background = '#ef4444';
          btn.style.color = 'white';
          setTimeout(() => { btn.style.background = ''; btn.style.color = ''; }, 800);
        }
      }
    });
  });

  // Cart Minus
  document.querySelectorAll('.cart-qty-minus').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = btn.getAttribute('data-id');
      const item = cart.find(i => String(i.id).trim() === String(id).trim());
      if (item) {
        updateCartQty(id, item.qty - 1);
      }
    });
  });

  // Cart direct input change
  document.querySelectorAll('.cart-qty-input').forEach(input => {
    input.addEventListener('change', () => {
      const id = input.getAttribute('data-id');
      const product = activeProducts.find(p => String(p.id).trim() === String(id).trim());
      const stockLimit = product && typeof product.stock !== 'undefined' ? Number(product.stock) : 999;
      let val = parseInt(input.value) || 1;
      if (val < 1) val = 1;
      if (val > stockLimit) {
        val = stockLimit;
        input.value = val;
      }
      updateCartQty(id, val);
    });
  });

  // Cart Remove
  document.querySelectorAll('.btn-remove-item').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = btn.getAttribute('data-id');
      removeFromCart(id);
    });
  });
}

// Toggle Cart Sidebar Open/Close
function toggleCart(show) {
  if (!cartDrawer) return;
  if (show) {
    cartDrawer.classList.add('open');
    cartBackdrop.classList.add('open');
    document.body.style.overflow = 'hidden'; 
  } else {
    cartDrawer.classList.remove('open');
    cartBackdrop.classList.remove('open');
    document.body.style.overflow = ''; 
  }
}

// Setup Event Listeners
function setupEventListeners() {
  if (openCartBtn) openCartBtn.addEventListener('click', () => toggleCart(true));
  if (closeCartBtn) closeCartBtn.addEventListener('click', () => toggleCart(false));
  if (cartBackdrop) cartBackdrop.addEventListener('click', () => toggleCart(false));

  // Toggle Mobile Menu
  if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', () => {
      navMenu.classList.toggle('open');
      const icon = mobileMenuBtn.querySelector('i');
      if (navMenu.classList.contains('open')) {
        icon.className = 'fas fa-times';
      } else {
        icon.className = 'fas fa-bars';
      }
    });
  }

  // Close Mobile Menu on link click
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      if (navMenu) navMenu.classList.remove('open');
      if (mobileMenuBtn) mobileMenuBtn.querySelector('i').className = 'fas fa-bars';
    });
  });

  // Search Input Handler (debounced 250ms for performance with 2009 products)
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      clearTimeout(searchDebounceTimer);
      searchDebounceTimer = setTimeout(() => {
        searchQuery = e.target.value;
        displayLimit = 40; // Reset pagination on new search
        renderCatalog();
      }, 250);
    });
  }

  // Theme Toggle Button Handler
  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      document.body.classList.toggle('dark-mode-active');
      const isDark = document.body.classList.contains('dark-mode-active');
      localStorage.setItem('theme', isDark ? 'dark' : 'light');
      updateThemeIcon(isDark);
    });
  }

  // Sticky Header logic on scroll
  window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (header) {
      if (window.scrollY > 50) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    }
  });

  // Form Submit Handler
  if (quoteForm) quoteForm.addEventListener('submit', sendWhatsAppQuote);
}

// Compile Quote and Redirect to WhatsApp
function sendWhatsAppQuote(e) {
  e.preventDefault();
  
  if (cart.length === 0) {
    alert('Por favor agrega al menos un artículo a tu cotización.');
    return;
  }

  const name = clientNameInput.value.trim();
  const city = clientCityInput.value.trim();
  const clientType = clientTypeSelect.value;
  
  // Fetch Delivery Option Selected in index.html
  const deliveryOption = document.querySelector('input[name="delivery-method"]:checked');
  const deliveryVal = deliveryOption ? deliveryOption.value : 'envio'; // 'envio' or 'tienda'

  if (!name || !city) {
    alert('Por favor completa todos los campos del formulario.');
    return;
  }

  const totalPiecesInCart = cart.reduce((sum, item) => sum + item.qty, 0);
  const isWholesaleMixed = totalPiecesInCart >= 3;
  let totalCost = 0;

  // Header of WhatsApp Message
  let message = `🛍️ *ZALIA SHOP - SOLICITUD DE PEDIDO*\n`;
  message += `━━━━━━━━━━━━━━━━━━━━\n`;
  message += `👤 *Cliente:* ${name}\n`;
  message += `📍 *Ciudad/Origen:* ${city}\n`;
  message += `🚚 *Método:* ${deliveryVal === 'envio' ? 'Envío a Domicilio (República)' : 'Recoger en Tienda Física'}\n`;
  message += `🏷️ *Cliente:* ${clientType === 'wholesale' ? 'Negocio / Mayorista' : 'Minorista'}\n`;
  message += `━━━━━━━━━━━━━━━━━━━━\n\n`;
  message += `📦 *Detalle del Pedido:*\n`;

  cart.forEach(item => {
    let pricePerPiece = 0;
    let tierLabel = '';

    if (item.qty >= item.pcsPerBox) {
      pricePerPiece = item.boxPrice;
      const boxesCount = Math.floor(item.qty / item.pcsPerBox);
      const remainder = item.qty % item.pcsPerBox;
      tierLabel = `Caja cerrada (${boxesCount} caja(s) de ${item.pcsPerBox} pzs ${remainder > 0 ? `+ ${remainder} sueltas` : ''})`;
    } else if (isWholesaleMixed) {
      pricePerPiece = item.wholesalePrice;
      tierLabel = 'Mayoreo Mixto';
    } else {
      pricePerPiece = item.retailPrice;
      tierLabel = 'Normal (Menudeo)';
    }

    const cost = pricePerPiece * item.qty;
    totalCost += cost;

    message += `• *${item.qty} pzs* - ${item.name}\n`;
    message += `  _P. Unitario:_ $${pricePerPiece} MXN | _Subtotal:_ *$${cost} MXN*\n`;
    message += `  _Tasa aplicada:_ ${tierLabel}\n\n`;
  });

  message += `━━━━━━━━━━━━━━━━━━━━\n`;
  
  // Calculate regular retail cost to show savings
  let regularRetailTotal = 0;
  cart.forEach(item => {
    regularRetailTotal += item.retailPrice * item.qty;
  });
  
  const savings = regularRetailTotal - totalCost;

  message += `📦 *Total Piezas:* ${totalPiecesInCart} pzs\n`;
  if (savings > 0) {
    message += `💰 *Subtotal regular:* $${regularRetailTotal} MXN\n`;
    message += `🎉 *Ahorro por Volumen:* $${savings} MXN\n`;
  }
  
  message += `💵 *TOTAL NETO:* *$${totalCost} MXN*\n\n`;
  message += `*Nota:* Pedido enviado desde el cotizador web. Quedo en espera de confirmar disponibilidad física del contenedor y costos de envío.`;

  // WhatsApp Destination Number: 5613137613
  const whatsappNumber = '5215613137613';
  const encodedText = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedText}`;

  window.open(whatsappUrl, '_blank');
}

// Local Storage persistences
function saveCartToStorage() {
  localStorage.setItem('zalia_cart', JSON.stringify(cart));
}

// Sanitizes and repairs cart data from storage against active catalog parameters
function loadCartFromStorage() {
  const savedCart = localStorage.getItem('zalia_cart');
  if (savedCart) {
    try {
      const parsed = JSON.parse(savedCart);
      if (Array.isArray(parsed)) {
        const activeProducts = getActiveProducts();
        cart = parsed.map(item => {
          if (!item || !item.id) return null;
          const product = activeProducts.find(p => String(p.id).trim() === String(item.id).trim());
          if (product) {
            return {
              id: String(product.id).trim(),
              name: product.name,
              wholesalePrice: Number(product.wholesalePrice) || 0,
              retailPrice: Number(product.retailPrice) || 0,
              boxPrice: Number(product.boxPrice) || 0,
              pcsPerBox: Number(product.pcsPerBox) || 12,
              image: product.image,
              qty: Math.max(1, parseInt(item.qty) || 1)
            };
          }
          return null;
        }).filter(item => item !== null);
      } else {
        cart = [];
      }
      saveCartToStorage();
      renderCart();
    } catch (e) {
      console.error("Error loading cart from storage:", e);
      cart = [];
    }
  }
}

// Run app
document.addEventListener('DOMContentLoaded', init);
