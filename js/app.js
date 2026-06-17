// Default Product Database is loaded from js/products_data.js

// Album links mapping
const PHOTO_ALBUMS = {
  'modulo-1': 'https://photos.app.goo.gl/AdWXRuyVsDtofdf98',
  'modulo-2': 'https://photos.app.goo.gl/cvWhkoSWzJNGAPFZ9',
  'modulo-3': 'https://photos.app.goo.gl/iY5eHKvz9iuS8vn2A',
  'modulo-4': 'https://photos.app.goo.gl/hLSqQwHKLHsUMKwd9'
};

// Language i18n configurations
let currentLanguage = 'es';

const CATEGORY_TRANSLATIONS = {
  es: {
    'modulo-1': 'Módulo 1',
    'modulo-2': 'Módulo 2',
    'modulo-3': 'Módulo 3',
    'modulo-4': 'Módulo 4'
  },
  zh: {
    'modulo-1': '模块 1',
    'modulo-2': '模块 2',
    'modulo-3': '模块 3',
    'modulo-4': '模块 4'
  }
};


const TRANSLATIONS = {
  es: {
    "top-banner": "🚀 ¡NUEVA MERCANCÍA DIRECTA DE CONTENEDOR! ENVIAMOS A TODO MÉXICO DESDE CDMX 📦",
    "nav-home": "Inicio",
    "nav-catalog": "Catálogo",
    "nav-how-to-buy": "¿Cómo Comprar?",
    "nav-about": "Nosotros",
    "nav-location": "Ubicación",
    "slide1-badge": "<i class=\"fas fa-ship\"></i> Importación Directa",
    "slide1-title": "Contenedores Completos <br><span class=\"gradient-text\">Al Mejor Precio</span>",
    "slide1-desc": "Precios directos de fábrica en bolsas de mano, carteras, mochilas y peluches. Surtimos a mayoristas y minoristas en todo México.",
    "btn-view-catalog": "<i class=\"fas fa-store\"></i> Ver Catálogo",
    "btn-physical-store": "<i class=\"fas fa-map-marker-alt\"></i> Tienda Física",
    "slide2-badge": "<i class=\"fab fa-tiktok\"></i> @zalia.shop",
    "slide2-title": "Desempaques en Vivo <br><span class=\"gradient-text\">Y Novedades Diarias</span>",
    "slide2-desc": "Mira la mercancía llegando directo de aduana. Síguenos y no te pierdas ningún directo de contenedor.",
    "btn-follow-tiktok": "<i class=\"fab fa-tiktok\"></i> Seguir en TikTok",
    "slide3-badge": "<i class=\"fas fa-boxes\"></i> Tres Niveles de Precios",
    "slide3-title": "Compra por Pieza, <br><span class=\"gradient-text\">Mayoreo o Caja</span>",
    "slide3-desc": "Precios especiales para emprendedores. Mayoreo a partir de 3 piezas mixtas. Ahorros de hasta 50% por caja cerrada.",
    "btn-how-to-buy-cta": "<i class=\"fas fa-question-circle\"></i> ¿Cómo Comprar?",
    "mini-modulo-1": "Módulo 1",
    "mini-modulo-2": "Módulo 2",
    "mini-modulo-3": "Módulo 3",
    "mini-modulo-4": "Módulo 4",
    "catalog-title": "Catálogo de Ofertas y Novedades",
    "catalog-desc": "Surtido directo. Utiliza las pestañas para explorar los módulos de productos y cotizar.",
    "search-placeholder": "Buscar por modelo, código de barras...",
    "price-filter-label": "Precio:",
    "price-min-placeholder": "Mín",
    "price-max-placeholder": "Máx",
    "how-title": "¿Cómo solicitar tu cotización?",
    "how-desc": "Hemos diseñado un proceso rápido y digitalizado para que puedas cotizar y asegurar tu mercancía en minutos.",
    "step1-title": "Selecciona tus Productos",
    "step1-desc": "Navega en nuestro catálogo, define tus cantidades de prueba y agrégalos a tu cotización digital.",
    "step2-title": "Revisa tu Lista",
    "step2-desc": "Abre el carrito, ingresa tu nombre y la ciudad a la que requiere que se envíe o si retiras en tienda física.",
    "step3-title": "Envía por WhatsApp",
    "step3-desc": "Haz clic en enviar y un asesor de ventas recibirá tu orden para verificar existencias y concretar tu pago.",
    "why-choose-title": "¿Por qué elegir Zalia Shop?",
    "why-choose-desc": "Somos distribuidores clave en el Centro Histórico de la CDMX con un modelo de negocio enfocado en tu crecimiento comercial.",
    "prop1-title": "Precios de Contenedor",
    "prop1-desc": "Importamos volúmenes masivos directamente sin intermediarios, lo que nos permite ofrecer el costo más competitivo del mercado nacional.",
    "prop2-title": "Mayoreo y Menudeo",
    "prop2-desc": "Accede a precios de mayoreo súper accesibles a partir de tan solo 3 piezas de la tienda, facilitando que inicies o surtas tu negocio.",
    "prop3-title": "Envíos Rápidos a México",
    "prop3-desc": "Despachamos tu pedido directo a tu domicilio en cualquier estado de la República por medio de paqueterías seguras y económicas.",
    "contact-title": "Nuestra Sucursal y Contacto",
    "contact-desc": "Visítanos directamente en la zona de mayor comercio de importación en la Ciudad de México.",
    "addr-title": "Dirección Tienda Física",
    "addr-desc": "República de Honduras 63, Centro Histórico de la Cdad. de México, Centro, Cuauhtémoc, 06020 Ciudad de México, CDMX",
    "btn-open-maps": "Abrir en Google Maps <i class=\"fas fa-external-link-alt\"></i>",
    "wa-title": "Ventas y Cotizaciones WhatsApp",
    "wa-desc": "Soporte de atención directa y aclaraciones de pedidos:",
    "hours-title": "Horarios de Atención",
    "hours-week": "Lunes a Sábado: 9:00 AM - 6:00 PM",
    "hours-sun": "Domingos: Cerrado",
    "info-title": "Información Importante",
    "info-desc": "Precios especiales a mayoristas por bulto cerrado y caja de importación completa. Pregunta a tu asesor.",
    "cart-title-label": "Mi Cotización",
    "cart-subtotal-label": "Subtotal Regular:",
    "cart-savings-label": "Descuento Mayoreo:",
    "cart-total-label": "Total Estimado:",
    "label-name": "Nombre Completo",
    "placeholder-name": "Ej. Juan Pérez",
    "label-city": "Ciudad de Envío / Destino",
    "placeholder-city": "Ej. Guadalajara, Jal.",
    "label-delivery": "Método de Entrega",
    "delivery-home": "Envío a domicilio",
    "delivery-store": "Recoger en Tienda",
    "label-client-type": "Tipo de Cliente",
    "client-wholesale": "Mayorista (Negocio)",
    "client-retail": "Minorista (Uso Personal)",
    "btn-whatsapp-submit": "<i class=\"fab fa-whatsapp\"></i> Solicitar Cotización",
    "footer-desc": "Importadores directos desde fábrica a tu local. Llantas, bolsas, mochilas, peluches y novedades con el mejor precio y la mejor atención de CDMX.",
    "footer-nav": "Navegación",
    "footer-contact": "Contacto",
    "footer-copy": "&copy; 2026 Zalia Shop. Todos los derechos reservados. Importaciones directas de contenedor.",
    "footer-admin": "<i class=\"fas fa-user-shield\"></i> Panel para Administradores"
  },
  zh: {
    "top-banner": "🚀 货柜直接进口全新货源！从墨西哥城发往墨西哥全国 📦",
    "nav-home": "首页",
    "nav-catalog": "商品目录",
    "nav-how-to-buy": "如何购买？",
    "nav-about": "关于我们",
    "nav-location": "分店地址",
    "slide1-badge": "<i class=\"fas fa-ship\"></i> 厂家直销",
    "slide1-title": "整箱货源 <br><span class=\"gradient-text\">价格最优</span>",
    "slide1-desc": "包袋、钱包、双肩包和毛绒玩偶的工厂直销价格。为墨西哥全国的批发商和零售商供货。",
    "btn-view-catalog": "<i class=\"fas fa-store\"></i> 查看目录",
    "btn-physical-store": "<i class=\"fas fa-map-marker-alt\"></i> 实体店",
    "slide2-badge": "<i class=\"fab fa-tiktok\"></i> @zalia.shop",
    "slide2-title": "现场拆箱 <br><span class=\"gradient-text\">及每日新品</span>",
    "slide2-desc": "查看直接从海关运达的商品。关注我们，不要错过任何货柜拆箱直播。",
    "btn-follow-tiktok": "<i class=\"fab fa-tiktok\"></i> 关注 TikTok",
    "slide3-badge": "<i class=\"fas fa-boxes\"></i> 三种价格档次",
    "slide3-title": "零售单件、 <br><span class=\"gradient-text\">混批或整箱</span>",
    "slide3-desc": "为创业者提供特别价格。3件混批即可享受批发价。整箱购买可节省高达50%。",
    "btn-how-to-buy-cta": "<i class=\"fas fa-question-circle\"></i> 如何购买？",
    "mini-modulo-1": "模块 1",
    "mini-modulo-2": "模块 2",
    "mini-modulo-3": "模块 3",
    "mini-modulo-4": "模块 4",
    "catalog-title": "促销与新品目录",
    "catalog-desc": "一手货源。使用标签页浏览产品模块并获取询价。",
    "search-placeholder": "按型号、条形码等搜索...",
    "price-filter-label": "价格:",
    "price-min-placeholder": "最低",
    "price-max-placeholder": "最高",
    "how-title": "如何申请您的报价？",
    "how-desc": "我们设计了快速且数字化的流程，让您可以在几分钟内完成询价并锁定商品。",
    "step1-title": "选择商品",
    "step1-desc": "浏览我们的目录，确定您的测试数量并将其添加到数字询价单中。",
    "step2-title": "核对清单",
    "step2-desc": "打开购物车，输入您的姓名和寄送目的地城市，或者选择是否在实体店自提。",
    "step3-title": "通过 WhatsApp 发送",
    "step3-desc": "点击发送，销售顾问将收到您的订单，以核对实际库存并完成付款。",
    "why-choose-title": "为什么选择 Zalia Shop？",
    "why-choose-desc": "我们是墨西哥城历史中心的关键分销商，我们的商业模式专注于您的业务增长。",
    "prop1-title": "整箱优惠价",
    "prop1-desc": "我们直接大量进口，无任何中间商，这使我们能够提供墨西哥国内市场上最具竞争力的价格。",
    "prop2-title": "批发与零售",
    "prop2-desc": "只需购买 3 件商品即可享受超级实惠的混批批发价，让您轻松创业或进货。",
    "prop3-title": "墨西哥全国快速发货",
    "prop3-desc": "我们通过安全且经济的快递公司，将您的订单直接发往墨西哥任何州的目的地。",
    "contact-title": "我们的分店与联系方式",
    "contact-desc": "欢迎直接来墨西哥城最核心的进口贸易区拜访我们。",
    "addr-title": "实体店地址",
    "addr-desc": "República de Honduras 63, Centro Histórico de la Cdad. de México, Centro, Cuauhtémoc, 06020 Ciudad de México, CDMX (墨西哥城中心历史区)",
    "btn-open-maps": "在谷歌地图中打开 <i class=\"fas fa-external-link-alt\"></i>",
    "wa-title": "WhatsApp 销售与询价",
    "wa-desc": "直接服务支持和订单核对：",
    "hours-title": "营业时间",
    "hours-week": "周一至周六：上午 9:00 - 下午 6:00",
    "hours-sun": "周日：休息",
    "info-title": "重要信息",
    "info-desc": "批发商整包及整箱进口特价。详情请咨询您的专属销售顾问。",
    "cart-title-label": "我的询价单",
    "cart-subtotal-label": "常规小计:",
    "cart-savings-label": "大宗折扣:",
    "cart-total-label": "预估总计:",
    "label-name": "姓名全称",
    "placeholder-name": "例如：张伟",
    "label-city": "发货目的地城市",
    "placeholder-city": "例如：瓜达拉哈拉",
    "label-delivery": "配送方式",
    "delivery-home": "快递送货上门",
    "delivery-store": "实体店自提",
    "label-client-type": "客户类型",
    "client-wholesale": "批发商 (商家)",
    "client-retail": "零售商 (个人用途)",
    "btn-whatsapp-submit": "<i class=\"fab fa-whatsapp\"></i> 发送询价单",
    "footer-desc": "厂家直接进口至您的店面。CDMX 价格最优、服务最好的轮胎、包袋、双肩包、毛绒玩偶及新奇产品进口商。",
    "footer-nav": "导航",
    "footer-contact": "联系方式",
    "footer-copy": "&copy; 2026 Zalia Shop。保留所有权利。货柜整箱直接进口。",
    "footer-admin": "<i class=\"fas fa-user-shield\"></i> 管理员面板"
  }
};

