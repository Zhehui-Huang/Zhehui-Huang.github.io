/**
 * Academic Website JavaScript
 * Handles tab navigation and paper filtering
 */

document.addEventListener('DOMContentLoaded', function() {
  initializeTabs();
  initializePaperFiltering();
});

/**
 * Initialize tab navigation system
 */
function initializeTabs() {
  const tabButtons = document.querySelectorAll('.tab-button');
  
  tabButtons.forEach(button => {
    button.addEventListener('click', function(event) {
      const tabId = this.getAttribute('data-tab');
      showTab(event, tabId);
    });
  });
}

/**
 * Show the selected tab and update UI
 * @param {Event} event - The click event
 * @param {string} tabId - The ID of the tab to show
 */
function showTab(event, tabId) {
  // Remove active class from all buttons
  const tabButtons = document.querySelectorAll('.tab-button');
  tabButtons.forEach(button => {
    button.classList.remove('active');
  });
  
  // Add active class to clicked button
  if (event && event.currentTarget) {
    event.currentTarget.classList.add('active');
  }
  
  // Filter papers based on category
  filterPapers(tabId);
}

/**
 * Initialize paper filtering system
 */
function initializePaperFiltering() {
  // Show all papers by default
  filterPapers('all');
}

/**
 * Filter papers by category
 * @param {string} category - The category to filter by
 */
function filterPapers(category) {
  const allPapers = document.querySelectorAll('.paper-card[data-category]');
  
  allPapers.forEach(paper => {
    const paperCategories = paper.getAttribute('data-category').split(' ');
    
    if (category === 'all') {
      paper.classList.remove('hidden');
    } else {
      if (paperCategories.includes(category)) {
        paper.classList.remove('hidden');
      } else {
        paper.classList.add('hidden');
      }
    }
  });
}

/**
 * Smooth scroll to top (optional enhancement)
 */
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}
