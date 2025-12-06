/**
 * Products Data and Component
 */

const PRODUCTS = [
  {
    id: 1,
    name: 'Resin Ashtray',
    code: 'RA-001',
    price: 1500,
    currency: 'EGP',
    category: 'resin',
    image: 'https://images.unsplash.com/photo-1611080626919-7cf5a9dbab5b?w=400&h=400&fit=crop',
    description: 'Elegant handcrafted resin ashtray with unique marble patterns.',
    averageRating: 4.5,
    reviewCount: 12
  },
  {
    id: 2,
    name: 'Resin Vase',
    code: 'RV-002',
    price: 2800,
    currency: 'EGP',
    category: 'resin',
    image: 'https://images.unsplash.com/photo-1578500494198-246f612d3b3d?w=400&h=400&fit=crop',
    description: 'Beautiful resin vase perfect for flowers and home decoration.',
    averageRating: 4.8,
    reviewCount: 18
  },
  {
    id: 3,
    name: 'Home Decor Resin Piece',
    code: 'HD-003',
    price: 3200,
    currency: 'EGP',
    category: 'decor',
    image: 'https://images.unsplash.com/photo-1634712282287-14ed57b9cc89?w=400&h=400&fit=crop',
    description: 'Artistic resin décor piece to elevate your home aesthetic.',
    averageRating: 4.6,
    reviewCount: 14
  },
  {
    id: 4,
    name: 'Name Desk Stand',
    code: 'NDS-004',
    price: 2000,
    currency: 'EGP',
    category: 'personalized',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=400&h=400&fit=crop',
    description: 'Personalized resin desk stand with custom names.',
    averageRating: 4.7,
    reviewCount: 20
  },
  {
    id: 5,
    name: 'Resin Tray',
    code: 'RT-005',
    price: 2500,
    currency: 'EGP',
    category: 'resin',
    image: 'https://images.unsplash.com/photo-1595246140625-573a424d4f6f?w=400&h=400&fit=crop',
    description: 'Functional and stylish resin serving tray for any occasion.',
    averageRating: 4.4,
    reviewCount: 9
  },
  {
    id: 6,
    name: 'Resin Keychain',
    code: 'RK-006',
    price: 500,
    currency: 'EGP',
    category: 'accessories',
    image: 'https://images.unsplash.com/photo-1591561954557-26941169b49e?w=400&h=400&fit=crop',
    description: 'Cute resin keychain with colorful designs.',
    averageRating: 4.3,
    reviewCount: 25
  },
  {
    id: 7,
    name: 'Hair Clips',
    code: 'HC-007',
    price: 700,
    currency: 'EGP',
    category: 'accessories',
    image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&h=400&fit=crop',
    description: 'Trendy resin hair clips in various colors and patterns.',
    averageRating: 4.5,
    reviewCount: 31
  },
  {
    id: 8,
    name: 'Wall Clock',
    code: 'WC-008',
    price: 3500,
    currency: 'EGP',
    category: 'decor',
    image: 'https://images.unsplash.com/photo-1563861826100-9cb868fdbe1c?w=400&h=400&fit=crop',
    description: 'Modern resin wall clock that combines art and functionality.',
    averageRating: 4.9,
    reviewCount: 22
  },
  {
    id: 9,
    name: 'Handmade Notebook',
    code: 'NB-009',
    price: 1200,
    currency: 'EGP',
    category: 'stationery',
    image: 'https://images.unsplash.com/photo-1531346878377-a5be20888e57?w=400&h=400&fit=crop',
    description: 'Beautiful handmade notebook with resin-decorated cover.',
    averageRating: 4.6,
    reviewCount: 16
  },
  {
    id: 10,
    name: 'Ramadan Decoration',
    code: 'RD-010',
    price: 2200,
    currency: 'EGP',
    category: 'seasonal',
    image: 'https://images.unsplash.com/photo-1589308078059-be1415eab4c3?w=400&h=400&fit=crop',
    description: 'Special resin Ramadan décor items for the holy month.',
    averageRating: 4.7,
    reviewCount: 11
  },
  {
    id: 11,
    name: 'Concrete Handmade Décor',
    code: 'CD-011',
    price: 2800,
    currency: 'EGP',
    category: 'decor',
    image: 'https://images.unsplash.com/photo-1615529182904-14819c35db37?w=400&h=400&fit=crop',
    description: 'Industrial-style concrete décor piece for modern spaces.',
    averageRating: 4.4,
    reviewCount: 8
  },
  {
    id: 12,
    name: 'Concrete Candle Shape',
    code: 'CCS-012',
    price: 1800,
    currency: 'EGP',
    category: 'candles',
    image: 'https://images.unsplash.com/photo-1602874801006-94c0f0c335c7?w=400&h=400&fit=crop',
    description: 'Minimalist concrete candle holder with elegant design.',
    averageRating: 4.5,
    reviewCount: 13
  },
  {
    id: 13,
    name: 'Resin Candle',
    code: 'RC-013',
    price: 1500,
    currency: 'EGP',
    category: 'candles',
    image: 'https://images.unsplash.com/photo-1603006905003-be475563bc59?w=400&h=400&fit=crop',
    description: 'Scented resin candle with beautiful colors and patterns.',
    averageRating: 4.8,
    reviewCount: 24
  }
];

// Initialize products in storage
Storage.set('products', PRODUCTS);

class ProductCard {
  constructor(product) {
    this.product = product;
  }
  
  render() {
    return `
      <div class="card">
        <img src="${this.product.image}" alt="${this.product.name}" class="card-image" onerror="this.src='https://via.placeholder.com/400?text=${encodeURIComponent(this.product.name)}'">
        <div class="card-content">
          <h3 class="card-title">${this.product.name}</h3>
          <p class="card-code">Code: ${this.product.code}</p>
          <p class="card-description">${this.product.description}</p>
          <div class="card-footer">
            <span class="card-price">${formatCurrency(this.product.price)}</span>
            <div class="card-actions">
              <button class="btn btn-primary btn-small" onclick="handleBuyNow(${this.product.id})">
                Buy Now
              </button>
              <button class="btn btn-secondary btn-small" data-product-id="${this.product.id}" onclick="handleAddToCart(${this.product.id})">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    `;
  }
  
  static renderGrid(products, container) {
    const html = products.map(product => new ProductCard(product).render()).join('');
    const element = document.querySelector(container);
    if (element) {
      element.innerHTML = html;
    }
  }
}

// Global product functions
function handleAddToCart(productId) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (product) {
    cart.addToCart(productId, 1);
    showNotification(`${product.name} added to cart!`, 'success');
    
    // Update header cart count
    const header = Header.prototype.constructor.instance || new Header();
    header.updateCartCount();
  }
}

// WhatsApp Buy Now function
function handleBuyNow(productId) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (product) {
    const message = `Hello, I want to order: ${product.name} – Code: ${product.code}`;
    const whatsappURL = `https://wa.me/${CONFIG.whatsapp.phone.replace(/\+/g, '')}?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, '_blank');
  }
}
