/**
 * Header Component
 */

class Header {
  constructor() {
    this.cartCount = 0;
    this.mobileMenuOpen = false;
    this.init();
  }
  
  init() {
    this.render();
    this.attachEventListeners();
    this.updateCartCount();
  }
  
  render() {
    const header = document.querySelector('header');
    if (!header) return;
    
    header.innerHTML = `
      <div class="header-container">
        <a href="index.html" class="logo">
          <img src="assets/images/logo.jpg" alt="Dody's Handcraft" class="logo-image">
        </a>
        
        <nav class="nav">
          <li><a href="index.html" class="nav-link" data-page="home">Home</a></li>
          <li><a href="shop.html" class="nav-link" data-page="shop">Shop</a></li>
          <li><a href="cart.html" class="nav-link" data-page="cart">Cart</a></li>
        </nav>
        
        <div class="flex-center gap-2">
          <div class="cart-icon" id="cartIcon">
            <span>🛒</span>
            <span class="cart-badge" id="cartBadge">0</span>
          </div>
          <button class="hamburger" id="hamburger">
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
        
        <div class="mobile-menu" id="mobileMenu">
          <nav class="nav" style="flex-direction: column;">
            <li><a href="index.html" class="nav-link" data-page="home">Home</a></li>
            <li><a href="shop.html" class="nav-link" data-page="shop">Shop</a></li>
            <li><a href="cart.html" class="nav-link" data-page="cart">Cart</a></li>
          </nav>
        </div>
      </div>
    `;
    
    this.setActiveLink();
  }
  
  attachEventListeners() {
    const hamburger = document.getElementById('hamburger');
    const mobileMenu = document.getElementById('mobileMenu');
    const cartIcon = document.getElementById('cartIcon');
    
    if (hamburger) {
      hamburger.addEventListener('click', () => {
        this.mobileMenuOpen = !this.mobileMenuOpen;
        hamburger.classList.toggle('active');
        mobileMenu.classList.toggle('active');
      });
    }
    
    if (cartIcon) {
      cartIcon.addEventListener('click', () => {
        window.location.href = 'cart.html';
      });
    }
    
    // Close mobile menu on link click
    document.querySelectorAll('.mobile-menu .nav-link').forEach(link => {
      link.addEventListener('click', () => {
        this.mobileMenuOpen = false;
        hamburger.classList.remove('active');
        mobileMenu.classList.remove('active');
      });
    });
  }
  
  setActiveLink() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    
    document.querySelectorAll('.nav-link').forEach(link => {
      const page = link.getAttribute('data-page');
      const isActive = 
        (currentPage === '' && page === 'home') ||
        (currentPage === 'shop.html' && page === 'shop') ||
        (currentPage === 'cart.html' && page === 'cart') ||
        (currentPage === 'checkout.html' && page === 'checkout') ||
        (currentPage === 'index.html' && page === 'home');
      
      if (isActive) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
  }
  
  updateCartCount() {
    // Get cart from new localStorage format (dodyCart)
    const cartItems = JSON.parse(localStorage.getItem('dodyCart')) || [];
    this.cartCount = cartItems.length;
    
    const badge = document.getElementById('cartBadge');
    if (badge) {
      badge.textContent = this.cartCount;
      badge.style.display = this.cartCount > 0 ? 'flex' : 'none';
    }
  }
  
  static init() {
    return new Header();
  }
}

// Initialize header when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  Header.init();
});
