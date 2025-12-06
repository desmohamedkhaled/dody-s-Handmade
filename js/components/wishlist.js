/**
 * Wishlist Component
 * Manages favorite products that customers can save for later
 */

class Wishlist {
    constructor() {
        this.wishlistItems = JSON.parse(localStorage.getItem('dodyWishlist')) || [];
    }

    addToWishlist(product) {
        if (this.isInWishlist(product.id)) {
            return false;
        }

        const wishlistItem = {
            id: product.id,
            name: product.name,
            code: product.code,
            price: product.price,
            image: product.image,
            category: product.category,
            dateAdded: new Date().toISOString()
        };

        this.wishlistItems.push(wishlistItem);
        this.saveWishlist();
        return true;
    }

    removeFromWishlist(productId) {
        this.wishlistItems = this.wishlistItems.filter(item => item.id !== productId);
        this.saveWishlist();
        return true;
    }

    isInWishlist(productId) {
        return this.wishlistItems.some(item => item.id === productId);
    }

    getWishlist() {
        return this.wishlistItems;
    }

    getWishlistCount() {
        return this.wishlistItems.length;
    }

    clearWishlist() {
        this.wishlistItems = [];
        this.saveWishlist();
        return true;
    }

    moveToCart(productId) {
        const item = this.wishlistItems.find(w => w.id === productId);
        if (item) {
            this.removeFromWishlist(productId);
            return item;
        }
        return null;
    }

    getSortedWishlist(order = 'newest') {
        const sorted = [...this.wishlistItems];
        if (order === 'newest') {
            sorted.sort((a, b) => new Date(b.dateAdded) - new Date(a.dateAdded));
        } else if (order === 'oldest') {
            sorted.sort((a, b) => new Date(a.dateAdded) - new Date(b.dateAdded));
        } else if (order === 'price-low') {
            sorted.sort((a, b) => {
                const priceA = parseFloat(a.price.replace(/[^0-9.-]+/g, ''));
                const priceB = parseFloat(b.price.replace(/[^0-9.-]+/g, ''));
                return priceA - priceB;
            });
        } else if (order === 'price-high') {
            sorted.sort((a, b) => {
                const priceA = parseFloat(a.price.replace(/[^0-9.-]+/g, ''));
                const priceB = parseFloat(b.price.replace(/[^0-9.-]+/g, ''));
                return priceB - priceA;
            });
        }
        return sorted;
    }

    saveWishlist() {
        localStorage.setItem('dodyWishlist', JSON.stringify(this.wishlistItems));
        window.dispatchEvent(new CustomEvent('wishlistUpdated', {
            detail: { count: this.wishlistItems.length }
        }));
    }

    getStatistics() {
        const categories = {};
        let totalValue = 0;

        this.wishlistItems.forEach(item => {
            categories[item.category] = (categories[item.category] || 0) + 1;
            const price = parseFloat(item.price.replace(/[^0-9.-]+/g, ''));
            totalValue += price;
        });

        return {
            totalItems: this.wishlistItems.length,
            categories,
            estimatedValue: totalValue.toFixed(2)
        };
    }
}

const wishlistManager = new Wishlist();

window.addEventListener('wishlistUpdated', function(event) {
    const badge = document.getElementById('wishlistBadge');
    if (badge) {
        badge.textContent = event.detail.count;
        badge.style.display = event.detail.count > 0 ? 'flex' : 'none';
    }
});
