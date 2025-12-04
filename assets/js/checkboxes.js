// Make markdown checkboxes interactive
(function() {
  'use strict';

  // Get a unique key for this page based on URL
  function getPageKey() {
    return window.location.pathname;
  }

  // Get stored checkbox state for this page
  function getStoredState() {
    try {
      const key = getPageKey();
      const stored = localStorage.getItem('checkbox-state-' + key);
      return stored ? JSON.parse(stored) : {};
    } catch (e) {
      return {};
    }
  }

  // Save checkbox state for this page
  function saveState(state) {
    try {
      const key = getPageKey();
      localStorage.setItem('checkbox-state-' + key, JSON.stringify(state));
    } catch (e) {
      console.warn('Could not save checkbox state:', e);
    }
  }

  // Convert markdown checkboxes to interactive HTML checkboxes
  function makeCheckboxesInteractive() {
    const state = getStoredState();
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    
    checkboxes.forEach((checkbox, index) => {
      // Create a unique ID for this checkbox based on its position and context
      const listItem = checkbox.closest('li');
      if (!listItem) return;
      
      const text = listItem.textContent.trim();
      const checkboxId = 'cb-' + getPageKey().replace(/\//g, '-') + '-' + index;
      
      // Set the checkbox ID
      checkbox.id = checkboxId;
      
      // Restore state if available
      if (state[checkboxId] !== undefined) {
        checkbox.checked = state[checkboxId];
      }
      
      // Add click handler
      checkbox.addEventListener('change', function() {
        const currentState = getStoredState();
        currentState[checkboxId] = checkbox.checked;
        saveState(currentState);
      });
      
      // Make the label clickable
      const label = listItem.querySelector('label');
      if (label) {
        label.setAttribute('for', checkboxId);
      } else {
        // If no label exists, wrap the text in a label
        const textNode = Array.from(listItem.childNodes).find(node => 
          node.nodeType === Node.TEXT_NODE && node.textContent.trim()
        );
        if (textNode) {
          const label = document.createElement('label');
          label.setAttribute('for', checkboxId);
          label.style.cursor = 'pointer';
          label.textContent = textNode.textContent;
          textNode.replaceWith(label);
        }
      }
    });
  }

  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', makeCheckboxesInteractive);
  } else {
    makeCheckboxesInteractive();
  }
})();


