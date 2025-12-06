/**
 * Reviews & Ratings Component
 * Manages product reviews, ratings, and customer feedback
 */

class ReviewsRatings {
    constructor() {
        this.reviews = JSON.parse(localStorage.getItem('dodyReviews')) || {};
    }

    /**
     * Add a new review to a product
     */
    addReview(productId, review) {
        if (!this.reviews[productId]) {
            this.reviews[productId] = [];
        }

        const newReview = {
            id: Date.now(),
            customerName: review.customerName || 'Anonymous',
            rating: Math.max(1, Math.min(5, parseInt(review.rating))),
            title: review.title || '',
            comment: review.comment || '',
            date: new Date().toISOString(),
            helpful: 0
        };

        this.reviews[productId].push(newReview);
        this.saveReviews();
        return newReview;
    }

    /**
     * Get all reviews for a product
     */
    getProductReviews(productId) {
        return this.reviews[productId] || [];
    }

    /**
     * Get average rating for a product
     */
    getAverageRating(productId) {
        const reviews = this.reviews[productId];
        if (!reviews || reviews.length === 0) return 0;

        const sum = reviews.reduce((acc, review) => acc + review.rating, 0);
        return (sum / reviews.length).toFixed(1);
    }

    /**
     * Get rating distribution (1-5 star counts)
     */
    getRatingDistribution(productId) {
        const reviews = this.reviews[productId] || [];
        const distribution = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 };

        reviews.forEach(review => {
            distribution[review.rating]++;
        });

        return distribution;
    }

    /**
     * Get review count for a product
     */
    getReviewCount(productId) {
        return (this.reviews[productId] || []).length;
    }

    /**
     * Delete a review
     */
    deleteReview(productId, reviewId) {
        if (this.reviews[productId]) {
            this.reviews[productId] = this.reviews[productId].filter(r => r.id !== reviewId);
            this.saveReviews();
            return true;
        }
        return false;
    }

    /**
     * Mark review as helpful
     */
    markHelpful(productId, reviewId) {
        if (this.reviews[productId]) {
            const review = this.reviews[productId].find(r => r.id === reviewId);
            if (review) {
                review.helpful++;
                this.saveReviews();
                return true;
            }
        }
        return false;
    }

    /**
     * Generate star rating HTML
     */
    generateStarRating(rating, size = 'md') {
        const fullStars = Math.floor(rating);
        const hasHalfStar = rating % 1 >= 0.5;
        let html = '';

        for (let i = 1; i <= 5; i++) {
            if (i <= fullStars) {
                html += `<span class="star star-full" style="font-size: var(--font-size-${size});">★</span>`;
            } else if (i === fullStars + 1 && hasHalfStar) {
                html += `<span class="star star-half" style="font-size: var(--font-size-${size});">★</span>`;
            } else {
                html += `<span class="star star-empty" style="font-size: var(--font-size-${size});">☆</span>`;
            }
        }

        return html;
    }

    /**
     * Save reviews to localStorage
     */
    saveReviews() {
        localStorage.setItem('dodyReviews', JSON.stringify(this.reviews));
    }

    /**
     * Clear all reviews (for admin only)
     */
    clearAllReviews() {
        this.reviews = {};
        this.saveReviews();
    }
}

// Initialize global reviews instance
const reviewsManager = new ReviewsRatings();
