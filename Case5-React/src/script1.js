// script1.js - Utility functions
const utils = {
    // Generate random number between min and max
    randomNumber: function(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    },
    
    // Format current date and time
    getCurrentDateTime: function() {
        const now = new Date();
        return now.toLocaleString();
    },
    
    // Create a simple logger
    log: function(message) {
        console.log(`[${this.getCurrentDateTime()}] ${message}`);
    },
    
    // Add animation class to element
    addAnimation: function(element) {
        if (element) {
            element.classList.add('animation');
            setTimeout(() => {
                element.classList.remove('animation');
            }, 500);
        }
    }
};

// Export for use in other scripts
window.utils = utils;
