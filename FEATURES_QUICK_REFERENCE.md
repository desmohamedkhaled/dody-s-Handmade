# Quick Reference - New Features

## Files Added

| File | Purpose |
|------|---------|
| `js/components/search.js` | Search & filter functionality |
| `js/components/reviews.js` | Reviews & ratings system |
| `js/components/wishlist.js` | Wishlist management |
| `css/features.css` | Styling for new features |
| `wishlist.html` | Wishlist page |
| `product.html` | Product detail page with reviews |
| `FEATURES_GUIDE.md` | Complete implementation guide |

## Files Modified

| File | Changes |
|------|---------|
| `shop.html` | Added search, filters, wishlist UI |
| `js/components/products.js` | Added category, rating, reviewCount fields |

## Key Classes

### SearchFilter
```javascript
new SearchFilter(products)
  .setSearchTerm(term)
  .setCategory(category)
  .setPriceRange(min, max)
  .setMinRating(rating)
  .setSortBy(option)
  .getFiltered()
  .resetFilters()
```

### ReviewsRatings
```javascript
reviewsManager.addReview(productId, review)
reviewsManager.getProductReviews(productId)
reviewsManager.getAverageRating(productId)
reviewsManager.generateStarRating(rating, size)
reviewsManager.markHelpful(productId, reviewId)
reviewsManager.getReviewCount(productId)
```

### Wishlist
```javascript
wishlistManager.addToWishlist(product)
wishlistManager.removeFromWishlist(productId)
wishlistManager.isInWishlist(productId)
wishlistManager.getWishlist()
wishlistManager.getSortedWishlist(order)
wishlistManager.getStatistics()
```

## Navigation

### Add Links to Header
```html
<!-- Shop with filters -->
<a href="shop.html">Shop</a>

<!-- Wishlist page -->
<a href="wishlist.html">Wishlist</a>

<!-- Wishlist badge (optional) -->
<button class="wishlist-btn" onclick="window.location='wishlist.html'">
  ♡ Wishlist <span id="wishlistBadge">0</span>
</button>
```

## How to Test

1. **Search**: Type in shop search bar
2. **Filter**: Select category, adjust price
3. **Sort**: Change sort dropdown
4. **Wishlist**: Click heart icon on products
5. **Reviews**: Click "Add Review" on product page

## Common Tasks

### Display Rating on Product Card
```javascript
const rating = product.averageRating || 0;
const html = reviewsManager.generateStarRating(rating, 'sm');
```

### Check Wishlist Status
```javascript
if (wishlistManager.isInWishlist(productId)) {
  // Show "remove from wishlist"
} else {
  // Show "add to wishlist"
}
```

### Filter by Multiple Criteria
```javascript
searchFilter.setSearchTerm('resin');
searchFilter.setCategory('resin');
searchFilter.setPriceRange(500, 2500);
searchFilter.setSortBy('price-low');
const results = searchFilter.getFiltered();
```

## LocalStorage Data

### View Wishlist
```javascript
JSON.parse(localStorage.getItem('dodyWishlist'))
```

### View Reviews
```javascript
JSON.parse(localStorage.getItem('dodyReviews'))
```

### Clear All Data
```javascript
localStorage.removeItem('dodyWishlist');
localStorage.removeItem('dodyReviews');
```

## Styling Classes

### Search & Filter
- `.search-container` - Search bar wrapper
- `.filters-panel` - Filter container
- `.filter-group` - Individual filter group
- `.sort-select` - Sort dropdown

### Reviews
- `.review-item` - Review card
- `.star` - Star rating display
- `.review-form` - Review submission form
- `.rating-container` - Rating display

### Wishlist
- `.wishlist-grid` - Wishlist items grid
- `.wishlist-btn` - Heart button
- `.wishlist-badge` - Item count badge

## Responsive Breakpoints

All new features are responsive:
- **Desktop**: 1200px+ (full features)
- **Tablet**: 768px-1199px (adjusted layout)
- **Mobile**: <768px (optimized UI)

## Product Data Example

```javascript
{
  id: 1,
  name: 'Resin Ashtray',
  code: 'RA-001',
  price: 1500,
  currency: 'EGP',
  category: 'resin',           // NEW
  image: 'url...',
  description: 'Handcrafted...',
  averageRating: 4.5,          // NEW
  reviewCount: 12              // NEW
}
```

## Troubleshooting

| Issue | Solution |
|-------|----------|
| Filters not working | Ensure SearchFilter initialized with PRODUCTS |
| Wishlist not saving | Check localStorage enabled in browser |
| Reviews disappearing | Verify localStorage not cleared |
| Search not finding results | Check product fields are lowercase in search |
| Rating stars not showing | Ensure `features.css` is linked |

## Performance Notes

- SearchFilter uses efficient array methods
- Reviews/Wishlist limited by localStorage size (~5-10MB)
- Lazy load large product images
- Use CSS filters for animations

---

**Last Updated**: December 2025
