/**
 * Common utility functions for the application
 */

/**
 * Format date to readable string
 * @param {Date|string} date - Date to format
 * @returns {string} Formatted date string
 */
export const formatDate = (date) => {
  const d = new Date(date);
  return d.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
};

/**
 * Get project status badge color
 * @param {string} status - Status code ('1', '2', '3')
 * @returns {string} Tailwind CSS class for status color
 */
export const getProjectStatusColor = (status) => {
  const statusMap = {
    '1': 'bg-green-500',
    '2': 'bg-yellow-500',
    '3': 'bg-orange-500'
  };
  return statusMap[status] || 'bg-gray-500';
};

/**
 * Get project status label
 * @param {string} status - Status code ('1', '2', '3')
 * @returns {string} Human-readable status label
 */
export const getProjectStatusLabel = (status) => {
  const labelMap = {
    '1': 'Completed',
    '2': 'Requires Improvement',
    '3': 'In Progress'
  };
  return labelMap[status] || 'Unknown';
};

/**
 * Truncate text to specified length
 * @param {string} text - Text to truncate
 * @param {number} maxLength - Maximum length
 * @returns {string} Truncated text with ellipsis
 */
export const truncateText = (text, maxLength = 100) => {
  if (text.length <= maxLength) return text;
  return text.substring(0, maxLength).trim() + '...';
};

/**
 * Generate URL-friendly slug from text
 * @param {string} text - Text to slugify
 * @returns {string} URL-friendly slug
 */
export const slugify = (text) => {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '');
};

/**
 * Scroll to top of page smoothly
 */
export const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
};

/**
 * Check if element is in viewport
 * @param {HTMLElement} element - Element to check
 * @returns {boolean} True if element is in viewport
 */
export const isInViewport = (element) => {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
};
