/**
 * Cart Management Component
 */

class CartManager {
  constructor() {
    this.cart = Storage.get('cart') || [];
    this.products = (typeof PRODUCTS !== 'undefined' ? PRODUCTS : null) || Storage.get('products') || [];
  }
  
  addToCart(productId, quantity = 1) {
    const existingItem = this.cart.find(item => item.id === productId);
    
    if (existingItem) {
      existingItem.quantity += quantity;
    } else {
      // Try to find product from PRODUCTS first, then from this.products
      const product = (typeof PRODUCTS !== 'undefined' ? PRODUCTS.find(p => p.id === productId) : null) || this.products.find(p => p.id === productId);
      if (product) {
        this.cart.push({
          id: productId,
          name: product.name,
          code: product.code,
          price: product.price,
          image: product.image,
          quantity: quantity
        });
      }
    }
    
    this.saveCart();
    return this.cart;
  }
  
  removeFromCart(productId) {
    this.cart = this.cart.filter(item => item.id !== productId);
    this.saveCart();
    return this.cart;
  }
  
  updateQuantity(productId, quantity) {
    const item = this.cart.find(i => i.id === productId);
    if (item) {
      if (quantity <= 0) {
        this.removeFromCart(productId);
      } else {
        item.quantity = quantity;
        this.saveCart();
      }
    }
    return this.cart;
  }
  
  clearCart() {
    this.cart = [];
    this.saveCart();
    return this.cart;
  }
  
  getCart() {
    return this.cart;
  }
  
  getTotal() {
    return this.cart.reduce((total, item) => {
      return total + (item.price * item.quantity);
    }, 0);
  }
  
  getItemCount() {
    return this.cart.reduce((count, item) => count + item.quantity, 0);
  }
  
  saveCart() {
    Storage.set('cart', this.cart);
  }
  
  getOrderSummary() {
    const items = this.cart.map(item => 
      `${item.name} – Code: ${item.code} x${item.quantity} - ${formatCurrency(item.price * item.quantity)}`
    ).join('\n');
    
    const total = this.getTotal();
    
    return `Order Summary:\n${items}\n\nTotal: ${formatCurrency(total)}`;
  }
  
  getWhatsAppOrderMessage() {
    const items = this.cart.map(item => 
      `• ${item.name} – Code: ${item.code} (x${item.quantity})`
    ).join('\n');
    
    const total = this.getTotal();
    
    return `Hello, I want to order:\n\n${items}\n\nTotal: ${formatCurrency(total)}`;
  }
  
  checkoutViaWhatsApp() {
    if (this.cart.length === 0) {
      showNotification('Your cart is empty!', 'error');
      return;
    }
    
    const message = this.getWhatsAppOrderMessage();
    const whatsappURL = `https://wa.me/${CONFIG.whatsapp.phone.replace(/\+/g, '')}?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, '_blank');
  }
}

// Global cart instance - initialized after products load
let cart = null;

document.addEventListener('DOMContentLoaded', () => {
  if (!cart) {
    cart = new CartManager();
  }
});

// Fallback initialization
if (!cart && typeof PRODUCTS !== 'undefined') {
  cart = new CartManager();
}
