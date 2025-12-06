# WhatsApp Integration Setup Guide

## Overview
This website is integrated with WhatsApp for seamless order processing. When customers click "Buy Now" or complete checkout, they'll be redirected to WhatsApp with a pre-filled message containing product details.

## Setup Instructions

### Step 1: Configure Your WhatsApp Number

Open `js/config.js` and update the WhatsApp phone number:

```javascript
whatsapp: {
  phone: "+201234567890", // Replace with your actual WhatsApp business number
  businessName: "Dody's Handcraft"
}
```

**Important:** 
- Include the country code (e.g., +20 for Egypt, +1 for USA, +44 for UK)
- Remove any spaces, dashes, or parentheses
- Example formats:
  - Egypt: `+201234567890`
  - USA: `+11234567890`
  - UK: `+441234567890`

### Step 2: Test the Integration

1. Open `shop.html` in your browser
2. Click "Buy Now" on any product
3. Verify that WhatsApp opens with the correct message format
4. Test the full checkout flow with multiple products

## Message Formats

### Buy Now (Single Product)
```
Hello, I want to order: [Product Name] – Code: [Product Code]
```

### Checkout (Multiple Products)
```
*NEW ORDER FROM DODY'S HANDCRAFT*

📋 *Customer Information*
Name: [Customer Name]
Email: [Email]
Phone: [Phone]

📍 *Shipping Address*
[Address Details]

🛍️ *Order Details*
• [Product Name] – Code: [Product Code] (x[Quantity]) - [Price]
• [Product Name] – Code: [Product Code] (x[Quantity]) - [Price]

💰 *Total Amount*
[Total Price]

📝 *Notes*
[Customer Notes]

Thank you for shopping with us! 💚
```

## Product Configuration

All products are defined in `js/components/products.js`. Each product includes:
- `id`: Unique identifier
- `name`: Product name
- `code`: Product code (displayed to customer)
- `price`: Price in cents (e.g., 1500 = $15.00)
- `image`: Product image URL
- `description`: Product description

### Adding New Products

```javascript
{
  id: 14,
  name: 'New Resin Product',
  code: 'NRP-014',
  price: 2000,
  image: 'https://example.com/image.jpg',
  description: 'Product description here.'
}
```

## Customization Tips

### Change Currency Format
Edit the `formatCurrency` function in `js/utils.js`:

```javascript
function formatCurrency(amount) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD' // Change to 'EGP', 'EUR', etc.
  }).format(amount / 100);
}
```

### Modify WhatsApp Message Template
Edit the message templates in:
- `js/components/products.js` (handleBuyNow function)
- `checkout.html` (submitOrder function)

## Testing Checklist

- [ ] WhatsApp number is correctly formatted with country code
- [ ] "Buy Now" button opens WhatsApp with correct product details
- [ ] Product codes are visible on product cards
- [ ] Cart displays product codes
- [ ] Checkout summary shows product codes
- [ ] WhatsApp message includes all order details
- [ ] Mobile responsiveness works correctly

## Troubleshooting

**WhatsApp doesn't open:**
- Check that the phone number includes the country code
- Verify the number is registered with WhatsApp Business
- Test on a device with WhatsApp installed

**Product codes missing:**
- Ensure all products in `products.js` have a `code` property
- Clear browser cache and reload

**Messages not formatted correctly:**
- Check for special characters that need encoding
- Test with different product names and quantities

## Support

For technical issues or customization requests, refer to:
- `PROJECT_SUMMARY.md` - Project overview
- `IMPLEMENTATION.md` - Technical implementation details
- `QUICK_REFERENCE.md` - Quick reference guide
