# Dody's Handcraft - Responsive Website

> 🎨 Beautiful handcrafted resin and concrete products with WhatsApp ordering integration

A beautiful, elegant, and minimal responsive website for a handcrafted brand. Built with HTML, CSS, and JavaScript with no gradients, using flat colors only.

## ✨ Key Features

- **💬 WhatsApp Integration** - Direct ordering via WhatsApp (Buy Now & Checkout)
- **🛍️ 13 Products** - Complete catalog of resin and concrete items
- **🎯 Product Codes** - Every product has a unique code displayed throughout
- **📱 Fully Responsive** - Works perfectly on all devices
- **🛒 Smart Cart** - Add multiple items before checkout
- **🚀 No Backend** - Pure frontend implementation

## 🚀 Quick Start

1. **Configure WhatsApp:** Edit `js/config.js` and update your WhatsApp number
2. **Start Server:** Run `node server.js` or `python -m http.server 8000`
3. **Open Browser:** Visit `http://localhost:8000`

📖 **Full Setup Guide:** See [WHATSAPP_SETUP.md](WHATSAPP_SETUP.md)
📋 **Complete Features:** See [COMPLETED_FEATURES.md](COMPLETED_FEATURES.md)
🎨 **Visual Design:** See [VISUAL_DESIGN.md](VISUAL_DESIGN.md)

## 🎨 Design

- **Brand Color**: Mint Green (#A8D5BA)
- **Accent Color**: Soft Pink (#F5E6E0)
- **Style**: Elegant, clean, minimal design
- **Layout**: Fully responsive (mobile, tablet, desktop)
- **Components**: Modular and well-organized

## 📁 Project Structure

```
dody_s Handmade/
├── index.html              # Home page
├── shop.html               # Shop page
├── cart.html               # Shopping cart
├── checkout.html           # Checkout page
├── css/
│   ├── variables.css       # Design system variables
│   ├── reset.css           # CSS reset
│   ├── global.css          # Global styles
│   ├── components.css      # Reusable components
│   ├── header.css          # Header styles
│   ├── footer.css          # Footer styles
│   ├── home.css            # Home page styles
│   ├── shop.css            # Shop page styles
│   ├── cart.css            # Cart page styles
│   └── checkout.css        # Checkout page styles
├── js/
│   ├── utils.js            # Utility functions
│   └── components/
│       ├── header.js       # Header component
│       ├── footer.js       # Footer component
│       ├── cart.js         # Cart management
│       └── products.js     # Product data & cards
└── README.md               # This file
```

## 📄 Pages

### Home Page
- Hero section with brand name and call-to-action buttons
- Brand description and values
- Featured products section
- Call-to-action section

### Shop Page
- Grid layout displaying all products
- Each product shows image, name, price, and add-to-cart button
- Product count display
- Clean spacing and consistent component sizing

### Cart Page
- Display all items in cart
- Update quantities
- Remove items
- Order summary with total
- Proceed to checkout button

### Checkout Page
- Customer information form (name, email, phone)
- Shipping address form
- Optional order notes
- Order summary
- WhatsApp integration - sends order details directly to WhatsApp

## 🚀 Features

### Functionality
- ✅ Add/remove products to cart
- ✅ Update product quantities
- ✅ Cart persistence using localStorage
- ✅ WhatsApp integration for order confirmation
- ✅ Form validation
- ✅ Responsive design
- ✅ Smooth transitions and animations

### Technical Features
- ✅ Modular component architecture
- ✅ Flat colors only (no gradients)
- ✅ CSS variables for easy customization
- ✅ LocalStorage for cart management
- ✅ Utility functions for common operations
- ✅ Mobile-first responsive design
- ✅ Accessibility considerations

## 🎯 Components

### Reusable Components
- **Button** (Primary, Secondary, Outline, Sizes)
- **Card** (with hover effects)
- **Input Fields** (with focus states and validation)
- **Badge**
- **Alert** (Success, Error, Info)
- **Header** with navigation and mobile menu
- **Footer** with links and social media

### JavaScript Classes
- **Header**: Navigation and mobile menu management
- **Footer**: Footer content rendering
- **CartManager**: Shopping cart operations
- **ProductCard**: Product display component

## 📱 Responsive Breakpoints

- **Desktop**: 1200px and up
- **Tablet**: 768px to 1199px
- **Mobile**: Below 768px
- **Small Mobile**: Below 480px

## 🔧 Setup & Usage

### Option 1: Direct File Opening
Simply open `index.html` in your web browser.

### Option 2: Local Server
For better development experience, run a local server:

**Using Python 3:**
```bash
python -m http.server 8000
```

**Using Python 2:**
```bash
python -m SimpleHTTPServer 8000
```

**Using Node.js (http-server):**
```bash
npm install -g http-server
http-server
```

Then open `http://localhost:8000` in your browser.

## 🎨 Customization

### Change Brand Color
Edit `css/variables.css` and update `--brand-primary`:
```css
--brand-primary: #YOUR_COLOR;
```

### Update WhatsApp Number
Edit `js/checkout.html` and update `WHATSAPP_PHONE`:
```javascript
const WHATSAPP_PHONE = '+YOUR_PHONE_NUMBER';
```

### Add More Products
Edit `js/components/products.js` and add to `PRODUCTS` array:
```javascript
{
  id: 9,
  name: 'Product Name',
  price: 29.99,
  image: 'product-url.jpg',
  description: 'Product description'
}
```

## 🌐 WhatsApp Integration

The checkout page sends order details to WhatsApp Business API. 

**To set up:**
1. Get a WhatsApp Business account
2. Update the `WHATSAPP_PHONE` in `checkout.html`
3. Message format includes:
   - Customer details
   - Shipping address
   - Order items with quantities
   - Total amount
   - Optional notes

## 📊 Browser Support

- Chrome/Chromium (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🎯 Performance

- Lightweight CSS (no frameworks)
- Minimal JavaScript
- No external dependencies
- Fast load times
- Optimized for mobile

## 📝 Product Data

Products use placeholder images from Unsplash. To use custom images:
1. Upload images to `/assets` folder
2. Update image URLs in `js/components/products.js`

## 🔒 LocalStorage

Cart data is stored in browser's LocalStorage:
- Key: `cart` - Shopping cart items
- Key: `products` - Product catalog

## 💡 Features Highlights

### Design System
- Color palette based on brand logo
- Consistent spacing system
- Typography hierarchy
- Smooth animations and transitions

### User Experience
- Intuitive navigation
- Clear call-to-action buttons
- Form validation with error messages
- Loading and notification feedback
- Mobile-optimized interface

### Code Quality
- Clean, organized structure
- Modular components
- Meaningful variable names
- Comments for clarity
- CSS variables for maintainability

## 🚀 Future Enhancements

Potential features to add:
- Product search and filtering
- User accounts and authentication
- Payment gateway integration (Stripe, PayPal)
- Product reviews and ratings
- Wishlist functionality
- Inventory management
- Admin panel
- Email notifications
- Blog section

## 📄 License

Free to use for personal and commercial projects.

## 🙋 Support

For questions or issues, please refer to the code comments or modify as needed for your specific requirements.

---

**Built with ❤️ for Dody's Handcraft**
