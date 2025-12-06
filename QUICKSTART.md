# 🚀 Quick Start Guide - Dody's Handcraft

## Getting Started in 3 Steps

### Step 1: Open the Website
Simply open `index.html` in your web browser to start exploring the website.

**Windows:**
- Double-click `index.html`

**Mac:**
- Right-click `index.html` → Open With → Browser

**Linux:**
- Right-click `index.html` → Open With → Browser

---

### Step 2: Run a Local Server (Recommended)

For the best experience with all features working correctly, run a local development server.

#### Windows Users:
```bash
# Double-click this file:
server.bat

# Or use Command Prompt/PowerShell:
cd "d:\dody_s Handmade"
python -m http.server 8000
```

#### Mac/Linux Users:
```bash
# Make the script executable:
chmod +x server.sh

# Run it:
./server.sh

# Or use Terminal:
cd ~/path/to/dody_s\ Handcraft
python3 -m http.server 8000
```

Then open: **http://localhost:8000**

---

### Step 3: Test the Features

#### 🛍️ Shop Page
- Browse all handcrafted products
- Click "Add to Cart" to add items

#### 🛒 Cart Page
- View your cart items
- Update quantities or remove items
- See the order total

#### 💳 Checkout Page
- Fill in your customer information
- Enter shipping address
- Click "Place Order via WhatsApp"
- You'll be redirected to WhatsApp to confirm

---

## 📱 Test on Different Devices

### Desktop
- Open in your browser and resize the window
- Test at different screen sizes

### Mobile
- Use your phone and navigate to `http://localhost:8000`
- Or scan the QR code shown in terminal

### Tablet
- Test responsiveness on tablet-sized screens

---

## 🎨 Customize Your Brand

### Change Brand Colors
Edit `css/variables.css`:
```css
--brand-primary: #A8D5BA;      /* Change mint green */
--brand-secondary: #F5E6E0;    /* Change pink accent */
```

### Update Contact Information
Edit `js/config.js`:
```javascript
contact: {
  email: "your-email@example.com",
  phone: "+1 (555) 123-4567",
  address: "Your Address"
}
```

### Set WhatsApp Number
Edit `checkout.html`:
```javascript
const WHATSAPP_PHONE = '+YOUR_PHONE_NUMBER';
```

### Add Your Products
Edit `js/components/products.js`:
```javascript
const PRODUCTS = [
  {
    id: 1,
    name: 'Your Product',
    price: 29.99,
    image: 'image-url.jpg',
    description: 'Description'
  }
];
```

---

## 🔗 Navigation Guide

| Page | URL | Purpose |
|------|-----|---------|
| Home | `index.html` | Landing page with featured products |
| Shop | `shop.html` | Browse all products |
| Cart | `cart.html` | Manage your cart |
| Checkout | `checkout.html` | Complete your order |

---

## ⚙️ System Requirements

- ✅ Modern web browser (Chrome, Firefox, Safari, Edge)
- ✅ Python 3.x (for local server - optional)
- ✅ WhatsApp account (for order confirmation)

---

## 🎯 Key Features

✨ **Responsive Design** - Works on mobile, tablet, and desktop
✨ **WhatsApp Integration** - Send orders directly to WhatsApp
✨ **Cart Persistence** - Your cart is saved in browser storage
✨ **Form Validation** - Real-time input validation
✨ **Elegant UI** - Clean, minimal design with smooth animations
✨ **No Dependencies** - Pure HTML, CSS, and JavaScript

---

## 📧 WhatsApp Setup

1. Get a WhatsApp Business account at `business.facebook.com`
2. Update your phone number in `checkout.html`:
   ```javascript
   const WHATSAPP_PHONE = '+YOUR_PHONE_NUMBER';
   ```
3. Customers will see your order details when they click "Place Order"

---

## 🐛 Troubleshooting

### Server won't start
- Make sure Python is installed: `python --version`
- Try: `python3 -m http.server 8000`
- Use port 3000 if 8000 is in use: `python -m http.server 3000`

### Images not loading
- Update image URLs in `js/components/products.js`
- Use absolute URLs (http://...) or relative paths

### WhatsApp not opening
- Check your phone number format: `+1234567890`
- Ensure WhatsApp is installed on your device
- Check browser console for errors

### Cart not persisting
- Check browser's localStorage is enabled
- Try a different browser
- Clear browser cache and try again

---

## 📚 File Structure Quick Reference

```
dody_s Handmade/
├── index.html              ← Home page
├── shop.html               ← Shop page
├── cart.html               ← Cart page
├── checkout.html           ← Checkout page
├── css/                    ← Stylesheets
│   ├── variables.css       ← Design variables
│   ├── components.css      ← Reusable components
│   └── ...other styles
├── js/                     ← JavaScript
│   ├── utils.js            ← Helper functions
│   ├── config.js           ← Configuration
│   └── components/         ← Component scripts
├── README.md               ← Full documentation
└── server.bat/sh           ← Development server
```

---

## 💡 Tips & Tricks

1. **Use the Inspector** - Open DevTools (F12) to inspect elements
2. **Test Forms** - Try submitting with invalid data to see validation
3. **Check Console** - Open console to see any JavaScript messages
4. **Mobile View** - Use DevTools' mobile device toolbar
5. **Responsive** - Resize browser window to test all breakpoints

---

## 🎓 Learning Resources

- HTML/CSS/JavaScript basics: MDN Web Docs
- Responsive Design: CSS Tricks
- WhatsApp API: WhatsApp Business API Docs

---

## ✅ Checklist

- [ ] All 4 pages load correctly
- [ ] Navigation works between pages
- [ ] Add to cart button functions
- [ ] Cart updates correctly
- [ ] Form validation works
- [ ] WhatsApp link opens correctly
- [ ] Mobile view is responsive
- [ ] No console errors

---

## 🎉 You're All Set!

Your Dody's Handcraft website is ready to use. Start by opening `index.html` and exploring all the features!

**Questions?** Check the README.md for detailed documentation.

---

*Happy selling! 💚*