function getTranslatedDesc(desc, lang) {
  if (lang === 'zh') {
    return desc
      .replace(/Modelo:/g, '型号:')
      .replace(/Código de barras:/g, '条形码:');
  }
  return desc;
}

function updateLanguage(lang) {
  currentLanguage = lang;
  localStorage.setItem('zalia_lang', lang);

  // Update HTML language attribute
  document.documentElement.lang = lang;

  // 1. Update elements with data-i18n
  const elements = document.querySelectorAll('[data-i18n]');
  elements.forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (TRANSLATIONS[lang] && TRANSLATIONS[lang][key]) {
      el.innerHTML = TRANSLATIONS[lang][key];
    }
  });

  // 2. Update elements with data-i18n-placeholder
  const inputs = document.querySelectorAll('[data-i18n-placeholder]');
  inputs.forEach(input => {
    const key = input.getAttribute('data-i18n-placeholder');
    if (TRANSLATIONS[lang] && TRANSLATIONS[lang][key]) {
      input.placeholder = TRANSLATIONS[lang][key];
    }
  });

  // 3. Update the toggle button flag
  const langFlagLabel = document.getElementById('lang-flag-label');
  if (langFlagLabel) {
    langFlagLabel.innerHTML = (lang === 'es') 
      ? '<span class="lang-text-label">ES</span><span class="lang-sep" style="opacity:0.4; font-weight:300;">|</span><span>🇨🇳</span>' 
      : '<span class="lang-text-label">ZH</span><span class="lang-sep" style="opacity:0.4; font-weight:300;">|</span><span>🇲🇽</span>';
  }

  // 4. Re-render dynamic elements
  renderTabs();
  renderCatalog();
  renderCart();
}

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
let activeCategory = 'modulo-1';
let searchQuery = '';
let minPrice = '';
let maxPrice = '';
let displayLimit = 40;
let searchDebounceTimer = null;

