/**
 * Utility Functions for Dody's Handcraft
 */

/**
 * Format currency value
 * @param {number} value - The value to format
 * @returns {string} - Formatted currency string
 */
function formatCurrency(value) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'EGP'
  }).format(value)
}

/**
 * Generate unique ID
 * @returns {string} - Unique ID
 */
function generateId() {
  return Date.now().toString(36) + Math.random().toString(36).substr(2);
}

/**
 * Encode special characters for URL
 * @param {string} text - Text to encode
 * @returns {string} - Encoded text
 */
function encodeForUrl(text) {
  return encodeURIComponent(text);
}

/**
 * Create WhatsApp message link
 * @param {string} phone - Phone number with country code (e.g., +1234567890)
 * @param {string} message - Message text
 * @returns {string} - WhatsApp link
 */
function createWhatsAppLink(phone, message) {
  const encodedMessage = encodeForUrl(message);
  return `https://wa.me/${phone.replace(/\D/g, '')}?text=${encodedMessage}`;
}

/**
 * Format date to readable string
 * @param {Date} date - Date object
 * @returns {string} - Formatted date
 */
function formatDate(date) {
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }).format(date);
}

/**
 * Validate email
 * @param {string} email - Email address
 * @returns {boolean} - Is valid email
 */
function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

/**
 * Validate phone number
 * @param {string} phone - Phone number
 * @returns {boolean} - Is valid phone
 */
function isValidPhone(phone) {
  const phoneRegex = /^\+?[\d\s\-\(\)]{10,}$/;
  return phoneRegex.test(phone);
}

/**
 * Deep clone object
 * @param {object} obj - Object to clone
 * @returns {object} - Cloned object
 */
function deepClone(obj) {
  return JSON.parse(JSON.stringify(obj));
}

/**
 * Debounce function
 * @param {function} func - Function to debounce
 * @param {number} wait - Wait time in milliseconds
 * @returns {function} - Debounced function
 */
function debounce(func, wait) {
  let timeout;
  return function(...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(this, args), wait);
  };
}

/**
 * Show notification
 * @param {string} message - Message text
 * @param {string} type - Type: 'success', 'error', 'info'
 * @param {number} duration - Duration in milliseconds
 */
function showNotification(message, type = 'info', duration = 3000) {
  const notification = document.createElement('div');
  notification.className = `notification notification-${type}`;
  notification.textContent = message;
  
  const style = document.createElement('style');
  if (!document.head.querySelector('style[data-notification]')) {
    style.setAttribute('data-notification', 'true');
    style.textContent = `
      .notification {
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 16px 24px;
        border-radius: 8px;
        font-size: 14px;
        font-weight: 600;
        z-index: 9999;
        animation: slideIn 300ms ease-in-out;
      }
      
      .notification-success {
        background-color: rgba(168, 213, 186, 0.1);
        color: #4A7C5E;
        border-left: 4px solid #A8D5BA;
      }
      
      .notification-error {
        background-color: rgba(220, 100, 100, 0.1);
        color: #8B3A3A;
        border-left: 4px solid #DC6464;
      }
      
      .notification-info {
        background-color: rgba(100, 150, 200, 0.1);
        color: #3A5A7C;
        border-left: 4px solid #6496C8;
      }
      
      @keyframes slideIn {
        from {
          transform: translateX(400px);
          opacity: 0;
        }
        to {
          transform: translateX(0);
          opacity: 1;
        }
      }
      
      @keyframes slideOut {
        from {
          transform: translateX(0);
          opacity: 1;
        }
        to {
          transform: translateX(400px);
          opacity: 0;
        }
      }
      
      @media (max-width: 480px) {
        .notification {
          right: 10px;
          left: 10px;
        }
      }
    `;
    document.head.appendChild(style);
  }
  
  document.body.appendChild(notification);
  
  setTimeout(() => {
    notification.style.animation = 'slideOut 300ms ease-in-out';
    setTimeout(() => notification.remove(), 300);
  }, duration);
}

/**
 * LocalStorage wrapper
 */
const Storage = {
  set(key, value) {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error('Storage error:', error);
    }
  },
  
  get(key) {
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : null;
    } catch (error) {
      console.error('Storage error:', error);
      return null;
    }
  },
  
  remove(key) {
    try {
      localStorage.removeItem(key);
    } catch (error) {
      console.error('Storage error:', error);
    }
  },
  
  clear() {
    try {
      localStorage.clear();
    } catch (error) {
      console.error('Storage error:', error);
    }
  }
};
