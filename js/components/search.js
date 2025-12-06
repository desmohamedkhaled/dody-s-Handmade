/**
 * Search & Filter Component
 * Handles product search and filtering by category, price, and ratings
 */

class SearchFilter {
    constructor(products = []) {
        this.products = products;
        this.filteredProducts = products;
        this.filters = {
            searchTerm: '',
            category: 'all',
            minPrice: 0,
            maxPrice: Infinity,
            minRating: 0,
            sortBy: 'name' // name, price-low, price-high, rating, newest
        };
    }

    /**
     * Update search term
     */
    setSearchTerm(term) {
        this.filters.searchTerm = term.toLowerCase();
        this.applyFilters();
    }

    /**
     * Filter by category
     */
    setCategory(category) {
        this.filters.category = category;
        this.applyFilters();
    }

    /**
     * Filter by price range
     */
    setPriceRange(min, max) {
        this.filters.minPrice = min;
        this.filters.maxPrice = max;
        this.applyFilters();
    }

    /**
     * Filter by minimum rating
     */
    setMinRating(rating) {
        this.filters.minRating = rating;
        this.applyFilters();
    }

    /**
     * Set sort option
     */
    setSortBy(sortOption) {
        this.filters.sortBy = sortOption;
        this.applyFilters();
    }

    /**
     * Apply all active filters
     */
    applyFilters() {
        let result = [...this.products];

        // Search filter
        if (this.filters.searchTerm) {
            result = result.filter(product =>
                product.name.toLowerCase().includes(this.filters.searchTerm) ||
                product.description.toLowerCase().includes(this.filters.searchTerm) ||
                product.code.toLowerCase().includes(this.filters.searchTerm)
            );
        }

        // Category filter
        if (this.filters.category !== 'all') {
            result = result.filter(product => product.category === this.filters.category);
        }

        // Price filter
        result = result.filter(product => {
            const price = parseFloat(product.price.replace(/[^0-9.-]+/g, ''));
            return price >= this.filters.minPrice && price <= this.filters.maxPrice;
        });

        // Rating filter
        result = result.filter(product => {
            const avgRating = product.averageRating || 0;
            return avgRating >= this.filters.minRating;
        });

        // Sorting
        result = this.sortProducts(result);

        this.filteredProducts = result;
        return result;
    }

    /**
     * Sort products based on selected option
     */
    sortProducts(products) {
        const sorted = [...products];

        switch (this.filters.sortBy) {
            case 'price-low':
                sorted.sort((a, b) => {
                    const priceA = parseFloat(a.price.replace(/[^0-9.-]+/g, ''));
                    const priceB = parseFloat(b.price.replace(/[^0-9.-]+/g, ''));
                    return priceA - priceB;
                });
                break;

            case 'price-high':
                sorted.sort((a, b) => {
                    const priceA = parseFloat(a.price.replace(/[^0-9.-]+/g, ''));
                    const priceB = parseFloat(b.price.replace(/[^0-9.-]+/g, ''));
                    return priceB - priceA;
                });
                break;

            case 'rating':
                sorted.sort((a, b) => {
                    const ratingA = a.averageRating || 0;
                    const ratingB = b.averageRating || 0;
                    return ratingB - ratingA;
                });
                break;

            case 'newest':
                sorted.sort((a, b) => b.id - a.id);
                break;

            case 'name':
            default:
                sorted.sort((a, b) => a.name.localeCompare(b.name));
                break;
        }

        return sorted;
    }

    /**
     * Get unique categories from products
     */
    getCategories() {
        const categories = [...new Set(this.products.map(p => p.category))];
        return categories.filter(cat => cat && cat !== 'all');
    }

    /**
     * Get price range from products
     */
    getPriceRange() {
        const prices = this.products.map(p =>
            parseFloat(p.price.replace(/[^0-9.-]+/g, ''))
        );
        return {
            min: Math.min(...prices),
            max: Math.max(...prices)
        };
    }

    /**
     * Reset all filters
     */
    resetFilters() {
        this.filters = {
            searchTerm: '',
            category: 'all',
            minPrice: 0,
            maxPrice: Infinity,
            minRating: 0,
            sortBy: 'name'
        };
        this.filteredProducts = this.products;
        return this.filteredProducts;
    }

    /**
     * Get filtered results
     */
    getFiltered() {
        return this.filteredProducts;
    }
}