// DOM Elements
const productGrid = document.getElementById('product-grid');
const tabsContainer = document.getElementById('tabs-container');
const searchInput = document.getElementById('search-input');
const priceMinInput = document.getElementById('price-min');
const priceMaxInput = document.getElementById('price-max');
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
  const catKeys = ['modulo-1', 'modulo-2', 'modulo-3', 'modulo-4'];
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
        
        const categoriesMap = CATEGORY_TRANSLATIONS[currentLanguage] || CATEGORY_TRANSLATIONS['es'];
        
        const albumBtn = document.getElementById('album-link-btn');
        const albumCategoryName = document.getElementById('album-category-name');
        if (albumBtn && albumCategoryName) {
          albumBtn.setAttribute('href', PHOTO_ALBUMS[targetCat]);
          albumCategoryName.textContent = categoriesMap[targetCat];
        }
        
        // Reset search filters when clicking on hero mini-cards
        searchQuery = '';
        minPrice = '';
        maxPrice = '';
        if (searchInput) searchInput.value = '';
        if (priceMinInput) priceMinInput.value = '';
        if (priceMaxInput) priceMaxInput.value = '';
        
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
  currentLanguage = localStorage.getItem('zalia_lang') || 'es';
  setupEventListeners();
  loadCartFromStorage();
  checkDarkModePref();
  initHeroSlider();
  updateLanguage(currentLanguage);
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
  const categoriesMap = CATEGORY_TRANSLATIONS[currentLanguage] || CATEGORY_TRANSLATIONS['es'];

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
      minPrice = '';
      maxPrice = '';
      if (searchInput) searchInput.value = '';
      if (priceMinInput) priceMinInput.value = '';
      if (priceMaxInput) priceMaxInput.value = '';
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

    // Price range filters
    const minVal = parseFloat(minPrice) || 0;
    const maxVal = parseFloat(maxPrice) || Infinity;
    const matchesPrice = (
      (prod.wholesalePrice >= minVal || prod.retailPrice >= minVal) &&
      (prod.wholesalePrice <= maxVal || prod.retailPrice <= maxVal)
    );

    return matchesCategory && matchesSearch && matchesPrice;
  });

  if (filteredProducts.length === 0) {
    const txtNoProducts = currentLanguage === 'zh' 
      ? '该分类下未找到商品。' 
      : 'No se encontraron productos en esta categoría.';
    productGrid.innerHTML = `
      <div style="grid-column: 1/-1; text-align: center; padding: 40px; color: var(--text-muted);">
        <i class="fas fa-box-open" style="font-size: 3rem; margin-bottom: 16px;"></i>
        <p>${txtNoProducts}</p>
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
      const txtAgotado = currentLanguage === 'zh' ? '已售罄' : 'Agotado';
      stockBadge = `<span class="badge-tag" style="background: #ef4444; color: white; right: auto; left: 12px; font-weight:700;"><i class="fas fa-exclamation-triangle"></i> ${txtAgotado}</span>`;
      isOutOfStock = true;
    } else if (stockVal < 10) {
      const txtUltimas = currentLanguage === 'zh' ? `仅剩 ${stockVal} 件` : `Últimas ${stockVal} pzs`;
      stockBadge = `<span class="badge-tag" style="background: #f59e0b; color: white; right: auto; left: 12px; font-weight:700;"><i class="fas fa-hourglass-half"></i> ${txtUltimas}</span>`;
      maxQtyAttr = `max="${stockVal}"`;
    } else {
      const txtDisp = currentLanguage === 'zh' ? `${stockVal} 可用` : `${stockVal} disp.`;
      stockBadge = `<span class="badge-tag" style="background: #10b981; color: white; right: auto; left: 12px; font-weight:700;"><i class="fas fa-check-circle"></i> ${txtDisp}</span>`;
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

    const txtAction = isOutOfStock 
      ? (currentLanguage === 'zh' ? '已售罄' : 'Sin existencias')
      : (currentLanguage === 'zh' ? '添加商品' : 'Agregar Piezas');

    const actionBtnHtml = isOutOfStock ? `
      <button class="btn-add-card" disabled style="font-size: 0.95rem; background: #64748b; cursor: not-allowed; box-shadow: none;">
        <i class="fas fa-times-circle"></i> ${txtAction}
      </button>
    ` : `
      <button class="btn-add-card add-to-cart-btn" data-id="${product.id}" style="font-size: 0.95rem;">
        <i class="fas fa-shopping-cart"></i> ${txtAction}
      </button>
    `;

    const txtCajaCon = currentLanguage === 'zh' 
      ? `整箱包含: <strong>${product.pcsPerBox} 件</strong>` 
      : `Caja cerrada con: <strong>${product.pcsPerBox} pzs</strong>`;

    const txtPriceTier1 = currentLanguage === 'zh' ? '1-2 件' : '1-2 Pzs';
    const txtPriceTier2 = currentLanguage === 'zh' ? '批发 (3+)' : 'Mayoreo (3+)';
    const txtPriceTier3 = currentLanguage === 'zh' ? '箱价 (单件)' : 'Caja (pza)';
    
    const translatedTag = currentLanguage === 'zh' 
      ? (product.tag === 'Importación' ? '进口' : '货柜') 
      : (product.tag || 'Contenedor');
    const translatedImportTag = currentLanguage === 'zh' ? '进口' : 'Importación';

    const displayDesc = getTranslatedDesc(product.desc || '', currentLanguage);

    card.innerHTML = `
      <div class="product-img-wrapper">
        <img class="product-img" src="${product.image}" alt="${product.name}" loading="lazy">
        <span class="badge-tag">${translatedTag}</span>
        <span class="badge-tag tag-import">${translatedImportTag}</span>
        ${stockBadge}
      </div>
      <div class="product-info">
        <h3>${product.name}</h3>
        <p style="font-size: 0.85rem; color: var(--text-muted); margin-bottom: 12px; height: 40px; overflow: hidden; text-overflow: ellipsis; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical;">
          ${displayDesc}
        </p>
        
        <span class="pcs-box-badge">
          <i class="fas fa-boxes"></i> ${txtCajaCon}
        </span>

        <div class="product-prices">
          <div class="price-box retail">
            <span class="price-label">${txtPriceTier1}</span>
            <span class="price-value">$${product.retailPrice}</span>
          </div>
          <div class="price-box wholesale">
            <span class="price-label">${txtPriceTier2}</span>
            <span class="price-value">$${product.wholesalePrice}</span>
          </div>
          <div class="price-box box-tier">
            <span class="price-label">${txtPriceTier3}</span>
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
    
    const txtCargarMas = currentLanguage === 'zh' 
      ? `加载更多 (剩余 ${remaining} 个商品)` 
      : `Cargar más (${remaining} productos restantes)`;
    loadMoreBtn.innerHTML = `<i class="fas fa-plus-circle"></i> ${txtCargarMas}`;
    
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
          const alertMsg = currentLanguage === 'zh'
            ? `已达库存限制：该商品仅剩 ${stockLimit} 件可用。`
            : `Límite alcanzado: solo hay ${stockLimit} piezas disponibles de este producto.`;
          alert(alertMsg);
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
        const alertMsg = currentLanguage === 'zh'
          ? `数量限制为可用库存：${stockLimit} 件。`
          : `Cantidad limitada a las existencias disponibles: ${stockLimit} pzs.`;
        alert(alertMsg);
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
      btn.innerHTML = currentLanguage === 'zh' ? '<i class="fas fa-check"></i> 已添加!' : '<i class="fas fa-check"></i> ¡Agregado!';
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
    const txtEmptyCart = currentLanguage === 'zh'
      ? '您的询价商品将显示在这里。从目录中添加一些吧！'
      : 'Tus productos cotizados aparecerán aquí. ¡Agrega algunos del catálogo!';
    cartItemsContainer.innerHTML = `
      <div class="cart-empty-msg">
        <i class="fas fa-shopping-basket" style="font-size: 3rem; color: var(--text-muted); margin-bottom: 16px; display:block;"></i>
        ${txtEmptyCart}
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
      tierLabel = currentLanguage === 'zh' ? '箱价' : 'Precio Caja';
      
      const boxesCount = Math.floor(qty / pcsPerBox);
      const remainder = qty % pcsPerBox;
      if (remainder > 0) {
        promptTip = currentLanguage === 'zh'
          ? `<small style="color:var(--secondary); display:block; margin-top:2px;">📦 您购买了 ${boxesCount} 箱和 ${remainder} 件散装（享受整箱单价）</small>`
          : `<small style="color:var(--secondary); display:block; margin-top:2px;">📦 Llevas ${boxesCount} caja(s) y ${remainder} pzs sueltas con precio caja</small>`;
      } else {
        promptTip = currentLanguage === 'zh'
          ? `<small style="color:var(--success); display:block; margin-top:2px;">📦 您购买了整整 ${boxesCount} 箱</small>`
          : `<small style="color:var(--success); display:block; margin-top:2px;">📦 Llevas exactamente ${boxesCount} caja(s) cerrada(s)</small>`;
      }
    } else if (isWholesaleMixed) {
      // Wholesale price applied (Total pieces of all products in cart is 3 or more)
      pricePerPiece = Number(item.wholesalePrice) || 0;
      tierLabel = currentLanguage === 'zh' ? '批发价' : 'Precio Mayoreo';
      
      // Tip to unlock Box Price
      const diff = pcsPerBox - qty;
      promptTip = currentLanguage === 'zh'
        ? `<small style="color:var(--text-muted); display:block; margin-top:2px;">💡 再添加 ${diff} 件即可解锁箱价 ($${item.boxPrice})</small>`
        : `<small style="color:var(--text-muted); display:block; margin-top:2px;">💡 Agrega ${diff} pzs más para precio caja ($${item.boxPrice})</small>`;
    } else {
      // Retail price applied
      pricePerPiece = Number(item.retailPrice) || 0;
      tierLabel = currentLanguage === 'zh' ? '普通零售价' : 'Precio Normal (Menudeo)';
      
      // Tip to unlock Wholesale
      const diffWholesale = 3 - totalPiecesInCart;
      promptTip = currentLanguage === 'zh'
        ? `<small style="color:var(--text-muted); display:block; margin-top:2px;">💡 再添加 ${diffWholesale} 件即可解锁混批批发价 ($${item.wholesalePrice})</small>`
        : `<small style="color:var(--text-muted); display:block; margin-top:2px;">💡 Agrega ${diffWholesale} pza(s) más para precio mayoreo mixto ($${item.wholesalePrice})</small>`;
    }

    const itemCost = pricePerPiece * qty;
    finalSubtotal += itemCost;
    regularRetailTotal += (Number(item.retailPrice) || 0) * qty;

    const row = document.createElement('div');
    row.className = 'cart-item';
    
    const txtDesglose = currentLanguage === 'zh' ? '明细' : 'Desglose';
    const txtTasa = currentLanguage === 'zh' ? '费率' : 'Tasa';
    const txtSubtotal = currentLanguage === 'zh' ? '小计' : 'Subtotal';
    const txtPzs = currentLanguage === 'zh' ? '件' : 'pzs';

    row.innerHTML = `
      <img class="cart-item-img" src="${item.image}" alt="${item.name}">
      <div class="cart-item-details">
        <div class="cart-item-title">${item.name}</div>
        <div class="cart-item-pricing" style="font-size:0.85rem; line-height: 1.4;">
          ${txtDesglose}: <strong>${qty} ${txtPzs}</strong> x <span class="highlight">$${pricePerPiece} MXN</span>
          <br>
          <span style="color:var(--primary); font-weight:600;">${txtTasa}: ${tierLabel}</span>
          ${promptTip}
          ${txtSubtotal}: <strong class="cart-subtotal-item">$${itemCost} MXN</strong>
        </div>
      </div>
      <div class="cart-item-qty">
        <div class="quantity-control">
          <button class="qty-btn cart-qty-minus" data-id="${item.id}">-</button>
          <input type="number" class="qty-val cart-qty-input" data-id="${item.id}" value="${qty}" min="1" style="-moz-appearance: textfield;">
          <button class="qty-btn cart-qty-plus" data-id="${item.id}">+</button>
        </div>
        <button class="btn-remove-item" data-id="${item.id}" title="${currentLanguage === 'zh' ? '从询价单中删除' : 'Eliminar del cotizador'}">
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

  // Language Toggle Button Handler
  const langToggleBtn = document.getElementById('lang-toggle');
  if (langToggleBtn) {
    langToggleBtn.addEventListener('click', () => {
      const nextLang = (currentLanguage === 'es') ? 'zh' : 'es';
      updateLanguage(nextLang);
    });
  }

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

  // Price Range Search Handlers (debounced for smooth performance)
  if (priceMinInput) {
    priceMinInput.addEventListener('input', (e) => {
      clearTimeout(searchDebounceTimer);
      searchDebounceTimer = setTimeout(() => {
        minPrice = e.target.value;
        displayLimit = 40;
        renderCatalog();
      }, 250);
    });
  }

  if (priceMaxInput) {
    priceMaxInput.addEventListener('input', (e) => {
      clearTimeout(searchDebounceTimer);
      searchDebounceTimer = setTimeout(() => {
        maxPrice = e.target.value;
        displayLimit = 40;
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
    const alertMsg = currentLanguage === 'zh'
      ? '请先添加至少一件商品到您的询价单。'
      : 'Por favor agrega al menos un artículo a tu cotización.';
    alert(alertMsg);
    return;
  }

  const name = clientNameInput.value.trim();
  const city = clientCityInput.value.trim();
  const clientType = clientTypeSelect.value;
  
  // Fetch Delivery Option Selected in index.html
  const deliveryOption = document.querySelector('input[name="delivery-method"]:checked');
  const deliveryVal = deliveryOption ? deliveryOption.value : 'envio'; // 'envio' or 'tienda'

  if (!name || !city) {
    const alertMsg = currentLanguage === 'zh'
      ? '请填写表单中的所有必填项。'
      : 'Por favor completa todos los campos del formulario.';
    alert(alertMsg);
    return;
  }

  const totalPiecesInCart = cart.reduce((sum, item) => sum + item.qty, 0);
  const isWholesaleMixed = totalPiecesInCart >= 3;
  let totalCost = 0;

  // Header of WhatsApp Message
  let message = '';
  if (currentLanguage === 'zh') {
    message = `🛍️ *ZALIA SHOP - 询价订单申请*\n`;
    message += `━━━━━━━━━━━━━━━━━━━━\n`;
    message += `👤 *客户姓名:* ${name}\n`;
    message += `📍 *发货城市/目的地:* ${city}\n`;
    message += `🚚 *配送方式:* ${deliveryVal === 'envio' ? '快递送货上门（墨西哥全国）' : '实体店自提'}\n`;
    message += `🏷️ *客户类型:* ${clientType === 'wholesale' ? '商家 / 批发客户' : '零售客户'}\n`;
    message += `━━━━━━━━━━━━━━━━━━━━\n\n`;
    message += `📦 *订单明细:*\n`;
  } else {
    message = `🛍️ *ZALIA SHOP - SOLICITUD DE PEDIDO*\n`;
    message += `━━━━━━━━━━━━━━━━━━━━\n`;
    message += `👤 *Cliente:* ${name}\n`;
    message += `📍 *Ciudad/Origen:* ${city}\n`;
    message += `🚚 *Método:* ${deliveryVal === 'envio' ? 'Envío a Domicilio (República)' : 'Recoger en Tienda Física'}\n`;
    message += `🏷️ *Cliente:* ${clientType === 'wholesale' ? 'Negocio / Mayorista' : 'Minorista'}\n`;
    message += `━━━━━━━━━━━━━━━━━━━━\n\n`;
    message += `📦 *Detalle del Pedido:*\n`;
  }

  cart.forEach(item => {
    let pricePerPiece = 0;
    let tierLabel = '';

    if (item.qty >= item.pcsPerBox) {
      pricePerPiece = item.boxPrice;
      const boxesCount = Math.floor(item.qty / item.pcsPerBox);
      const remainder = item.qty % item.pcsPerBox;
      if (currentLanguage === 'zh') {
        tierLabel = `整箱购买 (${boxesCount} 箱，每箱 ${item.pcsPerBox} 件 ${remainder > 0 ? `+ ${remainder} 件散装` : ''})`;
      } else {
        tierLabel = `Caja cerrada (${boxesCount} caja(s) de ${item.pcsPerBox} pzs ${remainder > 0 ? `+ ${remainder} sueltas` : ''})`;
      }
    } else if (isWholesaleMixed) {
      pricePerPiece = item.wholesalePrice;
      tierLabel = currentLanguage === 'zh' ? '混批批发' : 'Mayoreo Mixto';
    } else {
      pricePerPiece = item.retailPrice;
      tierLabel = currentLanguage === 'zh' ? '普通零售' : 'Normal (Menudeo)';
    }

    const cost = pricePerPiece * item.qty;
    totalCost += cost;

    if (currentLanguage === 'zh') {
      message += `• *${item.qty} 件* - ${item.name}\n`;
      message += `  _单价:_ $${pricePerPiece} MXN | _小计:_ *$${cost} MXN*\n`;
      message += `  _适用费率:_ ${tierLabel}\n\n`;
    } else {
      message += `• *${item.qty} pzs* - ${item.name}\n`;
      message += `  _P. Unitario:_ $${pricePerPiece} MXN | _Subtotal:_ *$${cost} MXN*\n`;
      message += `  _Tasa aplicada:_ ${tierLabel}\n\n`;
    }
  });

  message += `━━━━━━━━━━━━━━━━━━━━\n`;
  
  // Calculate regular retail cost to show savings
  let regularRetailTotal = 0;
  cart.forEach(item => {
    regularRetailTotal += item.retailPrice * item.qty;
  });
  
  const savings = regularRetailTotal - totalCost;

  if (currentLanguage === 'zh') {
    message += `📦 *总件数:* ${totalPiecesInCart} 件\n`;
    if (savings > 0) {
      message += `💰 *常规原价小计:* $${regularRetailTotal} MXN\n`;
      message += `🎉 *大宗采购优惠:* $${savings} MXN\n`;
    }
    message += `💵 *净总计:* *$${totalCost} MXN*\n\n`;
    message += `*备注:* 此询价单自网站生成发送。我正等待确认货柜的实际库存以及运费。`;
  } else {
    message += `📦 *Total Piezas:* ${totalPiecesInCart} pzs\n`;
    if (savings > 0) {
      message += `💰 *Subtotal regular:* $${regularRetailTotal} MXN\n`;
      message += `🎉 *Ahorro por Volumen:* $${savings} MXN\n`;
    }
    message += `💵 *TOTAL NETO:* *$${totalCost} MXN*\n\n`;
    message += `*Nota:* Pedido enviado desde el cotizador web. Quedo en espera de confirmar disponibilidad física del contenedor y costos de envío.`;
  }

  // WhatsApp Destination Number: 5533745087
  const whatsappNumber = '525533745087';
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
