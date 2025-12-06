/**
 * Footer Component
 */

class Footer {
  constructor() {
    this.init();
  }
  
  init() {
    this.render();
  }
  
  render() {
    const footer = document.querySelector('footer');
    if (!footer) return;
    
    footer.innerHTML = `
      <div class="footer-container">
        <div class="footer-content">
          <div class="footer-section">
            <h3 class="footer-section-title">About Dody's</h3>
            <p class="footer-section-text">
              Handcrafted products made with love and attention to detail. 
              Every piece tells a story of creativity and dedication.
            </p>
            <div class="social-links">
              <a href="https://www.instagram.com/dody_s_handcraft?igsh=MWpieW8xMHo3YW9jeg==&utm_source=ig_contact_invite" target="_blank" rel="noopener" class="social-icon" title="Instagram">📷</a>
            </div>
          </div>
          
          <div class="footer-section">
            <h3 class="footer-section-title">Quick Links</h3>
            <a href="index.html" class="footer-link">Home</a>
            <a href="shop.html" class="footer-link">Shop</a>
            <a href="cart.html" class="footer-link">Cart</a>
            <a href="#faq" class="footer-link">FAQ</a>
          </div>
          
          <div class="footer-section">
            <h3 class="footer-section-title">Contact Us</h3>
            <p class="footer-section-text">
              📱 +20 101 067 5436<br>
            </p>
            <a href="https://wa.me/+201010675436" target="_blank" rel="noopener" class="footer-link">
              💬 Chat on WhatsApp
            </a>
          </div>
        </div>
        
        <div class="footer-bottom">
          <p class="footer-copyright">
            © 2024 Dody's Handcraft. All rights reserved.
          </p>
          <div class="footer-links">
            <a href="#privacy">Privacy Policy</a>
            <a href="#terms">Terms of Service</a>
            <a href="#shipping">Shipping Info</a>
          </div>
        </div>
      </div>
    `;
  }
  
  static init() {
    return new Footer();
  }
}

// Initialize footer when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  Footer.init();
});
